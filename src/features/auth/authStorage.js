export const authStorage = {
  setAuth(userData) {
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', JSON.stringify(userData));
  },

  getAuth() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  getToken() {
    return localStorage.getItem('token');
  },

  clear() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};