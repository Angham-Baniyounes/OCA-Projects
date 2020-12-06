import { React, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import "./RegisterStyle.scss";
import Img from "./serImageA.png";
const RegisterForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("UserStatus") === "loggedIn"
  );
  const handleName = (e) => {
    sessionStorage.setItem("Name", e.target.value);
  };
  const handleEmail = (e) => {
    sessionStorage.setItem("Eamil", e.target.value);
  };
  const handleCity = (e) => {
    sessionStorage.setItem("City", e.target.value);
  };
  const handlePassword = (e) => {
    sessionStorage.setItem("Password", e.target.value);
  };
  const handleLogin = (ev) => {
    if (
      sessionStorage.getItem("Name") != "" &&
      sessionStorage.getItem("Eamil") != "" &&
      sessionStorage.getItem("City") != "" &&
      sessionStorage.getItem("Password")
    ) {
      console.log("City: " + sessionStorage.getItem("City"));
      ev.preventDefault();
      sessionStorage.setItem("UserStatus", "loggedIn");
      setIsLoggedIn(true);
    } else {
      console.error("Unknown");
    }
  };
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container-fluid">
      {/* Redirect if logged in */}
      {isLoggedIn && <Redirect to="Body" />}
      <div className="RegisterContainer">
        <div className="RegisterDetailes">
          <img src={Img} className="Img" alt="Register Image" />
        </div>
        <div className="RegisterForm">
          <form
            action=""
            method="POST"
            className="register-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="titleForm">Register</h2>
            <div className="form-group Input">
              <i class="fas fa-user"></i>
              <input
                className="Field"
                type="text"
                id="userName"
                placeholder="Type Your Name"
                onChange={handleName}
                name="userName"
                ref={register({
                  required: "This input is required.",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "This input is letters only.",
                  },
                  minLength: {
                    value: 4,
                    message: "Your name must be at least 4 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="userName"
                render={({ messages }) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <span style={{ color: "red" }} key={type}>
                          {message}
                        </span>
                      ))
                    : null;
                }}
              />
            </div>
            <div className="form-group Input">
              <i class="fas fa-envelope"></i>
              <input
                className="Field"
                type="email"
                id="email"
                placeholder="Type Your Email Address"
                onChange={handleEmail}
                name="email"
                ref={register({
                  required: "This input is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "This input is incorrect, invalid email address",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ messages }) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <span style={{ color: "red" }} key={type}>
                          {message}
                        </span>
                      ))
                    : null;
                }}
              />
            </div>
            <div className="form-group Input">
              <i class="fas fa-map-marker-alt"></i>
              <input
                className="Field"
                type="text"
                id="city"
                placeholder="Type Your City Name"
                onChange={handleCity}
                name="city"
                ref={register({
                  required: "This input is required.",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "This input is letters only.",
                  },
                  minLength: {
                    value: 4,
                    message: "Your name must be at least 4 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ messages }) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <span style={{ color: "red" }} key={type}>
                          {message}
                        </span>
                      ))
                    : null;
                }}
              />
            </div>
            <div className="form-group Input">
              <i class="fas fa-key"></i>
              <input
                className="Field"
                type="password"
                id="password"
                placeholder="Type Your Password"
                onChange={handlePassword}
                name="password"
                ref={register({
                  required: "This Input is required",
                  pattern: {
                    value: /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z])(?=.*\W).{8,}$/g,
                    message: "This input is incorrect, invalid passowrd",
                  },
                  minLength: {
                    value: 8,
                    message: "Must contain at least 8 or more characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <span style={{ color: "red" }} key={type}>
                          {message}
                        </span>
                      ))
                    : null;
                }}
              />
            </div>
            <div className="form-group form-button">
              <button
                className="button-field Button fourth"
                type="submit"
                onClick={handleLogin}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
