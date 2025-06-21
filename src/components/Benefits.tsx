
import React from "react";
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Reduce ad creation time from hours to minutes",
    "Generate high-quality product photos with AI models",
    "Access 50+ proven advertising frameworks",
    "Seamless integration with your existing workflow",
    "Professional-grade assets without expensive photoshoots",
    "Scale your advertising efforts without scaling your team"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> E-commerce Strategy</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Say goodbye to expensive agencies and time-consuming photoshoots. AdGenesis empowers your team to create professional-grade advertising materials in-house.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
                <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="opacity-90">Join thousands of e-commerce brands already using AdGenesis</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Setup Time</span>
                  <span className="text-green-600 font-bold">&lt; 5 minutes</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">First Ad Generated</span>
                  <span className="text-green-600 font-bold">&lt; 2 minutes</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">ROI Improvement</span>
                  <span className="text-green-600 font-bold">Up to 300%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
