import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import { useLocation } from "react-router-dom";



const AuthForm = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      {pathname === "/login" && <LoginForm />}
      {pathname === "/registration" && <RegistrationForm />}
    </div>
  );
};

export default AuthForm;
