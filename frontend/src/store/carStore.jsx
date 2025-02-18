// src/store/carStore.js
import { create } from "zustand";
import axios from "axios";

export const useCarStore = create((set) => ({
  cars: [],
  setCars: (cars) => set({ cars }),
  createCar: async (newCar) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cars",
        newCar
      ); // Ensure correct URL
      if (response.status === 201) {
        set((state) => ({ cars: [...state.cars, response.data] }));
        return { success: true };
      }
    } catch (error) {
      console.error("Error adding car:", error);
      return { success: false, message: error.message };
    }
  },
}));
