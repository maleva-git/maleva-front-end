import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const portApi = {
  getActiveByCompany: async (companyId) => {
    const { data } = await api.get(API_ENDPOINTS.PORT.ACTIVE_BY_COMPANY(companyId));
    return data;
  },
};
