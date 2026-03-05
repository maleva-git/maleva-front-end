import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../api/axios';
import { employeeApi } from '../api/employeeApi';

const cache = new Map();

export const useDropdownLoader = (endpoint, params = {}, options = {}) => {
  const { 
    enabled = true, 
    cacheKey = null,
    transform = (data) => data,
    displayMember = 'Name',
    valueMember = 'Id'
  } = options;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cacheKeyString = cacheKey || `${endpoint}-${JSON.stringify(params)}`;

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    // Check cache
    if (cache.has(cacheKeyString)) {
      setData(cache.get(cacheKeyString));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post(endpoint, params);
      const rawData = response.data.data || response.data || [];
      const transformedData = transform(rawData);
      
      // Cache the result
      cache.set(cacheKeyString, transformedData);
      setData(transformedData);
    } catch (err) {
      setError(err);
      console.error(`Error loading dropdown from ${endpoint}:`, err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, JSON.stringify(params), enabled, cacheKeyString]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    cache.delete(cacheKeyString);
    fetchData();
  }, [cacheKeyString, fetchData]);

  const clearCache = useCallback(() => {
    cache.clear();
  }, []);

  return { 
    data, 
    loading, 
    error, 
    refetch, 
    clearCache,
    options: data.map(item => ({
      label: item[displayMember] || item.label || item.name,
      value: item[valueMember] || item.value || item.id,
      raw: item
    }))
  };
};

// Specific dropdown loaders
export const useDriverDropdown = (comid) => {
  const result = useDropdownLoader(
    '/DriverMaster/SelectDriverName',
    { Comid: comid },
    { displayMember: 'DriverName', valueMember: 'Id' }
  );
  return result.data || [];
};

export const useTruckDropdown = (comid) => {
  const result = useDropdownLoader(
    '/TruckMaster/SelectTruckAll',
    { Comid: comid },
    { displayMember: 'TruckName', valueMember: 'Id' }
  );
  return result.data || [];
};

export const useAgentCompanyDropdown = (comid) => {
  const result = useDropdownLoader(
    '/AgentCompanyMaster/SelectAgentCompany',
    { Comid: comid },
    { displayMember: 'Name', valueMember: 'Id' }
  );
  return result.data || [];
};


export const useEmployeesByCompany = (companyRefId, type = 'ALL') => {
  return useQuery({
    queryKey: ['employees', 'company', companyRefId, type],
    queryFn: async () => {
      const data = await employeeApi.getByCompanyRefId(companyRefId, type);
      return data.map(emp => ({
        value: emp.id,
        label: emp.name || emp.employeeName
      }));
    },
    enabled: !!companyRefId,
    staleTime: 5 * 60 * 1000,
  });
};
