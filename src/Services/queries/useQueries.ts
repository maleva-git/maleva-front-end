/**
 * Example React Query hooks following enterprise patterns
 * These serve as templates for creating additional query hooks
 */

import { useQuery, useInfiniteQuery, UseQueryResult } from '@tanstack/react-query'
import { queryKeys } from '@lib/queryClient'
import { ApiClient } from '@services/api/client'
import { AuthUser, DashboardMetrics, PaginatedData, GetListParams } from '@types/api'
import { User } from '@types/common'

/**
 * Fetch current user
 * Used to get the authenticated user's details
 */
export function useCurrentUser(): UseQueryResult<AuthUser, unknown> {
  return useQuery({
    queryKey: queryKeys.auth.current(),
    queryFn: async () => {
      const response = await ApiClient.get<AuthUser>('/auth/me')
      return response.data.data!
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
  })
}

/**
 * Fetch dashboard metrics
 * Used to get KPI data for role-specific dashboards
 */
export function useDashboardMetrics(roleId: number) {
  return useQuery({
    queryKey: queryKeys.dashboards.metric(roleId),
    queryFn: async () => {
      const response = await ApiClient.get<DashboardMetrics>(
        `/dashboard/metrics/${roleId}`
      )
      return response.data.data!
    },
    staleTime: 1000 * 60 * 5, // 5 minutes for fresh KPI data
  })
}

/**
 * Fetch paginated users list
 * Shows pattern for paginated queries with filters
 */
export function useUsers(params?: GetListParams) {
  return useQuery({
    queryKey: queryKeys.users.list(params),
    queryFn: async () => {
      const response = await ApiClient.get<PaginatedData<User>>(
        '/users',
        { params }
      )
      return response.data.data!
    },
    staleTime: 1000 * 60 * 5,
  })
}

/**
 * Fetch single user by ID
 */
export function useUser(userId: string) {
  return useQuery({
    queryKey: queryKeys.users.detail(userId),
    queryFn: async () => {
      const response = await ApiClient.get<User>(
        `/users/${userId}`
      )
      return response.data.data!
    },
    enabled: !!userId, // Only run when userId is provided
  })
}

/**
 * Fetch infinite list of users (for virtual scrolling)
 */
export function useUsersInfinite(pageSize = 20) {
  return useInfiniteQuery({
    queryKey: queryKeys.users.lists(),
    queryFn: async ({ pageParam = 0 }) => {
      const response = await ApiClient.get<PaginatedData<User>>(
        '/users',
        {
          params: {
            page: pageParam,
            pageSize,
          },
        }
      )
      return response.data.data!
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.hasMore) {
        return lastPage.page + 1
      }
      return undefined
    },
    staleTime: 1000 * 60 * 5,
  })
}

/**
 * Template for creating custom queries
 * Copy and modify this for new endpoints
 */
export function useTemplateQuery<T = any>(
  queryKey: string[],
  endpoint: string,
  enabled = true
) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await ApiClient.get<T>(endpoint)
      return response.data.data!
    },
    enabled,
    staleTime: 1000 * 60 * 5,
  })
}

/**
 * Template for paginated queries
 */
export function useTemplateList<T = any>(
  endpoint: string,
  params?: GetListParams
) {
  return useQuery({
    queryKey: [endpoint, params],
    queryFn: async () => {
      const response = await ApiClient.get<PaginatedData<T>>(
        endpoint,
        { params }
      )
      return response.data.data!
    },
    staleTime: 1000 * 60 * 5,
  })
}
