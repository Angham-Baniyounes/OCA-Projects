import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import "linearicons";
import "./ma-form.css";
import cookie from "react-cookies";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameR: "",
      mobileR: "",
      passwordR: "",
      confirmPasswordR: "",
      usernameL: "",
      passwordL: "",
      redirect: false,
      userInfo: null,
      errMsgU: null,
      errMsgP: null,
      errMsgUR: null,
      errMsgM: null,
      errMsgPR: null,
    };
  }
  handelInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  onSubmitR = async (e) => {
    e.preventDefault();
    const rData = this.state;
    const newUser = {
      username: rData.usernameR,
      mobile: rData.mobileR,
      password: rData.passwordR,
    };
    if (rData.usernameR.length < 4) {
      return this.setState({
        errMsgUR: "Username Field must contain at least 4 characters",
      });
    }
    if (rData.mobileR.length < 10 || rData.mobileR.length > 14) {
      return this.setState({
        errMsgM: "Invalid Mobile Number",
      });
    }
    if (rData.passwordR.length < 8) {
      return this.setState({
        errMsgPR: "Password must contain at least 8 characters",
      });
    }
    if (rData.passwordR !== rData.confirmPasswordR) {
      return this.setState({
        errMsgPR: "Please Make Sure Both Password are Match!",
      });
    }
    await axios
      .post("http://localhost:5000/api/users/register", newUser)
      .then((res) => {
        if (res.data === "User already exist") {
          this.setState({
            msg: "User already exist",
          });
        } else {
          cookie.save("token", res.data, { path: "/" });
          this.state.userInfo = res.data;
          if (this.state.userInfo) {
            localStorage.setItem(
              "userInfo",
              JSON.stringify(this.state.userInfo)
            );
          }
          localStorage.setItem("username", rData.usernameR);
          window.location = "/";
          // this.setState({
          //   redirect: true,
          // });
        }
      })
      .catch((err) => console.log(err));
  };
  onSubmitL = async (e) => {
    e.preventDefault();
    const rData = this.state;
    const user = {
      username: rData.usernameL,
      password: rData.passwordL,
    };
    await axios
      .post("http://localhost:5000/api/auth/login", user)
      .then((res) => {
        if (res.data === "User not found") {
          this.setState({
            errMsgU: "User not found",
          });
        } else if (res.data === "Wrong Username or password") {
          this.setState({
            errMsgP: "Wrong Username or password",
          });
        } else {
          cookie.save("token", res.data, { path: "/" });
          this.state.userInfo = res.data;
          if (this.state.userInfo) {
            localStorage.setItem(
              "userInfo",
              JSON.stringify(this.state.userInfo)
            );
            localStorage.setItem("username", rData.usernameL);
          }
          window.location = "/";
          // this.setState({
          //   redirect: true,
          // });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <section id="landing">
        <div className="container" style={{ fontFamily: "Itim" }}>
          <div className="row ">
            <div className="col-lg-5 form1 ">
              <img
                src="https://www.dotit.com/media/allergen-awareness-training/chef.png"
                alt="chef image"
                class="image-1"
              />
              <form onSubmit={this.onSubmitR} className="ma-form">
                <h2>
                  <b>Register</b>
                  <br />
                  Your Account Now
                </h2>
                <br />
                <div className="form-holder">
                  {/* <span className="lnr lnr-user"></span> */}
                  {this.state.errMsgUR !== null ? (
                    <p className="redFont"> {this.state.errMsgUR} </p>
                  ) : null}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="&#xf406; Enter Your Username"
                    name="usernameR"
                    onChange={this.handelInputChange}
                    required
                  />
                </div>
                <div className="form-holder">
                  {/* <span className="lnr lnr-phone-handset"></span> */}
                  {this.state.errMsgM !== null ? (
                    <p className="redFont"> {this.state.errMsgM} </p>
                  ) : null}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="&#xf095; Type Your Phone Number"
                    name="mobileR"
                    onChange={this.handelInputChange}
                    required
                  />
                </div>
                <div className="form-holder">
                  {/* <span className="lnr lnr-lock"></span> */}
                  {this.state.errMsgPR !== null ? (
                    <p className="redFont"> {this.state.errMsgPR} </p>
                  ) : null}
                  <input
                    type="password"
                    className="form-control"
                    placeholder="&#xf084; Type Your Password"
                    name="passwordR"
                    onChange={this.handelInputChange}
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
                    onChange={this.handelInputChange}
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
            <div className="vertical"></div>
            {/* Login */}
            <div className="col-lg-5 form2 ">
              <form onSubmit={this.onSubmitL} className="ma-form2">
                <h2 className="marginTitle">
                  <b>Login</b>
                  <br />
                  Your Account
                </h2>
                <br />
                <div className="form-holder">
                  {/* <span className="lnr lnr-user"></span> */}
                  {this.state.errMsgU !== null ? (
                    <p className="redFont">{this.state.errMsgU} </p>
                  ) : null}
                  <input
                    type="text"
                    className="form-control "
                    style={{ fontFamily: "FontAwesome" }}
                    placeholder="&#xf406; Enter Your Username"
                    name="usernameL"
                    value={this.state.usernameL}
                    onChange={this.handelInputChange}
                    required
                  />
                </div>
                <div className="form-holder">
                  {/* <span className="lnr lnr-lock"></span> */}
                  {this.state.errMsgP !== null ? (
                    <p className="redFont"> {this.state.errMsgP} </p>
                  ) : null}
                  <input
                    type="password"
                    className="form-control"
                    style={{ fontFamily: "FontAwesome" }}
                    placeholder="&#xf084; Enter Your Password"
                    name="passwordL"
                    value={this.state.passwordL}
                    onChange={this.handelInputChange}
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
          </div>
        </div>
      </section>
    );
  }
}
