export const USER_ROLES = {
  SUPERADMIN: 100,
  ADMIN: 200,
  CUSTOMERSERVICE: 300,
  OPERATIONADMIN: 400,
  BOARDINGOFFICER: 500,
  WAREHOUSE: 600,
  DRIVER: 700,
  HR: 800,
  ACCOUNTS: 900,
  PAYABLE: 1100,
  RECEIVABLE: 1200,
  MAINTENANCE: 1300
};

export const hasRole = (user, requiredRoles) => {
  if (!user?.roleId) return false;
  return requiredRoles.includes(user.roleId);
};

export const isSuperAdmin = (user) => user?.roleId === USER_ROLES.SUPERADMIN;
export const isAdmin = (user) => user?.roleId === USER_ROLES.ADMIN || user?.roleId === USER_ROLES.SUPERADMIN;
