import React from "react";
import { Slack } from "lucide-react";

const SLACK_INVITE_URL = "https://join.slack.com/t/pmhelpco/shared_invite/zt-2um26u3u8-lAmiM1K3gH9mWsdxyR5Q7A";

const SlackCTA = () => {
  return (
    <div className="mt-20 text-center pb-12">
      <a 
        href={SLACK_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-3 bg-[#4A154B] text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-[#3e1140] transition-colors cursor-pointer text-sm sm:text-base"
      >
        <Slack className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="font-medium">Join our Slack Community</span>
      </a>
    </div>
  );
};

export default SlackCTA;