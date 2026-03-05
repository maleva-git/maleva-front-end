import { useQuery } from '@tanstack/react-query';
import { productApi } from './productApi';

export const useProducts = (companyRefId) => {
  return useQuery({
    queryKey: ['products', companyRefId],
    queryFn: () => productApi.fetchProductList(companyRefId),
    enabled: !!companyRefId,
    staleTime: 5 * 60 * 1000
  });
};
