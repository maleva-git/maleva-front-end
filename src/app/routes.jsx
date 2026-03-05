import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import DashboardRouter from "../components/DashboardRouter";

import Login from "../features/auth/Login";
import Dashboard from "../pages/Dashbord/Dashboard";
import SuperAdminDashboard from "../pages/Dashboard/SuperAdminDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import CustomerServiceDashboard from "../pages/Dashboard/CustomerServiceDashboard";
import OperationAdminDashboard from "../pages/Dashboard/OperationAdminDashboard";
import WarehouseDashboard from "../pages/Dashboard/WarehouseDashboard";
import DriverDashboard from "../pages/Dashboard/DriverDashboard";
import HRDashboard from "../pages/Dashboard/HRDashboard";
import AccountsDashboard from "../pages/Dashboard/AccountsDashboard";
import MaintenanceDashboard from "../pages/Dashboard/MaintenanceDashboard";
import Customer from "../pages/Customer/Customer";
import CustomerList from "../pages/Customer/CustomerView/CustomerList";
import Supplier from "../pages/Supplier/Supplier";
import AgentMasterCompany from "../pages/AgentmasterCompanypage/AgentmasterCompanyadd";
import AgentMaster from "../pages/AgentMaster/AgentMaster";
import AgentMasterView from "../pages/AgentMaster/AgentMasterView/AgentMasterView";
import AddressMaster from "../pages/Address/AddressMaster";
import Employee from "../pages/Employeemaster/Employee";
import NotFound from "../pages/NotFound";
import UnderDevelopment from "../pages/UnderDevelopment";
import SaleOrder from "../pages/Saleorder/Saleorderadd";
import PlanningList from "../pages/Planning/PlanningList";
import PlanningView from "../pages/Planning/PlanningView";
import VesselPlanningListPage from "../features/vessel-planning/pages/VesselPlanningListPage";
import VesselPlanningViewPage from "../features/vessel-planning/pages/VesselPlanningViewPage";
import RTIPage from "../features/rti/pages/RTIPage";
import RTIViewPage from "../features/rti/pages/RTIViewPage";
import ErrorBoundary from "../pages/ErrorBoundary";
import { SaleOrderView } from '../features/sale-order';

const UnderDev = () => <UnderDevelopment />;

export const router = createBrowserRouter([
  { path: "/", element: <Login />, errorElement: <ErrorBoundary /> },
  
  // Dashboard Routes
  { path: "/dashboard", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <DashboardRouter /> }] },
  { path: "/dashboard/superadmin", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <SuperAdminDashboard /> }] },
  { path: "/dashboard/admin", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AdminDashboard /> }] },
  { path: "/dashboard/customerservice", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <CustomerServiceDashboard /> }] },
  { path: "/dashboard/operationadmin", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <OperationAdminDashboard /> }] },
  { path: "/dashboard/warehouse", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <WarehouseDashboard /> }] },
  { path: "/dashboard/driver", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <DriverDashboard /> }] },
  { path: "/dashboard/hr", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <HRDashboard /> }] },
  { path: "/dashboard/accounts", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AccountsDashboard /> }] },
  { path: "/dashboard/maintenance", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <MaintenanceDashboard /> }] },

  // Sales Master Routes
  { path: "/CompanySetting", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/AgentCompanyMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AgentMasterCompany /> }] },
  { path: "/AgentMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AgentMaster /> }] },
  { path: "/AddressMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AddressMaster /> }] },
  { path: "/PaymentTermsMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/SymbolMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/JobTypeMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/JobTypeDetails", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/JobStatusMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/JobStatusDetails", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/ItemMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/ProductMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/TaxMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/UOMMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/CustomerMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <Customer /> }] },
  { path: "/paymentReceiptInfo", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/CustomerQuotation", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/SupplierMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <Supplier /> }] },
  { path: "/EmployeeMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <Employee /> }] },
  { path: "/DriverMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/TruckMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/LocationMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/PortMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/PaymentReceiptInfo", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Accounts Master Routes
  { path: "/BankMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/ExpenseMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/SubExpenseMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/AccountsGroupMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Transaction - Sales Routes
  { path: "/SaleOrder", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <SaleOrder /> }] },
  { path: "/sale-order/view", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <SaleOrderView /> }] },

  { path: "/Quotation", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/SaleInvoice", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/PLANING", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <PlanningList /> }] },
  { path: "/VESSELPLANING", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <VesselPlanningViewPage /> }] },
  { path: "/RTI", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <RTIPage /> }] },
  { path: "/rti", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <RTIPage /> }] },
  { path: "/rti/view", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <RTIViewPage /> }] },
  { path: "/rti/edit/:id", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <RTIPage /> }] },
  { path: "/EnquiryMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/EnquiryMaster/EnquiryMasterTR", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Transaction - Accounts - Receivable Routes
  { path: "/Receipt", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/SaleCredit", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Transaction - Other Routes
  { path: "/EmployeeMaster/EmployeeMailData", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/EmployeeMaster/GoogleReview", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Crystal Report - Master Reports
  { path: "/Report/AddressReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/AgentReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/ItemReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/ProductReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/TruckReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/DriverReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/EmployeeReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Crystal Report - Transaction Master
  { path: "/Report/PreAlertRerport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/ExpenseReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/RenewalReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SalaryReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/DriverRTIReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/PaymentVoucherReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/TollReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/FuelReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Crystal Report - Sales Report
  { path: "/Report/SaleReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SaleDetailedReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SaleCreditReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SaleCreditDetailedReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Crystal Report - Supplier Report
  { path: "/Report/SupplierReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SupplierBalance", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SupplierPayment", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SupplierPaymentDue", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/SupplierStatement", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Crystal Report - Purchase Report
  { path: "/Report/PurchaseReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/PurchaseDetailedReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/PurchaseItemWiseReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Crystal Report - Customer Report
  { path: "/Report/CustomerReport", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Report/CustomerStatement", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Utils Routes
  { path: "/Mainsetting", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Payable Routes
  { path: "/PurchaseOrderMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/PurchaseMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/BillsOrderMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/BillMaster", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/Payment", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/ClaimVoucher", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/ExpenseEntry", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/RenewalEntry", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/SalaryEntry", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/FuelEntry", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/TollEntry", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/LeviEntry", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },
  { path: "/PaymentVoucher", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDev /> }] },

  // Legacy Routes (for backward compatibility)
  { path: "/customer", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <Customer /> }] },
  { path: "/customer-view", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <CustomerList /> }] },
  { path: "/sales-order", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <SaleOrder /> }] },
  { path: "/supplier", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <Supplier /> }] },
  { path: "/employee", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <Employee /> }] },
  { path: "/agent-company", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AgentMasterCompany /> }] },
  { path: "/agent-master", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AgentMaster /> }] },
  { path: "/agent-master-view", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AgentMasterView /> }] },
  { path: "/address-master", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <AddressMaster /> }] },
  { path: "/planning", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <PlanningList /> }] },
  { path: "/planning/view", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <PlanningView /> }] },
  { path: "/planning/edit/:id", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <PlanningList /> }] },
  { path: "/vessel-planning/list", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <VesselPlanningListPage /> }] },
  { path: "/vessel-planning/view/:id", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <VesselPlanningViewPage /> }] },
  { path: "/vessel-planning", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <VesselPlanningViewPage /> }] },
  { path: "/under-development", element: <ProtectedRoute><MainLayout /></ProtectedRoute>, errorElement: <ErrorBoundary />, children: [{ index: true, element: <UnderDevelopment /> }] },

  { path: "*", element: <NotFound />, errorElement: <ErrorBoundary /> }
]);
