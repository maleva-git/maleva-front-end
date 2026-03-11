import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import ErrorBoundary from "../../pages/ErrorBoundary";
import UnderDevelopment from "../../pages/UnderDevelopment";
import Customer from "../../pages/Customer/Customer";
import CustomerList from "../../pages/Customer/CustomerView/CustomerList";
import Supplier from "../../features/Supplier/Supplier";
import AgentMasterCompany from "../../features/AgentmasterCompanypage/AgentmasterCompanyadd";
import AgentMaster from "../../features/AgentMaster/AgentMaster";
import AgentMasterView from "../../features/AgentMaster/AgentMasterView/AgentMasterView";
import AddressMaster from "../../features/Address/AddressMaster";
import Employee from "../../features/Employeemaster/Employee";
import SaleOrderAdd from "../../features/sale-order/pages/SaleOrderAdd";
import PlanningList from "../../features/Planning/PlanningList";
import PlanningView from "../../features/Planning/PlanningView";
import VesselPlanningListPage from "../../features/vessel-planning/pages/VesselPlanningListPage";
import VesselPlanningViewPage from "../../features/vessel-planning/pages/VesselPlanningViewPage";

export const legacyRoutes = [
  // Legacy Routes (for backward compatibility)
  {
    path: "/customer",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <Customer /> }],
  },
  {
    path: "/customer-view",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <CustomerList /> }],
  },
  {
    path: "/sales-order",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <SaleOrderAdd /> }],
  },
  {
    path: "/supplier",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <Supplier /> }],
  },
  {
    path: "/employee",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <Employee /> }],
  },
  {
    path: "/agent-company",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AgentMasterCompany /> }],
  },
  {
    path: "/agent-master",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AgentMaster /> }],
  },
  {
    path: "/agent-master-view",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AgentMasterView /> }],
  },
  {
    path: "/address-master",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AddressMaster /> }],
  },
  {
    path: "/planning",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <PlanningList /> }],
  },
  {
    path: "/planning/view",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <PlanningView /> }],
  },
  {
    path: "/planning/edit/:id",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <PlanningList /> }],
  },
  {
    path: "/vessel-planning/list",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <VesselPlanningListPage /> }],
  },
  {
    path: "/vessel-planning/view/:id",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <VesselPlanningViewPage /> }],
  },
  {
    path: "/vessel-planning",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <VesselPlanningViewPage /> }],
  },
  {
    path: "/under-development",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

