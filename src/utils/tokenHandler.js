/**
 * tokenHandler.js
 *
 * Pure token utility — no imports from app-layer (store, Redux).
 * This keeps tokenHandler testable in isolation and removes the
 * circular dependency: utils → app.
 *
 * SOLID — Dependency Inversion Principle fix:
 *  handleExpired() now accepts a callback so the caller (axios interceptor,
 *  useTokenRefresh hook, etc.) decides what side-effects to run.
 */
export const tokenHandler = {
  /** Read token from localStorage first, then sessionStorage */
  get() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  },

  /**
   * Persist token.
   * @param {string} token
   * @param {boolean} remember - true → localStorage, false → sessionStorage
   */
  set(token, remember = false) {
    if (remember) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  },

  /** Remove all auth-related keys from both storage engines */
  clear() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  },

  /**
   * Check whether the stored JWT is still valid (not expired).
   * @param {number} bufferMinutes - Treat token as expired this many minutes early.
   */
  isValid(bufferMinutes = 5) {
    const payload = this.decodePayload();
    if (!payload?.exp) return false;
    try {
      const bufferMs = bufferMinutes * 60 * 1000;
      return payload.exp * 1000 - bufferMs > Date.now();
    } catch {
      return false;
    }
  },

  /**
   * Decode the JWT payload without verification.
   * @param {string} [token] - Defaults to the currently stored token.
   * @returns {object|null}
   */
  decodePayload(token = this.get()) {
    if (!token) return null;
    try {
      const base64 = token.split('.')[1];
      if (!base64) return null;
      const normalized = base64.replace(/-/g, '+').replace(/_/g, '/');
      const padding = '='.repeat((4 - (normalized.length % 4)) % 4);
      return JSON.parse(atob(normalized + padding));
    } catch {
      return null;
    }
  },

  /**
   * Clear stored auth data and call the provided callback.
   * The caller is responsible for dispatching logout / redirecting.
   *
   * @param {Function} [onExpired] - Optional side-effect callback
   *   e.g. () => { store.dispatch(logout()); window.location.assign('/'); }
   */
  handleExpired(onExpired) {
    this.clear();
    onExpired?.();
  },
};
