import { useState, useCallback } from 'react';
import { rtiApi } from '../api/rtiApi';
import { RTIService } from '../services/rtiService';
import { RTIValidationService } from '../services/validationService';

export const useRTIOperations = (rtiState, showModal) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const comid = localStorage.getItem('Comid');
  const employeeRefId = localStorage.getItem('EmployeeRefid') || 0;

  // Load RTI by ID
  const loadById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await RTIService.loadRTIById(id);
      rtiState.loadRTI(data);
      rtiState.calculate();
      return data;
    } catch (err) {
      setError(err.message);
      showModal('error', err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [rtiState, showModal]);

  // Save RTI
  const save = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await RTIService.save(
        rtiState.state,
        rtiState.gridData,
        comid,
        employeeRefId
      );
      
      showModal('success', 'RTI saved successfully');
      
      // Reload if editing
      if (rtiState.state.editId) {
        await loadById(rtiState.state.editId);
      } else {
        rtiState.clearForm();
      }
      
      return response;
    } catch (err) {
      setError(err.message);
      showModal('error', err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [rtiState, comid, employeeRefId, showModal, loadById]);

  // Delete RTI
  const deleteRTI = useCallback(async (passwordVerified) => {
    if (!rtiState.state.editId) {
      showModal('warning', 'No Delete Id !!!');
      return;
    }

    if (!passwordVerified) return;

    const confirmed = await showModal('confirm', 'Do You Want To Delete RTI ?');
    if (!confirmed) return;

    setLoading(true);
    setError(null);
    try {
      await RTIService.delete(rtiState.state.editId);
      showModal('success', 'RTI deleted successfully');
      rtiState.clearForm();
    } catch (err) {
      setError(err.message);
      showModal('error', err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [rtiState, showModal]);

  // Revise from Sale Order
  const revise = useCallback(async () => {
    if (!rtiState.state.editId) {
      showModal('warning', 'No RTI selected to revise');
      return;
    }

    const confirmed = await showModal('confirm', 'Do You Want Revise data from Sales Order ?');
    if (!confirmed) return;

    setLoading(true);
    setError(null);
    try {
      const details = await RTIService.reviseFromSaleOrder(rtiState.state.editId);
      rtiState.replaceGridData(details);
      rtiState.calculate();
      showModal('success', 'RTI revised successfully');
    } catch (err) {
      setError(err.message);
      showModal('error', err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [rtiState, showModal]);

  // Fill items by Job No
  const fillItemsByJobNo = useCallback(async (jobNo, rowIndex) => {
    setLoading(true);
    setError(null);
    try {
      const result = await RTIService.fillItemsByJobNo(jobNo, comid);
      
      if (!result) {
        showModal('warning', 'Job not found');
        return;
      }

      // Update grid row with job details
      if (result.details.length > 0) {
        const detail = result.details[0];
        Object.keys(detail).forEach(key => {
          rtiState.updateGridRow(rowIndex, key, detail[key]);
        });
        rtiState.calculate();
      }
    } catch (err) {
      setError(err.message);
      showModal('error', err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [rtiState, comid, showModal]);

  // Validate truck license
  const validateTruckLicense = useCallback(async (truckId) => {
    if (!truckId) return { isValid: true };

    setLoading(true);
    try {
      const response = await rtiApi.getTruckById(comid, truckId, 'Id');
      
      if (response.ok && response.data && response.data.length > 0) {
        const validation = RTIValidationService.validateTruckLicense(response.data[0]);
        
        if (!validation.isValid) {
          showModal('warning', validation.message);
          return validation;
        }
      }
      
      return { isValid: true };
    } catch (err) {
      console.error('Error validating truck license:', err);
      return { isValid: true }; // Don't block on validation error
    } finally {
      setLoading(false);
    }
  }, [comid, showModal]);

  return {
    loading,
    error,
    loadById,
    save,
    deleteRTI,
    revise,
    fillItemsByJobNo,
    validateTruckLicense,
  };
};
