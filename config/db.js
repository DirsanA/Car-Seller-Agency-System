import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected:${conn.connection.host}`);
  } catch (error) {
    console.error("error");
    process.exit(1); // exit with error
  }
};
