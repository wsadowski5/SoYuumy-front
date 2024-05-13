import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthNavBtn = ({name}) => {

    let route
    let buttonTitle

if (name === "register"){
    route = "/register";
    buttonTitle= "Registration"
} else if ( name === "signin") {
    route ="/signin";
    buttonTitle = "Sign in"
}

  return (
    <Link to={route}>
    <button className="bg-rose-500 px-4 py-1 border-2 rounded-bl rounded-tr rounded-br-xl rounded-tl-xl border-orange-300" type="button">
      {buttonTitle}
    </button>
    </Link>
  );
};


AuthNavBtn.propTypes = {
    name: PropTypes.string.isRequired
}
export default AuthNavBtn;
