import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Save, Trash2, Search, RefreshCw, Plus, ArrowUpDown, Copy, Edit, Send, Calendar } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { usePlanningState, usePlanningOperations, usePlanningModals } from '../../hooks/planning';
import { useEmployeesByCompanyAndRoles } from '../../features/employee';
import { useEmployeesByCompany } from '../../hooks/useDropdownLoader';
import { planningApi } from './api/planningApi';
import SearchableSelect from '../../components/common/SearchableSelect';
import TruckSelectModal from '../../components/modals/TruckSelectModal';
import AddressListModal from '../../components/modals/AddressListModal';
import UpdateSaleOrderModal from '../../components/modals/UpdateSaleOrderModal';
import UltraPremiumTable from '../../components/table/UltraPremiumTable';
import { createPlanningColumns } from './components/planningColumns';
import { portOptions as defaultPortOptions } from '../../constants/dropdownOptions';
import { usePorts } from '../../features/port';
import { EMPLOYEE_ROLES } from './constants/planningConstants';

const PlanningList = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const companyId = user?.companyId || 6;
  
  const state = usePlanningState();
  const { 
    formData, 
    tableData, 
    selectedRow, 
    sorting, 
    loading,
    updateFormField, 
    updateTableRow, 
    toggleRowSelection,
    setSelectedRow,
    setTableData,
    setSorting,
    setFormData,
    resetForm
  } = state;
  
  const operations = usePlanningOperations(state);
  const { 
    loadMaxPlanningNo, 
    loadTrucks, 
    searchPlanning, 
    savePlanning, 
    deletePlanning, 
    sortTableData, 
    pushToRTI,
    duplicateRow
  } = operations;
  
  const { modals, openModal, closeModal } = usePlanningModals();
  const [trucks, setTrucks] = useState([]);
  const { portOptions: dynamicPortOptions = [] } = usePorts(companyId);

  const { data: employees = [] } = useEmployeesByCompany(companyId, 'SALES');
  const portOptions = useMemo(
    () => (dynamicPortOptions.length > 0 ? dynamicPortOptions : defaultPortOptions),
    [dynamicPortOptions]
  );

  const employeeOptions = useMemo(() => 
    employees.map(emp => ({ value: emp.id, label: emp.name || emp.employeeName }))
  , [employees]);

  useEffect(() => {
    loadMaxPlanningNo(companyId);
    loadTrucks(companyId).then(setTrucks);
  }, [companyId, loadMaxPlanningNo, loadTrucks]);



  const openTruckModal = (rowIndex) => {
    setSelectedRow({ ...tableData[rowIndex], rowIndex });
    openModal('truck');
  };

  const handleTruckSelect = (truck) => {
    if (selectedRow) {
      updateTableRow(selectedRow.rowIndex, 'truckName', truck.name);
      updateTableRow(selectedRow.rowIndex, 'truckRefid', truck.id);
    }
  };

  const columns = useMemo(() => createPlanningColumns({
    handleCheckboxChange: toggleRowSelection,
    handleCellEdit: updateTableRow,
    openTruckModal
  }), [toggleRowSelection, updateTableRow]);

  const handleView = () => navigate('/planning/view');
  const handleSearch = () => searchPlanning(companyId);
  const handleSave = () => savePlanning(companyId);
  const handleDelete = () => deletePlanning();
  const handleClear = () => {
    resetForm();
    loadMaxPlanningNo(companyId);
  };
  const handleSort = () => sortTableData();
  const handlePushToRTI = () => pushToRTI();
  const handleDuplicate = () => duplicateRow(selectedRow);
  const handleUpdateRow = () => selectedRow && openModal('updateOrder');

  return (
    <div className="min-h-screen bg-white p-3">
      <div className="max-w-full mx-auto">
        {/* Compact Header */}
        <div className="bg-white border-b border-gray-200 pb-2 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-base font-semibold text-gray-900">Planning</h1>
                <p className="text-[11px] text-gray-500">{user?.employeeName || user?.name || ''}</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <button onClick={handleView} className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-md text-[11px] font-medium hover:bg-blue-700 transition-colors">
                <Eye className="w-3 h-3" />VIEW
              </button>
              <button onClick={handleSave} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-md text-[11px] font-medium hover:bg-emerald-700 transition-colors">
                <Save className="w-3 h-3" />SAVE
              </button>
              <button onClick={handleDelete} className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-md text-[11px] font-medium hover:bg-red-700 transition-colors">
                <Trash2 className="w-3 h-3" />DELETE
              </button>
            </div>
          </div>
        </div>

        {/* Compact Form Section */}
        <div className="bg-white border border-gray-200 rounded-md p-2.5 mb-2">
          <div className="grid grid-cols-12 gap-2 mb-2">
            <div className="col-span-2">
              <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Planning No</label>
              <input type="text" value={formData.planningNo} readOnly className="w-full h-7 px-2 border border-gray-300 rounded-md text-[11px] bg-white font-medium text-gray-700" />
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Planning Date</label>
              <input type="date" value={formData.planningDate} onChange={(e) => setFormData(prev => ({ ...prev, planningDate: e.target.value }))} className="w-full h-7 px-2 border border-gray-300 rounded-md text-[11px] focus:border-blue-500 focus:ring-1 focus:ring-blue-200" />
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] font-medium text-gray-600 mb-0.5">From Date</label>
              <input type="date" value={formData.pickupFromDate} onChange={(e) => setFormData(prev => ({ ...prev, pickupFromDate: e.target.value }))} className="w-full h-7 px-2 border border-gray-300 rounded-md text-[11px] focus:border-blue-500 focus:ring-1 focus:ring-blue-200" />
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] font-medium text-gray-600 mb-0.5">To Date</label>
              <input type="date" value={formData.pickupToDate} onChange={(e) => setFormData(prev => ({ ...prev, pickupToDate: e.target.value }))} className="w-full h-7 px-2 border border-gray-300 rounded-md text-[11px] focus:border-blue-500 focus:ring-1 focus:ring-blue-200" />
            </div>
            <div className="col-span-2">
              <SearchableSelect label="PORT" value={formData.port} onChange={(e) => setFormData(prev => ({ ...prev, port: e.target.value }))} options={portOptions} containerClassName="" />
            </div>
            <div className="col-span-2">
              <SearchableSelect label="Employee" value={formData.employee} onChange={(e) => setFormData(prev => ({ ...prev, employee: e.target.value }))} options={employeeOptions} containerClassName="" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-5">
              <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Search</label>
              <div className="flex gap-1">
                <textarea value={formData.searchText} onChange={(e) => setFormData(prev => ({ ...prev, searchText: e.target.value }))} rows={2} placeholder="Enter search terms..." className="flex-1 px-2 py-1 border border-gray-300 rounded-md text-[11px] focus:border-blue-500 focus:ring-1 focus:ring-blue-200 resize-none" />
                <button onClick={handleSearch} className="px-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"><Search className="w-3 h-3" /></button>
                <button onClick={handleClear} className="px-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"><RefreshCw className="w-3 h-3" /></button>
                <button onClick={() => setFormData(prev => ({ ...prev, searchText: prev.searchText + ',' + prev.port }))} className="px-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"><Plus className="w-3 h-3" /></button>
              </div>
            </div>
            <div className="col-span-4">
              <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Remarks</label>
              <textarea value={formData.remarks} onChange={(e) => setFormData(prev => ({ ...prev, remarks: e.target.value }))} rows={2} placeholder="Enter remarks..." className="w-full px-2 py-1 border border-gray-300 rounded-md text-[11px] focus:border-blue-500 focus:ring-1 focus:ring-blue-200 resize-none" />
            </div>
            <div className="col-span-3 flex items-end gap-1">
              <button onClick={handleSort} className="flex-1 flex items-center justify-center gap-0.5 px-1.5 py-1.5 bg-blue-600 text-white rounded-md text-[10px] font-medium hover:bg-blue-700 transition-colors"><ArrowUpDown className="w-3 h-3" />SORT</button>
              <button onClick={handleDuplicate} className="flex-1 flex items-center justify-center gap-0.5 px-1.5 py-1.5 bg-blue-600 text-white rounded-md text-[10px] font-medium hover:bg-blue-700 transition-colors"><Copy className="w-3 h-3" />CLONE</button>
              <button onClick={handleUpdateRow} className="flex-1 flex items-center justify-center gap-0.5 px-1.5 py-1.5 bg-blue-600 text-white rounded-md text-[10px] font-medium hover:bg-blue-700 transition-colors"><Edit className="w-3 h-3" />UPDATE</button>
              <button onClick={handlePushToRTI} className="flex-1 flex items-center justify-center gap-0.5 px-1.5 py-1.5 bg-blue-600 text-white rounded-md text-[10px] font-medium hover:bg-blue-700 transition-colors"><Send className="w-3 h-3" />PUSH RTI</button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-md">
          <UltraPremiumTable
            columns={columns}
            data={tableData}
            sorting={sorting}
            onSortingChange={setSorting}
            onRowClick={(row) => setSelectedRow(row)}
            onRowDoubleClick={(row) => setSelectedRow(row)}
            enableSorting={true}
            enableKeyboard={true}
            headerGradient="from-blue-600 to-blue-700"
          />
        </div>
      </div>

      <TruckSelectModal
        isOpen={modals.truck}
        onClose={() => closeModal('truck')}
        onSelect={handleTruckSelect}
        trucks={trucks}
      />

      <AddressListModal
        isOpen={modals.pickupAddress}
        onClose={() => closeModal('pickupAddress')}
        type="pickup"
        addresses={selectedRow?.pickupAddresses || []}
        onSave={(addresses) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Pickup addresses saved:', addresses);
          }
        }}
      />

      <AddressListModal
        isOpen={modals.deliveryAddress}
        onClose={() => closeModal('deliveryAddress')}
        type="delivery"
        addresses={selectedRow?.deliveryAddresses || []}
        onSave={(addresses) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Delivery addresses saved:', addresses);
          }
        }}
      />

      <UpdateSaleOrderModal
        isOpen={modals.updateOrder}
        onClose={() => closeModal('updateOrder')}
        jobNo={selectedRow?.jobNo || ''}
        jobNoId={selectedRow?.saleOrderMasterRefId || ''}
        onUpdate={async (payload) => {
          try {
            await planningApi.updateSaleOrderDates(payload);
            alert('Updated successfully');
            handleSearch();
          } catch (error) {
            if (process.env.NODE_ENV === 'development') {
              console.error('Error updating sale order:', error);
            }
            alert('Error updating sale order');
          }
        }}
      />
    </div>
  );
};

export default PlanningList;
