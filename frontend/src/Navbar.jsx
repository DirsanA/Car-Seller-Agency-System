import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./constants";
import logo from "./assets/loggg.jpg";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavigation = (item) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(item.href)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(item.href)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="top-0 left-0 z-50 fixed bg-transparent py-3 w-full">
      <div className="mx-auto px-4 container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img className="mr-2 w-14 h-10" src={logo} alt="Logo" />
            <span className="text-white text-xl tracking-tight">Dagi</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.label === "Vacancy" ? (
                  <Link
                    to={item.href}
                    className="text-white hover:text-orange-500 transition duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavigation(item)}
                    className="text-white hover:text-orange-500 transition duration-300"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Join Us Button (Desktop) */}
          <div className="hidden lg:flex">
            <Link
              to="/vacancy"
              className="hover:bg-orange-700 bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-2 rounded-md text-white transition duration-300"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden top-16 right-0 z-20 fixed flex flex-col items-center bg-neutral-900 p-6 w-full">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-center">
                  {item.label === "Vacancy" ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="text-white hover:text-orange-500 transition duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="text-white hover:text-orange-500 transition duration-300"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                to="/vacancy"
                className="hover:bg-orange-700 bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-2 rounded-md text-white transition duration-300"
                onClick={() => setMobileDrawerOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
