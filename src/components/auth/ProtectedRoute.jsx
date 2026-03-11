import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { hasRole } from '../../utils/userRoles';
import { tokenHandler } from '../../utils/tokenHandler';

const ProtectedRoute = ({ children, requiredRoles = [] }) => {
  const { user, isAuthenticated } = useAuth();
  const tokenValid = tokenHandler.isValid();

  if (!isAuthenticated || !tokenValid) {
    if (!tokenValid) tokenHandler.handleExpired();
    return <Navigate to="/" replace />;
  }

  if (requiredRoles.length > 0 && !hasRole(user, requiredRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
