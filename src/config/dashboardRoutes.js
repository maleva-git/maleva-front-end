export const DEFAULT_DASHBOARD_PATH = '/dashboard/operationadmin';

export const ROLE_DASHBOARD_MAP = {
  100: '/dashboard/superadmin',
  200: '/dashboard/admin',
  300: '/dashboard/customerservice',
  400: '/dashboard/operationadmin',
  500: '/dashboard/operationadmin',
  600: '/dashboard/warehouse',
  700: '/dashboard/driver',
  800: '/dashboard/hr',
  900: '/dashboard/accounts',
  1100: '/dashboard/accounts',
  1200: '/dashboard/accounts',
  1300: '/dashboard/maintenance',
};

export function getDashboardPathByRole(roleId) {
  return ROLE_DASHBOARD_MAP[roleId] || DEFAULT_DASHBOARD_PATH;
}
