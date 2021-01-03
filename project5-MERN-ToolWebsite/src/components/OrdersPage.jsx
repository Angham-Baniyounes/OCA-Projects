import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import Orders from "./Orders";
import TotalOrder from "./TotalOrder";
import Log from "./log";
const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  let orederNum = orders.length;
  console.log(`numofobj ${orederNum}`);
  // let userToken = JSON.parse(localStorage.getItem("userInfo"));
  let userData = localStorage.getItem("username");
  console.log(`the data is ${userData}`);
  let username = userData || "anything";
  async function fetchData() {
    const req = await axios.get(`http://localhost:5000/api/orders/${username}`);

    setOrders(req.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteOrder = (id) => {
    axios.delete("http://localhost:5000/api/orders/" + id).then((res) => {
      console.log(res.data);
    });
    setOrders(orders.filter((el) => el._id !== id));
  };
  let sum = 0;
  orders.map(myFunction);

  function myFunction(obj) {
    sum += obj["price"] * obj["quantity"];
  }

  return (
    <div>
      <div className="orders__container">
        {orders.map((order) => (
          <Orders
            uni={order._id}
            cardName={order.cardName}
            cardImg={order.cardImg}
            quantity={order.quantity}
            size={order.username}
            deleteOrder={deleteOrder}
            edit={order.quantity}
            fetch={fetchData}
            price={order.price}
          />
        ))}
      </div>
      <TotalOrder sum={sum.toFixed(2)} />
    </div>
  );
};

export default OrdersPage;
