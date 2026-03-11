import { useQuery } from '@tanstack/react-query';
import { agentsApi } from './agentsApi';

export const useAgents = (companyRefId, jobId) => {
  return useQuery({
    queryKey: ['agents', companyRefId, jobId],
    queryFn: () => agentsApi.getByCompanyAndJob(companyRefId, jobId),
    enabled: !!companyRefId && !!jobId,
    staleTime: 5 * 60 * 1000,
  });
};
