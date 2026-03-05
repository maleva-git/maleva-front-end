import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DataTable from '../../../components/DataTable';
import SearchableSelect from '../../../components/common/SearchableSelect';
import { FormField, FormRow } from '../../../components/ui/FormField';
import { vesselPlanningColumns } from '../components/VesselPlanningColumns';
import { useVesselPlanningState } from '../hooks/useVesselPlanningState';
import { useVesselPlanningOperations, useVesselPlanningData, useMaxPlaningNo } from '../hooks/useVesselPlanningOperations';
import { useEmployeesByCompany } from '../../../hooks/useDropdownLoader';
import { useAuth } from '../../../hooks/useAuth';
import { vesselPlanningApi } from '../api/vesselPlanningApi';
import { vesselPlanningService } from '../services/vesselPlanningService';
import { toast } from 'react-toastify';
import { portOptions as defaultPortOptions } from '../../../constants/dropdownOptions';
import { usePorts } from '../../port';

const VesselPlanningViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [selectedPort, setSelectedPort] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const companyId = useMemo(() => {
    const rawCompanyId = user?.companyId ?? user?.companyRefId ?? user?.CompanyId ?? 6;
    const parsed = Number(rawCompanyId);
    return Number.isFinite(parsed) ? parsed : 6;
  }, [user]);

  const { data: planningData } = useVesselPlanningData(id);
  const { data: maxNo } = useMaxPlaningNo();
  const { data: salesEmployees = [] } = useEmployeesByCompany(companyId, 'SALES');
  const { portOptions: dynamicPortOptions = [] } = usePorts(companyId);
  
  const portOptions = useMemo(
    () => (dynamicPortOptions.length > 0 ? dynamicPortOptions : defaultPortOptions),
    [dynamicPortOptions]
  );
  const employeeOptions = [{ value: '', label: 'All Employees' }, ...salesEmployees];

  const {
    state,
    updateField,
    updateDetail,
    removeDetail,
    setDetails,
    reset,
  } = useVesselPlanningState(planningData);

  const { saveMutation, deleteMutation } = useVesselPlanningOperations();

  useEffect(() => {
    if (maxNo && !id) {
      updateField('PlaningNo', maxNo);
    }
  }, [maxNo, id]);

  useEffect(() => {
    if (planningData) {
      Object.keys(planningData).forEach(key => {
        updateField(key, planningData[key]);
      });
    }
  }, [planningData]);

  const handleAddPort = () => {
    if (!selectedPort) {
      toast.warning('Please select a port');
      return;
    }
    const currentText = state.SearchText || '';
    const newText = currentText ? `${currentText},${selectedPort}` : selectedPort;
    updateField('SearchText', newText);
    setSelectedPort('');
  };

  const handleSearch = async () => {
    try {
      const response = await vesselPlanningApi.searchSaleOrders({
        Comid: localStorage.getItem('Comid'),
        FromDate: vesselPlanningService.formatForApi(state.FromDate),
        ToDate: vesselPlanningService.formatForApi(state.ToDate),
        SearchText: state.SearchText || '',
        DateType: state.DateType,
        Employeeid: selectedEmployee || null,
      });
      const data = response.data?.data || response.data || [];
      const filtered = vesselPlanningService.filterOrders(data, state.SearchText, state.PortFilter);
      setDetails(filtered);
      toast.success(`Found ${filtered.length} jobs`);
    } catch {
      toast.error('Failed to search');
    }
  };

  const handleSave = () => {
    if (!state.PlaningNo) {
      toast.error('Planning number is required');
      return;
    }
    saveMutation.mutate(state, {
      onSuccess: () => navigate('/vessel-planning/list'),
    });
  };

  const handleDelete = () => {
    if (!id) {
      toast.warning('No planning to delete');
      return;
    }
    if (window.confirm('Delete this planning?')) {
      deleteMutation.mutate(id, {
        onSuccess: () => navigate('/vessel-planning/list'),
      });
    }
  };

  const handleSort = () => {
    const sorted = vesselPlanningService.sortDetails(state.Details);
    setDetails(sorted);
    toast.success('Sorted successfully');
  };

  const handleRefresh = () => {
    updateField('SearchText', '');
    setSelectedPort('');
    toast.info('Search text cleared');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
      <div className="w-full max-w-[98%] mx-auto space-y-4">
        <div className="bg-white rounded-lg shadow border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex justify-between items-center rounded-t-lg">
            <h1 className="text-base font-bold text-white">Vessel Planning</h1>
            <button
              onClick={() => navigate('/vessel-planning/list')}
              className="px-4 h-8 bg-white text-blue-600 text-xs font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View List
            </button>
          </div>

          <div className="p-4 space-y-3">
            <FormRow columns={6}>
              <FormField label="Planning No">
                <input
                  type="text"
                  className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-gray-50 font-medium"
                  value={state.PlaningNo}
                  disabled
                />
              </FormField>
              <FormField label="Planning Date">
                <input
                  type="date"
                  className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={vesselPlanningService.formatForApi(state.PlaningDate)}
                  onChange={(e) => updateField('PlaningDate', new Date(e.target.value))}
                />
              </FormField>
              <FormField label="From Date">
                <input
                  type="date"
                  className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={vesselPlanningService.formatForApi(state.FromDate)}
                  onChange={(e) => updateField('FromDate', new Date(e.target.value))}
                />
              </FormField>
              <FormField label="To Date">
                <input
                  type="date"
                  className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={vesselPlanningService.formatForApi(state.ToDate)}
                  onChange={(e) => updateField('ToDate', new Date(e.target.value))}
                />
              </FormField>
              <div className="col-span-2 flex items-end gap-2">
                <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 has-[:checked]:bg-blue-500 has-[:checked]:border-blue-600 has-[:checked]:text-white transition-colors">
                  <input
                    type="radio"
                    name="dateType"
                    checked={state.DateType === 'AETA'}
                    onChange={() => updateField('DateType', 'AETA')}
                    className="w-3.5 h-3.5"
                  />
                  <span className="text-xs font-semibold">A ETA</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 has-[:checked]:bg-blue-500 has-[:checked]:border-blue-600 has-[:checked]:text-white transition-colors">
                  <input
                    type="radio"
                    name="dateType"
                    checked={state.DateType === 'LETA'}
                    onChange={() => updateField('DateType', 'LETA')}
                    className="w-3.5 h-3.5"
                  />
                  <span className="text-xs font-semibold">L ETA</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 has-[:checked]:bg-blue-500 has-[:checked]:border-blue-600 has-[:checked]:text-white transition-colors">
                  <input
                    type="radio"
                    name="dateType"
                    checked={state.DateType === 'OETA'}
                    onChange={() => updateField('DateType', 'OETA')}
                    className="w-3.5 h-3.5"
                  />
                  <span className="text-xs font-semibold">O ETA</span>
                </label>
              </div>
            </FormRow>

            <FormRow columns={6}>
              <div className="col-span-2">
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Port</label>
                <div className="flex gap-2">
                  <SearchableSelect
                    value={selectedPort}
                    onChange={(e) => setSelectedPort(e.target.value)}
                    options={portOptions}
                    containerClassName="flex-1"
                    placeholder="Select Port"
                  />
                  <button
                    onClick={handleAddPort}
                    className="w-8 h-8 bg-green-600 text-white text-base font-bold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <SearchableSelect
                label="Employee"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
                options={employeeOptions}
                containerClassName="col-span-2"
                placeholder="All Employees"
              />
            </FormRow>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Search Text</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  rows="2"
                  value={state.SearchText}
                  onChange={(e) => updateField('SearchText', e.target.value)}
                  placeholder="Enter ports separated by commas"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Remarks</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  rows="2"
                  value={state.Remarks}
                  onChange={(e) => updateField('Remarks', e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={handleSearch}
                className="px-4 h-8 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                SEARCH
              </button>
              <button
                onClick={handleRefresh}
                className="px-4 h-8 bg-gray-600 text-white text-xs font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                REFRESH
              </button>
              <button
                onClick={handleSort}
                className="px-4 h-8 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                SORT
              </button>
              <button
                onClick={handleSave}
                disabled={saveMutation.isPending}
                className="px-4 h-8 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
              >
                {saveMutation.isPending ? 'SAVING...' : 'SAVE'}
              </button>
              <button
                onClick={handleDelete}
                disabled={deleteMutation.isPending || !id}
                className="px-4 h-8 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deleteMutation.isPending ? 'DELETING...' : 'DELETE'}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
          <DataTable
            columns={vesselPlanningColumns}
            data={state.Details}
            onRowUpdate={updateDetail}
            onRowDelete={removeDetail}
          />
          {(!state.Details || state.Details.length === 0) && (
            <div className="flex flex-col items-center justify-center py-16 border-t border-gray-200 mt-4">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-500 text-sm font-semibold mb-1">No Data Found</p>
              <p className="text-gray-400 text-xs">Click SEARCH to load vessel planning data</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VesselPlanningViewPage;
