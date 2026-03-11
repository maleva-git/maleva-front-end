import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../lib/queryClient';
import api from '../api/axios';
import dashboardMockData from '../data/dashboardMockData';

/**
 * Hook to fetch dashboard data using React Query
 * Automatically handles loading, error, caching, and refetching
 */
export function useDashboardData() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.dashboards.all,
    queryFn: async () => {
      try {
        // Try to fetch from API endpoint
        const response = await api.get('/dashboard/data');
        return response.data.data || dashboardMockData;
      } catch (err) {
        // Fallback to mock data if API fails
        console.warn('Using mock dashboard data:', err.message);
        return dashboardMockData;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes cache
    retry: 1,
  });

  return {
    data: data || dashboardMockData,
    loading: isLoading,
    error: error?.message || null,
    refetch: refetch, // Use native refetch from React Query
  };
}

export default useDashboardData;
