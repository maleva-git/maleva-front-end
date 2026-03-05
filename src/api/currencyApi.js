import api from './axios';

export const currencyApi = {
  getCurrencyValue: async (companyId, customerId) => {
    const response = await api.get('/api/currency-value/get', {
      params: { companyId, customerId }
    });
    return response.data;
  }
};
