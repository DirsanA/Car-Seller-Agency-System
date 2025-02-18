import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarStore } from "./store/carStore";
import CarCard from "./CarCardAdmin";

const CarAdmin = () => {
  const navigate = useNavigate();
  const { cars, setCars } = useCarStore();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        console.log("Fetching cars..."); // Debugging step
        const response = await fetch("http://localhost:5000/api/cars");
        const data = await response.json();

        console.log("Fetched cars data:", data); // Check what we received

        if (data.success && Array.isArray(data.data)) {
          setCars(data.data);
        } else {
          console.error("Unexpected response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, [setCars]);

  return (
    <div className="mx-auto mt-20 p-4 max-w-5xl">
      <div className="mb-6 text-center">
        <h1 className="font-semibold text-white text-3xl">
          Car Management Panel
        </h1>
        <p className="mt-2 text-white">
          Manage your car listings by adding new cars.
        </p>
        <button
          onClick={() => navigate("/add-car")}
          className="bg-blue-600 hover:bg-blue-700 mt-4 px-4 py-2 rounded-md text-white transition"
        >
          Add New Car
        </button>
      </div>

      <div className="space-y-6">
        {cars.length > 0 ? (
          cars.map((car) => <CarCard key={car._id} car={car} />)
        ) : (
          <p className="text-white text-lg text-center">No cars available.</p>
        )}
      </div>
    </div>
  );
};

export default CarAdmin;
