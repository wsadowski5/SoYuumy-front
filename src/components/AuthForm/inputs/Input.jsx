
import PropTypes from "prop-types";
import { EnvelopeIcon, UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const Input = ({ placeholder, name, type, register }) => {


  return (
    <div className="relative flex items-center">
      <input
        className="my-2 px-3 py-1 pl-10"
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
     
      {name === "email" &&<EnvelopeIcon className="absolute ml-1 size-6 " />}
      {name === "name" && <UserIcon className="absolute ml-1 size-6 " />}
      {name === "password" && <LockClosedIcon className="absolute ml-1 size-6" />}

    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired, // Dodajemy props register
};

export default Input;
