import api from '../../../api/axios';
import { API_ENDPOINTS } from '../../../api/endpoints';

export const planningApi = {
  // Get planning list with filters
  getPlanningList: async (params) => {
    const response = await api.post(API_ENDPOINTS.PLANNING.LIST, params);
    return response.data;
  },

  // Get planning by ID
  getPlanningById: async (id) => {
    const response = await api.get(API_ENDPOINTS.PLANNING.GET(id));
    return response.data;
  },

  // Get max planning number
  getMaxPlanningNo: async (companyId) => {
    const response = await api.get(API_ENDPOINTS.PLANNING.MAX_NO(companyId));
    return response.data;
  },

  // Save planning
  savePlanning: async (data) => {
    const response = await api.post(API_ENDPOINTS.PLANNING.SAVE, data);
    return response.data;
  },

  // Update planning
  updatePlanning: async (data) => {
    const response = await api.put(API_ENDPOINTS.PLANNING.UPDATE, data);
    return response.data;
  },

  // Delete planning
  deletePlanning: async (id) => {
    const response = await api.delete(API_ENDPOINTS.PLANNING.DELETE(id));
    return response.data;
  },

  // Update sale order dates
  updateSaleOrderDates: async (data) => {
    const response = await api.post(API_ENDPOINTS.PLANNING.UPDATE_DATES, data);
    return response.data;
  },

  // Search planning
  searchPlanning: async (params) => {
    const response = await api.post(API_ENDPOINTS.PLANNING.SEARCH, params);
    return response.data;
  },

  // Sort planning
  sortPlanning: async (data) => {
    const response = await api.post(API_ENDPOINTS.PLANNING.SORT, data);
    return response.data;
  },

  // Push to RTI
  pushToRTI: async (data) => {
    const response = await api.post(API_ENDPOINTS.PLANNING.PUSH_RTI, data);
    return response.data;
  }
};
