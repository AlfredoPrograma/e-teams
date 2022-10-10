import { Button } from "components/Button";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { Navigate, useLocation } from "react-router-dom";

const VerifyRegistrationPage = () => {
  const { state } = useLocation();

  if (!state?.email) {
    return <Navigate to={APP_ROUTES.AUTH.INDEX} />;
  }

  return (
    <section className="text-center flex flex-col gap-6 px-4">
      <header>
        <h1 className="text-5xl text-primary-500 font-bold">
          Verification mail sent to:
        </h1>
      </header>

      <div>
        <i className="fas fa-envelope text-9xl text-secondary-500" />
        <h2 className="text-2xl text-secondary-500 underline underline-offset-8">
          {state.email}
        </h2>
      </div>

      <Button className="w-1/2 flex gap-4 mx-auto" variant="outlined">
        <span>
          <i className="fas fa-envelope-open-text" />
        </span>
        <span>Resend verification mail</span>
      </Button>
    </section>
  );
};
export default VerifyRegistrationPage;
