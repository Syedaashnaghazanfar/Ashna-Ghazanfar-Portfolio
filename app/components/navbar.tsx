"use client";
import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiBriefcase,
  FiBarChart,
  FiMail,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <FiHome className="w-5 h-5" />, link: "#home" },
    { name: "About", icon: <FiUser className="w-5 h-5" />, link: "#about" },
    {
      name: "Services",
      icon: <FiSettings className="w-5 h-5" />,
      link: "#services",
    },
    {
      name: "Portfolio",
      icon: <FiBriefcase className="w-5 h-5" />,
      link: "#portfolio",
    },
    {
      name: "Statistics",
      icon: <FiBarChart className="w-5 h-5" />,
      link: "#statistics",
    },
    { name: "Contact", icon: <FiMail className="w-5 h-5" />, link: "#contact" },
  ];

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        {/* Logo with Home Link */}
        <a
          href="#home"
          className="flex items-center text-white font-header text-xl md:text-2xl uppercase whitespace-nowrap ml-2 md:ml-6 hover:text-yellow-400 transition-colors"
        >
          <span>Ashna Ghazanfar</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-end">
          <ul className="flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <a
                  href={item.link}
                  className="flex items-center font-header font-semibold uppercase text-white text-sm xl:text-base px-2 py-1 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`absolute top-0 right-0 w-64 h-full bg-black/95 transform transition-transform duration-300 ease-in-out shadow-xl ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full p-4">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-white p-2 mb-4"
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Menu Items */}
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between text-white hover:text-yellow-400 px-4 py-3 transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-3 text-base font-medium">
                          {item.name}
                        </span>
                      </div>
                      <FiChevronRight className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
