import { useQuery } from '@tanstack/react-query';
import { agentCompanyApi } from './agentCompanyApi';

export const useAgentCompanies = (companyId) => {
  return useQuery({
    queryKey: ['agentCompanies', companyId],
    queryFn: () => agentCompanyApi.getByCompany(companyId),
    enabled: !!companyId,
    staleTime: 5 * 60 * 1000,
  });
};
