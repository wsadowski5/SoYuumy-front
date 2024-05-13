import FormButton from "../FormButton/FormButton";
import Input from "../inputs/Input";
import { useForm } from "react-hook-form";

const LoginForm = () => {

  const { register } = useForm()

  return (
    <form className="" name="auth_form" autoComplete="on" action="">
      <div className="bg-neutral-900
       bg-opacity-50
       rounded-xl 
       shadow
       p-5">
        <h3 className="text-orange-500 mb-4" >Sign in</h3>
        <div className="">
          <Input type="email" placeholder="email" name="email"  register={register} />
          <Input type="password" placeholder="Password" name="password"  register={register}/>
        </div>
        <FormButton name="SIGN IN" />
      </div>
    </form>
  );
};

export default LoginForm;
