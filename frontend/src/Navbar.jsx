import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "./assets/logoCar.jpg";
import { navItems } from "./constants";

const Navbar = ({ homeRef, servicesRef, productsRef, testimonialsRef }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For programmatic navigation

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Function to handle smooth scrolling on the home page
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle navigation
  const handleNavigation = (item) => {
    if (location.pathname !== "/") {
      // If not on the home page, navigate to home first
      navigate("/");
      // Wait for the home page to load, then scroll to the section
      setTimeout(() => {
        if (item.label === "Home") scrollToSection(homeRef);
        if (item.label === "Services") scrollToSection(servicesRef);
        if (item.label === "Products") scrollToSection(productsRef);
        if (item.label === "Testimonials") scrollToSection(testimonialsRef);
      }, 100); // Adjust the delay if needed
    } else {
      // If already on the home page, scroll to the section
      if (item.label === "Home") scrollToSection(homeRef);
      if (item.label === "Services") scrollToSection(servicesRef);
      if (item.label === "Products") scrollToSection(productsRef);
      if (item.label === "Testimonials") scrollToSection(testimonialsRef);
    }
    setMobileDrawerOpen(false); // Close mobile drawer
  };

  return (
    <nav className="top-0 left-0 z-50 fixed bg-black/70 backdrop-blur-lg py-3 border-neutral-700/80 border-b w-full">
      <div className="relative mx-auto px-4 container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <img
              className="shadow-lg mr-2 border-2 border-white rounded-full w-12 h-12 object-cover"
              src={logo}
              alt="Logo"
            />
            <span className="font-bold text-white text-xl tracking-tight">
              Awura
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-12 ml-14">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.label === "Vacancy" ? (
                  <Link to={item.href}>{item.label}</Link>
                ) : (
                  <button
                    onClick={() => handleNavigation(item)}
                    className="hover:text-orange-500 transition duration-300"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex space-x-6">
            <Link
              to="/vacancy"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden top-16 right-0 z-20 fixed flex flex-col justify-center items-center bg-neutral-900 p-12 w-full">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  {item.label === "Vacancy" ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="hover:text-orange-500 transition duration-300"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="/vacancy"
                className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
                onClick={() => setMobileDrawerOpen(false)}
              >
                Join us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
