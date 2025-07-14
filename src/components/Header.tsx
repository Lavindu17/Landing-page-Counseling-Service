import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">
              Bright Mind Counseling
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-700 hover:text-emerald-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-700 hover:text-emerald-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-emerald-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("tools")}
              className="text-slate-700 hover:text-emerald-600 transition-colors duration-200"
            >
              Tools
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-emerald-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+9471800623"
              className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-1" />
              (+94) 71 8000 623
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 hover:text-emerald-600 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("tools")}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                Tools
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <a
                  href="tel:+9471800623"
                  className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors duration-200 mb-2"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +9471800623
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
