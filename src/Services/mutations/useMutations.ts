/**
 * React Query mutations for data mutations (create, update, delete)
 */

import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@lib/queryClient'
import { ApiClient } from '@services/api/client'
import { User } from '@types/common'
import { UseMutationOptions } from '@types/api'

/**
 * Generic mutation hook factory
 * Use this template to create specific mutation hooks
 */
function createMutationHook<TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TVariables>
): UseMutationResult<TData, unknown, TVariables> {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      options?.onSuccess?.(data)
    },
    onError: (error) => {
      options?.onError?.(error as Error)
    },
    onSettled: () => {
      options?.onSettled?.()
    },
  })
}

/**
 * Create user mutation
 */
export function useCreateUser(options?: UseMutationOptions<User, Partial<User>>) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newUser: Partial<User>) => {
      const response = await ApiClient.post<User>('/users', newUser)
      return response.data.data!
    },
    onSuccess: (data) => {
      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() })
      options?.onSuccess?.(data)
    },
    onError: (error) => {
      options?.onError?.(error as Error)
    },
    onSettled: () => {
      options?.onSettled?.()
    },
  })
}

/**
 * Update user mutation
 */
export function useUpdateUser(userId: string, options?: UseMutationOptions<User, Partial<User>>) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updates: Partial<User>) => {
      const response = await ApiClient.put<User>(`/users/${userId}`, updates)
      return response.data.data!
    },
    onSuccess: (data) => {
      // Invalidate both the specific user and the users list
      queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(userId) })
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() })
      options?.onSuccess?.(data)
    },
    onError: (error) => {
      options?.onError?.(error as Error)
    },
    onSettled: () => {
      options?.onSettled?.()
    },
  })
}

/**
 * Delete user mutation
 */
export function useDeleteUser(options?: UseMutationOptions<void, string>) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (userId: string) => {
      await ApiClient.delete(`/users/${userId}`)
    },
    onSuccess: () => {
      // Invalidate entire users list as structure changed
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all })
      options?.onSuccess?.(undefined)
    },
    onError: (error) => {
      options?.onError?.(error as Error)
    },
    onSettled: () => {
      options?.onSettled?.()
    },
  })
}

/**
 * Template for creating mutations
 * Copy and modify this for new endpoints
 */
export function useTemplateMutation<TData, TVariables>(
  endpoint: string,
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
  invalidateKeys: string[] = [],
  options?: UseMutationOptions<TData, TVariables>
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (variables: TVariables) => {
      let response

      switch (method) {
        case 'POST':
          response = await ApiClient.post<TData>(endpoint, variables)
          break
        case 'PUT':
          response = await ApiClient.put<TData>(endpoint, variables)
          break
        case 'PATCH':
          response = await ApiClient.patch<TData>(endpoint, variables)
          break
        case 'DELETE':
          await ApiClient.delete(endpoint)
          return undefined as TData
        default:
          throw new Error(`Unsupported method: ${method}`)
      }

      return response.data.data!
    },
    onSuccess: (data) => {
      // Invalidate all specified query keys
      for (const key of invalidateKeys) {
        queryClient.invalidateQueries({ queryKey: [key] })
      }
      options?.onSuccess?.(data as TData)
    },
    onError: (error) => {
      options?.onError?.(error as Error)
    },
    onSettled: () => {
      options?.onSettled?.()
    },
  })
}
