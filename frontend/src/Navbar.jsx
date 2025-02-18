import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./constants";
import logo from "./assets/awura.svg";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`top-0 left-0 z-50 fixed py-3 w-full transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
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
                <Link
                  to={item.href}
                  className="text-white hover:text-orange-500 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex">
            <Link
              to="/login"
              className="hover:bg-orange-700 bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-2 rounded-md text-white transition duration-300"
            >
              Admin
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
                  <Link
                    to={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="text-white hover:text-orange-500 transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                to="/login"
                className="hover:bg-orange-700 bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-2 rounded-md text-white transition duration-300"
                onClick={() => setMobileDrawerOpen(false)}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
