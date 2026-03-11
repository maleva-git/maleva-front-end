import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

/**
 * Auth API Service
 * All authentication-related API calls
 */
export const authService = {
  /**
   * Login user
   * @param {Object} credentials - { userName, password }
   * @returns {Promise} User data with token
   */
  login: async (credentials) => {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
      userId: credentials.userName,
      password: credentials.password,
    });
    return response.data;
  },

  /**
   * Refresh authentication token
   * @returns {Promise} New token data
   */
  refreshToken: async () => {
    const response = await api.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
    return response.data;
  },

  /**
   * Change user password
   * @param {Object} data - Password change data
   * @returns {Promise} Success response
   */
  changePassword: async (data) => {
    const response = await api.post(API_ENDPOINTS.AUTH.EDIT_PASSWORD, data);
    return response.data;
  },
};
