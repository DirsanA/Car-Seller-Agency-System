const mongoose = require("mongoose");

// so we wil create carSchema objec and create
const carSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ImgurlOne: {
      type: String,
      required: true,
    },
    ImgurlTwo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Car = mongoose.model("Car", carSchema); // it create car schema in mogoose
// so cars document is created at mongodb which is collection of name,price......
module.exports = Car;
