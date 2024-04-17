import React, { useState } from "react";
import { Link } from "react-router-dom";
import AkiraLogo from "./assets/pictures/Icons/logo.png";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-white shadow-md  top-0 w-full ">
      <nav className="flex justify-between   items-center h-16 max-w-7xl mx-auto px-4 lg:px-8">
        <Link to="/" className="flex items-center space-x-2 z-50">
          {" "}
          {/* Ensure logo and title have high z-index */}
          <img className="h-20" src={AkiraLogo} alt="Akira Web Solutions" />
          <h6 className="text-xs sm:text-sm md:text-1xl lg:text-1xl text-[#FF0033]">
            Akira Web Solutions
          </h6>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium"
            to="/solutions"
          >
            Solutions
          </Link>
          <Link
            className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium"
            to="/Pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium"
            to="/CaseStudies"
          >
            Case Studies
          </Link>
          <Link
            className="text-black hover:text-red-700 px-3 py-2 rounded-md text-md font-medium"
            to="/Connect"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleNav}>
            {nav ? (
              <XIcon className="h-8 w-8 text-black" />
            ) : (
              <MenuIcon className="h-8 w-8 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Adjusted z-index for the mobile navigation menu */}
      <div
        className={`absolute md:hidden ${
          nav ? "flex" : "hidden"
        } flex-col items-center self-end  space-y-6 font-bold bg-white shadow-md w-full z-50 right-0 sm:w-auto sm:self-center left-0 top-16`}
      >
        <Link
          className="text-black hover:text-red-700"
          to="/"
          onClick={() => setNav(false)}
        >
          Home
        </Link>
        <Link
          className="text-black hover:text-red-700"
          to="/solutions"
          onClick={() => setNav(false)}
        >
          Solutions
        </Link>
        <Link
          className="text-black hover:text-red-700"
          to="/Pricing"
          onClick={() => setNav(false)}
        >
          Pricing
        </Link>
        <Link
          className="text-black hover:text-red-700"
          to="/CaseStudies"
          onClick={() => setNav(false)}
        >
          Case Studies
        </Link>
        <Link
          className="text-black hover:text-red-700"
          to="/Connect"
          onClick={() => setNav(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
