const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("../config/db");

dotenv.config();
console.log(process.env.MONGO_URI);
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello from the port 3000");
});
app.listen(port, function () {
  connectDB();
  console.log(`The server is listening at port ${port}....`);
});
