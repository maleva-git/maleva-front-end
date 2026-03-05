/**
 * Planning State Management Hook
 * 
 * Manages all state for the Planning module including form data,
 * table data, selections, and UI state.
 * 
 * @module hooks/planning/usePlanningState
 * @example
 * const state = usePlanningState();
 * const { formData, updateFormField, tableData } = state;
 */

import { useState, useCallback } from 'react';

const DEFAULT_PLANNING_FORM = {
  planningNo: '',
  planningDate: new Date().toISOString().split('T')[0],
  pickupFromDate: new Date().toISOString().split('T')[0],
  pickupToDate: new Date().toISOString().split('T')[0],
  port: '',
  employee: '',
  remarks: '',
  searchText: ''
};

export const usePlanningState = (initialData = {}) => {
  // Form state
  const [formData, setFormData] = useState({
    ...DEFAULT_PLANNING_FORM,
    ...initialData
  });

  // Table and selection state
  const [tableData, setTableData] = useState([]);
  const [editId, setEditId] = useState(0);
  const [selectedRow, setSelectedRow] = useState(null);
  const [sorting, setSorting] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Update a single form field
   * @param {string} field - Field name to update
   * @param {any} value - New value for the field
   */
  const updateFormField = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  /**
   * Update a specific row in the table
   * @param {number} rowIndex - Index of the row to update
   * @param {string} field - Field name to update
   * @param {any} value - New value for the field
   */
  const updateTableRow = useCallback((rowIndex, field, value) => {
    setTableData(prev => {
      const updated = [...prev];
      updated[rowIndex] = { ...updated[rowIndex], [field]: value };
      return updated;
    });
  }, []);

  /**
   * Toggle row selection (print checkbox)
   * @param {number} rowIndex - Index of the row to toggle
   */
  const toggleRowSelection = useCallback((rowIndex) => {
    setTableData(prev => {
      const updated = [...prev];
      updated[rowIndex].print = !updated[rowIndex].print;
      return updated;
    });
  }, []);

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      remarks: '',
      searchText: ''
    }));
    setTableData([]);
    setEditId(0);
    setSelectedRow(null);
  }, []);

  return {
    // State
    formData,
    tableData,
    editId,
    selectedRow,
    sorting,
    loading,
    
    // Setters
    setFormData,
    setTableData,
    setEditId,
    setSelectedRow,
    setSorting,
    setLoading,
    
    // Actions
    updateFormField,
    updateTableRow,
    toggleRowSelection,
    resetForm
  };
};
