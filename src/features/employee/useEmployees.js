import { useQuery } from '@tanstack/react-query';
import { employeeApi } from '../../api/employeeApi';

export const useEmployees = (params = {}) => {
  return useQuery({
    queryKey: ['employees', params],
    queryFn: () => employeeApi.getAll(params),
    staleTime: 5 * 60 * 1000
  });
};

export const useEmployeesByRole = (roleId) => {
  return useQuery({
    queryKey: ['employees', 'role', roleId],
    queryFn: () => employeeApi.getByRoleId(roleId),
    enabled: !!roleId,
    staleTime: 5 * 60 * 1000
  });
};

export const useEmployeesByCompanyAndRoles = (companyRefId, roleId, roleId1) => {
  return useQuery({
    queryKey: ['employees', 'company', companyRefId, roleId, roleId1],
    queryFn: () => employeeApi.getByCompanyAndRoles(companyRefId, roleId, roleId1),
    enabled: !!companyRefId,
    staleTime: 5 * 60 * 1000
  });
};

export const useEmployeesByCompany = (companyRefId) => {
  return useQuery({
    queryKey: ['employees', 'company', companyRefId],
    queryFn: () => employeeApi.getBycompanyRefId(companyRefId),
    enabled: !!companyRefId,
    staleTime: 5 * 60 * 1000
  });
};

