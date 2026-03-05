import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { hasAccess } from '../../utils/roleHierarchy';
import AccessDenied from '../../pages/dashboards/AccessDenied';

export default function RoleProtectedRoute({ children, requiredRoleId }) {
  const { isAuthenticated, roleId } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (requiredRoleId && !hasAccess(roleId, requiredRoleId)) {
    return <AccessDenied />;
  }

  return children;
}
