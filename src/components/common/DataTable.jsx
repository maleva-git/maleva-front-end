import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

export const DataTable = ({
  data,
  columns,
  onCellEdit,
  onRowDelete,
  onKeyDown,
  editable = true,
  className = '',
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  });

  return (
    <div className={`overflow-auto rounded-xl border border-gray-200 shadow-sm ${className}`}>
      <table className="w-full border-collapse bg-white">
        <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 sticky top-0 z-10">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-100">
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              className="hover:bg-blue-50/50 transition-colors duration-150"
              onKeyDown={(e) => onKeyDown?.(e, rowIndex)}
            >
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className="px-4 py-3 text-sm text-gray-900"
                >
                  {editable && cell.column.columnDef.editable ? (
                    <input
                      type={cell.column.columnDef.inputType || 'text'}
                      value={cell.getValue() || ''}
                      onChange={(e) => onCellEdit?.(rowIndex, cell.column.id, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      maxLength={cell.column.columnDef.maxLength}
                    />
                  ) : (
                    <span>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
