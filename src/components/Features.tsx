import React from "react";
import { BookOpen, Layout, Users } from "lucide-react";

const FEATURES = [
  {
    title: "Real-World Projects",
    description: "Work on actual product cases from leading tech companies",
    icon: BookOpen,
  },
  {
    title: "Expert Mentorship",
    description: "Get guidance from experienced product managers",
    icon: Users,
  },
  {
    title: "Portfolio Building",
    description: "Create a compelling PM portfolio that stands out",
    icon: Layout,
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 px-4 sm:px-6 lg:px-8">
      {FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="relative p-6 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-purple-50">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        )
      })}
    </div>
  );
};

export default Features;