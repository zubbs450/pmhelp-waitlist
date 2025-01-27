import React from "react";

const FEATURES = [
  {
    title: "Real-World Projects",
    description: "Work on actual product cases from leading tech companies",
  },
  {
    title: "Expert Mentorship",
    description: "Get guidance from experienced product managers",
  },
  {
    title: "Portfolio Building",
    description: "Create a compelling PM portfolio that stands out",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className="relative p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;