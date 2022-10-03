import { authRoutes } from "./authRoutes";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "pages/NotFoundPage";

const appRouter = createBrowserRouter([
  ...authRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { appRouter };
