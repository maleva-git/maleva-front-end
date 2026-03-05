/**
 * Authentication-related type definitions
 */

// Login request/response
export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  refreshToken: string
  user: AuthUser
}

// Authentication user
export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  roleId: number
  role?: {
    id: number
    name: string
  }
  avatar?: string
  isActive: boolean
}

// Auth state
export interface AuthState {
  user: AuthUser | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

// Auth context
export interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  refreshToken: () => Promise<void>
  updateUser: (user: AuthUser) => void
}

// Protected route props
export interface ProtectedRouteProps {
  children: React.ReactNode
}

export interface RoleProtectedRouteProps extends ProtectedRouteProps {
  requiredRoleId?: number | number[]
}

// Token
export interface Token {
  access: string
  refresh: string
  expiresIn: number
  tokenType: 'Bearer'
}

// Session
export interface Session {
  token: Token
  user: AuthUser
  createdAt: number
  expiresAt: number
}

// Password reset
export interface PasswordResetRequest {
  email: string
}

export interface PasswordReset {
  token: string
  newPassword: string
  confirmPassword: string
}

// Change password
export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

// Auth errors
export enum AuthErrorCode {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
}
