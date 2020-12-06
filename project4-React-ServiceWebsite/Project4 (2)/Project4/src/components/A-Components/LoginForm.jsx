import React, { useState } from "react";
import "./LoginForm.scss";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Img from "./serImage.jpg";
// import RegisterForm from "../A-Components/RegisterForm"
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("UserStatus") === "loggedIn"
  );
  const login = (ev) => {
    ev.preventDefault();
    console.log({
      email,
      password,
      _email: sessionStorage.getItem("Eamil"),
      _password: sessionStorage.getItem("Password"),
    });
    if (
      email == sessionStorage.getItem("Eamil") &&
      password == sessionStorage.getItem("Password")
    ) {
      sessionStorage.setItem("UserStatus", "loggedIn");
      setIsLoggedIn(true);
    } else {
      setErrors("credentials are invalid");
    }
  };
  const onEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const onPasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };
  return (
    <div className="container-fluid">
      {/* Redirect if logged in */}
      {isLoggedIn && <Redirect to="Body" />}
      <div className="LoginContainer">
        <div className="LoginDetailes">
          <img src={Img} className="Img" alt="Login Image" />
          <Link to="/registerform">
            <div>
              <a href="#" className="signup-image-link">
                Create an account
              </a>
            </div>
          </Link>
        </div>
        <div className="LoginForm">
          <form action="" method="POST" className="login-form">
            <h2 className="titleForm">Login</h2>
            <div className="form-group Input">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                className="Field"
                placeholder="Type Your Email Address"
                name="email"
                onChange={onEmailChange}
              />
            </div>
            <div className="form-group Input">
              <i className="fas fa-key"></i>
              <input
                type="password"
                id="password"
                className="Field"
                placeholder="Type Your Password"
                name="password"
                onChange={onPasswordChange}
              />
            </div>
            {errors != false && (
              <div className="error">
                <span className="text-danger">{errors}</span>
              </div>
            )}
            <div className="form-group form-button">
              <button
                className="Button btn-info form-submit fourth"
                type="submit"
                onClick={login}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
