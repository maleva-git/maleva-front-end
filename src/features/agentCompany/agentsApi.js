import api from '../../api/axios';

export const agentsApi = {
  getByCompanyAndJob: async (companyRefId, jobId) => {
    try {
      console.log('🔵 Fetching agents for companyRefId:', companyRefId, 'jobId:', jobId);
      const response = await api.post(`/api/agents/select-all?companyRefId=${companyRefId}&jobId=${jobId}`);
      console.log('✅ Agents response:', response.data);
      return response.data.data || response.data;
    } catch (error) {
      console.error('❌ Agents API error:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
      throw error;
    }
  }
};
