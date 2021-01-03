const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require('./config/db');

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json({ extended: false }));
connectDB();
const uri = process.env.mongoURI;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database Extablished Successfully");
});
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/contact', require('./routes/api/contact'));
app.use('/api', require('./routes/api/orders'));
// const orderRouter = require("./routes/api/orders");
// app.use("/api", orderRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});