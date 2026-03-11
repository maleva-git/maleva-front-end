import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import ErrorBoundary from "../../pages/ErrorBoundary";
import UnderDevelopment from "../../pages/UnderDevelopment";
import Customer from "../../pages/Customer/Customer";
import Supplier from "../../features/Supplier/Supplier";
import AgentMasterCompany from "../../features/AgentmasterCompanypage/AgentmasterCompanyadd";
import AgentMaster from "../../features/AgentMaster/AgentMaster";
import AgentMasterView from "../../features/AgentMaster/AgentMasterView/AgentMasterView";
import AddressMaster from "../../features/Address/AddressMaster";
import Employee from "../../features/Employeemaster/Employee";

export const salesMasterRoutes = [
  {
    path: "/CompanySetting",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/AgentCompanyMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AgentMasterCompany /> }],
  },
  {
    path: "/AgentMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AgentMaster /> }],
  },
  {
    path: "/AddressMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <AddressMaster /> }],
  },
  {
    path: "/PaymentTermsMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/SymbolMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/JobTypeMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/JobTypeDetails",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/JobStatusMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/JobStatusDetails",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/ItemMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/ProductMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/TaxMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/UOMMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/CustomerMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <Customer /> }],
  },
  {
    path: "/paymentReceiptInfo",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/CustomerQuotation",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/SupplierMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <Supplier /> }],
  },
  {
    path: "/EmployeeMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <Employee /> }],
  },
  {
    path: "/DriverMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/TruckMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/LocationMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/PortMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/PaymentReceiptInfo",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

export const accountsMasterRoutes = [
  {
    path: "/BankMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/ExpenseMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/SubExpenseMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
  {
    path: "/AccountsGroupMaster",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <UnderDevelopment /> }],
  },
];

