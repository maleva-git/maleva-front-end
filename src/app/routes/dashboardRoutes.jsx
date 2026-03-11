import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import RoleDashboardRoute from "../../components/auth/RoleDashboardRoute";
import DashboardRouter from "../../components/DashboardRouter";
import ErrorBoundary from "../../pages/ErrorBoundary";
import Dashboard from "../../pages/Dashboard/Dashboard";
import SuperAdminDashboard from "../../pages/Dashboard/SuperAdminDashboard";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
import CustomerServiceDashboard from "../../pages/Dashboard/CustomerServiceDashboard";
import OperationAdminDashboard from "../../pages/Dashboard/OperationAdminDashboard";
import WarehouseDashboard from "../../pages/Dashboard/WarehouseDashboard";
import DriverDashboard from "../../pages/Dashboard/DriverDashboard";
import HRDashboard from "../../pages/Dashboard/HRDashboard";
import AccountsDashboard from "../../pages/Dashboard/AccountsDashboard";
import MaintenanceDashboard from "../../pages/Dashboard/MaintenanceDashboard";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <DashboardRouter /> }],
  },
  {
    path: "/dashboard/superadmin",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[100]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <SuperAdminDashboard /> }],
  },
  {
    path: "/dashboard/admin",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[200]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AdminDashboard /> }],
  },
  {
    path: "/dashboard/customerservice",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[300]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <CustomerServiceDashboard /> }],
  },
  {
    path: "/dashboard/operationadmin",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[400, 500]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <OperationAdminDashboard /> }],
  },
  {
    path: "/dashboard/warehouse",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[600]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <WarehouseDashboard /> }],
  },
  {
    path: "/dashboard/driver",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[700]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <DriverDashboard /> }],
  },
  {
    path: "/dashboard/hr",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[800]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <HRDashboard /> }],
  },
  {
    path: "/dashboard/accounts",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[900, 1100, 1200]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AccountsDashboard /> }],
  },
  {
    path: "/dashboard/maintenance",
    element: (
      <ProtectedRoute>
        <RoleDashboardRoute requiredRoles={[1300]}>
          <MainLayout />
        </RoleDashboardRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <MaintenanceDashboard /> }],
  },
];

