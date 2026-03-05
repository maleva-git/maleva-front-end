import api from './axios';
import { API_ENDPOINTS } from './endpoints';

export const sequenceApi = {
  getMaxSequence: async (companyId, billType) => {
    const response = await api.get(API_ENDPOINTS.SEQUENCE.MAX_SEQUENCE(companyId), {
      params: { billType }
    });
    return response.data;
  }
};
