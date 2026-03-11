import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../lib/queryClient';
import { API_ENDPOINTS } from '../../../api/endpoints';
import api from '../../../api/axios';

/**
 * Fetch all job statuses (master data).
 * API call is inline here because this is a small, isolated lookup.
 * Uses centralized queryKeys.jobStatuses factory for correct cache invalidation.
 *
 * staleTime is intentionally omitted — global default (5 min) applies.
 * For very stable master data you could extend: staleTime: 60 * 60 * 1000
 */
export const useJobStatuses = () => {
  return useQuery({
    queryKey: queryKeys.jobStatuses.list(),
    queryFn: async () => {
      const { data } = await api.get(API_ENDPOINTS.JOB_STATUS_MASTER.SELECT);
      return data?.data ?? data ?? [];
    },
  });
};
