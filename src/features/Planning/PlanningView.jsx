import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, X, Filter, FileText } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { planningApi } from './api/planningApi';
import { useEmployeesByCompanyAndRoles } from '../../features/employee';
import SearchableSelect from '../../components/common/SearchableSelect';
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';

const PlanningView = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const companyId = user?.companyId || 6;

  const [filters, setFilters] = useState({
    fromDate: new Date().toISOString().split('T')[0],
    toDate: new Date().toISOString().split('T')[0],
    planningNo: '',
    employeeId: '',
    loginEmployee: true
  });

  const [tableData, setTableData] = useState([]);
  const [sorting, setSorting] = useState([]);

  const { data: employees = [] } = useEmployeesByCompanyAndRoles(companyId, 500, 500);

  const employeeOptions = useMemo(() =>
    employees.map(emp => ({ value: emp.id, label: emp.name || emp.employeeName }))
  , [employees]);

  const handleView = async () => {
    try {
      const params = {
        companyId,
        fromDate: filters.fromDate,
        toDate: filters.toDate,
        planningNo: filters.planningNo,
        employeeId: filters.loginEmployee ? user?.employeeRefId : filters.employeeId
      };
      const data = await planningApi.getPlanningList(params);
      setTableData(data || []);
    } catch (error) {
      console.error('Error loading planning list:', error);
    }
  };

  const handleRowDoubleClick = (id) => {
    window.open(`/planning/edit/${id}`, '_blank');
  };

  const columnHelper = createColumnHelper();

  const columns = useMemo(() => [
    columnHelper.accessor('id', {
      header: 'ID',
      size: 70
    }),
    columnHelper.accessor('planningNo', {
      header: 'Planning No',
      size: 110
    }),
    columnHelper.accessor('planningDate', {
      header: 'Planning Date',
      size: 110
    }),
    columnHelper.accessor('employeeName', {
      header: 'Employee',
      size: 140
    }),
    columnHelper.accessor('totalOrders', {
      header: 'Total Orders',
      size: 90
    }),
    columnHelper.accessor('remarks', {
      header: 'Remarks',
      size: 180
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <button
          onClick={() => handleRowDoubleClick(row.original.id)}
          className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md text-xs font-medium hover:from-blue-700 hover:to-blue-800 shadow-sm transition-all inline-flex items-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          View
        </button>
      ),
      size: 90
    })
  ], []);

  const table = useReactTable({
    data: tableData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-4">
      <div className="max-w-full mx-auto space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm shadow-blue-200">
              <Filter className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-800">Planning View</h1>
              <p className="text-xs text-slate-500">Filter and manage planning records</p>
            </div>
          </div>
          <button onClick={() => navigate('/planning')} className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 border border-red-200 transition-all shadow-sm">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg border border-slate-200/60 p-3.5 shadow-sm">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1.5">From Date</label>
              <input 
                type="date" 
                value={filters.fromDate} 
                onChange={(e) => setFilters(prev => ({ ...prev, fromDate: e.target.value }))} 
                className="w-full h-9 px-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all" 
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1.5">To Date</label>
              <input 
                type="date" 
                value={filters.toDate} 
                onChange={(e) => setFilters(prev => ({ ...prev, toDate: e.target.value }))} 
                className="w-full h-9 px-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all" 
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Planning No</label>
              <input 
                type="text" 
                value={filters.planningNo} 
                onChange={(e) => setFilters(prev => ({ ...prev, planningNo: e.target.value }))} 
                placeholder="Enter planning no" 
                className="w-full h-9 px-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all" 
              />
            </div>
            <div className="col-span-2">
              <SearchableSelect 
                label="Employee" 
                value={filters.employeeId} 
                onChange={(e) => setFilters(prev => ({ ...prev, employeeId: e.target.value }))} 
                options={employeeOptions} 
                containerClassName="" 
              />
            </div>
            <div className="col-span-2 flex items-end">
              <label className="flex items-center gap-2 h-9 px-3 bg-blue-50 rounded-md border border-blue-200 cursor-pointer hover:bg-blue-100 transition-all">
                <input 
                  type="checkbox" 
                  checked={filters.loginEmployee} 
                  onChange={(e) => setFilters(prev => ({ ...prev, loginEmployee: e.target.checked }))} 
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-2 focus:ring-blue-200" 
                />
                <span className="text-sm font-medium text-blue-700">Login Employee</span>
              </label>
            </div>
            <div className="col-span-2 flex items-end">
              <button 
                onClick={handleView} 
                className="w-full h-9 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md text-sm font-medium hover:from-blue-700 hover:to-blue-800 shadow-sm shadow-blue-200 transition-all"
              >
                <Eye className="w-4 h-4" />
                View
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg border border-slate-200/60 overflow-hidden shadow-sm">
          {tableData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-blue-500" />
              </div>
              <p className="text-sm text-slate-600 font-medium mb-1">No planning records found</p>
              <p className="text-xs text-slate-400 mb-4">Click the button below to load data</p>
              <button 
                onClick={handleView}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md text-sm font-medium hover:from-blue-700 hover:to-blue-800 shadow-sm shadow-blue-200 transition-all"
              >
                Load Data
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700">
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th 
                          key={header.id} 
                          className="px-4 py-2.5 text-left text-white font-medium border-r border-blue-500/30 last:border-r-0" 
                          style={{ width: header.getSize() }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {table.getRowModel().rows.map((row) => (
                    <tr 
                      key={row.id} 
                      onDoubleClick={() => handleRowDoubleClick(row.original.id)} 
                      className="hover:bg-blue-50/50 transition-colors cursor-pointer group"
                    >
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="px-4 py-2.5 text-slate-700 border-r border-slate-100/50 last:border-r-0">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanningView;
