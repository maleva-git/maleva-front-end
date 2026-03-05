/**
 * API-related type definitions
 */

import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiResponse, PaginatedResponse } from './common'

// API Client configuration
export interface ApiClientConfig extends AxiosRequestConfig {
  baseURL: string
  timeout: number
  headers: Record<string, string>
}

// API request/response types
export interface ApiRequest<T = void> {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  data?: T
  params?: Record<string, any>
}

export type ApiResponseType<T = unknown> = AxiosResponse<ApiResponse<T>>

export interface ApiErrorResponse {
  code: string
  message: string
  details?: Record<string, any>
  status: number
  timestamp: string
}

// HTTP interceptor types
export interface RequestInterceptor {
  onRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>
  onError?: (error: AxiosError) => AxiosError | Promise<AxiosError>
}

export interface ResponseInterceptor {
  onResponse?: <T = any>(response: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse<T>>
  onError?: (error: AxiosError) => AxiosError | Promise<AxiosError>
}

// Query hook types
export interface UseQueryOptions<T = unknown> {
  enabled?: boolean
  staleTime?: number
  cacheTime?: number
  retry?: boolean | number
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
}

export interface UseMutationOptions<TData = unknown, TVariables = unknown> {
  onSuccess?: (data: TData) => void
  onError?: (error: Error) => void
  onMutate?: (variables: TVariables) => void
  onSettled?: () => void
}

// Service response types
export interface ServiceResponse<T> {
  success: boolean
  data?: T
  error?: string
  code?: string
}

// API endpoint response types
export interface AuthResponse {
  token: string
  refreshToken: string
  user: {
    id: string
    email: string
    firstName: string
    lastName: string
    roleId: number
  }
}

export interface DashboardMetrics {
  totalUsers?: number
  activeOperations?: number
  revenue?: number
  completedJobs?: number
  [key: string]: any
}

export interface CustomerData {
  id: string
  name: string
  email: string
  phone: string
  address: string
  status: 'active' | 'inactive' | 'pending'
  createdAt: Date
  updatedAt: Date
}

export interface OrderData {
  id: string
  customerId: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  total: number
  items: OrderItem[]
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
  total: number
}

// Pagination types
export type PaginatedData<T> = PaginatedResponse<T>

export interface GetListParams {
  page?: number
  pageSize?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  [key: string]: any
}
