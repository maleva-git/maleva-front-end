import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const taxApi = {
  getTaxList: async (companyId) => {
    const response = await api.get(API_ENDPOINTS.TAX.ACTIVE_BY_COMPANY(companyId));
    return response.data;
  }
};
