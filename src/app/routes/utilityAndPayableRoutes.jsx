import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import ErrorBoundary from "../../pages/ErrorBoundary";
import UnderDevelopment from "../../pages/UnderDevelopment";
import PurchaseOrder from "../../features/purchaseOrder";

export const utilityRoutes = [
  {
    path: "/Mainsetting",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

export const payableRoutes = [
  {
    path: "/PurchaseOrderMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <PurchaseOrder /> }],
  },
  {
    path: "/PurchaseMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/BillsOrderMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <PurchaseOrder /> }],
  },
  {
    path: "/BillMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Payment",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/ClaimVoucher",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/ExpenseEntry",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/RenewalEntry",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/SalaryEntry",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/FuelEntry",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/TollEntry",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/LeviEntry",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/PaymentVoucher",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

