import api from './axios';
import { API_ENDPOINTS } from './endpoints';

export const jobConfigApi = {
  getJobConfig: async (companyId, jobId) => {
    const response = await api.post(API_ENDPOINTS.JOB_CONFIG.GET_CONFIG, null, {
      params: { companyId, jobId }
    });
    return response.data.data;
  }
};
