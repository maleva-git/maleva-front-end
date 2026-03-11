import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { tokenHandler } from '../utils/tokenHandler';
import { getDashboardPathByRole } from '../config/dashboardRoutes';

export function DashboardRouter() {
  const navigate = useNavigate();
  const { roleId, isAuthenticated } = useAuth();

  useEffect(() => {
    const tokenValid = tokenHandler.isValid();
    
    if (!isAuthenticated || !tokenValid) {
      if (!tokenValid) tokenHandler.handleExpired();
      navigate('/', { replace: true });
      return;
    }

    if (!roleId) {
      console.warn('No roleId found, redirecting to default dashboard');
      navigate(getDashboardPathByRole(), { replace: true });
      return;
    }

    const dashboardPath = getDashboardPathByRole(roleId);
    navigate(dashboardPath, { replace: true });
  }, [roleId, isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="text-center">
        <div className="inline-block">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--color-primary-500)' }} />
        </div>
        <p className="mt-4 text-gray-600">Loading your dashboard...</p>
      </div>
    </div>
  );
}

export default DashboardRouter;
