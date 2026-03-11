import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../lib/queryClient';
import { taxApi } from './taxApi';

/**
 * Fetch active tax list for a company.
 * Uses centralized queryKeys.tax factory for correct cache invalidation.
 * staleTime is intentionally omitted — global default (5 min) applies.
 */
export const useTaxList = (companyId) => {
  return useQuery({
    queryKey: queryKeys.tax.list(Number(companyId)),
    queryFn: () => taxApi.getTaxList(companyId),
    enabled: !!companyId,
  });
};
