import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* PMHELP Column */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">PMHELP</h3>
            <nav className="flex flex-col space-y-3">
              <a href="https://www.pmhelp.co/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="https://www.pmhelp.co/about-us" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="https://www.pmhelp.co/learn" className="text-gray-600 hover:text-gray-900">Learn</a>
              <a href="https://www.pmhelp.co/community" className="text-gray-600 hover:text-gray-900">Community</a>
              <a href="https://www.pmhelp.co/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
            </nav>
          </div>

          {/* CONTACT Column */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">CONTACT</h3>
            <nav className="flex flex-col space-y-3">
              <a href="mailto:hello@pmhelp.co" className="text-gray-600 hover:text-gray-900">Email</a>
              <a href="https://www.instagram.com/pmhelp.co" className="text-gray-600 hover:text-gray-900">Instagram</a>
              <a href="https://www.linkedin.com/company/pmhelpco/" className="text-gray-600 hover:text-gray-900">Linkedin</a>
              <a href="https://pmhelpco.slack.com/join/shared_invite/zt-2qmqeof4g-2i6iFam9_VtivCyDVZ4k0A#/shared-invite/email" className="text-gray-600 hover:text-gray-900">Slack</a>
              <a href="https://x.com/pmhelpco/" className="text-gray-600 hover:text-gray-900">Twitter (X)</a>
            </nav>
          </div>
        </div>

        <div className="mt-16">
          <Separator className="mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4 text-sm text-gray-600">
              <a href="https://www.pmhelp.co/terms-and-condition" className="hover:text-gray-900">Terms & Conditions</a>
              <a href="https://www.pmhelp.co/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
            </div>
            <p className="text-sm text-gray-600">Copyright © 2025 pmhelp. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;