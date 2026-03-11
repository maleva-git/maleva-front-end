import api from './axios';
import { API_ENDPOINTS } from './endpoints';

/**
 * Currency API — currency value lookups.
 */
export const currencyApi = {
  /** Get currency value for a company + customer combination */
  getCurrencyValue: async (companyId, customerId) => {
    const { data } = await api.get(API_ENDPOINTS.CURRENCY.VALUE, {
      params: { companyId, customerId },
    });
    return data?.data ?? data;
  },
};
