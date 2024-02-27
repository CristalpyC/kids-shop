import { Login } from "../components/login-section/Login.jsx";
import { NavBar } from "../components/navbar/NavBar";
import "./loginStyle.scss";

export const metadata = {
  title: "Kids zone - Login",
};

export default function LoginForm() {
  return (
    <div className="login">
        <Login />
    </div>
  );
}
