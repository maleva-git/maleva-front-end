import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const saleOrderApi = {
  create: async (payload) => {
    const { data } = await api.post(API_ENDPOINTS.SALE_ORDER.SAVE, payload);
    return data;
  },

  update: async (id, payload) => {
    const { data } = await api.put(API_ENDPOINTS.SALE_ORDER.UPDATE(id), payload);
    return data;
  },

  getById: async (id) => {
    const { data } = await api.get(API_ENDPOINTS.SALE_ORDER.GET(id));
    return data;
  },

  getAll: async (companyId) => {
    const { data } = await api.get(API_ENDPOINTS.SALE_ORDER.LIST, {
      params: { companyId }
    });
    return data;
  },

  delete: async (id) => {
    await api.delete(API_ENDPOINTS.SALE_ORDER.DELETE(id));
  }
};
