import apiClient from '../../../api/axios';
import { API_ENDPOINTS } from '../../../api/endpoints';

export const rtiApi = {
  // Get RTI list with filters
  getList: async (params) => {
    const response = await apiClient.post(API_ENDPOINTS.RTI.VIEW, params);
    return response.data;
  },

  // Get RTI by ID
  getById: async (id) => {
    const response = await apiClient.post(API_ENDPOINTS.RTI.SELECT_BY_ID, { Id: id });
    return response.data;
  },

  // Save RTI (create or update)
  save: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.RTI.SAVE, data);
    return response.data;
  },

  // Delete RTI
  delete: async (id) => {
    const response = await apiClient.post(API_ENDPOINTS.RTI.DELETE, { Id: id });
    return response.data;
  },

  // Revise RTI from Sale Order
  revise: async (id) => {
    const response = await apiClient.post(API_ENDPOINTS.RTI.REVISE, { Id: id });
    return response.data;
  },

  // Get drivers
  getDrivers: async (comid) => {
    const response = await apiClient.post(API_ENDPOINTS.DRIVER.SELECT, { Comid: comid });
    return response.data?.data || response.data || [];
  },

  // Get trucks
  getTrucks: async (comid) => {
    const response = await apiClient.post(API_ENDPOINTS.TRUCK.SELECT, { Comid: comid });
    return response.data?.data || response.data || [];
  },

  // Get truck details by ID
  getTruckById: async (comid, keyword, column = 'Id') => {
    const response = await apiClient.post(API_ENDPOINTS.TRUCK.SELECT_BY_ID, {
      Comid: comid,
      Startindex: 0,
      PageCount: 0,
      Keyword: keyword,
      Column: column,
    });
    return response.data;
  },

  // Get agent companies
  getAgentCompanies: async (comid) => {
    const response = await apiClient.post(API_ENDPOINTS.AGENT_COMPANY.SELECT, { Comid: comid });
    return response.data?.data || response.data || [];
  },

  // Get agents by company
  getAgentsByCompany: async (comid, jobid) => {
    const response = await apiClient.post(API_ENDPOINTS.AGENTS_API.SELECT_ALL(comid, jobid));
    return response.data?.data || response.data || [];
  },

  // Get employees
  getEmployees: async (comid, type = '', type1 = '') => {
    const response = await apiClient.post(API_ENDPOINTS.EMPLOYEE.GET, {
      Comid: comid,
      type,
      type1,
    });
    return response.data?.data || response.data || [];
  },

  // Verify password
  verifyPassword: async (password, type, comid) => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.EDIT_PASSWORD, {
      password,
      type,
      Comid: comid,
    });
    return response.data;
  },

  // Get sale order by ID
  getSaleOrderById: async (id) => {
    const response = await apiClient.post(API_ENDPOINTS.SALE_ORDER.SELECT_BY_ID, { Id: id });
    return response.data;
  },
};
