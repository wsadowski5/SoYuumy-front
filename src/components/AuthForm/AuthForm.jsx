import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import { useLocation } from "react-router-dom";
import AuthLayout from "../AuthLayout/AuthLayout";

const AuthForm = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AuthLayout>
      {pathname === "/signin" && <LoginForm />}
      {pathname === "/register" && <RegistrationForm />}
    </AuthLayout>
  );
};

export default AuthForm;
