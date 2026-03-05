/**
 * React Query configuration and client setup
 */

import { QueryClient, DefaultOptions } from '@tanstack/react-query'

// Default query options
const queryConfig: DefaultOptions = {
  queries: {
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  },
  mutations: {
    retry: 1,
  },
}

// Create query client
export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
})

/**
 * Query key factory - centralized cache key management
 * Following TanStack Query best practices
 */
export const queryKeys = {
  // Auth queries
  auth: {
    all: ['auth'] as const,
    current: () => [...queryKeys.auth.all, 'current'] as const,
  },

  // User queries
  users: {
    all: ['users'] as const,
    lists: () => [...queryKeys.users.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.users.lists(), { filters }] as const,
    details: () => [...queryKeys.users.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },

  // Dashboard queries
  dashboards: {
    all: ['dashboards'] as const,
    metrics: () => [...queryKeys.dashboards.all, 'metrics'] as const,
    metric: (roleId: number) => [...queryKeys.dashboards.metrics(), roleId] as const,
  },

  // Customer queries
  customers: {
    all: ['customers'] as const,
    lists: () => [...queryKeys.customers.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.customers.lists(), { filters }] as const,
    details: () => [...queryKeys.customers.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.customers.details(), id] as const,
  },

  // Job type queries
  jobTypes: {
    all: ['jobTypes'] as const,
    lists: () => [...queryKeys.jobTypes.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.jobTypes.lists(), { filters }] as const,
  },

  // Operations queries
  operations: {
    all: ['operations'] as const,
    lists: () => [...queryKeys.operations.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.operations.lists(), { filters }] as const,
    details: () => [...queryKeys.operations.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.operations.details(), id] as const,
  },

  // Vehicles queries
  vehicles: {
    all: ['vehicles'] as const,
    lists: () => [...queryKeys.vehicles.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.vehicles.lists(), { filters }] as const,
    details: () => [...queryKeys.vehicles.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.vehicles.details(), id] as const,
  },

  // Drivers queries
  drivers: {
    all: ['drivers'] as const,
    lists: () => [...queryKeys.drivers.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.drivers.lists(), { filters }] as const,
    details: () => [...queryKeys.drivers.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.drivers.details(), id] as const,
  },

  // Shipments queries
  shipments: {
    all: ['shipments'] as const,
    lists: () => [...queryKeys.shipments.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.shipments.lists(), { filters }] as const,
    details: () => [...queryKeys.shipments.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.shipments.details(), id] as const,
  },

  // Inventory queries
  inventory: {
    all: ['inventory'] as const,
    lists: () => [...queryKeys.inventory.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.inventory.lists(), { filters }] as const,
    details: () => [...queryKeys.inventory.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.inventory.details(), id] as const,
  },

  // Alerts queries
  alerts: {
    all: ['alerts'] as const,
    lists: () => [...queryKeys.alerts.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.alerts.lists(), { filters }] as const,
  },
}

export default queryClient
