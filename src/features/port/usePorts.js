import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { portApi } from './portApi';

const toRows = (data) => (Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : []);

const toOption = (port) => {
  const label = String(port?.portName ?? port?.PortName ?? '').trim();
  if (!label) return null;

  // Keep value as port name for compatibility with existing form fields.
  const value = label;

  return { value, label };
};

export const usePorts = (companyId) => {
  const normalizedCompanyId = Number(companyId);
  const hasValidCompanyId = Number.isInteger(normalizedCompanyId) && normalizedCompanyId > 0;

  const query = useQuery({
    queryKey: ['ports', normalizedCompanyId],
    queryFn: () => portApi.getActiveByCompany(normalizedCompanyId),
    enabled: hasValidCompanyId,
    staleTime: 5 * 60 * 1000,
  });

  const portOptions = useMemo(() => {
    const seen = new Set();

    return toRows(query.data).reduce((acc, port) => {
      const option = toOption(port);
      if (!option) return acc;

      if (seen.has(option.value)) return acc;
      seen.add(option.value);
      acc.push(option);
      return acc;
    }, []);
  }, [query.data]);

  return {
    ...query,
    portOptions,
  };
};
