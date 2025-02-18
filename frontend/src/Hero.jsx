import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa"; // import from react-icons
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import imgHero from "./assets/e.jpg";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-screen overflow-x-hidden"
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
      <div className="top-1/2 left-1/2 absolute mt-0 sm:mt-4 px-4 sm:px-6 lg:px-8 w-full text-center -translate-x-1/2 -translate-y-1/3 transform">
        <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl">
          Welcome to{" "}
          <span className="bg-clip-text bg-gradient-to-r from-orange-800 to-red-800 text-transparent">
            Our Agency
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-neutral-300 text-base sm:text-lg leading-relaxed tracking-wide">
          We are a car seller agency focused on offering quality vehicles and
          exceptional service. Our goal is to make car buying easy, reliable,
          and customer-focused.
        </p>

        {/* Buttons - Aligned horizontally with responsive stacking */}
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mt-6 sm:mt-8">
          <Link
            to="/clients" // Change href to Link and point to /clients route
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-semibold text-white text-sm sm:text-base transition-all duration-300"
          >
            Available Cars
          </Link>
          <a
            href="#"
            className="bg-transparent hover:bg-white px-6 py-3 border-2 border-white rounded-full font-semibold text-white hover:text-black text-sm sm:text-base transition-all duration-300"
          >
            Service
          </a>
        </div>

        {/* Social Media Icons - Aligned horizontally with responsiveness */}
        <div className="flex justify-center items-center gap-8 mt-6 sm:mt-8">
          <a
            href="#"
            className="text-white hover:text-blue-600 hover:scale-125 transition-all duration-300 transform"
          >
            <FaInstagram className="w-8 sm:w-10 h-8 sm:h-10" />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-500 hover:scale-125 transition-all duration-300 transform"
          >
            <FaFacebookF className="w-8 sm:w-10 h-8 sm:h-10" />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 hover:scale-125 transition-all duration-300 transform"
          >
            <FaTelegramPlane className="w-8 sm:w-10 h-8 sm:h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
