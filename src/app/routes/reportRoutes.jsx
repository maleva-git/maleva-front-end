import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import ErrorBoundary from "../../pages/ErrorBoundary";
import UnderDevelopment from "../../pages/UnderDevelopment";

export const reportRoutes = [
  // Crystal Report - Master Reports
  {
    path: "/Report/AddressReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/AgentReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/ItemReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/ProductReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/TruckReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/DriverReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/EmployeeReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },

  // Crystal Report - Transaction Master
  {
    path: "/Report/PreAlertRerport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/ExpenseReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/RenewalReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SalaryReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/DriverRTIReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/PaymentVoucherReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/TollReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/FuelReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },

  // Crystal Report - Sales Report
  {
    path: "/Report/SaleReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SaleDetailedReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SaleCreditReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SaleCreditDetailedReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },

  // Crystal Report - Supplier Report
  {
    path: "/Report/SupplierReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SupplierBalance",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SupplierPayment",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SupplierPaymentDue",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/SupplierStatement",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },

  // Crystal Report - Purchase Report
  {
    path: "/Report/PurchaseReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/PurchaseDetailedReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/PurchaseItemWiseReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },

  // Crystal Report - Customer Report
  {
    path: "/Report/CustomerReport",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/Report/CustomerStatement",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

