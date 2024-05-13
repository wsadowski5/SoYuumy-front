import FormButton from "../FormButton/FormButton";
import Input from "../inputs/Input";
import postRegistrationData from "../../../utils/formApi/registrationForm.js";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className=""
      name="auth_form"
      autoComplete="on"
      action=""
      onSubmit={handleSubmit(postRegistrationData)}
    >
      <div className="bg-neutral-900
       bg-opacity-50
       rounded-xl 
       shadow
       p-5">
        <h3 className="text-orange-500 mb-4" >Registration</h3>
        <div className="">
          <Input type="name" placeholder="Name" name="name" register={register} />
          <Input type="email" placeholder="email" name="email" register={register} />
          <Input type="password" placeholder="password" name="password" register={register} />
        </div>
        <FormButton name="SIGN UP" />
      </div>
    </form>
  );
};

export default RegistrationForm;
