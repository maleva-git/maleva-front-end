import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const jobTypeApi = {
  fetchByCompanyId: async (companyId) => {
    const { data } = await api.get(API_ENDPOINTS.JOB_TYPE.BY_COMPANY(companyId));
    return data?.data ?? data ?? [];
  },

  getJobAllData: async (companyId, jobId) => {
    try {
      const { data } = await api.post(
        API_ENDPOINTS.JOB_ALL_DATA.SELECT,
        null,
        {
          params: {
            companyId,
            jobId,
          },
        }
      );
      return data;
    } catch (error) {
      console.error('getJobAllData failed', {
        companyId,
        jobId,
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      });
      throw error;
    }
  },

  getAll: async () => {
    const { data } = await api.get(API_ENDPOINTS.JOB_TYPE.LIST);
    return data?.data ?? data ?? [];
  },

  getById: async (id) => {
    const { data } = await api.get(API_ENDPOINTS.JOB_TYPE.GET(id));
    return data?.data ?? data;
  },

  create: async (jobTypeDto) => {
    const { data } = await api.post(API_ENDPOINTS.JOB_TYPE.CREATE, jobTypeDto);
    return data?.data ?? data;
  },

  update: async (id, jobTypeDto) => {
    const { data } = await api.put(API_ENDPOINTS.JOB_TYPE.UPDATE(id), jobTypeDto);
    return data?.data ?? data;
  },

  delete: async (id) => {
    await api.delete(API_ENDPOINTS.JOB_TYPE.DELETE(id));
  },
};
