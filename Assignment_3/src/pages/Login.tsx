import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/gameapi";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await loginUser(username, password);
      navigate("/board");
    } catch (error) {
      alert(`failed`);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label className="login-form-label" htmlFor="username">
            Username:
          </label>
          <input
            className="login-form-input"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="login-form-group">
          <label className="login-form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-form-input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="login-form-button" type="submit">
          Login
        </button>
        <div className="go-to-register">
          <p>Don't have an account? </p>
          <Link to="/register" className="go-to-register-link">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
