import { useQuery } from '@tanstack/react-query';
import { sequenceApi } from '../../api/sequenceApi';
import { addressApi } from '../../api/adressapi';

export const useJobNumber = (companyId, billType, enabled = true) => {
  return useQuery({
    queryKey: ['jobNumber', companyId, billType],
    queryFn: () => sequenceApi.getMaxSequence(companyId, billType),
    enabled: enabled && !!billType,
    staleTime: 0,
    cacheTime: 0,
  });
};  

export const useActiveAddresses = (companyId, enabled = true) => {
  return useQuery({
    queryKey: ['activeAddresses', companyId],
    queryFn: () => addressApi.getActiveAddresses(companyId),
    enabled: enabled && !!companyId,
    staleTime: 5 * 60 * 1000,
  });
};
