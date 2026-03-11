import { useState, useCallback } from 'react';
import { initialPlanningState } from '../model/constants';

export const useVesselPlanningState = (initialData = null) => {
  const [state, setState] = useState(initialData || initialPlanningState);

  const updateField = useCallback((field, value) => {
    setState(prev => ({ ...prev, [field]: value }));
  }, []);

  const updateDetail = useCallback((index, field, value) => {
    setState(prev => ({
      ...prev,
      Details: prev.Details.map((d, i) => 
        i === index ? { ...d, [field]: value } : d
      ),
    }));
  }, []);

  const addDetail = useCallback((detail) => {
    setState(prev => ({
      ...prev,
      Details: [...prev.Details, detail],
    }));
  }, []);

  const removeDetail = useCallback((index) => {
    setState(prev => ({
      ...prev,
      Details: prev.Details.filter((_, i) => i !== index),
    }));
  }, []);

  const setDetails = useCallback((details) => {
    setState(prev => ({ ...prev, Details: details }));
  }, []);

  const reset = useCallback(() => {
    setState(initialPlanningState);
  }, []);

  return {
    state,
    updateField,
    updateDetail,
    addDetail,
    removeDetail,
    setDetails,
    reset,
  };
};
