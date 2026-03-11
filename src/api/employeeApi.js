import api from './axios';
import { API_ENDPOINTS } from './endpoints';

/**
 * Employee API — all HTTP calls for the employee resource.
 * No try/catch needed: errors bubble up to TanStack Query's error state.
 * Response shape: { data: [...] } or raw array — normalised with ?? operator.
 */
export const employeeApi = {
  /** Get all employees, optionally filtered by params */
  getAll: async (params = {}) => {
    const { data } = await api.get(API_ENDPOINTS.EMPLOYEE.LIST, { params });
    return data?.data ?? data ?? [];
  },

  /** Get single employee by ID */
  getById: async (id) => {
    const { data } = await api.get(API_ENDPOINTS.EMPLOYEE.GET(id));
    return data?.data ?? data;
  },

  /** Get employees filtered by roleId */
  getByRoleId: async (roleId) => {
    const { data } = await api.get(API_ENDPOINTS.EMPLOYEE.LIST, { params: { roleId } });
    return data?.data ?? data ?? [];
  },

  /** Get employees filtered by name */
  getByName: async (name) => {
    const { data } = await api.get(API_ENDPOINTS.EMPLOYEE.LIST, { params: { name } });
    return data?.data ?? data ?? [];
  },

  /** Get all employees belonging to a company */
  getByCompany: async (companyRefId, type = 'ALL') => {
    const { data } = await api.get(API_ENDPOINTS.EMPLOYEE.BY_COMPANY(companyRefId), {
      params: { type },
    });
    return data?.data ?? data ?? [];
  },

  /** Get employees by company filtered by one or two role IDs */
  getByCompanyAndRoles: async (companyRefId, roleId, roleId1) => {
    const params = {};
    if (roleId) params.roleId = roleId;
    if (roleId1) params.roleId1 = roleId1;
    const { data } = await api.get(API_ENDPOINTS.EMPLOYEE.BY_COMPANY_ROLES(companyRefId), { params });
    return data?.data ?? data ?? [];
  },

  /** Create a new employee */
  create: async (payload) => {
    const { data } = await api.post(API_ENDPOINTS.EMPLOYEE.LIST, payload);
    return data?.data ?? data;
  },

  /** Update an existing employee */
  update: async (id, payload) => {
    const { data } = await api.put(API_ENDPOINTS.EMPLOYEE.GET(id), payload);
    return data?.data ?? data;
  },

  /** Delete an employee by ID */
  delete: async (id) => {
    await api.delete(API_ENDPOINTS.EMPLOYEE.GET(id));
  },
};
