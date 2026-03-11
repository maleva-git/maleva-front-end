/**
 * Planning Operations Hook
 * 
 * Contains all business logic and API operations for the Planning module.
 * Separates business logic from UI components for better maintainability.
 * 
 * @module hooks/planning/usePlanningOperations
 * @example
 * const operations = usePlanningOperations(state);
 * const { searchPlanning, savePlanning } = operations;
 */

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { planningApi } from '../../features/Planning/api/planningApi';
import { truckApi } from '../../api/truckApi';

const isDev = import.meta.env.DEV;

export const usePlanningOperations = (state) => {
  const navigate = useNavigate();
  const { 
    formData, 
    tableData, 
    editId, 
    setFormData, 
    setTableData, 
    setLoading, 
    resetForm 
  } = state;

  /**
   * Load maximum planning number for the company
   * @param {number} companyId - Company ID
   */
  const loadMaxPlanningNo = useCallback(async (companyId) => {
    try {
      setLoading(true);
      const data = await planningApi.getMaxPlanningNo(companyId);
      setFormData(prev => ({ ...prev, planningNo: data.maxNo || '' }));
    } catch (error) {
      if (isDev) {
        console.error('Error loading max planning no:', error);
      }
    } finally {
      setLoading(false);
    }
  }, [setFormData, setLoading]);

  /**
   * Load trucks for the company
   * @param {number} companyId - Company ID
   * @returns {Promise<Array>} List of trucks
   */
  const loadTrucks = useCallback(async (companyId) => {
    try {
      const data = await truckApi.getTrucks(companyId);
      return data || [];
    } catch (error) {
      if (isDev) {
        console.error('Error loading trucks:', error);
      }
      return [];
    }
  }, []);

  /**
   * Search planning records based on filters
   * @param {number} companyId - Company ID
   */
  const searchPlanning = useCallback(async (companyId) => {
    try {
      setLoading(true);
      const params = {
        companyId,
        fromDate: formData.pickupFromDate,
        toDate: formData.pickupToDate,
        searchText: formData.searchText,
        port: formData.port,
        employeeId: formData.employee
      };
      const data = await planningApi.searchPlanning(params);
      setTableData(data || []);
    } catch (error) {
      if (isDev) {
        console.error('Error searching planning:', error);
      }
      setTableData([]);
    } finally {
      setLoading(false);
    }
  }, [formData, setTableData, setLoading]);

  /**
   * Save or update planning record
   * @param {number} companyId - Company ID
   */
  const savePlanning = useCallback(async (companyId) => {
    try {
      setLoading(true);
      const payload = {
        planningNo: formData.planningNo,
        planningDate: formData.planningDate,
        remarks: formData.remarks,
        companyId,
        items: tableData.map(row => ({
          saleOrderId: row.saleOrderMasterRefId,
          truckId: row.truckRefid,
          truckName: row.truckName,
          sortBy: row.sortByD,
          remarks: row.remarks
        }))
      };
      
      if (editId) {
        await planningApi.updatePlanning({ ...payload, id: editId });
        alert('Planning updated successfully');
      } else {
        await planningApi.savePlanning(payload);
        alert('Planning saved successfully');
      }
      resetForm();
      await loadMaxPlanningNo(companyId);
    } catch (error) {
      if (isDev) {
        console.error('Error saving planning:', error);
      }
      alert('Error saving planning');
    } finally {
      setLoading(false);
    }
  }, [formData, tableData, editId, resetForm, loadMaxPlanningNo, setLoading]);

  /**
   * Delete planning record
   */
  const deletePlanning = useCallback(async () => {
    if (!editId) {
      alert('No planning selected to delete');
      return;
    }
    
    if (window.confirm('Are you sure you want to delete this planning?')) {
      try {
        setLoading(true);
        await planningApi.deletePlanning(editId);
        alert('Planning deleted successfully');
        resetForm();
      } catch (error) {
        if (isDev) {
          console.error('Error deleting planning:', error);
        }
        alert('Error deleting planning');
      } finally {
        setLoading(false);
      }
    }
  }, [editId, resetForm, setLoading]);

  /**
   * Sort table data by sortByD field
   */
  const sortTableData = useCallback(() => {
    const sorted = [...tableData].sort((a, b) => (a.sortByD || 0) - (b.sortByD || 0));
    setTableData(sorted);
  }, [tableData, setTableData]);

  /**
   * Push selected records to RTI
   */
  const pushToRTI = useCallback(() => {
    const selected = tableData.filter(row => row.print);
    if (selected.length === 0) {
      alert('Please select orders to push to RTI');
      return;
    }
    localStorage.setItem('PUSHRTI', JSON.stringify(selected));
    navigate('/rti?planning=1');
  }, [tableData, navigate]);

  /**
   * Duplicate a row in the table
   * @param {Object} row - Row to duplicate
   */
  const duplicateRow = useCallback((row) => {
    if (row) {
      const newRow = { ...row, id: Date.now() };
      setTableData(prev => [...prev, newRow]);
    }
  }, [setTableData]);

  return {
    loadMaxPlanningNo,
    loadTrucks,
    searchPlanning,
    savePlanning,
    deletePlanning,
    sortTableData,
    pushToRTI,
    duplicateRow
  };
};
