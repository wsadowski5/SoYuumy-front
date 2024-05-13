import AuthForm from "./AuthForm/AuthForm.jsx";
import "normalize.css";
import "../style/global.css";
import WellcomePage from "../pages/WellcomePage.jsx";
import MainPage from "../pages/MainPage.jsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WellcomePage />} />
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/main" element={<MainPage/>} />
      </Routes>
    </div>
  );
};
