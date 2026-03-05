/**
 * Common type definitions used across the application
 */

// User and authentication types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  roleId: number
  role: UserRole
  isActive: boolean
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date
}

export interface UserRole {
  id: number
  name: string
  description: string
  permissions: Permission[]
}

export interface Permission {
  id: string
  name: string
  description: string
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: ApiError
  timestamp: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  hasMore: boolean
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
  status?: number
}

// Common utility types
export type ValueOf<T> = T[keyof T]

export interface PageParams {
  page: number
  pageSize: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface FilterOptions {
  [key: string]: any
}

// Loading and error states
export interface AsyncState<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}

export interface RequestConfig {
  headers?: Record<string, string>
  params?: Record<string, any>
  data?: any
  timeout?: number
}

// React component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export interface BasePageProps extends BaseComponentProps {
  title?: string
  description?: string
}

// Notification types
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// Role ID constants
export enum RoleId {
  SUPERADMIN = 100,
  ADMIN = 200,
  CUSTOMERSERVICE = 300,
  OPERATIONADMIN = 400,
  BOARDINGOFFICER = 500,
  WAREHOUSE = 600,
  DRIVER = 700,
  HR = 800,
  ACCOUNTS = 900,
  PAYABLE = 1100,
  RECEIVABLE = 1200,
  MAINTENANCE = 1300,
}
