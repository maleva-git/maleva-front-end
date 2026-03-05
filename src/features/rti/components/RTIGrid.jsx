import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { ConfirmDialog } from '../../../components/common/ConfirmDialog';

const EnterpriseDataGrid = ({ data = [], onCellEdit, onRowDelete, onAddRow, fillItemsByJobNo, calculate }) => {
  const [deleteConfirm, setDeleteConfirm] = useState({ open: false, rowIndex: null });
  const [focusedCell, setFocusedCell] = useState({ rowIndex: 0, columnId: 'JobNo' });
  const inputRefs = useRef({});

  const EditableCell = ({ getValue, row, column, table }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const columnId = column.id;
    const rowIndex = row.index;
    const cellKey = `${rowIndex}-${columnId}`;

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const handleBlur = () => {
      if (value !== initialValue) {
        onCellEdit(rowIndex, columnId, value);
        calculate();
      }
    };

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    const handleKeyDown = (e) => {
      const columns = ['JobNo', 'Salary', 'PPIC', 'DPIC', 'PWDType'];
      const currentColIndex = columns.indexOf(columnId);
      const isLastColumn = currentColIndex === columns.length - 1;
      const isLastRow = rowIndex === data.length - 1;

      if (e.key === 'Enter') {
        e.preventDefault();
        handleBlur();

        if (columnId === 'JobNo' && value) {
          fillItemsByJobNo(value, rowIndex);
        }

        if (isLastColumn && isLastRow) {
          // Only create new row if in last column of last row
          onAddRow();
          setTimeout(() => {
            const nextKey = `${rowIndex + 1}-JobNo`;
            inputRefs.current[nextKey]?.focus();
          }, 50);
        } else if (isLastColumn) {
          // Move to first column of next row
          const nextKey = `${rowIndex + 1}-JobNo`;
          inputRefs.current[nextKey]?.focus();
        } else {
          // Move to next column in same row
          const nextKey = `${rowIndex}-${columns[currentColIndex + 1]}`;
          inputRefs.current[nextKey]?.focus();
        }
      } else if (e.key === 'ArrowRight' && e.target.selectionStart === value?.toString().length) {
        e.preventDefault();
        if (!isLastColumn) {
          const nextKey = `${rowIndex}-${columns[currentColIndex + 1]}`;
          inputRefs.current[nextKey]?.focus();
        }
      } else if (e.key === 'ArrowLeft' && e.target.selectionStart === 0) {
        e.preventDefault();
        if (currentColIndex > 0) {
          const prevKey = `${rowIndex}-${columns[currentColIndex - 1]}`;
          inputRefs.current[prevKey]?.focus();
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!isLastRow) {
          const nextKey = `${rowIndex + 1}-${columnId}`;
          inputRefs.current[nextKey]?.focus();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (rowIndex > 0) {
          const prevKey = `${rowIndex - 1}-${columnId}`;
          inputRefs.current[prevKey]?.focus();
        }
      }
    };

    const inputClass = columnId === 'Salary' || columnId === 'PWDType'
      ? 'w-full h-8 px-2 text-sm text-right border-0 bg-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 rounded transition-all'
      : 'w-full h-8 px-2 text-sm border-0 bg-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 rounded transition-all';

    return (
      <input
        ref={(el) => (inputRefs.current[cellKey] = el)}
        type={columnId === 'Salary' || columnId === 'PWDType' ? 'number' : 'text'}
        value={value || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onFocus={(e) => e.target.select()}
        className={inputClass}
        step={columnId === 'Salary' ? '0.01' : undefined}
      />
    );
  };

  const DeleteButton = ({ rowIndex }) => (
    <button
      onClick={() => setDeleteConfirm({ open: true, rowIndex })}
      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded transition-colors"
      title="Delete Row"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  );

  const columns = [
    {
      accessorKey: 'sno',
      header: 'S.No',
      size: 60,
      cell: ({ row }) => (
        <div className="text-center text-gray-600 font-medium">{row.index + 1}</div>
      ),
    },
    {
      accessorKey: 'JobNo',
      header: 'JOB NO',
      size: 140,
      cell: EditableCell,
    },
    {
      accessorKey: 'CustomerName',
      header: 'Customer Name',
      size: 240,
      cell: ({ getValue }) => (
        <div className="text-sm text-gray-700 px-2">{getValue() || ''}</div>
      ),
    },
    {
      accessorKey: 'JobDate',
      header: 'JOB DATE',
      size: 100,
      cell: ({ getValue }) => (
        <div className="text-sm text-gray-700 px-2">{getValue() || ''}</div>
      ),
    },
    {
      accessorKey: 'Salary',
      header: 'Salary',
      size: 110,
      cell: EditableCell,
    },
    {
      accessorKey: 'PPIC',
      header: 'PPIC',
      size: 140,
      cell: EditableCell,
    },
    {
      accessorKey: 'DPIC',
      header: 'DPIC',
      size: 140,
      cell: EditableCell,
    },
    {
      accessorKey: 'PWDType',
      header: 'PWD',
      size: 80,
      cell: EditableCell,
    },
    {
      id: 'actions',
      header: 'Action',
      size: 70,
      cell: ({ row }) => <DeleteButton rowIndex={row.index} />,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-gray-700">Job Details</h3>
        <button
          onClick={onAddRow}
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Row
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto overflow-y-auto max-h-[400px]">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{ width: header.getSize() }}
                      className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-100">
              {table.getRowModel().rows.map((row, idx) => (
                <tr
                  key={row.id}
                  className={`hover:bg-blue-50/40 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-1 py-1 text-sm"
                      style={{ width: cell.column.getSize() }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmDialog
        open={deleteConfirm.open}
        title="Confirm Delete"
        message="Do you want to delete this row?"
        confirmText="Delete"
        cancelText="Cancel"
        confirmColor="red"
        onConfirm={() => {
          onRowDelete(deleteConfirm.rowIndex);
          calculate();
          setDeleteConfirm({ open: false, rowIndex: null });
        }}
        onCancel={() => setDeleteConfirm({ open: false, rowIndex: null })}
      />
    </>
  );
};

export default EnterpriseDataGrid;
