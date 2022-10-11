import { Toast } from "components/Toast";
import { APP_ROUTES } from "constants/APP_ROUTES";
import useSession from "hooks/useSession";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { response, isLoading } = useSession();

  // TODO: improve session verification logic
  if (isLoading) return <h1>Loading</h1>;

  if (response?.data.session)
    return <Navigate to={APP_ROUTES.DASHBOARD.INDEX} replace />;

  return (
    <div className="h-full grid place-items-center">
      <Outlet />
      <Toast />
    </div>
  );
};
export default AuthLayout;
