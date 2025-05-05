import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";
import { clarityLogo } from "@src/assets/images";
import SolidButton from "../PrimaryButton";

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
                className={`smooth-hover-underline text-sm font-medium transition-colors hover:text-c-zinc ${
                  location.pathname === link.path
                    ? "text-c-zinc nav-underline"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SolidButton text="Get In Touch" to={"/contact"} />
            {/* <Link to="/contact">
            <PrimaryButton>
              Get In Touch
            </PrimaryButton>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-c-zinc ${
                    location.pathname === link.path
                      ? "text-c-zinc"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
                <Link
                  to="/signin"
                  className="text-sm font-medium text-gray-700 hover:text-c-zinc"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary py-2 px-4 inline-block text-center"
                >
                  Sign up Free
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
