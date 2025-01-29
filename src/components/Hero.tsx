import React from "react";

const Hero = () => {
  return (
    <div className="text-center mb-16 pt-12">
      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 pb-4">
        Product Management
        <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent py-2">
          Virtual Work Experiences
        </span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600">
        Transform your product career with real-world simulations. Work on actual challenges from leading tech companies, graduate with a portfolio that proves your PM skills, and walk into interviews with battle-tested confidence
      </p>
    </div>
  );
};

export default Hero;