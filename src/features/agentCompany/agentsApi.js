import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const agentsApi = {
  getByCompanyAndJob: async (companyRefId, jobId) => {
    const { data } = await api.post(API_ENDPOINTS.AGENTS_API.SELECT_ALL(companyRefId, jobId));
    return data?.data ?? data ?? [];
  }
};
