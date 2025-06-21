
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Upload, Sparkles, Camera } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Shopify Integration",
      description: "Seamlessly connect your Shopify store and automatically sync product data for instant ad generation.",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Upload,
      title: "CSV Upload",
      description: "No Shopify? No problem. Upload your product data via CSV in our optimized format for quick setup.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Sparkles,
      title: "AI Ad Frameworks",
      description: "Choose from 50+ proven advertising frameworks powered by AI to create high-converting ad copy.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Camera,
      title: "AI Asset Generation",
      description: "Generate stunning product photos with models in any pose or setting using our advanced AI technology.",
      color: "text-orange-600 bg-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Scale Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> E-commerce Ads</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From product integration to AI-generated assets, AdGenesis provides the complete toolkit for modern e-commerce advertising.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
