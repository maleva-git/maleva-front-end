/**
 * useDropdownLoader.js
 *
 * All dropdown hooks now use TanStack Query instead of a manual Map() cache.
 * Benefits:
 *  - Automatic cache invalidation via queryClient.invalidateQueries()
 *  - Visible in React Query DevTools
 *  - Background refetching, stale-while-revalidate
 *  - Consistent error/loading state pattern
 *
 * The old manual `cache = new Map()` has been removed.
 */

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../api/axios';
import { employeeApi } from '../api/employeeApi';
import { queryKeys } from '../lib/queryClient';

// ---------------------------------------------------------------------------
// Generic dropdown loader — uses TanStack Query
// Use this for legacy POST-based endpoints that don't have their own feature API.
// ---------------------------------------------------------------------------
export const useDropdownLoader = (endpoint, params = {}, options = {}) => {
  const {
    enabled = true,
    transform = (data) => data,
    displayMember = 'Name',
    valueMember = 'Id',
    staleTime = 5 * 60 * 1000, // Default: 5 min (same as global default)
  } = options;

  // Stable serialized key for params — only changes when params actually change
  const paramsKey = JSON.stringify(params);

  const query = useQuery({
    queryKey: ['dropdown', endpoint, paramsKey],
    queryFn: async () => {
      const response = await apiClient.post(endpoint, params);
      const rawData = response.data?.data ?? response.data ?? [];
      return transform(Array.isArray(rawData) ? rawData : []);
    },
    enabled: Boolean(enabled),
    staleTime,
  });

  // Derive option-shaped array only when data changes
  const selectOptions = useMemo(
    () =>
      (query.data ?? []).map((item) => ({
        label: item[displayMember] ?? item.label ?? item.name ?? '',
        value: item[valueMember] ?? item.value ?? item.id,
        raw: item,
      })),
    [query.data, displayMember, valueMember]
  );

  return {
    data: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
    options: selectOptions,
  };
};

// ---------------------------------------------------------------------------
// Domain-specific dropdown hooks (legacy POST-based endpoints)
// ---------------------------------------------------------------------------

/** Driver dropdown for a given company */
export const useDriverDropdown = (comid) => {
  const { data } = useDropdownLoader(
    '/DriverMaster/SelectDriverName',
    { Comid: comid },
    { displayMember: 'DriverName', valueMember: 'Id', enabled: !!comid }
  );
  return data ?? [];
};

/** Truck dropdown for a given company */
export const useTruckDropdown = (comid) => {
  const { data } = useDropdownLoader(
    '/TruckMaster/SelectTruckAll',
    { Comid: comid },
    { displayMember: 'TruckName', valueMember: 'Id', enabled: !!comid }
  );
  return data ?? [];
};

/** Agent company dropdown for a given company */
export const useAgentCompanyDropdown = (comid) => {
  const { data } = useDropdownLoader(
    '/AgentCompanyMaster/SelectAgentCompany',
    { Comid: comid },
    { displayMember: 'Name', valueMember: 'Id', enabled: !!comid }
  );
  return data ?? [];
};

// ---------------------------------------------------------------------------
// RESTful employee hook — uses centralized queryKeys + employeeApi
// ---------------------------------------------------------------------------

/**
 * Get employees for a company, shaped as { value, label } for dropdowns.
 * Uses the centralized queryKeys factory so cache invalidation works correctly.
 */
export const useEmployeesByCompany = (companyRefId, type = 'ALL') => {
  return useQuery({
    queryKey: queryKeys.employees.byCompany(Number(companyRefId)),
    queryFn: () => employeeApi.getByCompany(companyRefId, type),
    enabled: !!companyRefId,
    // No staleTime needed — global default (5 min) applies
    select: (data) =>
      (Array.isArray(data) ? data : []).map((emp) => ({
        value: emp.id,
        label: emp.name ?? emp.employeeName ?? '',
      })),
  });
};
