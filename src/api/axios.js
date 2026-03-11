import axios from 'axios';
import { tokenHandler } from '../utils/tokenHandler';
import { store } from '../app/store';
import { logout } from '../features/auth/authSlice';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// ─── REQUEST INTERCEPTOR ─────────────────────────────────────────────────────
// Attach the Bearer token to every outgoing request (if present and valid).
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

// ─── RESPONSE INTERCEPTOR ────────────────────────────────────────────────────
// On 401/403, clear auth state and redirect to login.
// The logout side-effect lives here (app layer), not inside tokenHandler (util layer).
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const isLoginRequest = error.config?.url?.includes('/auth/login');

    if ((status === 401 || status === 403) && !isLoginRequest) {
      tokenHandler.handleExpired(() => {
        store.dispatch(logout());
        window.location.assign('/');
      });
    }

    return Promise.reject(error);
  }
);

export default api;
