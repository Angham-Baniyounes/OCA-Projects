import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./BookingStyle.scss";
import { withRouter } from "react-router-dom";
import BookingInfo from "../A-Components/BookingInfo";
import Img from "./serImage.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function Booking({ match }) {
  const lang = match.params.language;

  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const validateInput = (data) => {
    console.log(data);
  };

  const PhonePick = (e) => {
    sessionStorage.setItem("Phone", e.target.value);
  };

  return (
    <>
      {/* <Link to="/" className="btn btn-success mb-5">
        &#11207; Back to Home
      </Link> */}
      {/* <h1>{lang}</h1> */}
      {/* <p className="lead">Detailed information about the {lang} language.</p> */}
      <div className="container-fluid">
        <div className="bookingContainer">
          <div className="BookingDetailes">
            <img src={Img} className="Img" alt="Ser" />
            <BookingInfo lang={lang} />
            {/* <h3>Heading</h3>
            <p>Test</p>
            <p>Test</p> */}
          </div>
          <div className="BookingForm">
            <form
              method="POST"
              className="booking-form"
              onSubmit={handleSubmit(validateInput)}
            >
              <h2 className="titleForm">Booking</h2>
              <div className="form-group">
                <label className="Label" htmlFor="name">
                  Name : <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="Field"
                  id="name"
                  name="name"
                  value={sessionStorage.getItem("Name")}
                  ref={register({
                    required: "This input is required.",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "This input is letters only.",
                    },
                    minLength: {
                      value: 3,
                      message: "Your name must be at least 3 characters",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ messages }) => {
                    console.log("messages", messages);
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
              <div className="form-group">
                <label className="Label" htmlFor="email">
                  Email Address : <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="Field"
                  id="email"
                  name="email"
                  value={sessionStorage.getItem("Eamil")}
                  ref={register({
                    required: "This input is required.",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address.",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ messages }) => {
                    console.log("messages", messages);
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
              <div className="form-group">
                <label className="Label" htmlFor="mobileNumber">
                  Mobile Number : (Optional)
                </label>
                <input
                  className="Field"
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  onChange={PhonePick}
                  ref={register({
                    pattern: {
                      value: /[0-9]/,
                      message: "This input is incorrect",
                    },
                    minLength: {
                      value: 10,
                      message: "The input must be at least 10 Numbers",
                    },
                    maxLength: {
                      value: 14,
                      message: "The most input is  14 Numbers",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="mobileNumber"
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
              <div className="form-group">
                <label className="Label" htmlFor="companyName">
                  Company Name : (Optional)
                </label>
                <input
                  className="Field"
                  type="text"
                  id="companyName"
                  name="companyName"
                />
              </div>
              <div className="form-group">
                <label className="Label" className="Label" htmlFor="message">
                  Message (Optional)
                </label>
                <textarea
                  className="Textarea"
                  id="message"
                  name="message"
                  rows="2"
                  cols="40"
                ></textarea>
              </div>
              <div className="form-group form-button">
                {/* <button
                  className="Button btn-info form-submit fourth"
                  type="submit"
                >
                  Submit
                </button> */}
                <Popup
                  trigger={
                    <button className="Button btn-info form-submit fourth">
                      {" "}
                      Submit{" "}
                    </button>
                  }
                  modal
                >
                  <span>
                    {" "}
                    <b>Thank you for Choosing us,</b>
                    <br />
                    We will contact with you within 24-hours
                  </span>
                </Popup>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Booking);
