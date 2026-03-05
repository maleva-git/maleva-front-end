import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../lib/queryClient';
import { jobTypeApi } from './jobTypeApi';

export function useJobTypes(companyId, options = {}) {
  return useQuery({
    queryKey: queryKeys.jobTypes.list({ companyId }),
    queryFn: () => jobTypeApi.fetchByCompanyId(companyId),
    staleTime: 1000 * 60 * 5,
    enabled: Boolean(companyId),
    ...options,
  });
}
