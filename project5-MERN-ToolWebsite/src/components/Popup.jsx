import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./Test.css";
import { Link } from "react-router-dom";

export class Popup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="Msg">
            <h2>
              It's seems like you don't have an account, you still can join us.
            </h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/log">
            <button className="Button-Close" onClick={this.props.onHide}>
              SignUp Now!
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}
