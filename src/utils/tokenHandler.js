import { store } from '../app/store';
import { logout } from '../features/auth/authSlice';

export const tokenHandler = {
  get() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  },

  set(token, remember = false) {
    if (remember) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  },

  clear() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  },

  isValid() {
    const token = this.get();
    if (!token) return false;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  },

  handleExpired() {
    this.clear();
    store.dispatch(logout());
    window.location.assign('/');
  }
};
