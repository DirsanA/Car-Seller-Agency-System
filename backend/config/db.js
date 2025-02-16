const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load MONGO_URI from .env file

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // No need for deprecated options
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.stack}`);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
