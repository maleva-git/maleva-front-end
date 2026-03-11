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

  // Sale order queries
  saleOrders: {
    all: ['saleOrders'] as const,
    lists: () => [...queryKeys.saleOrders.all, 'list'] as const,
    list: (filters?: Record<string, any>) =>
      [...queryKeys.saleOrders.lists(), { filters }] as const,
    details: () => [...queryKeys.saleOrders.all, 'detail'] as const,
    detail: (id: string | number) =>
      [...queryKeys.saleOrders.details(), id] as const,
  },

  // Product queries
  products: {
    all: ['products'] as const,
    lists: () => [...queryKeys.products.all, 'list'] as const,
    list: (companyId?: number) => [...queryKeys.products.lists(), { companyId }] as const,
    details: () => [...queryKeys.products.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.products.details(), id] as const,
  },

  // Port queries (master data — infrequently changing)
  ports: {
    all: ['ports'] as const,
    lists: () => [...queryKeys.ports.all, 'list'] as const,
    list: (companyId?: number) => [...queryKeys.ports.lists(), { companyId }] as const,
  },

  // Tax queries (master data — infrequently changing)
  tax: {
    all: ['tax'] as const,
    lists: () => [...queryKeys.tax.all, 'list'] as const,
    list: (companyId?: number) => [...queryKeys.tax.lists(), { companyId }] as const,
  },

  // Employee queries
  employees: {
    all: ['employees'] as const,
    lists: () => [...queryKeys.employees.all, 'list'] as const,
    list: (filters?: Record<string, any>) => [...queryKeys.employees.lists(), { filters }] as const,
    byCompany: (companyId: number) => [...queryKeys.employees.all, 'company', companyId] as const,
    byCompanyAndRoles: (companyId: number, roleId?: number, roleId1?: number) =>
      [...queryKeys.employees.all, 'company', companyId, 'roles', { roleId, roleId1 }] as const,
    details: () => [...queryKeys.employees.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.employees.details(), id] as const,
  },

  // Job status queries (master data — infrequently changing)
  jobStatuses: {
    all: ['jobStatuses'] as const,
    list: () => [...queryKeys.jobStatuses.all, 'list'] as const,
  },

  // Address queries
  addresses: {
    all: ['addresses'] as const,
    lists: () => [...queryKeys.addresses.all, 'list'] as const,
    list: (companyId?: number) => [...queryKeys.addresses.lists(), { companyId }] as const,
    details: () => [...queryKeys.addresses.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.addresses.details(), id] as const,
  },

  // Truck queries
  trucks: {
    all: ['trucks'] as const,
    lists: () => [...queryKeys.trucks.all, 'list'] as const,
    list: (companyId?: number) => [...queryKeys.trucks.lists(), { companyId }] as const,
    details: () => [...queryKeys.trucks.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.trucks.details(), id] as const,
  },
}

export default queryClient
