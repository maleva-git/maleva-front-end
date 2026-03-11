import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../lib/queryClient';
import { productApi } from './productApi';

/**
 * Hook to fetch all products for a company (for item selection dropdowns etc.)
 * Uses the centralized queryKeys.products factory for correct cache invalidation.
 * staleTime is intentionally omitted — global default (5 min) applies.
 */
export const useProducts = (companyRefId) => {
  return useQuery({
    queryKey: queryKeys.products.list(Number(companyRefId)),
    queryFn: () => productApi.fetchProductList(companyRefId),
    enabled: !!companyRefId,
  });
};
