
import React from "react";
import { Sparkles, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="text-blue-400 w-8 h-8 mr-3" />
              <span className="text-2xl font-bold">AdGenesis</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 AdGenesis. All rights reserved.
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-blue-400 w-5 h-5 mr-2" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
              <a href="mailto:hello@adgenesis.com" className="text-gray-400 hover:text-white transition-colors">
                hello@adgenesis.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
