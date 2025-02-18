import React, { useState } from "react";
import {
  FaTrash,
  FaEdit,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const CarCardAdmin = ({ car, onDelete, onUpdate }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmUpdate, setShowConfirmUpdate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const images = [car.ImgurlOne, car.ImgurlTwo].filter(Boolean);
  const displayImages =
    images.length > 0 ? images : ["https://via.placeholder.com/600x400"];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + displayImages.length) % displayImages.length
    );
  };

  const handleDelete = () => {
    setShowConfirmDelete(true);
  };

  const confirmDelete = async () => {
    setShowConfirmDelete(false);
    const result = await onDelete(car._id);
    if (result.success) {
      setIsDeleted(true);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  const handleUpdate = () => {
    // Navigate to the AddCar component with the car data for editing
    navigate("/add-car", { state: { car } });
  };

  return (
    <>
      <AnimatePresence>
        {!isDeleted && (
          <motion.div
            className="relative flex lg:flex-row flex-col bg-gradient-to-r from-gray-900 to-gray-700 shadow-xl rounded-xl overflow-hidden hover:scale-105 transition duration-300 transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
          >
            <div className="relative w-full lg:w-1/2 overflow-hidden">
              <img
                src={displayImages[currentImageIndex]}
                alt="Car"
                className="rounded-t-xl lg:rounded-l-xl w-full h-64 sm:h-80 lg:h-full object-cover"
              />
              <button
                className="top-1/2 left-3 absolute bg-black/50 p-2 rounded-full text-white -translate-y-1/2 transform"
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>
              <button
                className="top-1/2 right-3 absolute bg-black/50 p-2 rounded-full text-white -translate-y-1/2 transform"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="flex flex-col justify-between p-6 w-full lg:w-1/2 text-white">
              <div>
                <p className="text-gray-300 text-sm">
                  {new Date().toLocaleDateString()}
                </p>
                <h2 className="font-bold text-orange-400 text-2xl">
                  {car.model}
                </h2>
                <p className="mt-2 text-gray-300 text-sm">{car.description}</p>
                <p className="mt-2 font-bold text-green-400 text-xl">
                  ${car.price}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handleDelete}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition duration-300"
                >
                  <FaTrash />
                  <span>Delete</span>
                </button>
                <button
                  onClick={handleUpdate}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition duration-300"
                >
                  <FaEdit />
                  <span>Update</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="bottom-5 left-5 fixed flex items-center bg-black/80 shadow-xl backdrop-blur-lg px-6 py-3 rounded-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <FaCheckCircle className="mr-2 text-blue-400" />
            <span className="font-medium text-sm">Deleted Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmDelete && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 shadow-lg p-6 rounded-xl w-80 text-white text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <FaExclamationTriangle className="mx-auto mb-3 text-red-400 text-3xl" />
              <h3 className="font-semibold text-lg">Confirm Delete</h3>
              <p className="mt-2 text-gray-300">
                Are you sure you want to delete this car?
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => setShowConfirmDelete(false)}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
                >
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CarCardAdmin;
