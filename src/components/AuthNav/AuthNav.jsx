import AuthNavBtn from "./AuthNavBtn";

const AuthNav = () => {
  return (
    <div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-white">Welcome to the App</h2>
        <p className="text-center text-base text-white max-w-md">
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className="flex flex-row gap-6 mt-6">
          <AuthNavBtn name="register" />
          <AuthNavBtn name="signin" />
        </div>
      </div>
    </div>
  );
};

export default AuthNav;
