import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';

export const useJobStatuses = () => {
  return useQuery({
    queryKey: ['jobStatuses'],
    queryFn: async () => {
      // TODO: Replace with actual endpoint
      const response = await api.get('/JobStatusMaster/SelectJobStatus');
      return response.data;
    },
    staleTime: 5 * 60 * 1000
  });
};
