import React, { useState } from "react";
import axios from "axios";
// import "linearicons";
import "./ma-form.css";

function Register() {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsgU, setErrMsgU] = useState(null);
  const [errMsgM, setErrMsgM] = useState(null);
  const [errMsgP, setErrMsgP] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  // const [userId, setUserId] = useState(null);
  //----------------------------------------------
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //----------------------------------------------
  const onSubmitR = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      mobile: mobile,
      password: password,
    };
    if (username.length < 4) {
      setErrMsgU("Username must contain at least 4 characters");
    } else if (mobile.length < 10 || mobile.length > 14) {
      setErrMsgM("Invalid Mobile Number");
    } else if (password.length < 8) {
      setErrMsgP("Password must contain at least 8 characters");
    } else if (password !== confirmPassword) {
      setErrMsgP("Please Make Sure Both Password are Match!");
    } else {
      await axios
        .post("http://localhost:5000/api/users/register", newUser, config)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => console.log(err));
      if (userInfo) {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        const userData = JSON.parse(localStorage.getItem("userInfo"));
        const id = userData.userId;
        localStorage.setItem("userId", JSON.stringify(id));
        window.location = "/";
      }
    }
  };
  return (
    <div className="col-lg-5 form1 ">
      <img
        src="https://www.dotit.com/media/allergen-awareness-training/chef.png"
        alt="chef image"
        class="image-1"
      />
      <form onSubmit={onSubmitR} className="ma-form">
        <h2>
          <b>Register</b>
          <br />
          Your Account Now
        </h2>
        <br />
        <div className="form-holder">
          {/* <span className="lnr lnr-user"></span> */}
          {errMsgU !== null ? <p className="redFont"> {errMsgU} </p> : null}
          <input
            type="text"
            className="form-control"
            placeholder="&#xf406; Enter Your Username"
            name="usernameR"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-holder">
          {/* <span className="lnr lnr-phone-handset"></span> */}
          {errMsgM !== null ? <p className="redFont"> {errMsgM} </p> : null}
          <input
            type="number"
            className="form-control"
            placeholder="&#xf095; Type Your Phone Number"
            name="mobileR"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-holder">
          {/* <span className="lnr lnr-lock"></span> */}
          {errMsgP !== null ? <p className="redFont"> {errMsgP} </p> : null}
          <input
            type="password"
            className="form-control"
            placeholder="&#xf084; Type Your Password"
            name="passwordR"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-holder">
          {/* <span className="lnr lnr-lock"></span> */}
          <input
            type="password"
            className="form-control"
            placeholder="&#xf084; Confirm Password"
            name="confirmPasswordR"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-warning"
          style={{ width: "100%" }}
        >
          <span>Register</span>
        </button>
      </form>
    </div>
  );
}
export default Register;
