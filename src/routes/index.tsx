import { AUTH_ROUTES } from "./AuthRoutes";
import { DASHBOARD_ROUTES } from "./DashboardRoutes";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { APP_ROUTES } from "constants/APP_ROUTES";

const ROUTER = createBrowserRouter([
  ...AUTH_ROUTES,
  ...DASHBOARD_ROUTES,
  {
    path: "*",
    element: <Navigate to={APP_ROUTES.AUTH.INDEX} replace />,
  },
]);

export { ROUTER };
