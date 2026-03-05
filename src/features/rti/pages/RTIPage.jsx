import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRTIState } from '../hooks/useRTIState';
import { useRTIOperations } from '../hooks/useRTIOperations';
import { useRTIModals } from '../hooks/useRTIModals';
import { useKeyboardShortcuts } from '../../../hooks/useKeyboardShortcuts';
import { useDriverDropdown, useTruckDropdown, useAgentCompanyDropdown, useEmployeesByCompany } from '../../../hooks/useDropdownLoader';
import { rtiApi } from '../api/rtiApi';
import RTIFormFields from '../components/RTIFormFields';
import RTIGrid from '../components/RTIGrid';
import { PasswordModal, EmployeeLoginModal, ConfirmModal, AlertModal } from '../../../components/common/Modals';

const RTIPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const comid = localStorage.getItem('Comid');
  const employeeRefId = localStorage.getItem('EmployeeRefid') || 0;
  const employeeName = localStorage.getItem('EmployeeName') || '';

  const [agents, setAgents] = useState([]);

  const rtiState = useRTIState();
  const modals = useRTIModals();
  const operations = useRTIOperations(rtiState, modals.showModal);
  
  const drivers = useDriverDropdown(comid);
  const trucks = useTruckDropdown(comid);
  const agentCompanies = useAgentCompanyDropdown(comid);
  const { data: employees = [] } = useEmployeesByCompany(comid, 'ALL');

  const handleAgentCompanyChange = async (agentCompanyId) => {
    if (!agentCompanyId) {
      setAgents([]);
      return;
    }
    try {
      const response = await rtiApi.getAgentsByCompany(comid, agentCompanyId);
      if (response.data) {
        setAgents(response.data);
      }
    } catch (error) {
      console.error('Error loading agents:', error);
    }
  };

  useEffect(() => {
    if (id) {
      operations.loadById(id);
    }
  }, [id]);

  const handleDelete = async () => {
    if (!rtiState.state.editId) {
      modals.showModal('warning', 'No Delete Id !!!');
      return;
    }

    const passwordVerified = await modals.showPasswordModal('edit');
    if (passwordVerified) {
      operations.deleteRTI(passwordVerified);
    }
  };

  useKeyboardShortcuts({
    onF1: operations.save,
    onF5: () => navigate('/rti/view'),
    onF9: handleDelete,
    onF10: rtiState.clearForm,
    enabled: !modals.passwordModal.open && !modals.employeeLoginModal.open,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky Action Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            <div>
              <h1 className="text-base font-semibold text-gray-900">RTI Management</h1>
              <p className="text-xs text-gray-500">{employeeName}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/rti/view')} className="px-4 h-9 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              VIEW
            </button>
            <button onClick={operations.save} disabled={operations.loading} className="px-4 h-9 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all disabled:opacity-50 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              SAVE
            </button>
            <button onClick={handleDelete} disabled={!rtiState.state.editId} className="px-4 h-9 bg-white hover:bg-red-50 text-red-600 text-sm font-medium rounded-lg border border-red-200 transition-colors disabled:opacity-50 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              DELETE
            </button>
            <button onClick={operations.revise} disabled={!rtiState.state.editId} className="px-4 h-9 bg-amber-50 hover:bg-amber-100 text-amber-700 text-sm font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              LOAD
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto p-4 space-y-3">
        <RTIFormFields
          state={rtiState.state}
          updateField={rtiState.updateField}
          calculate={rtiState.calculate}
          drivers={drivers}
          trucks={trucks}
          agentCompanies={agentCompanies}
          agents={agents}
          validateTruckLicense={operations.validateTruckLicense}
          onAgentCompanyChange={handleAgentCompanyChange}
        />

        {/* Grid */}
       
          <RTIGrid
            data={rtiState.gridData}
            onCellEdit={rtiState.updateGridRow}
            onRowDelete={rtiState.deleteGridRow}
            onAddRow={rtiState.addGridRow}
            fillItemsByJobNo={operations.fillItemsByJobNo}
            calculate={rtiState.calculate}
          />
        </div>
      

      {/* Modals */}
      <PasswordModal open={modals.passwordModal.open} type={modals.passwordModal.type} onClose={modals.closePasswordModal} comid={comid} />
      <EmployeeLoginModal open={modals.employeeLoginModal.open} employees={employees} onClose={modals.closeEmployeeLoginModal} />
      <ConfirmModal open={modals.confirmModal.open} message={modals.confirmModal.message} onConfirm={() => modals.closeConfirmModal(true)} onCancel={() => modals.closeConfirmModal(false)} />
      <AlertModal open={modals.alertModal.open} type={modals.alertModal.type} message={modals.alertModal.message} onClose={modals.closeAlertModal} />
    </div>
  );
};

export default RTIPage;
