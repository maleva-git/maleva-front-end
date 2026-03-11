import api from './axios';
import { API_ENDPOINTS } from './endpoints';

/**
 * Address API — all HTTP calls for the address resource.
 * Mock data and fake delay have been removed.
 * Errors bubble up to TanStack Query's error state automatically.
 */
export const addressApi = {
  /** Fetch all addresses */
  getAll: async () => {
    const { data } = await api.get(API_ENDPOINTS.ADDRESS.LIST);
    return data?.data ?? data ?? [];
  },

  /** Fetch a single address by ID */
  getById: async (id) => {
    const { data } = await api.get(API_ENDPOINTS.ADDRESS.GET(id));
    return data?.data ?? data;
  },

  /** Fetch active addresses for a given company */
  getActiveByCompany: async (companyId) => {
    const { data } = await api.get(API_ENDPOINTS.ADDRESS.ACTIVE_BY_COMPANY(companyId));
    return data?.data ?? data ?? [];
  },

  /** Search addresses within a company by keyword */
  search: async (companyId, keyword = '') => {
    const { data } = await api.get(API_ENDPOINTS.ADDRESS.SEARCH(companyId), {
      params: { keyword },
    });
    return data?.data ?? data ?? [];
  },

  /** Create a new address */
  create: async (payload) => {
    const { data } = await api.post(API_ENDPOINTS.ADDRESS.CREATE, payload);
    return data?.data ?? data;
  },

  /** Update an existing address */
  update: async (id, payload) => {
    const { data } = await api.put(API_ENDPOINTS.ADDRESS.UPDATE(id), payload);
    return data?.data ?? data;
  },

  /** Delete an address by ID */
  delete: async (id) => {
    await api.delete(API_ENDPOINTS.ADDRESS.DELETE(id));
  },
};

// ---------------------------------------------------------------------------
// Backward-compatible named exports (keep if anything already imports these)
// ---------------------------------------------------------------------------
export const getAddresses = () => addressApi.getAll();
export const createAddress = (data) => addressApi.create(data);
export const updateAddress = ({ id, data }) => addressApi.update(id, data);
export const deleteAddress = (id) => addressApi.delete(id);