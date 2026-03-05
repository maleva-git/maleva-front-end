// Role hierarchy constants
export const ROLES = {
  SUPERADMIN: { id: 100, name: 'SUPERADMIN' },
  ADMIN: { id: 200, name: 'ADMIN' },
  CUSTOMERSERVICE: { id: 300, name: 'CUSTOMERSERVICE' },
  OPERATIONADMIN: { id: 400, name: 'OPERATIONADMIN' },
  BOARDINGOFFICER: { id: 500, name: 'BOARDINGOFFICER' },
  WAREHOUSE: { id: 600, name: 'WAREHOUSE' },
  DRIVER: { id: 700, name: 'DRIVER' },
  HR: { id: 800, name: 'HR' },
  ACCOUNTS: { id: 900, name: 'ACCOUNTS' },
  PAYABLE: { id: 1100, name: 'PAYABLE' },
  RECEIVABLE: { id: 1200, name: 'RECEIVABLE' },
  MAINTENANCE: { id: 1300, name: 'MAINTENANCE' }
};

// Check if user has access based on role hierarchy
// Lower roleId = Higher authority
// Access granted if: currentRoleId <= requiredRoleId
export const hasAccess = (currentRoleId, requiredRoleId) => {
  return currentRoleId <= requiredRoleId;
};

// Filter menu items based on role hierarchy
export const filterMenuByRole = (menuItems, currentRoleId) => {
  return menuItems
    .map(category => ({
      ...category,
      items: category.items.filter(item => hasAccess(currentRoleId, item.requiredRoleId))
    }))
    .filter(category => category.items.length > 0);
};

// Get role name by ID
export const getRoleNameById = (roleId) => {
  return Object.values(ROLES).find(role => role.id === roleId)?.name || 'UNKNOWN';
};

// Get role ID by name
export const getRoleIdByName = (roleName) => {
  return ROLES[roleName]?.id || null;
};
