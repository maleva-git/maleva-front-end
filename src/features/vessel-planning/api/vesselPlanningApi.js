import api from '../../../api/axios';
import { API_ENDPOINTS } from '../../../api/endpoints';

export const vesselPlanningApi = {
  getList: async (params) => {
    const { data } = await api.post(API_ENDPOINTS.VESSEL_PLANNING.SELECT, params);
    return data;
  },

  getById: async (id) => {
    const { data } = await api.post(API_ENDPOINTS.VESSEL_PLANNING.SELECT_BY_ID, { 
      Id: id, 
      Comid: localStorage.getItem('Comid') 
    });
    return data;
  },

  getMaxNo: async () => {
    const { data } = await api.post(API_ENDPOINTS.VESSEL_PLANNING.MAX_NO, { 
      Comid: localStorage.getItem('Comid'), 
      BillType: '' 
    });
    return data;
  },

  searchSaleOrders: async (params) => {
    const { data } = await api.post(API_ENDPOINTS.VESSEL_SALE_ORDER.SEARCH_PLANNING, params);
    return data;
  },

  save: async (payload) => {
    const { data } = await api.post(API_ENDPOINTS.VESSEL_PLANNING.SAVE, payload);
    return data;
  },

  update: async (payload) => {
    const { data } = await api.post(API_ENDPOINTS.VESSEL_SALE_ORDER.UPDATE_DETAILS, payload);
    return data;
  },

  delete: async (id) => {
    const { data } = await api.post(API_ENDPOINTS.VESSEL_PLANNING.DELETE, { 
      Id: id, 
      Comid: localStorage.getItem('Comid') 
    });
    return data;
  },
};
