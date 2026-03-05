import api from '../../../api/axios';

export const planningApi = {
  // Get planning list with filters
  getPlanningList: async (params) => {
    const response = await api.post('/api/planning/list', params);
    return response.data;
  },

  // Get planning by ID
  getPlanningById: async (id) => {
    const response = await api.get(`/api/planning/${id}`);
    return response.data;
  },

  // Get max planning number
  getMaxPlanningNo: async (companyId) => {
    const response = await api.get(`/api/planning/max-no/${companyId}`);
    return response.data;
  },

  // Save planning
  savePlanning: async (data) => {
    const response = await api.post('/api/planning/save', data);
    return response.data;
  },

  // Update planning
  updatePlanning: async (data) => {
    const response = await api.put('/api/planning/update', data);
    return response.data;
  },

  // Delete planning
  deletePlanning: async (id) => {
    const response = await api.delete(`/api/planning/${id}`);
    return response.data;
  },

  // Update sale order dates
  updateSaleOrderDates: async (data) => {
    const response = await api.post('/api/planning/update-dates', data);
    return response.data;
  },

  // Search planning
  searchPlanning: async (params) => {
    const response = await api.post('/api/planning/search', params);
    return response.data;
  },

  // Sort planning
  sortPlanning: async (data) => {
    const response = await api.post('/api/planning/sort', data);
    return response.data;
  },

  // Push to RTI
  pushToRTI: async (data) => {
    const response = await api.post('/api/planning/push-rti', data);
    return response.data;
  }
};
