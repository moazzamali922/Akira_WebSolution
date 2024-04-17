import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./assets/pictures/bannerWeb.png"; // Make sure to use the correct path to your image
 
const Hero = () => {
  const navigate = useNavigate();

  const handleViewContact = () => {
    navigate("/connect");
  };

  return (
    <div className="relative bg-black overflow-hidden p-8" style={{ height: 'auto' }}>
  {/* Background Image */}
  <img src={backgroundImage} alt="Background" className="absolute inset-0 object-cover w-full h-full" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-transparent to-red-500 opacity-75"></div>

  {/* Text Container */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
    <h2 className="text-2xl  sm:text-1xl md:text-2xl lg:text-3xl text-white">
      Grow with Data
    </h2>
    <h1 className="text-2xl text-1xl sm:text-1xl md:text-2xl lg:text-3xl md:text-3xl text-white mt-2">
      Find your Web Solutions
    </h1>
    <p className="text-md md:text-lg text-white max-w-2xl mx-auto mt-4"> {/* Increased max-width here */}
      Boost your online presence with our dynamic web solutions. Enhance user experience, save resources, and leverage our expertise in chatbot integration for business growth. 🤖
    </p>
    <button
      onClick={handleViewContact}
      className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition duration-300"
    >
      Book a Meeting Today!
    </button>
  </div>
</div>

  );
};

export default Hero;
