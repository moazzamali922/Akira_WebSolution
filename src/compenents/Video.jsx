import React from "react";
import AkiraVideo from "./assets/videos/AkiraEngagement.mp4";

const Video = ({ title = "AI Solutions Video" }) => {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-full px-4 py-8 max-w-screen-lg mx-auto">
        <h2 className="text-center  text-1xl md:text-2xl lg:text-1xl  mb-4">
          Revolutionizing Digital with Akira Web Solution
        </h2>
        <video
          src={AkiraVideo}
          className="w-full h-auto rounded-md shadow-lg"
          controls
          title={title} // Accessible title
        />
      </div>
    </div>
  );
};

export default Video;
