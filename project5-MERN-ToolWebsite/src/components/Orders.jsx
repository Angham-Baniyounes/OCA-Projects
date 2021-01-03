import React, { useState } from "react";
import axios from "axios";
import "./Test.css";
import Button from "@material-ui/core/Button";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CloseIcon from "@material-ui/icons/Close";

function Orders(props) {
  const [price, setPrice] = useState(props.price);
  const [edit, setEdit] = useState(props.quantity);
  const [show, setShow] = useState(true);
  const [doneButton, setDoneButton] = useState(false);
  const ed = async (e) => {
    e.preventDefault();
    let newJSON = await { quantity: edit };
    axios
      .put("http://localhost:5000/api/orders/" + props.uni, newJSON)
      .then(() => {
        props.fetch();
        setDoneButton(false);
      });
  };
  console.log(edit);
  const plus = () => {
    setEdit((prev) => prev + 1);
    setDoneButton(true);
  };
  const minus = () => {
    if (edit > 1) {
      setEdit((prev) => prev - 1);
      setDoneButton(true);
    }
  };

  const editButton = () => {
    setShow(true);
  };
  const Total = edit * price;

  return (
    <div className="orderCard">
      <img className="orderCard__img" src={props.cardImg} alt="order image" />
      <div className="orderCard__right">
        <div className="orderCard__header">
          <h5>{props.cardName}</h5>
          <IconButton
            onClick={() => {
              props.deleteOrder(props.uni);
            }}
          >
            <CloseIcon className="orderCancel" fontSize="mid" />
          </IconButton>
        </div>
        <div className="orderCard__bottom">
          {/* <span>quantity:{props.quantity}</span> */}
          <span className="orderPrice">
            price: {Total.toFixed(2)}
            <small> JOD</small>
          </span>
          <div className="orderCard__btns">
            <div style={{ display: show ? "" : "none" }}>
              <IconButton onClick={minus}>
                <IndeterminateCheckBoxIcon />
              </IconButton>
              {/* <input type="number" value={edit} /> */}
              <span>{edit}</span>

              <IconButton onClick={plus}>
                <AddBoxIcon />
              </IconButton>
              <Button
                style={{ display: doneButton ? "" : "none" }}
                variant="contained"
                onClick={ed}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
