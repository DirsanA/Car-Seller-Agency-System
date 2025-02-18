const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const carRoutes = require("./routes/car.routes");

dotenv.config();

const app = express();
const port = process.env.port || 5000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// API routes
app.use("/api/cars", carRoutes);

// Start the server after connecting to the database
app.listen(port, function () {
  console.log(`The server is listening at port ${port}...`);
  connectDB();
});
