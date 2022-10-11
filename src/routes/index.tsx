import { AUTH_ROUTES } from "./AuthRoutes";
import { DASHBOARD_ROUTES } from "./DashboardRoutes";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "pages/NotFoundPage";

const ROUTER = createBrowserRouter([
  ...AUTH_ROUTES,
  ...DASHBOARD_ROUTES,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { ROUTER };
