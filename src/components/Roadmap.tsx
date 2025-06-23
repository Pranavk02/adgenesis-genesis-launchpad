
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Brain, Globe, Palette, BarChart } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      status: "In Development",
      features: [
        {
          icon: Brain,
          title: "Advanced AI Models",
          description: "Integration with GPT-4 and Claude for even more sophisticated ad copy generation",
          color: "text-purple-600 bg-purple-100"
        },
        {
          icon: Palette,
          title: "Brand Kit Integration",
          description: "Upload your brand assets and ensure all generated content matches your brand guidelines",
          color: "text-blue-600 bg-blue-100"
        }
      ]
    },
    {
      quarter: "Q2 2024",
      status: "Planned",
      features: [
        {
          icon: Globe,
          title: "Multi-Language Support",
          description: "Generate ads in 20+ languages to reach global markets effectively",
          color: "text-green-600 bg-green-100"
        },
        {
          icon: Zap,
          title: "Real-time A/B Testing",
          description: "Built-in A/B testing framework to optimize your ad performance automatically",
          color: "text-orange-600 bg-orange-100"
        }
      ]
    },
    {
      quarter: "Q3 2024",
      status: "Research",
      features: [
        {
          icon: BarChart,
          title: "Performance Analytics",
          description: "Deep analytics dashboard to track ROI and optimize your advertising strategy",
          color: "text-indigo-600 bg-indigo-100"
        },
        {
          icon: Clock,
          title: "Auto-Publishing",
          description: "Schedule and automatically publish ads across multiple platforms",
          color: "text-teal-600 bg-teal-100"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development": return "bg-yellow-100 text-yellow-800";
      case "Planned": return "bg-blue-100 text-blue-800";
      case "Research": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What's Coming Next to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AdGenesis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're constantly innovating to bring you the most advanced AI-powered advertising tools. Here's what's on our roadmap.
          </p>
        </div>
        
        <div className="space-y-12">
          {roadmapItems.map((quarter, quarterIndex) => (
            <div key={quarterIndex} className="relative">
              {/* Timeline line */}
              {quarterIndex < roadmapItems.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gray-300 -z-10"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Quarter indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {quarter.quarter}
                  </div>
                  <span className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(quarter.status)}`}>
                    {quarter.status}
                  </span>
                </div>
                
                {/* Features */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quarter.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
                      <CardHeader className="pb-4">
                        <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-3`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
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
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Have a feature request? <a href="mailto:hello@adgenesis.com" className="text-blue-600 hover:text-blue-800 font-medium underline">Let us know!</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
