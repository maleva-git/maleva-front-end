import { useState } from 'react';
import { FILTER_TYPES, REMARKS_FILTER } from '../model/constants';

export const useSaleOrderViewState = () => {
  const [filters, setFilters] = useState({
    fromDate: new Date(),
    toDate: new Date(),
    customerId: null,
    employeeId: null,
    statusIds: [],
    jobNo: '',
    vesselName: '',
    loadingVesselName: '',
    jobTypeId: null,
    etaFilter: FILTER_TYPES.NONE,
    remarksFilter: REMARKS_FILTER.ALL,
    showPickup: false,
    showLoadingEmployee: true,
    showInvoice: false
  });

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      fromDate: new Date(),
      toDate: new Date(),
      customerId: null,
      employeeId: null,
      statusIds: [],
      jobNo: '',
      vesselName: '',
      loadingVesselName: '',
      jobTypeId: null,
      etaFilter: FILTER_TYPES.NONE,
      remarksFilter: REMARKS_FILTER.ALL,
      showPickup: false,
      showLoadingEmployee: true,
      showInvoice: false
    });
  };

  return { filters, updateFilter, resetFilters };
};
