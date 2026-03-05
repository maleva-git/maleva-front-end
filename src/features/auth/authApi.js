import api from "../../api/axios";
import { API_ENDPOINTS } from "../../api/endpoints";

export const loginApi = async ({ userName, password }) => {
  try {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, { userId: userName, password });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.response?.data?.message;
    
    if (error.response?.status === 401) {
      throw new Error(errorMessage || 'Please enter valid username or password');
    }
    if (error.response?.status === 400) {
      throw new Error(errorMessage || 'Username and password are required');
    }
    throw new Error('Network error. Please try again');
  }
};
