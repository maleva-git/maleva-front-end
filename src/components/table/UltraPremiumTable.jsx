import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const UltraPremiumTable = ({ 
  columns, 
  data, 
  onRowClick,
  onRowDoubleClick,
  sorting,
  onSortingChange,
  onCellEdit,
  enableSorting = true,
  enableKeyboard = true,
  headerGradient = 'from-blue-600 via-blue-700 to-indigo-700'
}) => {
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });
  const tableRef = useRef(null);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    enableSorting
  });

  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (e) => {
      const rows = table.getRowModel().rows;
      const cols = table.getAllColumns().filter(col => col.getIsVisible());
      
      if (rows.length === 0) return;

      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedCell(prev => ({
            ...prev,
            row: Math.min(prev.row + 1, rows.length - 1)
          }));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedCell(prev => ({
            ...prev,
            row: Math.max(prev.row - 1, 0)
          }));
          break;
        case 'ArrowRight':
          e.preventDefault();
          setSelectedCell(prev => ({
            ...prev,
            col: Math.min(prev.col + 1, cols.length - 1)
          }));
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setSelectedCell(prev => ({
            ...prev,
            col: Math.max(prev.col - 1, 0)
          }));
          break;
        case 'Enter':
          e.preventDefault();
          const currentRow = rows[selectedCell.row];
          if (currentRow) {
            onRowDoubleClick?.(currentRow.original);
          }
          break;
      }
    };

    if (tableRef.current) {
      tableRef.current.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [enableKeyboard, selectedCell, table, onRowDoubleClick]);

  return (
    <div 
      ref={tableRef}
      tabIndex={0}
      className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`bg-gradient-to-r ${headerGradient} sticky top-0 z-10`}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                    className={`px-2 py-2.5 text-left text-[10px] font-bold text-white uppercase tracking-wider border-r border-white/10 last:border-r-0 ${
                      header.column.getCanSort() ? 'cursor-pointer select-none hover:bg-white/10 transition-colors' : ''
                    }`}
                    style={{ width: header.getSize() }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                      {header.column.getCanSort() && (
                        <span className="flex-shrink-0">
                          {header.column.getIsSorted() === 'asc' ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : header.column.getIsSorted() === 'desc' ? (
                            <ChevronDown className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronsUpDown className="w-3.5 h-3.5 opacity-40" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row, idx) => (
                <tr
                  key={row.id}
                  onClick={() => {
                    onRowClick?.(row.original);
                    setSelectedCell({ row: idx, col: 0 });
                  }}
                  onDoubleClick={() => onRowDoubleClick?.(row.original)}
                  className={`
                    text-[10px] transition-all duration-100 border-b border-gray-100
                    ${selectedCell.row === idx ? 'bg-blue-100 ring-2 ring-blue-400 ring-inset' : ''}
                    ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                    hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm cursor-pointer
                  `}
                >
                  {row.getVisibleCells().map((cell, colIdx) => (
                    <td 
                      key={cell.id} 
                      className={`px-2 py-1.5 text-gray-700 font-medium border-r border-gray-100/50 last:border-r-0 ${
                        selectedCell.row === idx && selectedCell.col === colIdx ? 'ring-2 ring-blue-500 ring-inset' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCell({ row: idx, col: colIdx });
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-3 py-16 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-3xl">📋</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-700">No Data Available</p>
                      <p className="text-xs text-gray-500 mt-1">Start by searching or adding new records</p>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {enableKeyboard && data.length > 0 && (
        <div className="px-3 py-2 bg-gradient-to-r from-slate-50 to-blue-50 border-t border-blue-100">
          <p className="text-[9px] text-gray-600 font-semibold">
            ⌨️ Use <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[8px] font-bold">↑↓←→</kbd> to navigate • 
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[8px] font-bold mx-1">Enter</kbd> to open • 
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[8px] font-bold">Tab</kbd> to focus
          </p>
        </div>
      )}
    </div>
  );
};

export default UltraPremiumTable;
