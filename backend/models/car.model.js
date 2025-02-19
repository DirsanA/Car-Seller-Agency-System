const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  ImgurlOne: { type: String, required: true },
  ImgurlTwo: { type: String, required: true },
});

const Car = mongoose.models.Car || mongoose.model("Car", carSchema);

module.exports = Car;
