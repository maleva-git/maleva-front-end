import { createBrowserRouter } from "react-router-dom";
import RootRedirect from "../components/auth/RootRedirect";
import NotFound from "../pages/NotFound";
import ErrorBoundary from "../pages/ErrorBoundary";
import { dashboardRoutes } from "./routes/dashboardRoutes";
import { salesMasterRoutes, accountsMasterRoutes } from "./routes/masterRoutes";
import {
  salesTransactionRoutes,
  accountsTransactionRoutes,
  otherTransactionRoutes,
} from "./routes/transactionRoutes";
import { reportRoutes } from "./routes/reportRoutes";
import { utilityRoutes, payableRoutes } from "./routes/utilityAndPayableRoutes";
import { legacyRoutes } from "./routes/legacyRoutes";

export const router = createBrowserRouter([
  { path: "/", element: <RootRedirect />, errorElement: <ErrorBoundary /> },
  ...dashboardRoutes,
  ...salesMasterRoutes,
  ...accountsMasterRoutes,
  ...salesTransactionRoutes,
  ...accountsTransactionRoutes,
  ...otherTransactionRoutes,
  ...reportRoutes,
  ...utilityRoutes,
  ...payableRoutes,
  ...legacyRoutes,
  { path: "*", element: <NotFound />, errorElement: <ErrorBoundary /> },
]);
