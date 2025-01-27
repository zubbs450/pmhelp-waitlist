import React from "react";
import { Slack } from "lucide-react";

const SlackCTA = () => {
  return (
    <div className="mt-20 text-center pb-12">
      <button className="inline-flex items-center justify-center space-x-3 bg-[#4A154B] text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-[#3e1140] transition-colors cursor-pointer text-sm sm:text-base">
        <Slack className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="font-medium">Join our Slack Community</span>
      </button>
      <p className="mt-3 text-sm sm:text-base text-gray-600">
        Connect with fellow product managers and get exclusive insights
      </p>
    </div>
  );
};

export default SlackCTA;