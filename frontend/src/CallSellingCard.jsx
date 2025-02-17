import React, { useState } from "react";
import ImgurlOne from "./assets/Bmw22.jpg";
import ImgurlTwo from "./assets/e.jpg";

const CallSellingCard = () => {
  const [currentImage, setCurrentImage] = useState(0); // Track the current image
  const [images, setImages] = useState([ImgurlOne, ImgurlTwo]); // Track the list of images

  const car = {
    images: images, // Store image URLs in an array
    model: "Toyota Camry 2025",
    description:
      "A reliable and fuel-efficient sedan with advanced features and technology.",
    price: 25999.99,
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Switch to the next image, looping back to the first one
  };

  const handlePrevious = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    ); // Switch to the previous image, looping back to the last one
  };

  const handleDelete = () => {
    if (images.length > 1) {
      const updatedImages = images.filter((_, index) => index !== currentImage); // Remove the current image
      setImages(updatedImages);
      setCurrentImage(
        (prevImage) =>
          (prevImage - 1 + updatedImages.length) % updatedImages.length
      ); // Adjust the index after deletion
    } else {
      alert("At least one image must remain.");
    }
  };

  const handleUpdate = () => {
    // Logic to update the image (could be replaced with a file input or API call)
    const updatedImages = [...images];
    updatedImages[currentImage] = ImgurlTwo; // For example, updating the current image to ImgurlTwo
    setImages(updatedImages);
  };

  const handleCreate = () => {
    // Placeholder function to simulate image creation (e.g., upload or add image logic)
    alert("Create new image functionality can be implemented here.");
  };

  return (
    <div className="mx-auto mt-20 p-4 max-w-4xl">
      {/* Welcome message for the admin */}
      <div className="mb-6 text-center">
        <h1 className="font-semibold text-white text-2xl">
          Welcome, Admin! Manage your car listings.
        </h1>
        <p className="mt-2 text-white">
          Use the buttons below to navigate, update, or delete images.
        </p>
        <button
          onClick={handleCreate}
          className="inline-flex items-center mt-4 border-b-2 border-blue-600 font-medium text-blue-600"
        >
          Add New Car Listing
        </button>
      </div>

      <div className="flex lg:flex-row flex-col bg-white shadow-lg rounded-xl h-auto lg:h-80 overflow-hidden">
        {/* Set a fixed height on larger screens */}
        <div className="w-full lg:w-1/2 overflow-hidden">
          <div className="flex space-x-2 h-full overflow-x-auto">
            <img
              src={car.images[currentImage]} // Display the current image based on state
              alt={`Car Image ${currentImage + 1}`}
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
              // Control the height of the image based on screen size
            />
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 w-full lg:w-1/2">
          <div>
            <p className="text-gray-500 text-sm">
              {new Date().toLocaleDateString()}
            </p>
            <h2 className="font-semibold text-gray-900 text-xl">{car.model}</h2>
            <p className="mt-2 text-gray-600 text-sm">{car.description}</p>
            <p className="mt-2 font-bold text-gray-900">${car.price}</p>
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="inline-flex items-center font-medium text-blue-600"
              >
                Previous Image <span className="ml-1">&laquo;</span>
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center font-medium text-blue-600"
              >
                Next Image <span className="ml-1">&raquo;</span>
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Flex container to keep buttons close to each other */}
              <button
                onClick={handleDelete}
                className="inline-flex items-center font-medium text-red-600"
              >
                Delete <span className="ml-1">🗑️</span>
              </button>
              <button
                onClick={handleUpdate}
                className="inline-flex items-center font-medium text-green-600"
              >
                Update <span className="ml-1">✏️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSellingCard;
