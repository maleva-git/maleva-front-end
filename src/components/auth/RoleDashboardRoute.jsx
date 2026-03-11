import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getDashboardPathByRole } from '../../config/dashboardRoutes';

const RoleDashboardRoute = ({ children, requiredRoles = [] }) => {
  const { roleId, isAuthenticated } = useAuth();

  if (!isAuthenticated || !roleId) {
    return <Navigate to="/" replace />;
  }

  // SuperAdmin (100) can access all dashboards
  if (roleId === 100) {
    return children;
  }

  // Check if user's role is allowed
  if (!requiredRoles.includes(roleId)) {
    const correctDashboard = getDashboardPathByRole(roleId);
    return <Navigate to={correctDashboard} replace />;
  }

  return children;
};

export default RoleDashboardRoute;
