"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SlChemistry } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import Videotext from "./Logo";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { to: "/", text: "الرئيسيه" },
    { to: "courses", text: "الكورسات" },
    { to: "contact", text: "التواصل معنا" },
    { to: "userProfile", text: "البروفايل" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md font-bold py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="shrink-0">
              <a href="#" className="flex items-center">
                <div>
                  <span className="text-purple font-bold text-3xl">
                    <SlChemistry />
                  </span>
                </div>
                <div className="font-bold text-xl text-dark-purple font-tajawal">
                  <Videotext />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.text}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive ? "text-purple" : "text-black hover:text-purple"
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#"
                className="px-4 py-2  bg-purple text-white rounded-lg hover:bg-dark-purple transition-colors shadow-sm"
              >
                تسجيل الدخول
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-dark-purple hover:bg-purple hover:text-light-purple duration-200 cursor-pointer rounded-md"
                aria-label="Toggle menu"
              >
                <Menu
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 blur-lg bg-opacity-50 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-dark-purple shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 ">
            <a href="#" className="flex items-center">
              <div>
                <span className="text-white font-bold text-2xl">
                  <SlChemistry />
                </span>
              </div>
              <span className="font-bold text-lg text-white">المعادله</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white rounded-md hover:text-light-purple cursor-pointer  transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="grow p-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.text}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md  transition-colors duration-300 ${
                      isActive
                        ? "bg-light-purple text-dark-purple"
                        : "text-white bg-transparent hover:bg-light-purple hover:text-dark-purple"
                    }`
                  }
                >
                  <li onClick={() => setIsMenuOpen(false)}>{link.text}</li>
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* Mobile Footer */}
          <button className="p-4">
            <a
              href="#"
              className="w-full block text-center px-4 py-3 text-sm font-bold bg-light-purple text-dark-purple rounded-lg "
            >
              تسجيل الدخول
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
