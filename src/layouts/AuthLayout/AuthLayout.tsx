import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <header className="bg-sky-300 p-4">Auth</header>

      <Outlet />
    </div>
  );
};
export default AuthLayout;
