import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaleOrderViewState } from '../hooks/useSaleOrderViewState';
import { saleOrderViewColumns } from '../components/SaleOrderViewColumns';
import { FILTER_TYPES, REMARKS_FILTER } from '../model/constants';
import { useCustomers } from '../../customer';
import { useEmployees } from '../../employee';
import { useJobTypes } from '../../jobType';
import { useAuth } from '../../../hooks/useAuth';
import SearchableSelect from '../../../components/common/SearchableSelect';

const SaleOrderView = () => {
  const navigate = useNavigate();
  const { user, companyId: authCompanyId } = useAuth();
  const { filters, updateFilter, resetFilters } = useSaleOrderViewState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const companyId = useMemo(() => {
    const rawCompanyId = authCompanyId ?? user?.companyId ?? user?.companyRefId ?? user?.CompanyId ?? 6;
    const parsed = Number(rawCompanyId);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : 6;
  }, [authCompanyId, user]);

  const { data: customers = [] } = useCustomers();
  const { data: employees = [] } = useEmployees('SALES', 'ADMIN');
  const { data: jobTypeRows = [] } = useJobTypes(companyId);

  const customerOptions = useMemo(() => {
    return customers.map((cust) => ({
      value: cust.id ?? cust.customerId ?? '',
      label: cust.customerName ?? cust.name ?? ''
    })).filter((opt) => opt.value && opt.label);
  }, [customers]);

  const jobTypeOptions = useMemo(() => {
    const rows = Array.isArray(jobTypeRows) ? jobTypeRows : [];
    const dynamicOptions = rows
      .filter((row) => Number(row.active) === 1)
      .map((row) => ({
        value: String(row.id ?? ''),
        label: String(row.name ?? '').trim(),
      }))
      .filter((opt) => opt.value && opt.label);

    return [{ value: '', label: 'Select Job Type' }, ...dynamicOptions];
  }, [jobTypeRows]);

  const employeeOptions = useMemo(() => {
    return employees.map(emp => ({
      value: emp.id,
      label: emp.name || emp.employeeName
    })).filter(opt => opt.value && opt.label);
  }, [employees]);

  const totalAmount = useMemo(() => {
    return data.reduce((sum, item) => sum + (parseFloat(item.TotalAmount) || 0), 0);
  }, [data]);

  const handleView = async () => {
    setLoading(true);
    setTimeout(() => {
      setData([]);
      setLoading(false);
    }, 1000);
  };

  const handleRowDoubleClick = (row) => {
    navigate(`/sale-order/edit/${row.Id}`);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleExport = () => {
    // TODO: Export to Excel
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2">
      <div className="max-w-[98%] mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-3 mb-2">
          <h1 className="text-base font-bold text-gray-800 mb-2">Sale Order View</h1>

          <div className="grid grid-cols-6 gap-2 mb-2">
            <div>
              <label className="block text-[10px] font-semibold text-gray-600 mb-0.5 uppercase">From Date</label>
              <input type="date" value={filters.fromDate?.toISOString().split('T')[0]} onChange={(e) => updateFilter('fromDate', new Date(e.target.value))} className="w-full h-7 px-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-600 mb-0.5 uppercase">To Date</label>
              <input type="date" value={filters.toDate?.toISOString().split('T')[0]} onChange={(e) => updateFilter('toDate', new Date(e.target.value))} className="w-full h-7 px-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500" />
            </div>
            <SearchableSelect
              label="Customer"
              value={filters.customerId}
              onChange={(e) => updateFilter('customerId', e.target.value)}
              options={customerOptions}
              containerClassName=""
              placeholder="Select Customer"
            />
            <div>
              <label className="block text-[10px] font-semibold text-gray-600 mb-0.5 uppercase">Job No</label>
              <input type="text" value={filters.jobNo} onChange={(e) => updateFilter('jobNo', e.target.value)} className="w-full h-7 px-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500" placeholder="Job No" />
            </div>
            <SearchableSelect
              label="Employee"
              value={filters.employeeId}
              onChange={(e) => updateFilter('employeeId', e.target.value)}
              options={employeeOptions}
              containerClassName=""
              placeholder="Select Employee"
              disabled={filters.showLoadingEmployee}
            />
            <SearchableSelect
              label="Status"
              value={filters.statusId}
              onChange={(e) => updateFilter('statusId', e.target.value)}
              options={[
                { value: '', label: 'All Status' },
                { value: '1', label: 'Pending' },
                { value: '2', label: 'In Progress' },
                { value: '3', label: 'Completed' }
              ]}
              containerClassName=""
              placeholder="Select Status"
            />
          </div>

          <div className="grid grid-cols-6 gap-2 mb-2">
            <div>
              <label className="block text-[10px] font-semibold text-gray-600 mb-0.5 uppercase">Off Vessel</label>
              <input type="text" value={filters.vesselName} onChange={(e) => updateFilter('vesselName', e.target.value)} className="w-full h-7 px-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-600 mb-0.5 uppercase">Loading Vessel</label>
              <input type="text" value={filters.loadingVesselName} onChange={(e) => updateFilter('loadingVesselName', e.target.value)} className="w-full h-7 px-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500" />
            </div>
            <SearchableSelect
              label="Job Type"
              value={filters.jobTypeId}
              onChange={(e) => updateFilter('jobTypeId', e.target.value)}
              options={jobTypeOptions}
              containerClassName=""
              placeholder="Select Job Type"
            />
            <div className="col-span-3 flex items-end gap-3">
              <div className="flex gap-2">
                <label className="flex items-center gap-1">
                  <input type="radio" checked={filters.etaFilter === FILTER_TYPES.OFF_ETA} onChange={() => updateFilter('etaFilter', FILTER_TYPES.OFF_ETA)} className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">O ETA</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" checked={filters.etaFilter === FILTER_TYPES.LOADING_ETA} onChange={() => updateFilter('etaFilter', FILTER_TYPES.LOADING_ETA)} className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">L ETA</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" checked={filters.etaFilter === FILTER_TYPES.ALL_ETA} onChange={() => updateFilter('etaFilter', FILTER_TYPES.ALL_ETA)} className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">ALL</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" checked={filters.etaFilter === FILTER_TYPES.NONE} onChange={() => updateFilter('etaFilter', FILTER_TYPES.NONE)} className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">NONE</span>
                </label>
              </div>
              <div className="flex gap-2">
                <label className="flex items-center gap-1">
                  <input type="checkbox" checked={filters.showPickup} onChange={(e) => updateFilter('showPickup', e.target.checked)} className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">Pickup</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" checked={filters.showLoadingEmployee} onChange={(e) => updateFilter('showLoadingEmployee', e.target.checked)} className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">L.Emp</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" checked={filters.showInvoice} onChange={(e) => updateFilter('showInvoice', e.target.checked)} className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">INV</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <label className="flex items-center gap-1">
                <input type="radio" checked={filters.remarksFilter === REMARKS_FILTER.ALL} onChange={() => updateFilter('remarksFilter', REMARKS_FILTER.ALL)} className="w-3 h-3" />
                <span className="text-[10px] font-semibold">ALL</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" checked={filters.remarksFilter === REMARKS_FILTER.WITHOUT} onChange={() => updateFilter('remarksFilter', REMARKS_FILTER.WITHOUT)} className="w-3 h-3" />
                <span className="text-[10px] font-semibold">WITHOUT</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" checked={filters.remarksFilter === REMARKS_FILTER.WITH} onChange={() => updateFilter('remarksFilter', REMARKS_FILTER.WITH)} className="w-3 h-3" />
                <span className="text-[10px] font-semibold">WITH</span>
              </label>
              <span className="text-xs font-bold text-green-600">Total: RM {totalAmount.toFixed(2)}</span>
              <span className="text-xs font-bold text-blue-600">Count: {data.length}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={handleView} disabled={loading} className="px-4 py-1 text-xs font-bold bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400">
                {loading ? 'Loading...' : 'VIEW'}
              </button>
              <button onClick={handleExport} className="px-4 py-1 text-xs font-bold bg-green-600 text-white rounded hover:bg-green-700">EXCEL</button>
              <button onClick={resetFilters} className="px-4 py-1 text-xs font-bold bg-gray-600 text-white rounded hover:bg-gray-700">RESET</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 border-b">
                <tr>
                  {saleOrderViewColumns.filter(col => !col.hidden).map(col => (
                    <th key={col.accessorKey} style={{ width: `${col.size}px`, minWidth: `${col.size}px` }} className="px-2 py-1.5 text-left text-[10px] font-bold text-gray-700 uppercase whitespace-nowrap">{col.header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={saleOrderViewColumns.filter(col => !col.hidden).length} className="px-2 py-4 text-center text-gray-500 text-xs">No records found. Click VIEW to load data.</td>
                  </tr>
                ) : (
                  data.map((row) => (
                    <tr key={row.Id} onClick={() => handleRowClick(row)} onDoubleClick={() => handleRowDoubleClick(row)} className={`cursor-pointer hover:bg-blue-50 ${selectedRow?.Id === row.Id ? 'bg-blue-100' : ''}`}>
                      {saleOrderViewColumns.filter(col => !col.hidden).map(col => (
                        <td key={col.accessorKey} style={{ width: `${col.size}px`, minWidth: `${col.size}px` }} className="px-2 py-1.5 text-xs text-gray-700 whitespace-nowrap">
                          {col.cell ? col.cell({ getValue: () => row[col.accessorKey], row }) : row[col.accessorKey]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleOrderView;
