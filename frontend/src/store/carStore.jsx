import { create } from "zustand";
import axios from "axios";

export const useCarStore = create((set) => ({
  cars: [],

  setCars: (cars) => set({ cars }),

  fetchCars: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cars");
      if (response.data.success) {
        set({ cars: response.data.data });
      } else {
        console.error("Failed to fetch cars:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  },

  createCar: async (newCar) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cars",
        newCar
      );
      if (response.status === 201) {
        set((state) => ({ cars: [...state.cars, response.data] }));
        return { success: true };
      }
    } catch (error) {
      console.error("Error adding car:", error);
      return { success: false, message: error.message };
    }
  },

  // Add updateCar function to handle updates
  updateCar: async (carId, updatedCar) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cars/${carId}`,
        updatedCar
      );
      if (response.status === 200) {
        set((state) => ({
          cars: state.cars.map((car) =>
            car._id === carId ? { ...car, ...updatedCar } : car
          ),
        }));
        return { success: true };
      }
    } catch (error) {
      console.error("Error updating car:", error);
      return { success: false, message: error.message };
    }
  },

  deleteCar: async (carId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/cars/${carId}`
      );
      if (response.status === 200) {
        set((state) => ({
          cars: state.cars.filter((car) => car._id !== carId),
        }));
        return { success: true };
      }
    } catch (error) {
      console.error("Error deleting car:", error);
      return { success: false, message: error.message };
    }
  },
}));
