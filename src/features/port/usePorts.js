import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../lib/queryClient';
import { portApi } from './portApi';

// ---------------------------------------------------------------------------
// Normalise raw API rows to { value, label } pairs
// ---------------------------------------------------------------------------
const toRows = (data) =>
  Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : [];

const toOption = (port) => {
  const label = String(port?.portName ?? port?.PortName ?? '').trim();
  if (!label) return null;
  return { value: label, label }; // value = portName (backward-compat with existing forms)
};

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Fetch active ports for a company.
 * Uses centralized queryKeys.ports factory for correct cache invalidation.
 * staleTime is intentionally omitted — global default (5 min) applies.
 * Port master data could use a longer staleTime if needed (e.g. 1 hour):
 *   staleTime: 60 * 60 * 1000
 */
export const usePorts = (companyId) => {
  const normalizedCompanyId = Number(companyId);
  const hasValidCompanyId = Number.isInteger(normalizedCompanyId) && normalizedCompanyId > 0;

  const query = useQuery({
    queryKey: queryKeys.ports.list(normalizedCompanyId),
    queryFn: () => portApi.getActiveByCompany(normalizedCompanyId),
    enabled: hasValidCompanyId,
  });

  const portOptions = useMemo(() => {
    const seen = new Set();
    return toRows(query.data).reduce((acc, port) => {
      const option = toOption(port);
      if (!option || seen.has(option.value)) return acc;
      seen.add(option.value);
      acc.push(option);
      return acc;
    }, []);
  }, [query.data]);

  return { ...query, portOptions };
};
