import { motion } from "framer-motion";
import { useState, useRef } from "react"; // Import useRef
import vacancyBanner from "../assets/pc_coffee.jpg";
import { whyJoin } from "./constants";
import { CheckCircle2 } from "lucide-react";

const Vacancy = () => {
  // State to manage the active button
  const [activeButton, setActiveButton] = useState("All");

  // Ref for the job posting section
  const jobPostingRef = useRef(null);

  // Function to scroll to the job posting section
  const scrollToJobPosting = () => {
    jobPostingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-4 sm:mt-2 p-0 overflow-x-hidden">
      {/* Banner Section */}
      <div
        className="relative flex justify-center items-center bg-cover bg-center w-full h-[300px] md:h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url(${vacancyBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative mt-8 px-4 md:px-6 w-full max-w-full text-white text-center">
          <motion.h1
            className="mb-4 font-bold text-3xl md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            JOIN US
          </motion.h1>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide">
            Are you passionate about making a difference? At our company, we are
            always looking for enthusiastic and talented individuals to join our
            dynamic team. We offer a collaborative and innovative environment
            where your ideas and contributions matter.
          </p>
          {/* Updated Button with Margin for Mobile */}
          <button
            className="bg-blue-500 hover:bg-blue-600 shadow-lg mt-6 mb-8 sm:mb-4 px-6 py-3 rounded-lg font-semibold text-white text-base md:text-lg transition duration-300"
            onClick={scrollToJobPosting} // Scroll to job posting section
          >
            JOIN THE TEAM
          </button>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="flex md:flex-row flex-col p-4 md:p-12 w-full max-w-full overflow-x-hidden text-white">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 w-full md:w-[40%]">
          <h1 className="mt-8 lg:mt-0 lg:p-8 font-semibold text-2xl md:text-4xl md:text-left text-center leading-tight">
            Why you Should Join
            <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 ml-2 text-transparent">
              Our Awesome Team
            </span>{" "}
          </h1>
          <p className="mx-auto md:mx-0 px-4 md:px-4 max-w-3xl text-neutral-300 text-sm sm:text-base md:text-lg md:text-left text-center leading-relaxed tracking-wide">
            We want you to feel like home when you are working at AWURA & for
            that we have curated a great set of benefits for you. It all starts
            with a training!
          </p>
        </div>

        {/* Right Section - Grid */}
        <div className="w-full md:w-[60%]">
          <div className="gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-2">
            {whyJoin.map((whyJoin, index) => (
              <div
                key={index}
                className="flex items-start bg-neutral-800 shadow-lg hover:shadow-2xl p-4 md:p-6 rounded-lg hover:scale-105 transition-all duration-300 transform"
              >
                {/* Icon */}
                <div className="mr-4 text-orange-500 text-2xl md:text-3xl">
                  {whyJoin.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h5 className="font-semibold text-white text-lg md:text-xl">
                    {whyJoin.text}
                  </h5>
                  <p className="mt-2 text-neutral-300 text-sm md:text-base">
                    {whyJoin.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Openings Section */}
      <div className="p-8">
        <h1 className="flex justify-center items-center mt-2 lg:mt-0 lg:p-8 font-semibold text-2xl md:text-4xl md:text-left text-center leading-tight">
          Career
          <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 ml-2 text-transparent">
            Openings
          </span>{" "}
        </h1>

        <div className="flex justify-center items-center">
          <p className="flex justify-center items-center mx-auto md:mx-0 px-4 md:px-4 max-w-3xl text-neutral-300 text-sm sm:text-base md:text-lg md:text-left text-center leading-relaxed tracking-wide">
            We're always looking for creative, talented self-starters to join
            the AWURA family. Check out our open roles below and fill out an
            application.
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center mt-0 mb-2">
        <a
          href="#"
          className={`mx-3 px-20 py-2 rounded-md ${
            activeButton === "All"
              ? "bg-gradient-to-r from-orange-500 to-orange-800"
              : "border"
          }`}
          onClick={() => {
            setActiveButton("All");
            scrollToJobPosting();
          }}
        >
          All
        </a>
        <a
          href="#"
          className={`mx-3 px-4 py-3 rounded-md ${
            activeButton === "Software Engineering"
              ? "bg-gradient-to-r from-orange-500 to-orange-800"
              : "border"
          }`}
          onClick={() => {
            setActiveButton("Software Engineering");
            scrollToJobPosting(); // Scroll to job posting section
          }}
        >
          Software Engineering
        </a>
      </div>
    </div>
  );
};

export default Vacancy;
