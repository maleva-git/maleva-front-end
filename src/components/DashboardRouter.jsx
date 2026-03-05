import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * DashboardRouter Component
 * Automatically routes users to their role-specific dashboard based on their roleId
 */
export function DashboardRouter() {
  const navigate = useNavigate();
  const { roleId } = useAuth();

  useEffect(() => {
    if (!roleId) {
      navigate('/');
      return;
    }

    // Map roleId to dashboard URL
    const roleDashboardMap = {
      100: '/dashboard/superadmin',    // SUPERADMIN
      200: '/dashboard/admin',          // ADMIN
      300: '/dashboard/customerservice', // CUSTOMERSERVICE
      400: '/dashboard/operationadmin',  // OPERATIONADMIN
      500: '/dashboard/operationadmin',  // BOARDINGOFFICER (same as ops)
      600: '/dashboard/warehouse',       // WAREHOUSE
      700: '/dashboard/driver',          // DRIVER
      800: '/dashboard/hr',              // HR
      900: '/dashboard/accounts',        // ACCOUNTS
      1100: '/dashboard/accounts',       // PAYABLE (same as accounts)
      1200: '/dashboard/accounts',       // RECEIVABLE (same as accounts)
      1300: '/dashboard/maintenance'     // MAINTENANCE
    };

    const dashboardPath = roleDashboardMap[roleId];

    if (dashboardPath) {
      navigate(dashboardPath);
    } else {
      // Fallback to OperationAdmin if role not found
      navigate('/dashboard/operationadmin');
    }
  }, [roleId, navigate]);

  // Show loading while redirecting
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
