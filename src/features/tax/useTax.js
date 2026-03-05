import { useQuery } from '@tanstack/react-query';
import { taxApi } from './taxApi';

export const useTaxList = (companyId) => {
  return useQuery({
    queryKey: ['taxList', companyId],
    queryFn: () => taxApi.getTaxList(companyId),
    enabled: !!companyId,
    staleTime: 5 * 60 * 1000,
  });
};
