import { HelloWorld } from "./HelloWorld/HelloWorld.jsx";
import AuthForm from "./AuthForm/AuthForm.jsx";
import 'normalize.css';
import '../style/global.css'

export const App = () => {
  return (
    <div>
      <HelloWorld />
      <AuthForm />
    </div>
  );
};
