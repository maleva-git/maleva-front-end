import api from '../../api/axios';

export const agentCompanyApi = {
  getByCompany: async (companyId) => {
    try {
      console.log('🔵 Fetching agent companies for companyId:', companyId);
      const response = await api.get(`/api/agent-companies/company/${companyId}`);
      console.log('✅ Agent companies response:', response.data);
      return response.data.data || response.data;
    } catch (error) {
      console.error('❌ Agent companies API error:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
      throw error;
    }
  }
};
