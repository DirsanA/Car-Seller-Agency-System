const express = require("express");
const Car = require("../models/car.model"); // Corrected: use 'Car' with a capital 'C'
const carController = require("../controller/car.controller");
const router = express.Router();

// GET ALL CARS
router.get("/", carController.getCars);

// POST route to add a new car
router.post("/", carController.addCars);

// PUT method for updating the car details
router.put("/:id", carController.updateCar);

// DELETE functionality
router.delete("/:id", carController.deleteCar);

module.exports = router;
