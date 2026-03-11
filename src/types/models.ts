/**
 * Business model/entity type definitions
 */

// Base entity
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

// Dashboard KPIs
export interface KPIMetric {
  title: string
  value: string | number
  change: number
  subtitle: string
  color: 'blue' | 'green' | 'red' | 'orange' | 'purple'
  icon?: React.ComponentType
  trendData: number[]
}

// Operations
export interface Operation extends BaseEntity {
  name: string
  status: 'active' | 'inactive' | 'pending'
  type: 'pickup' | 'delivery' | 'transfer'
  startDate: Date
  endDate?: Date
  revenue: number
  completionPercentage: number
}

// Fleet
export interface Vehicle extends BaseEntity {
  registrationNumber: string
  type: 'truck' | 'van' | 'car'
  manufacturer: string
  model: string
  year: number
  capacity: number
  currentStatus: 'active' | 'maintenance' | 'inactive'
  lastMaintenanceDate: Date
  nextMaintenanceDate: Date
  fuelEfficiency: number
}

// Driver
export interface Driver extends BaseEntity {
  firstName: string
  lastName: string
  email: string
  phone: string
  licenseNumber: string
  licenseExpiry: Date
  status: 'active' | 'inactive' | 'suspended'
  totalDeliveries: number
  rating: number
  assignedVehicleId?: string
}

// Warehouse
export interface Warehouse extends BaseEntity {
  name: string
  location: string
  capacity: number
  utilization: number
  manager: string
  type: 'primary' | 'secondary' | 'distribution'
}

// Inventory
export interface InventoryItem extends BaseEntity {
  sku: string
  name: string
  category: string
  quantity: number
  warehouseId: string
  status: 'in_stock' | 'low_stock' | 'out_of_stock'
  reorderLevel: number
  lastRestockDate: Date
}

// Order/Shipment
export interface Shipment extends BaseEntity {
  trackingNumber: string
  orderId: string
  origin: string
  destination: string
  status: 'pending' | 'in_transit' | 'delivered' | 'cancelled'
  estimatedDelivery: Date
  actualDelivery?: Date
  weight: number
  driverId?: string
  vehicleId?: string
}

// Maintenance
export interface MaintenanceRecord extends BaseEntity {
  vehicleId: string
  type: 'oil_change' | 'tire_rotation' | 'inspection' | 'repair' | 'other'
  description: string
  date: Date
  cost: number
  technician: string
  nextDueDate: Date
  status: 'pending' | 'completed' | 'cancelled'
}

// Employee/Staff
export interface Employee extends BaseEntity {
  firstName: string
  lastName: string
  email: string
  phone: string
  department: string
  position: string
  hireDate: Date
  status: 'active' | 'inactive' | 'on_leave'
  manager?: string
  salary?: number
}

// Report/Analytics
export interface Report extends BaseEntity {
  name: string
  type: 'sales' | 'operations' | 'financial' | 'inventory' | 'performance'
  generatedBy: string
  period: {
    startDate: Date
    endDate: Date
  }
  data: Record<string, any>
}

// Notification/Alert
export interface Alert extends BaseEntity {
  type: 'info' | 'warning' | 'critical' | 'error'
  title: string
  message: string
  relatedEntityId?: string
  relatedEntityType?: string
  isRead: boolean
  readAt?: Date
}

// Dashboard data types
export interface DashboardData {
  metrics: KPIMetric[]
  alerts: Alert[]
  recentActivities: Activity[]
  charts: ChartData[]
}

export interface Activity {
  id: string
  type: string
  description: string
  timestamp: Date
  userId: string
  userName: string
}

export interface ChartData {
  label: string
  data: number[]
  borderColor?: string
  backgroundColor?: string
  tension?: number
}

// Status enums
export enum EntityStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  ARCHIVED = 'archived',
  DELETED = 'deleted',
}

export enum OperationType {
  PICKUP = 'pickup',
  DELIVERY = 'delivery',
  TRANSFER = 'transfer',
  RETURN = 'return',
}

export enum VehicleType {
  TRUCK = 'truck',
  VAN = 'van',
  CAR = 'car',
  MOTORCYCLE = 'motorcycle',
}

export enum AlertSeverity {
  INFO = 'info',
  WARNING = 'warning',
  CRITICAL = 'critical',
  ERROR = 'error',
}
