import FormButton from "../FormButton/FormButton";
import Input from "../inputs/Input";

const LoginForm = () => {
  return (
    <form className="" name="auth_form" autoComplete="on" action="">
    <div className="bg-blue-900 text-yellow p-5">
      <h3>Sign in</h3>
      <div className="">
        <Input type="email" placeholder="email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <h1 className="text-2xl">Hello, Tailwind CSS in React!</h1>
      </div>

      <FormButton name="sign in" />
    </div>
    </form>
  );
};

export default LoginForm;
