import React from "react";

function HeroSection() {
  return (
    <div
      className="bg-cover bg-center relative font-sans"
      style={{
        backgroundImage: "url('/assets/churchGathering.jpeg')",
        height: "500px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="flex justify-center items-center h-full">
        <div className="text-white text-center z-20">
          <p className="font-semibold text-3xl md:text-5xl">Church of Christ</p>
          <p className="font-semibold text-xl md:text-3xl">Anua Obio, Uyo</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
