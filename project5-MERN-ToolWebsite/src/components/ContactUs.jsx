import React, { Component } from "react";
import "./Contact_us.css";
import axios from "axios";

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      subject: "",
      textarea: "",
    };
  }

  changeFullName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  changeSubject = (event) => {
    this.setState({
      subject: event.target.value,
    });
  }

  changeTextarea = (event) =>{
    this.setState({
      textarea: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      fullName: this.state.fullName,
      email: this.state.email,
      subject: this.state.subject,
      textarea: this.state.textarea,
    };

    axios
      .post("http://localhost:5000/api/contact/message", newMessage)
      .then((response) => {
        console.log(response.data);
        alert("succsses signup");
      });

    this.setState({
      fullName: "",
      email: "",
      subject: "",
      textarea: "",
    });
  }

  render() {
    return (
      <div className="container__all">
        <div className="container__us">
          <h5 className="contcatHeader">GET IN TOUCH</h5>
          <p style={{ textAlign: "center" }}>
            Feel free to contact us about your thoughts, we are always happy to
            hear from our customers.
          </p>
          <form onSubmit={this.onSubmit}>
            <div className="login">
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                onChange={this.changeFullName}
                value={this.state.fullName}
                required
              />
              <input
                type="text"
                placeholder="Your Email Address"
                className="input"
                onChange={this.changeEmail}
                value={this.state.email}
                required
              />
            </div>
            <div className="subject">
              <input
                type="text"
                placeholder="Subject"
                className="input"
                onChange={this.changeSubject}
                value={this.state.subject}
                required
              />
            </div>
            <div className="msg">
              <textarea
                className="area"
                placeholder="Your Message"
                onChange={this.changeTextarea}
                value={this.state.textarea}
                required
              />
            </div>
            <button type="submit" className="bton" value="Submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
