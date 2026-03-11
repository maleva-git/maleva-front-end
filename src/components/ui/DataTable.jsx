import { Trash2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { TaxLookupModal } from './TaxLookupModal';
import { ProductLookupModal } from './ProductLookupModal';

export const DataTable = ({ columns, data, onAddRow, onDeleteRow, onCellChange, products = [], taxes = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taxModalOpen, setTaxModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const inputRefs = useRef({});

  const handleKeyDown = (e, rowIdx, colIdx) => {
    const isLastRow = rowIdx === data.length - 1;
    const editableColumns = columns.filter(col => col.editable);
    const currentColIndex = editableColumns.findIndex(col => col.field === columns[colIdx].field);
    const isLastEditableColumn = currentColIndex === editableColumns.length - 1;

    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (columns[colIdx].field === 'productCode') {
        setCurrentRow(rowIdx);
        setModalOpen(true);
        return;
      }

      if (columns[colIdx].field === 'taxCode') {
        setCurrentRow(rowIdx);
        setTaxModalOpen(true);
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
      if (e.target.selectionStart === e.target.value.length) {
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
      if (e.target.selectionStart === 0) {
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

  const handleProductSelect = (product) => {
    if (currentRow !== null) {
      onCellChange(currentRow, 'productId', product.id);
      onCellChange(currentRow, 'productCode', product.productCode);
      onCellChange(currentRow, 'description', product.productName);
      onCellChange(currentRow, 'rate', product.saleRate || 0);
      onCellChange(currentRow, 'taxPercentage', 0);
    }
    setModalOpen(false);
    
    setTimeout(() => {
      const qtyColIdx = columns.findIndex(col => col.field === 'qty');
      const qtyInput = inputRefs.current[`${currentRow}-${qtyColIdx}`];
      if (qtyInput) qtyInput.focus();
      setCurrentRow(null);
    }, 100);
  };

  const handleTaxSelect = (tax) => {
    if (currentRow !== null) {
      onCellChange(currentRow, 'taxRefId', tax.id);
      onCellChange(currentRow, 'taxCode', tax.code);
      onCellChange(currentRow, 'taxPercentage', tax.tax || 0);
    }
    setTaxModalOpen(false);
    
    setTimeout(() => {
      const taxColIdx = columns.findIndex(col => col.field === 'taxCode');
      let nextColIdx = taxColIdx + 1;
      while (nextColIdx < columns.length && !columns[nextColIdx].editable) {
        nextColIdx++;
      }
      if (nextColIdx < columns.length) {
        const nextInput = inputRefs.current[`${currentRow}-${nextColIdx}`];
        if (nextInput) nextInput.focus();
      }
      setCurrentRow(null);
    }, 100);
  };

  return (
    <>
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
                            className="w-full h-7 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          >
                            <option value="">Select</option>
                            {col.options?.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            ref={(el) => (inputRefs.current[`${rowIdx}-${colIdx}`] = el)}
                            type={col.type || 'text'}
                            value={row[col.field] || ''}
                            onChange={(e) => onCellChange(rowIdx, col.field, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, rowIdx, colIdx)}
                            className="w-full h-7 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          />
                        )
                      ) : (
                        <span className="text-gray-700">{row[col.field] || '-'}</span>
                      )}
                    </td>
                  ))}
                  <td className="px-2 py-2 text-center">
                    <button onClick={() => onDeleteRow(rowIdx)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProductLookupModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setCurrentRow(null);
        }}
        onSelect={handleProductSelect}
        products={products}
      />

      <TaxLookupModal
        isOpen={taxModalOpen}
        onClose={() => {
          setTaxModalOpen(false);
          setCurrentRow(null);
        }}
        onSelect={handleTaxSelect}
        taxes={taxes}
      />
    </>
  );
};
