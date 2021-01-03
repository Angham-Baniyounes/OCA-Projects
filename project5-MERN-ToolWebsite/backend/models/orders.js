const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  username: String,
  cardName: String,
  cardDesc: String,
  cardImg: String,
  quantity: Number,
  price: Number,
  size: String,
});
const Orders = mongoose.model("orders", orderSchema);
module.exports = Orders;