import axios from "axios";
import { tokenHandler } from "../utils/tokenHandler";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// ✅ REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token = tokenHandler.get();
    if (token && tokenHandler.isValid()) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const isLoginRequest = error.config?.url?.includes("/auth/login");

    if ((status === 401 || status === 403) && !isLoginRequest) {
      tokenHandler.handleExpired();
    }

    return Promise.reject(error);
  }
);

export default api;
