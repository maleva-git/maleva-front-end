import { 
  LayoutDashboard, Users, Building2, Handshake, User, MapPin, 
  UserCheck, Building, UserCog, Truck, Package, ShoppingBag,
  FileText, DollarSign, Receipt, Calendar, Ship, Settings,
  Wrench, Banknote, Calculator
} from 'lucide-react';
import { ROLES } from '../utils/roleHierarchy';

// Hierarchical Menu Configuration
// Each item has requiredRoleId - users with roleId <= requiredRoleId can access
export const HIERARCHICAL_MENU = [
  {
    category: 'DASHBOARD',
    icon: LayoutDashboard,
    items: [
      { 
        name: 'Dashboard', 
        icon: LayoutDashboard, 
        path: '/dashboard',
        requiredRoleId: ROLES.MAINTENANCE.id // All roles can access
      }
    ]
  },
  {
    category: 'MASTER',
    icon: Settings,
    items: [
      { 
        name: 'Company', 
        icon: Building2, 
        path: '/company',
        requiredRoleId: ROLES.SUPERADMIN.id // Only SUPERADMIN
      },
      { 
        name: 'Agent Company', 
        icon: Handshake, 
        path: '/agent-company',
        requiredRoleId: ROLES.ADMIN.id // SUPERADMIN, ADMIN
      },
      { 
        name: 'Agent Master', 
        icon: User, 
        path: '/agent-master',
        requiredRoleId: ROLES.ADMIN.id
      },
      { 
        name: 'Address Master', 
        icon: MapPin, 
        path: '/address-master',
        requiredRoleId: ROLES.OPERATIONADMIN.id // SUPERADMIN, ADMIN, CUSTOMERSERVICE, OPERATIONADMIN
      },
      { 
        name: 'Customer', 
        icon: UserCheck, 
        path: '/customer',
        requiredRoleId: ROLES.CUSTOMERSERVICE.id // SUPERADMIN, ADMIN, CUSTOMERSERVICE
      },
      { 
        name: 'Customer View', 
        icon: UserCheck, 
        path: '/customer-view',
        requiredRoleId: ROLES.CUSTOMERSERVICE.id
      },
      { 
        name: 'Supplier', 
        icon: Building, 
        path: '/supplier',
        requiredRoleId: ROLES.ADMIN.id
      },
      { 
        name: 'Employee', 
        icon: UserCog, 
        path: '/employee',
        requiredRoleId: ROLES.HR.id // SUPERADMIN to HR
      },
      { 
        name: 'Driver', 
        icon: Truck, 
        path: '/driver',
        requiredRoleId: ROLES.OPERATIONADMIN.id
      },
      { 
        name: 'Item Master', 
        icon: Package, 
        path: '/item-master',
        requiredRoleId: ROLES.WAREHOUSE.id
      },
      { 
        name: 'Product Master', 
        icon: ShoppingBag, 
        path: '/product-master',
        requiredRoleId: ROLES.WAREHOUSE.id
      }
    ]
  },
  {
    category: 'SALES',
    icon: FileText,
    items: [
      { 
        name: 'Sales Order', 
        icon: FileText, 
        path: '/sales-order',
        requiredRoleId: ROLES.CUSTOMERSERVICE.id
      },
      { 
        name: 'Quotation', 
        icon: DollarSign, 
        path: '/quotation',
        requiredRoleId: ROLES.CUSTOMERSERVICE.id
      },
      { 
        name: 'Sales Invoice', 
        icon: Receipt, 
        path: '/sales-invoice',
        requiredRoleId: ROLES.ACCOUNTS.id
      }
    ]
  },
  {
    category: 'PLANNING',
    icon: Calendar,
    items: [
      { 
        name: 'Planning', 
        icon: Calendar, 
        path: '/planning',
        requiredRoleId: ROLES.OPERATIONADMIN.id
      },
      { 
        name: 'Vessel Planning', 
        icon: Ship, 
        path: '/vessel-planning',
        requiredRoleId: ROLES.OPERATIONADMIN.id
      }
    ]
  },
  {
    category: 'OPERATIONS',
    icon: Truck,
    items: [
      { 
        name: 'My Deliveries', 
        icon: Truck, 
        path: '/my-deliveries',
        requiredRoleId: ROLES.DRIVER.id // DRIVER and above
      },
      { 
        name: 'Warehouse Management', 
        icon: Package, 
        path: '/warehouse',
        requiredRoleId: ROLES.WAREHOUSE.id
      }
    ]
  },
  {
    category: 'FINANCE',
    icon: Banknote,
    items: [
      { 
        name: 'Accounts', 
        icon: Calculator, 
        path: '/accounts',
        requiredRoleId: ROLES.ACCOUNTS.id
      },
      { 
        name: 'Payable', 
        icon: Banknote, 
        path: '/payable',
        requiredRoleId: ROLES.PAYABLE.id
      },
      { 
        name: 'Receivable', 
        icon: Receipt, 
        path: '/receivable',
        requiredRoleId: ROLES.RECEIVABLE.id
      }
    ]
  },
  {
    category: 'MAINTENANCE',
    icon: Wrench,
    items: [
      { 
        name: 'Maintenance', 
        icon: Wrench, 
        path: '/maintenance',
        requiredRoleId: ROLES.MAINTENANCE.id
      }
    ]
  }
];
