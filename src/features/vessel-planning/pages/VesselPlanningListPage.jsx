import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DataTable from '../../../components/DataTable';
import { listViewColumns } from '../components/VesselPlanningColumns';
import { vesselPlanningApi } from '../api/vesselPlanningApi';
import { vesselPlanningService } from '../services/vesselPlanningService';
import { useEmployeesByCompany } from '../../../hooks/useDropdownLoader';

const VesselPlanningListPage = () => {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [planingNo, setPlaningNo] = useState('');
  const [employeeId, setEmployeeId] = useState(null);
  const [loginEmployee, setLoginEmployee] = useState(true);

  const comId = localStorage.getItem('Comid');
  const loginEmpId = localStorage.getItem('EmployeeRefid');

 
  const { data: employees = [] } = useEmployeesByCompany(companyId, 'All');

  const { data: planningList = [], isLoading, refetch } = useQuery({
    queryKey: ['vessel-planning-list', fromDate, toDate, planingNo, employeeId],
    queryFn: async () => {
      const response = await vesselPlanningApi.getList({
        Comid: comId,
        FromDate: vesselPlanningService.formatForApi(fromDate),
        ToDate: vesselPlanningService.formatForApi(toDate),
        PlaningNo: planingNo || '',
        EmployeeRefId: loginEmployee ? loginEmpId : employeeId,
        LoginEmployee: loginEmployee,
      });
      return response.data?.data || response.data || [];
    },
    enabled: false,
  });

  const handleView = () => refetch();

  const handleRowDoubleClick = (row) => {
    navigate(`/vessel-planning/view/${row.Id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2">
      <div className="w-full max-w-[98%] mx-auto space-y-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2">
            <h1 className="text-lg font-bold text-white">Vessel Planning - List View</h1>
            <button
              onClick={() => navigate('/vessel-planning')}
              className="px-3 h-7 bg-white text-blue-600 text-xs font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              Add New
            </button>
          </div>

          <div className="p-3 space-y-2">
            <div className="grid grid-cols-5 gap-2">
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">From Date</label>
                <input
                  type="date"
                  className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                  value={vesselPlanningService.formatForApi(fromDate)}
                  onChange={(e) => setFromDate(new Date(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">To Date</label>
                <input
                  type="date"
                  className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                  value={vesselPlanningService.formatForApi(toDate)}
                  onChange={(e) => setToDate(new Date(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Planning No</label>
                <input
                  type="text"
                  className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                  value={planingNo}
                  onChange={(e) => setPlaningNo(e.target.value)}
                  placeholder="Enter planning number"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Employee</label>
                <select
                  className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 disabled:bg-gray-100"
                  value={employeeId || ''}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  disabled={loginEmployee}
                >
                  <option value="">Select Employee</option>
                  {employees.map(emp => (
                    <option key={emp.Id} value={emp.Id}>{emp.AccountName}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end gap-2">
                <label className="flex items-center gap-1 text-xs">
                  <input
                    type="checkbox"
                    checked={loginEmployee}
                    onChange={(e) => setLoginEmployee(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="font-semibold text-gray-700">L.Emp</span>
                </label>
                <button
                  onClick={handleView}
                  disabled={isLoading}
                  className="px-4 h-8 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Loading...' : 'VIEW'}
                </button>
              </div>
            </div>

            <div className="mt-3">
              <DataTable
                data={planningList}
                columns={listViewColumns}
                onRowDoubleClick={handleRowDoubleClick}
                pageSize={15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VesselPlanningListPage;
