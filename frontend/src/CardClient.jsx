import { useState } from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

const CardClient = ({ car }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Create an array of images using ImgurlOne and ImgurlTwo
  const images = [car.ImgurlOne, car.ImgurlTwo].filter(Boolean); // Remove null/undefined images

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

  // Function to generate the Telegram message and redirect
  const handleContactAdmin = () => {
    const message = `Hello Admin, I am interested in this car:
🚗 *Model:* ${car.model}
📜 *Description:* ${car.description}
💰 *Price:* $${car.price}
📅 *Listed on:* ${new Date().toLocaleDateString()}

Can you provide more details?`;

    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://t.me/Dirsanhd?text=${encodedMessage}`;

    window.open(telegramUrl, "_blank");
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

        {/* Contact Admin Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleContactAdmin}
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white transition duration-300"
          >
            <FaTelegram className="text-xl" />
            <span>Contact Admin</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardClient;
