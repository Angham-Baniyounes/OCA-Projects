import React, { useState } from "react";
import axios from "axios";
import "linearicons";
import "./ma-form.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsgU, setErrMsgU] = useState(null);
  const [errMsgP, setErrMsgP] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  //----------------------------------------------
  const onSubmitL = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    await axios
      .post("http://localhost:5000/api/auth/login", user)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.msg);
        if (res.data == "User not found") {
          setErrMsgU("User not found");
        } else if (res.data === "Wrong Username or password") {
          setErrMsgP("Wrong password");
        } else {
          setUserInfo(res.data);
          if (userInfo) {
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("username", username);
            // const userData = JSON.parse(localStorage.getItem('userInfo'));
            // const id = userData.userId;
            // localStorage.setItem('userId', JSON.stringify(id));
          }
          window.location = "/";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col-lg-5 form2 ">
      <form onSubmit={onSubmitL} className="ma-form2">
        <h2 className="marginTitle">
          <b>Login</b>
          <br />
          Your Account
        </h2>
        <br />
        <div className="form-holder">
          {/* <span className="lnr lnr-user"></span> */}
          {errMsgU !== null ? <p className="redFont">{errMsgU} </p> : null}
          <input
            type="text"
            className="form-control "
            style={{ fontFamily: "FontAwesome" }}
            placeholder="&#xf406; Enter Your Username"
            name="usernameL"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-holder">
          {/* <span className="lnr lnr-lock"></span> */}
          {errMsgP !== null ? <p className="redFont"> {errMsgP} </p> : null}
          <input
            type="password"
            className="form-control"
            style={{ fontFamily: "FontAwesome" }}
            placeholder="&#xf084; Enter Your Password"
            name="passwordL"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-warning"
          style={{ width: "100%" }}
        >
          <span>Login</span>
        </button>
      </form>
      <img
        src="https://themezinho.net/steaque/images/tab-dishes04.png"
        className="image-2"
        alt="burger image"
      />
    </div>
  );
}

export default Login;
