import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const productApi = {
  fetchProductList: async (companyRefId) => {
    const { data } = await api.get(API_ENDPOINTS.PRODUCT.PRODUCT_LIST(companyRefId));
    return data;
  },

  getAll: async () => {
    const { data } = await api.get(API_ENDPOINTS.PRODUCT.LIST);
    return data;
  },

  getById: async (id) => {
    const { data } = await api.get(API_ENDPOINTS.PRODUCT.GET(id));
    return data;
  },

  getByCompany: async (companyId) => {
    const { data } = await api.get(API_ENDPOINTS.PRODUCT.BY_COMPANY(companyId));
    return data;
  },

  getActiveByCompany: async (companyId) => {
    const { data } = await api.get(API_ENDPOINTS.PRODUCT.ACTIVE_BY_COMPANY(companyId));
    return data;
  },

  search: async (companyId, pname) => {
    const { data } = await api.get(API_ENDPOINTS.PRODUCT.SEARCH(companyId), {
      params: { pname }
    });
    return data;
  },

  create: async (productDto) => {
    const { data } = await api.post(API_ENDPOINTS.PRODUCT.CREATE, productDto);
    return data;
  },

  update: async (id, productDto) => {
    const { data } = await api.put(API_ENDPOINTS.PRODUCT.UPDATE(id), productDto);
    return data;
  },

  delete: async (id) => {
    await api.delete(API_ENDPOINTS.PRODUCT.DELETE(id));
  },

  activate: async (id) => {
    const { data } = await api.post(API_ENDPOINTS.PRODUCT.ACTIVATE(id));
    return data;
  },

  deactivate: async (id) => {
    const { data } = await api.post(API_ENDPOINTS.PRODUCT.DEACTIVATE(id));
    return data;
  },
};
