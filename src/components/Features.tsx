import React from "react";
import { BookOpen, Rocket, MessageSquare } from "lucide-react";

const FEATURES = [
  {
    title: "Learn by Doing, Not Just Reading",
    description: "Work on actual product challenges modeled after real company scenarios. Build a portfolio of PRDs, roadmaps, and strategic decisions that showcase your PM abilities.",
    icon: BookOpen,
  },
  {
    title: "Fast-Track Your PM Career",
    description: "Skip the catch-22 of needing experience to get experience. Complete company-sponsored work simulations and get noticed by hiring managers actively seeking talent.",
    icon: Rocket,
  },
  {
    title: "Real Feedback, Real Growth",
    description: "Receive structured feedback on your work from industry professionals. Understand exactly what companies look for in product managers and build those skills deliberately.",
    icon: MessageSquare,
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 px-4 sm:px-6 lg:px-8">
      {FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="relative p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-purple-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-purple-50 shrink-0">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
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