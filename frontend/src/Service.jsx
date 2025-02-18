import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgHero from "./assets/servicePage.jpg";

const Service = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-cover bg-center px-6 sm:px-12 lg:px-20 w-full min-h-screen"
      style={{
        backgroundImage: `url(${imgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="z-10 relative py-16 w-full max-w-6xl text-center">
        <h1 className="mb-6 font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl animate-fadeIn">
          We are
          <span className="bg-clip-text bg-gradient-to-r from-orange-800 to-red-800 ml-4 text-transparent">
            digital agency.
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-gray-300 text-lg">
          Our mission is to bring innovative digital solutions to life, helping
          businesses and individuals grow with cutting-edge technology and
          creative strategies.
        </p>

        {/* Card Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-5xl">
          <div className="flex flex-col items-center bg-black bg-opacity-60 p-6 border border-gray-700 rounded-2xl text-white hover:scale-105 transition transform">
            <span className="mb-2 text-3xl">✈️</span>
            <h2 className="font-bold text-xl">Future Concept.</h2>
            <p className="mt-2 text-sm">
              We anticipate and create future-ready solutions that transform
              industries.
            </p>
          </div>
          <div className="flex flex-col items-center bg-black bg-opacity-60 p-6 border border-gray-700 rounded-2xl text-white hover:scale-105 transition transform">
            <span className="mb-2 text-3xl">🧠</span>
            <h2 className="font-bold text-xl">The Big Ideas.</h2>
            <p className="mt-2 text-sm">
              Our team is dedicated to crafting bold and revolutionary ideas
              that redefine digital landscapes.
            </p>
          </div>
          <div className="flex flex-col items-center bg-black bg-opacity-60 p-6 border border-gray-700 rounded-2xl text-white hover:scale-105 transition transform">
            <span className="mb-2 text-3xl">💡</span>
            <h2 className="font-bold text-xl">Creative Solutions.</h2>
            <p className="mt-2 text-sm">
              We deliver innovative and practical solutions tailored to meet
              your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
