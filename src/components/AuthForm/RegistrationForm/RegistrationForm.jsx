import FormButton from "../FormButton/FormButton";
import Input from "../inputs/Input";


const RegistrationForm = () => {
    return (
        <form className="" name="auth_form" autoComplete="on" action="">
        <div>
        <h3>Registration</h3>
        <div className="bg-blue-900 text-white p-4">
          <Input type="name" placeholder="Name" name="name" />
          <Input type="email" placeholder="email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
        </div>
        <FormButton name="sign up" />
      </div>
      </form>
    )
}

export default RegistrationForm