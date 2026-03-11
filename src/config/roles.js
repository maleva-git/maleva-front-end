/**
 * Role ID to Role Name Mapping
 * Used throughout the app for displaying role information
 */

export const ROLE_NAMES = {
  100: 'Super Admin',
  200: 'Admin',
  300: 'Customer Service',
  400: 'Operations Admin',
  500: 'Boarding Officer',
  600: 'Warehouse',
  700: 'Driver',
  800: 'HR Manager',
  900: 'Accounts Manager',
  1100: 'Payable Officer',
  1200: 'Receivable Officer',
  1300: 'Maintenance Manager',
};

/**
 * Get role name by ID
 */
export function getRoleName(roleId) {
  return ROLE_NAMES[roleId] || 'Unknown Role';
}

/**
 * Get role color for UI
 */
export function getRoleColor(roleId) {
  const colors = {
    100: 'red',      // Super Admin - red for high privilege
    200: 'blue',     // Admin - blue
    300: 'purple',   // Customer Service - purple
    400: 'orange',   // Operations - orange
    500: 'green',    // Boarding - green
    600: 'cyan',     // Warehouse - cyan
    700: 'yellow',   // Driver - yellow
    800: 'pink',     // HR - pink
    900: 'indigo',   // Accounts - indigo
    1100: 'teal',    // Payable - teal
    1200: 'emerald', // Receivable - emerald
    1300: 'amber',   // Maintenance - amber
  };
  return colors[roleId] || 'gray';
}

/**
 * Role hierarchy - higher number = higher privilege
 */
export const ROLE_HIERARCHY = {
  100: 5, // Super Admin - highest
  200: 4, // Admin
  400: 3, // Operations Admin
  800: 3, // HR Manager
  900: 3, // Accounts Manager
  300: 2, // Customer Service
  500: 2, // Boarding Officer
  600: 2, // Warehouse
  1100: 2, // Payable
  1200: 2, // Receivable
  700: 1, // Driver - lowest
  1300: 1, // Maintenance - lowest
};

/**
 * Check if a role has higher privilege than another
 */
export function hasHigherPrivilege(roleId1, roleId2) {
  return (ROLE_HIERARCHY[roleId1] || 0) > (ROLE_HIERARCHY[roleId2] || 0);
}
