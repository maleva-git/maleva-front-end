import apiClient from './axios';

export const employeeApi = {
  getAll: async (params = {}) => {
    try {
      const response = await apiClient.get('/api/employees', { params });
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  },

  getByRoleId: async (roleId) => {
    try {
      const response = await apiClient.get('/api/employees', {
        params: { roleId }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      });
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching employees by roleId:', error);
      throw error;
    }
  },

  getByName: async (name) => {
    try {
      const response = await apiClient.get('/api/employees', {
        params: { name }
      });
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching employees by name:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await apiClient.get(`/api/employees/${id}`);
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching employee by id:', error);
      throw error;
    }
  },


  getByCompanyRefId: async (companyRefId, type = '') => {
    try {
      const response = await apiClient.get(`/api/employees/company/${companyRefId}/all`, {
        
      });
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching employees by companyRefId:', error);
      throw error;
    }
  },

  create: async (data) => {
    try {
      const response = await apiClient.post('/api/employees', data);
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const response = await apiClient.put(`/api/employees/${id}`, data);
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  },

  getByCompanyAndRoles: async (companyRefId, roleId, roleId1) => {
    try {
      const params = {};
      if (roleId) params.roleId = roleId;
      if (roleId1) params.roleId1 = roleId1;
      const response = await apiClient.get(`/api/employees/company/${companyRefId}/roles`, { params });
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching employees by company and roles:', error);
      throw error;
    }
  },

  getByCompany: async (companyRefId, type = 'ALL') => {
    try {
      const response = await apiClient.get(`/api/employees/company/${companyRefId}/all`, {
        params: { type }
      });
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching employees by company:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await apiClient.delete(`/api/employees/${id}`);
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }
};
