import React from "react";

function Baptism() {
  return (
    <div
      className="bg-cover bg-center relative font-sans my-12"
      style={{
        backgroundImage: "url('/assets/baptism.jpeg')",
        height: "300px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="flex justify-end items-center h-full">
        <div className="text-white z-10 text-end px-12">
          <p className="font-semibold text-3xl md:text-5xl">
            Baptism into Christ is Important
          </p>
          <p className="font-semibold text-xl md:text-3xl">
            For the remission of your sins
          </p>
          <p className="font-semibold text-xl md:text-3xl">
            1 Corinthians 12:13
          </p>
        </div>
      </div>
    </div>
  );
}

export default Baptism;
