import { useState, useEffect } from "react";
import { useCarStore } from "./store/carStore";
import { useNavigate, useLocation } from "react-router-dom"; // Use useLocation to get state passed from CarCardAdmin

const AddCar = () => {
  const navigate = useNavigate();
  const createCar = useCarStore((state) => state.createCar);
  const updateCar = useCarStore((state) => state.updateCar);
  const location = useLocation(); // Use location to get passed state
  const carToUpdate = location.state?.car; // Get car data if available

  const [car, setCar] = useState({
    model: carToUpdate?.model || "",
    description: carToUpdate?.description || "",
    price: carToUpdate?.price || "",
    ImgurlOne: carToUpdate?.ImgurlOne || "",
    ImgurlTwo: carToUpdate?.ImgurlTwo || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !car.model ||
      !car.description ||
      !car.price ||
      !car.ImgurlOne ||
      !car.ImgurlTwo
    ) {
      setMessage("All fields are required.");
      return;
    }

    if (carToUpdate) {
      // Update car if we have carToUpdate
      const response = await updateCar(carToUpdate._id, car);
      if (response.success) {
        setMessage("Car updated successfully!");
        setTimeout(() => {
          navigate("/call-seller-card");
        }, 1000);
      } else {
        setMessage("Error updating car: " + response.message);
      }
    } else {
      // Create new car
      const response = await createCar(car);
      if (response.success) {
        setMessage("Car added successfully!");
        setTimeout(() => {
          navigate("/call-seller-card");
        }, 1000);
      } else {
        setMessage("Error adding car: " + response.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 p-4 min-h-screen">
      <div className="bg-gray-800 shadow-lg p-6 rounded-lg w-full max-w-2xl">
        <h2 className="mb-4 font-semibold text-white text-2xl text-center">
          {carToUpdate ? "Update Car" : "Add New Car"}
        </h2>

        {message && (
          <p className="mb-4 font-medium text-green-400 text-center">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label className="block font-medium text-gray-300 text-sm">
                Car Model
              </label>
              <input
                type="text"
                name="model"
                className="bg-gray-700 mt-1 p-2 border border-gray-600 rounded-md focus:ring-indigo-500 w-full text-white"
                placeholder="Toyota Camry 2025"
                value={car.model}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-300 text-sm">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                className="bg-gray-700 mt-1 p-2 border border-gray-600 rounded-md focus:ring-indigo-500 w-full text-white"
                placeholder="25999.99"
                value={car.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium text-gray-300 text-sm">
              Description
            </label>
            <textarea
              name="description"
              className="bg-gray-700 mt-1 p-2 border border-gray-600 rounded-md focus:ring-indigo-500 w-full text-white"
              placeholder="A reliable and fuel-efficient sedan..."
              value={car.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="gap-4 grid grid-cols-2 mt-4">
            <div>
              <label className="block font-medium text-gray-300 text-sm">
                Image URL 1
              </label>
              <input
                type="text"
                name="ImgurlOne"
                className="bg-gray-700 mt-1 p-2 border border-gray-600 rounded-md focus:ring-indigo-500 w-full text-white"
                placeholder="https://example.com/image1.jpg"
                value={car.ImgurlOne}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-300 text-sm">
                Image URL 2
              </label>
              <input
                type="text"
                name="ImgurlTwo"
                className="bg-gray-700 mt-1 p-2 border border-gray-600 rounded-md focus:ring-indigo-500 w-full text-white"
                placeholder="https://example.com/image2.jpg"
                value={car.ImgurlTwo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 mt-6 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full font-semibold text-white"
          >
            {carToUpdate ? "Update Car" : "Add Car"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
