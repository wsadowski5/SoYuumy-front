import PropTypes from "prop-types";
import css from "./FormButton.module.scss"

const FormButton = ({ name }) => {
  const handleButtonSignIn = () => {
    console.log("sign in clicked jupikajej madafaka");
  };

  const handleButtonSignUp = () => {
    console.log("sign up clicked");
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (name === "sign in") {
      handleButtonSignIn();
    } else {
      handleButtonSignUp();
    }
  };

  return (
    <button className={css.button} type="submit" name={name} onClick={handleClick}>
      {name}
    </button>
  );
};

FormButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormButton;
