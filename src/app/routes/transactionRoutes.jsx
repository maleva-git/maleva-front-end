import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import ErrorBoundary from "../../pages/ErrorBoundary";
import UnderDevelopment from "../../pages/UnderDevelopment";
import SaleOrderAdd from "../../features/sale-order/pages/SaleOrderAdd";
import { SaleOrderView } from "../../features/sale-order";
import PlanningList from "../../features/Planning/PlanningList";
import PlanningView from "../../features/Planning/PlanningView";
import VesselPlanningViewPage from "../../features/vessel-planning/pages/VesselPlanningViewPage";
import RTIPage from "../../features/rti/pages/RTIPage";
import RTIViewPage from "../../features/rti/pages/RTIViewPage";

export const salesTransactionRoutes = [
  {
    path: "/SaleOrder",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <SaleOrderAdd /> }],
  },
  {
    path: "/sale-order/view",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <SaleOrderView /> }],
  },
  {
    path: "/Quotation",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/SaleInvoice",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/PLANING",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <PlanningList /> }],
  },
  {
    path: "/VESSELPLANING",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <VesselPlanningViewPage /> }],
  },
  {
    path: "/RTI",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <RTIPage /> }],
  },
  {
    path: "/rti",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <RTIPage /> }],
  },
  {
    path: "/rti/view",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <RTIViewPage /> }],
  },
  {
    path: "/rti/edit/:id",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <RTIPage /> }],
  },
  {
    path: "/EnquiryMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/EnquiryMaster/EnquiryMasterTR",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

export const accountsTransactionRoutes = [
  {
    path: "/Receipt",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/SaleCredit",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

export const otherTransactionRoutes = [
  {
    path: "/EmployeeMaster/EmployeeMailData",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/EmployeeMaster/GoogleReview",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

