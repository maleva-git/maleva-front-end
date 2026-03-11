import api from './axios';
import { API_ENDPOINTS } from './endpoints';

/**
 * Truck API — all HTTP calls for the truck resource.
 */
export const truckApi = {
  /** Get all trucks for a company, with optional search */
  getTrucks: async (companyId, searchTerm = '') => {
    const { data } = await api.get(API_ENDPOINTS.TRUCK_API.BY_COMPANY(companyId), {
      params: { search: searchTerm },
    });
    return data?.data ?? data ?? [];
  },

  /** Get truck by ID */
  getTruckById: async (id) => {
    const { data } = await api.get(API_ENDPOINTS.TRUCK_API.GET(id));
    return data?.data ?? data;
  },

  /** Check license expiry status for a truck */
  checkLicenseExpiry: async (truckId) => {
    const { data } = await api.get(API_ENDPOINTS.TRUCK_API.LICENSE_CHECK(truckId));
    return data?.data ?? data;
  },
};
