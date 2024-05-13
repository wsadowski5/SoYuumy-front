import bgImage from "../../assets/hot-spicy-stew-eggplant-sweet-pepper-tomato-zucchini-mushrooms.jpg";
import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <img
        src={bgImage}
        alt="food"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthLayout