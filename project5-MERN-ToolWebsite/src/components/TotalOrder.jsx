import React from "react";
import "./Test.css";
function TotalOrder(props) {
  return (
    <div
      style={{ display: props.sum <= 0 ? "none" : "" }}
      className="total__orders"
    >
      <h3>
        Total price: {props.sum} <small>JOD</small>
      </h3>
    </div>
  );
}

export default TotalOrder;
