import React from "react";

const RSeries = ({ seriesTitle, subtitle, onPlay, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-20 px-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "400px", // Set this to whatever height fits your design
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>{" "}
      {/* Dark overlay */}
      <div className="relative z-10">
        {" "}
        {/* Ensure text is on top of overlay */}
        <div className="text-red-500 font-bold text-4xl mb-4">R SERIES</div>
        <h1 className="text-white text-6xl font-bold">{seriesTitle}</h1>
        <p className="text-gray-300 text-2xl mt-4">{subtitle}</p>
        <button
          onClick={onPlay}
          className="mt-8 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full text-xl"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default RSeries;
