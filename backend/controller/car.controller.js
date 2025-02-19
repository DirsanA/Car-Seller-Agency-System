const Car = require("../models/car.model"); // Ensure the correct path to your model

// GET all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find({}); // Fetch all cars from the database
    res.status(200).json({
      success: true,
      data: cars, // Send the cars back to the client
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching the cars",
    });
  }
};

// POST route to add a new car
const addCars = async (req, res) => {
  try {
    const { model, description, price, ImgurlOne, ImgurlTwo } = req.body;

    // Validate request body
    if (!model || !description || !price || !ImgurlOne || !ImgurlTwo) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newCar = await Car.create({
      model,
      description,
      price,
      ImgurlOne,
      ImgurlTwo,
    });

    res.status(201).json(newCar); // Send saved data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT method for updating car details
const updateCar = async (req, res) => {
  const { id } = req.params; // Get car ID from request parameters
  const updateData = req.body; // Get update data from request body

  try {
    // Find the car by ID and update it
    const updatedCar = await Car.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are followed
    });

    // If car not found, return 404 error
    if (!updatedCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    // Return the updated car
    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      data: updatedCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating the car",
      error: error.message,
    });
  }
};

// DELETE functionality
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from URL
    console.log("Deleting car with ID:", id);

    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json({ message: "Car deleted successfully", deletedCar });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCars,
  addCars,
  updateCar,
  deleteCar,
};
