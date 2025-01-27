import React from "react";

const Hero = () => {
  return (
    <div className="text-center mb-16 pt-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 pb-4">
        The Complete Path to
        <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent py-2">
          Product Mastery
        </span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600">
        Master product management through hands-on experience. Learn from industry experts and build your portfolio with real-world projects.
      </p>
    </div>
  );
};

export default Hero;