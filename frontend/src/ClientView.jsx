import { useEffect, useState } from "react";
import { useCarStore } from "./store/carStore";
import CarCard from "./CardClient";

const ClientView = () => {
  const [loading, setLoading] = useState(true);
  const { cars, setCars } = useCarStore();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        console.log("Fetching cars..."); // Debugging step
        const response = await fetch("http://localhost:5000/api/cars");
        const data = await response.json();

        console.log("Fetched cars data:", data); // Check what we received

        if (data.success && Array.isArray(data.data)) {
          setCars(data.data); // Store only the array part
        } else {
          console.error("Unexpected response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [setCars]);

  return (
    <div className="mx-auto mt-20 p-4 max-w-5xl">
      <div className="mb-6 text-center">
        <h1 className="font-semibold text-white text-3xl">
          Welcome to the Car Gallery
        </h1>
        <p className="mt-2 text-white">
          Browse our collection of cars available for you to view.
        </p>
      </div>

      {/* Display loading state */}
      {loading ? (
        <p className="text-white text-lg text-center">Loading cars...</p>
      ) : (
        <div className="space-y-6">
          {cars.length > 0 ? (
            cars.map((car) => <CarCard key={car._id} car={car} />)
          ) : (
            <p className="text-white text-lg text-center">No cars available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientView;
