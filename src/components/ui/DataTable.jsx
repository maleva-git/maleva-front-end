import { Trash2 } from 'lucide-react';
import { useRef, forwardRef, useImperativeHandle } from 'react';

export const DataTable = forwardRef(({ columns, data, onAddRow, onDeleteRow, onCellChange, onLookup }, ref) => {
  const inputRefs = useRef({});

  useImperativeHandle(ref, () => ({
    focusCell: (rowIdx, field) => {
      setTimeout(() => {
        const colIdx = columns.findIndex(col => col.field === field);
        if (colIdx >= 0) {
          const input = inputRefs.current[`${rowIdx}-${colIdx}`];
          if (input) input.focus();
        }
      }, 100);
    },
    focusNextEditable: (rowIdx, currentField) => {
      setTimeout(() => {
        const currentColIdx = columns.findIndex(col => col.field === currentField);
        let nextColIdx = currentColIdx + 1;
        while (nextColIdx < columns.length && !columns[nextColIdx].editable) {
          nextColIdx++;
        }
        if (nextColIdx < columns.length) {
          const nextInput = inputRefs.current[`${rowIdx}-${nextColIdx}`];
          if (nextInput) nextInput.focus();
        }
      }, 100);
    }
  }));

  const handleKeyDown = (e, rowIdx, colIdx) => {
    const isLastRow = rowIdx === data.length - 1;
    const editableColumns = columns.filter(col => col.editable);
    const currentColIndex = editableColumns.findIndex(col => col.field === columns[colIdx].field);
    const isLastEditableColumn = currentColIndex === editableColumns.length - 1;

    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (columns[colIdx].type === 'lookup') {
        if (onLookup) onLookup(rowIdx, columns[colIdx].field);
        return;
      }

      if (isLastEditableColumn && isLastRow) {
        onAddRow();
        setTimeout(() => {
          const firstEditableCol = columns.findIndex(col => col.editable);
          const nextInput = inputRefs.current[`${rowIdx + 1}-${firstEditableCol}`];
          if (nextInput) nextInput.focus();
        }, 100);
      } else if (isLastEditableColumn) {
        const firstEditableCol = columns.findIndex(col => col.editable);
        const nextInput = inputRefs.current[`${rowIdx + 1}-${firstEditableCol}`];
        if (nextInput) nextInput.focus();
      } else {
        let nextColIdx = colIdx + 1;
        while (nextColIdx < columns.length && !columns[nextColIdx].editable) {
          nextColIdx++;
        }
        if (nextColIdx < columns.length) {
          const nextInput = inputRefs.current[`${rowIdx}-${nextColIdx}`];
          if (nextInput) nextInput.focus();
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextInput = inputRefs.current[`${rowIdx + 1}-${colIdx}`];
      if (nextInput) nextInput.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevInput = inputRefs.current[`${rowIdx - 1}-${colIdx}`];
      if (prevInput) prevInput.focus();
    } else if (e.key === 'ArrowRight') {
      if (e.target.selectionStart === e.target.value.length || columns[colIdx].type === 'select' || columns[colIdx].type === 'lookup') {
        e.preventDefault();
        let nextColIdx = colIdx + 1;
        while (nextColIdx < columns.length && !columns[nextColIdx].editable) {
          nextColIdx++;
        }
        if (nextColIdx < columns.length) {
          const nextInput = inputRefs.current[`${rowIdx}-${nextColIdx}`];
          if (nextInput) nextInput.focus();
        }
      }
    } else if (e.key === 'ArrowLeft') {
      if (e.target.selectionStart === 0 || columns[colIdx].type === 'select' || columns[colIdx].type === 'lookup') {
        e.preventDefault();
        let prevColIdx = colIdx - 1;
        while (prevColIdx >= 0 && !columns[prevColIdx].editable) {
          prevColIdx--;
        }
        if (prevColIdx >= 0) {
          const prevInput = inputRefs.current[`${rowIdx}-${prevColIdx}`];
          if (prevInput) prevInput.focus();
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-2 py-2 text-left font-semibold text-gray-700 whitespace-nowrap">
                  {col.label}
                </th>
              ))}
              <th className="px-2 py-2 text-center font-semibold text-gray-700 w-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-gray-100 hover:bg-gray-50">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-2 py-2">
                    {col.editable ? (
                      col.type === 'select' ? (
                        <select
                          ref={(el) => (inputRefs.current[`${rowIdx}-${colIdx}`] = el)}
                          value={row[col.field] || ''}
                          onChange={(e) => onCellChange(rowIdx, col.field, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, rowIdx, colIdx)}
                          className="w-full h-7 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
                        >
                          <option value="">Select</option>
                          {col.options?.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          ref={(el) => (inputRefs.current[`${rowIdx}-${colIdx}`] = el)}
                          type={col.type === 'number' ? 'number' : 'text'}
                          value={row[col.field] || ''}
                          onChange={col.type === 'lookup' ? undefined : (e) => onCellChange(rowIdx, col.field, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, rowIdx, colIdx)}
                          placeholder={col.type === 'lookup' ? 'Select...' : ''}
                          readOnly={col.type === 'lookup'}
                          onClick={col.type === 'lookup' && onLookup ? () => onLookup(rowIdx, col.field) : undefined}
                          className={`w-full h-7 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${col.type === 'lookup' ? 'cursor-pointer bg-gray-50' : ''}`}
                        />
                      )
                    ) : (
                      <span className="text-gray-700">{row[col.field] || '-'}</span>
                    )}
                  </td>
                ))}
                <td className="px-2 py-2 text-center">
                  <button onClick={() => onDeleteRow(rowIdx)} className="text-red-500 hover:text-red-700 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-gray-500 bg-gray-50/50">
                  No items added yet. Let's add the first row.
                  <button onClick={onAddRow} className="ml-2 text-blue-600 hover:underline">Add Row</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});

DataTable.displayName = 'DataTable';
