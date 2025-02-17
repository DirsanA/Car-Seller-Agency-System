import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddCar = () => {
  const navigate = useNavigate(); // Initialize navigation

  const [car, setCar] = useState({
    model: "",
    description: "",
    price: "",
    ImgurlOne: "",
    ImgurlTwo: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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

    console.log("Car Added:", car);
    setMessage("Car added successfully!");

    // Redirect to CarAdmin after 1 second
    setTimeout(() => {
      navigate("/CarAdmin");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 p-4 min-h-screen">
      <div className="bg-gray-800 shadow-lg p-6 rounded-lg w-full max-w-2xl">
        <h2 className="mb-4 font-semibold text-white text-2xl text-center">
          Add New Car
        </h2>

        {message && (
          <p className="mb-4 font-medium text-green-400 text-center">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Model & Price side by side */}
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

          {/* Description - Full width */}
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

          {/* Image URLs side by side */}
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
            onClick={() => navigate("/call-seller-card")}
            className="bg-indigo-600 hover:bg-indigo-700 mt-6 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full font-semibold text-white"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
