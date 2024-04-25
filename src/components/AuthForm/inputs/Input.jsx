import css from "./Input.module.scss";
import Icon from "../../../utils/icons/icons.svg";
import PropTypes from "prop-types";


const Input = ({ placeholder, name, type }) => {
  let iconName;

  if (name === "name") {
    iconName = "icon-name";
  } else if (name === "password") {
    iconName = "icon-password";
  } else if (name === "email") {
    iconName = "icon-email";
  }

  return (
    <div className={css.input_wrapper}>
      <input placeholder={placeholder} type={type} name={name} />
      <svg className={css.icon} width="20" height="20">
        <use href={`${Icon}#${iconName}`}></use>
      </svg>
    </div>
  );
};


Input.propTypes = {
    type: PropTypes.string.isRequired, // typ inputa (email, password, itp.)
    placeholder: PropTypes.string.isRequired, // placeholder inputa
    name: PropTypes.string.isRequired // nazwa inputa
  };

  

export default Input;
