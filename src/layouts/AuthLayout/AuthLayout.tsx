import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-full grid place-items-center">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
