import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const agentCompanyApi = {
  getByCompany: async (companyId) => {
    const { data } = await api.get(API_ENDPOINTS.AGENT_COMPANY_API.BY_COMPANY(companyId));
    return data?.data ?? data ?? [];
  }
};
