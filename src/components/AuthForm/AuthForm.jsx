import css from "./AuthForm.module.scss";
import Input from "./inputs/Input";
import FormButton from "./FormButton/FormButton";

const AuthForm = () => {
  const path = window.location.pathname;

  return (
    <form className={css.authForm} name="auth_form" autoComplete="on" action="">
      {path === "/login" ? (
        <div>
          <h3>Sign in</h3>
          <div className={css.inputs_wrapper}>
            <Input type="email" placeholder="email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
          </div>
          {/* <button type="submit">Sign in</button> */}
          <FormButton name="sign in"/>
        </div>
      ) : (
        <div>
          <h3>Registration</h3>
          <div className={css.inputs_wrapper}>
            <Input type="name" placeholder="Name" name="name" />
            <Input type="email" placeholder="email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
          </div>
          {/* <button type="submit">Sign up</button> */}
          <FormButton name="sign up"/>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
