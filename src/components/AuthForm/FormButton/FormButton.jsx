import PropTypes from "prop-types";

const FormButton = ({ name }) => {
  return (
    <button
      className="bg-orange-500 
      px-3 py-1 
      mt-3
      rounded-lg 
      drop-shadow-lg 
      text-white w-full 
      text-xs 
      font-thin"
      type="submit"
      name={name}
    >
      {name}
    </button>
  );
};

FormButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormButton;
