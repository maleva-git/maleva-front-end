import apiClient from '../../../api/axios';
import { API_ENDPOINTS } from '../../../api/endpoints';

export const purchaseOrderApi = {
  // Get purchase order list
  getList: async (params) => {
    const response = await apiClient.post(API_ENDPOINTS.PURCHASE_ORDER.VIEW, params);
    return response.data;
  },

  // Get by ID
  getById: async (id) => {
    const response = await apiClient.post(API_ENDPOINTS.PURCHASE_ORDER.EDIT, { Id: id });
    return response.data;
  },

  // Save purchase order
  save: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.PURCHASE_ORDER.SAVE, data);
    return response.data;
  },

  // Delete purchase order
  delete: async (id) => {
    const response = await apiClient.post(API_ENDPOINTS.PURCHASE_ORDER.DELETE, { Id: id });
    return response.data;
  },

  // Get suppliers
  getSuppliers: async (comid, type = '') => {
    const response = await apiClient.post(API_ENDPOINTS.SUPPLIER.GET, { Comid: comid, type });
    return response.data?.data || response.data || [];
  },

  // Get payment terms
  getPaymentTerms: async (comid) => {
    const response = await apiClient.post(API_ENDPOINTS.PAYMENT_TERMS.SELECT, { Comid: comid });
    return response.data?.data || response.data || [];
  },

  // Get drivers
  getDrivers: async (comid) => {
    const response = await apiClient.post(API_ENDPOINTS.DRIVER.GET, { Comid: comid, type: '' });
    return response.data?.data || response.data || [];
  },

  // Get trucks
  getTrucks: async (comid) => {
    const response = await apiClient.post(API_ENDPOINTS.TRUCK.GET, { Comid: comid, type: '' });
    return response.data?.data || response.data || [];
  },

  // Get products/items
  getProducts: async (comid) => {
    const response = await apiClient.post(API_ENDPOINTS.ITEM_MASTER.GET_PRODUCT_LIST, { Comid: comid });
    return response.data || [];
  },

  // Get employees
  getEmployees: async (comid, type = '', type1 = '') => {
    const response = await apiClient.post(API_ENDPOINTS.EMPLOYEE.GET, { Comid: comid, type, type1 });
    return response.data?.data || response.data || [];
  },

  // Search job
  searchJob: async (comid, keyword) => {
    const response = await apiClient.post(API_ENDPOINTS.JOB_MASTER.SEARCH, { Comid: comid, Keyword: keyword });
    return response.data;
  },

  // Upload files
  uploadFiles: async (formData) => {
    const response = await apiClient.post(API_ENDPOINTS.PURCHASE_ORDER.UPLOAD, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },
};
