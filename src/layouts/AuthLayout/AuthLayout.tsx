import { Toast } from "components/Toast";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-full grid place-items-center">
      <Outlet />
      <Toast />
    </div>
  );
};
export default AuthLayout;
