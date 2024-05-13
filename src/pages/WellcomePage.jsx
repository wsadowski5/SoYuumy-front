import { useLocation } from "react-router-dom";
import LoginForm from "../components/AuthForm/LoginForm/LoginForm";
import RegistrationForm from "../components/AuthForm/RegistrationForm/RegistrationForm";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import AuthNav from "../components/AuthNav/AuthNav";

const WellcomePage = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <AuthLayout>
        {path === "/register" && <RegistrationForm />}
        {path === "/signin" && <LoginForm />}
        <AuthNav />
      </AuthLayout>
    </div>
  );
};

export default WellcomePage;