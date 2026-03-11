import { createColumnHelper } from '@tanstack/react-table';
import { Truck } from 'lucide-react';

const columnHelper = createColumnHelper();

export const createPlanningColumns = (handlers) => {
  const { handleCheckboxChange, handleCellEdit, openTruckModal } = handlers;

  return [
    columnHelper.display({
      id: 'select',
      header: '✓',
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.print || false}
          onChange={(e) => {
            e.stopPropagation();
            handleCheckboxChange(row.index);
          }}
          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
      ),
      size: 40,
      enableSorting: false
    }),
    columnHelper.accessor('sortByD', {
      header: 'Sort',
      cell: ({ row, getValue }) => (
        <input
          type="number"
          value={getValue() || ''}
          onChange={(e) => handleCellEdit(row.index, 'sortByD', e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="w-full h-6 px-1.5 border border-gray-200 rounded text-[10px] font-bold text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-200 bg-gradient-to-br from-white to-blue-50"
        />
      ),
      size: 60,
      enableSorting: true
    }),
    columnHelper.accessor('remarks', {
      header: 'Remarks',
      cell: ({ row, getValue }) => (
        <input
          type="text"
          value={getValue() || ''}
          onChange={(e) => handleCellEdit(row.index, 'remarks', e.target.value)}
          onClick={(e) => e.stopPropagation()}
          placeholder="Enter remarks..."
          className="w-full h-6 px-2 border border-gray-200 rounded text-[10px] focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
        />
      ),
      size: 150,
      enableSorting: false
    }),
    columnHelper.accessor('truckName', {
      header: 'Truck',
      cell: ({ row, getValue }) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            openTruckModal(row.index);
          }}
          className="w-full text-left px-2 py-1 border border-blue-200 rounded text-[10px] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-400 transition-all flex items-center gap-1 bg-white shadow-sm font-semibold"
        >
          <Truck className="w-3 h-3 text-blue-600 flex-shrink-0" />
          <span className="truncate text-gray-700">{getValue() || 'Select...'}</span>
        </button>
      ),
      size: 140,
      enableSorting: false
    }),
    columnHelper.accessor('sPickupDate', {
      header: 'P.Date',
      cell: ({ getValue }) => <span className="text-[10px] text-gray-600">{getValue()}</span>,
      size: 110,
      enableSorting: true
    }),
    columnHelper.accessor('sDeliveryDate', {
      header: 'D.Date',
      cell: ({ getValue }) => <span className="text-[10px] text-gray-600">{getValue()}</span>,
      size: 110,
      enableSorting: true
    }),
    columnHelper.accessor('origin', {
      header: 'Origin',
      cell: ({ getValue }) => (
        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-800 rounded text-[10px] font-semibold">
          {getValue()}
        </span>
      ),
      size: 120,
      enableSorting: true
    }),
    columnHelper.accessor('destination', {
      header: 'Destination',
      cell: ({ getValue }) => (
        <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-[10px] font-semibold">
          {getValue()}
        </span>
      ),
      size: 120,
      enableSorting: true
    }),
    columnHelper.accessor('customerName', {
      header: 'Customer',
      cell: ({ getValue }) => <span className="text-[10px] font-medium text-gray-700">{getValue()}</span>,
      size: 150,
      enableSorting: true
    }),
    columnHelper.accessor('packageType', {
      header: 'PKG',
      cell: ({ getValue }) => (
        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-[10px] font-semibold">
          {getValue()}
        </span>
      ),
      size: 80,
      enableSorting: false
    }),
    columnHelper.accessor('vesselName', {
      header: 'Vessel',
      cell: ({ getValue }) => <span className="text-[10px] text-gray-600">{getValue()}</span>,
      size: 130,
      enableSorting: true
    }),
    columnHelper.accessor('jobNo', {
      header: 'Job No',
      cell: ({ getValue }) => <span className="text-[10px] font-bold text-blue-700">{getValue()}</span>,
      size: 100,
      enableSorting: true
    }),
    columnHelper.accessor('picName', {
      header: 'PIC',
      cell: ({ getValue }) => <span className="text-[10px] text-gray-600">{getValue()}</span>,
      size: 120,
      enableSorting: true
    }),
    columnHelper.accessor('loadingETA', {
      header: 'L ETA',
      cell: ({ getValue }) => <span className="text-[10px] text-gray-600">{getValue()}</span>,
      size: 110,
      enableSorting: true
    }),
    columnHelper.accessor('offloadingETA', {
      header: 'O ETA',
      cell: ({ getValue }) => <span className="text-[10px] text-gray-600">{getValue()}</span>,
      size: 110,
      enableSorting: true
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: ({ getValue }) => {
        const status = getValue();
        const statusColors = {
          'Pending': 'bg-yellow-100 text-yellow-800',
          'In Progress': 'bg-blue-100 text-blue-800',
          'Completed': 'bg-green-100 text-green-800',
          'Cancelled': 'bg-red-100 text-red-800'
        };
        return (
          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>
        );
      },
      size: 100,
      enableSorting: true
    })
  ];
};
