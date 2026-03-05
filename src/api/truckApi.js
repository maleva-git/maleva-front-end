import api from './axios';

export const truckApi = {
  // Get all trucks
  getTrucks: async (companyId, searchTerm = '') => {
    const response = await api.get(`/api/trucks/company/${companyId}`, {
      params: { search: searchTerm }
    });
    return response.data;
  },

  // Check license expiry
  checkLicenseExpiry: async (truckId) => {
    const response = await api.get(`/api/trucks/${truckId}/license-check`);
    return response.data;
  },

  // Get truck by ID
  getTruckById: async (id) => {
    const response = await api.get(`/api/trucks/${id}`);
    return response.data;
  }
};
