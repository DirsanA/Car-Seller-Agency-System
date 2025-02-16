const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const carRoutes = require("./routes/car.routes");
dotenv.config();

const app = express();
const port = process.env.port || 5000;
app.use(express.json()); // Middleware to parse JSON requests
app.use("/api/cars", carRoutes);
// Connect to database before starting the server
app.listen(port, function () {
  console.log(`The server is listenning at port ${port}...`);
  connectDB();
});
