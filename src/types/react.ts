/**
 * React-specific type definitions and helpers
 */

import React from 'react'

// Component prop types
export type ComponentProps<T extends React.ElementType> = React.ComponentProps<T>

export type FC<P = {}> = React.FC<P>

export type PropsWithChildren<P = {}> = React.PropsWithChildren<P>

// Common component props
export interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  disabled?: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  isRequired?: boolean
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
  error?: string
  helperText?: string
}

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  maxLength?: number
  showCharCount?: boolean
}

// Form types
export interface FormFieldProps<T = any> {
  name: string
  label?: string
  error?: string
  value: T
  onChange: (value: T) => void
  onBlur?: () => void
  isRequired?: boolean
  disabled?: boolean
}

export interface FormState<T = any> {
  values: T
  errors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitting: boolean
  isDirty: boolean
}

export interface FormContextType<T = any> {
  values: T
  errors: Record<string, string>
  touched: Record<string, boolean>
  setFieldValue: (field: string, value: any) => void
  setFieldTouched: (field: string, touched: boolean) => void
  setFieldError: (field: string, error: string) => void
  handleSubmit: (onSubmit: (values: T) => Promise<void>) => (e: React.FormEvent) => Promise<void>
}

// Hook return types
export type UseStateReturn<T> = [T, (value: T | ((prev: T) => T)) => void]

export interface UseAsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export interface UseAsyncReturn<T> extends UseAsyncState<T> {
  refetch: () => Promise<void>
}

// Event handler types
export type EventHandler<T extends React.SyntheticEvent<any>> = (event: T) => void

export type ChangeEventHandler = EventHandler<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>>

export type ClickEventHandler = EventHandler<React.MouseEvent<HTMLButtonElement>>

export type FormEventHandler = EventHandler<React.FormEvent<HTMLFormElement>>

// Modal/Dialog types
export interface ModalProps extends BaseProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeButton?: boolean
  backdrop?: boolean
}

export interface DialogProps extends ModalProps {
  action?: {
    label: string
    onClick: () => void
    variant?: 'primary' | 'danger'
  }
  cancelLabel?: string
}

// Common hook types
export interface UsePaginationOptions {
  initialPage?: number
  pageSize?: number
}

export interface UsePaginationReturn {
  page: number
  pageSize: number
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  setPageSize: (size: number) => void
}

export interface UseFilterOptions<T = any> {
  initialFilters?: T
}

export interface UseFilterReturn<T = any> {
  filters: T
  setFilters: (filters: T) => void
  updateFilter: (key: keyof T, value: any) => void
  clearFilters: () => void
}

// Render prop types
export interface RenderPropChildren<T> {
  children: (props: T) => React.ReactNode
}

export interface RenderProps<T> {
  render: (props: T) => React.ReactNode
}

// Async component type
export type AsyncComponent<T extends React.ElementType> = React.LazyExoticComponent<React.ComponentType<ComponentProps<T>>>
