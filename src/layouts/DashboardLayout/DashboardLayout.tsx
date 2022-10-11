import { APP_ROUTES } from "constants/APP_ROUTES";
import useSession from "hooks/useSession";
import { NavBar } from "modules/Dashboard/components/NavBar";
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { response, isLoading } = useSession();

  // TODO: improve session verification logic
  if (isLoading) return <h1>Loading</h1>;

  if (!response?.data.session)
    return <Navigate to={APP_ROUTES.AUTH.INDEX} replace />;

  return (
    <div className="h-full w-full bg-neutral-200 flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
