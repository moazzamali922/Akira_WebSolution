import React from "react";
import robot1 from "./assets/pictures/bannerWeb.png";

const OtherHero = () => {
  return (
    <div className="w-full mx-auton mb-6">
      {" "}
      <div className="max-h-[500px] relative">
        <div
          className="absolute w-full h-full flex flex-col justify-center items-center z-10"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        >
          {" "}
          <h3 className="text-center text-1xl sm:text-1xl md:text-4xl lg:text-5xl  text-white">
            The <span className="text-red-500">Best</span>
          </h3>
          <h3 className="text-center text-1xl sm:text-1xl md:text-4xl lg:text-5xl  text-white">
            Solutions <span className="text-red-500">Delivered</span>
          </h3>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={robot1}
          alt="Innovative Solutions"
        />{" "}
      </div>
    </div>
  );
};

export default OtherHero;
