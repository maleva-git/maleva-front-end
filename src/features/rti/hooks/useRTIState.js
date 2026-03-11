import { useState, useCallback } from 'react';
import { initialRTIState, initialGridRow } from '../model/initialState';
import { RTICalculationService } from '../services/calculationService';

export const useRTIState = () => {
  const [state, setState] = useState(initialRTIState);
  const [gridData, setGridData] = useState([initialGridRow]);

  // Update form field
  const updateField = useCallback((field, value) => {
    setState(prev => {
      const newState = { ...prev, [field]: value };
      // Auto-calculate on field change
      const calculations = RTICalculationService.calculate(newState, gridData);
      return { ...newState, ...calculations };
    });
  }, [gridData]);

  // Update multiple fields
  const updateFields = useCallback((fields) => {
    setState(prev => ({ ...prev, ...fields }));
  }, []);

  // Load RTI data
  const loadRTI = useCallback((data) => {
    setState(prev => ({ ...prev, ...data.formData }));
    setGridData(data.gridData.length > 0 ? data.gridData : [initialGridRow]);
  }, []);

  // Clear form
  const clearForm = useCallback(() => {
    setState(initialRTIState);
    setGridData([initialGridRow]);
  }, []);

  // Update grid row
  const updateGridRow = useCallback((rowIndex, field, value) => {
    setGridData(prev => {
      const newData = [...prev];
      newData[rowIndex] = {
        ...newData[rowIndex],
        [field]: value,
        EditMode: 1,
      };
      return newData;
    });
  }, []);

  // Add grid row
  const addGridRow = useCallback(() => {
    setGridData(prev => [...prev, { ...initialGridRow }]);
  }, []);

  // Delete grid row
  const deleteGridRow = useCallback((rowIndex) => {
    setGridData(prev => {
      const newData = prev.filter((_, index) => index !== rowIndex);
      return newData.length > 0 ? newData : [initialGridRow];
    });
  }, []);

  // Replace grid data
  const replaceGridData = useCallback((newData) => {
    setGridData(newData.length > 0 ? newData : [initialGridRow]);
  }, []);

  // Calculate totals
  const calculate = useCallback(() => {
    setState(prev => {
      const calculations = RTICalculationService.calculate(prev, gridData);
      return { ...prev, ...calculations };
    });
  }, [gridData]);

  return {
    state,
    gridData,
    updateField,
    updateFields,
    loadRTI,
    clearForm,
    updateGridRow,
    addGridRow,
    deleteGridRow,
    replaceGridData,
    calculate,
  };
};
