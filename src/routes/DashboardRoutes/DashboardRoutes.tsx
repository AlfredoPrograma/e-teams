import { APP_ROUTES } from "constants/APP_ROUTES";
import DashboardLayout from "layouts/DashboardLayout/DashboardLayout";
import { MainPage } from "modules/Dashboard/pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteObject } from "react-router-dom";

const { DASHBOARD, ERROR } = APP_ROUTES;

const DASHBOARD_ROUTES: RouteObject[] = [
  {
    path: DASHBOARD.INDEX,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },

      {
        path: ERROR.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
];

export default DASHBOARD_ROUTES;
