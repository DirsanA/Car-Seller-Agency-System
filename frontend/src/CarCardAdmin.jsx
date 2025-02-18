import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

const CarCardAdmin = ({ car, onDelete, onUpdate }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [car.ImgurlOne, car.ImgurlTwo].filter(Boolean);

  // Fallback to a placeholder image if no images are available
  const displayImages =
    images.length > 0 ? images : ["https://via.placeholder.com/600x400"];

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % displayImages.length);
  };

  const handlePrevious = () => {
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + displayImages.length) % displayImages.length
    );
  };

  return (
    <motion.div
      className="flex lg:flex-row flex-col bg-gradient-to-r from-gray-900 to-gray-700 shadow-xl rounded-xl overflow-hidden hover:scale-105 transition duration-300 transform"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 overflow-hidden">
        <img
          src={displayImages[currentImage]}
          alt={`Car Image ${currentImage + 1}`}
          className="rounded-t-xl lg:rounded-l-xl w-full h-64 sm:h-80 lg:h-full object-cover"
        />

        {/* Image Navigation Buttons */}
        {displayImages.length > 1 && (
          <div className="right-0 bottom-2 left-0 absolute flex justify-between px-4">
            <button
              onClick={handlePrevious}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full text-white transition"
            >
              &laquo;
            </button>
            <button
              onClick={handleNext}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full text-white transition"
            >
              &raquo;
            </button>
          </div>
        )}
      </div>

      {/* Car Details Section */}
      <div className="flex flex-col justify-between p-6 w-full lg:w-1/2 text-white">
        <div>
          <p className="text-gray-300 text-sm">
            {new Date().toLocaleDateString()}
          </p>
          <h2 className="font-bold text-orange-400 text-2xl">{car.model}</h2>
          <p className="mt-2 text-gray-300 text-sm">{car.description}</p>
          <p className="mt-2 font-bold text-green-400 text-xl">${car.price}</p>
        </div>

        {/* Action Buttons (Delete & Update) */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => onDelete(car.id)}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition duration-300"
          >
            <FaTrash />
            <span>Delete</span>
          </button>
          <button
            onClick={() => onUpdate(car)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition duration-300"
          >
            <FaEdit />
            <span>Update</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCardAdmin;
