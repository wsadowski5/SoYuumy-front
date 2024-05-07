import AuthForm from "./AuthForm/AuthForm.jsx";
import "normalize.css";
import "../style/global.css";
import StartPage from "../pages/StartPage.jsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/registration" element={<AuthForm />} />
      </Routes>
    </div>
  );
};
