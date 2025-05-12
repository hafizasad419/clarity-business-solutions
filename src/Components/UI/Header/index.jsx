import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";
import { clarityLogo } from "@src/assets/images";
import PrimaryButton from "../PrimaryButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 bg-hero-gradient h-20 flex items-center`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-c-zinc">
            <img
              src={clarityLogo}
              alt="Clarity Business Solutions Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`smooth-hover-underline text-sm font-medium transition-colors hover:text-c-zinc ${location.pathname === link.path
                  ? "text-c-zinc nav-underline"
                  : "text-gray-700"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <PrimaryButton
              text="Get In Touch"
              type="link"
              to={"/contact"} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ?
              <X
                className="w-6 h-6"
              /> :

              <Menu
                className="w-6 h-6"
              />}
          </button>
        </div>
      </div>


      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-hero-gradient transition-all duration-300 ease-in-out overflow-hidden shadow-lg z-40 ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors ${location.pathname === link.path
                  ? "text-c-zinc"
                  : "text-gray-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-400 flex justify-start pt-6 mt-4">
              <PrimaryButton
                type="link"
                text="Get In Touch"
                to={"/contact"} />
            </div>
          </nav>
        </div>
      </div>




    </header>
  );
};

export default Header;
