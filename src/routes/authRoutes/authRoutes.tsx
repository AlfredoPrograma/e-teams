import { RouteObject } from "react-router-dom";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { AuthLayout } from "layouts/AuthLayout";
import { LoginPage, RegisterPage } from "modules/Auth/pages";
import { NotFoundPage } from "pages/NotFoundPage";

const { AUTH, ERROR } = APP_ROUTES;

const authRoutes: RouteObject[] = [
  {
    path: AUTH.INDEX,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: AUTH.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ERROR.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
];

export default authRoutes;
