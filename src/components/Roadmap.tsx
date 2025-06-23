
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Image, Zap, Facebook, BarChart, Brain, TrendingUp, Palette } from "lucide-react";

const Roadmap = () => {
  const upcomingFeatures = [
    {
      icon: Sparkles,
      title: "Company-Centric Ads",
      description: "Generate ads tailored specifically to your company's brand voice, values, and unique selling propositions",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Image,
      title: "Custom Template Generator",
      description: "Upload your images and prompts to create custom ad templates that match your vision perfectly",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Bulk Creative Generation",
      description: "Generate hundreds of ad variations in minutes to scale your advertising campaigns effortlessly",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Facebook,
      title: "Facebook Ad Integration",
      description: "Direct integration with your Facebook Ad account for seamless campaign creation and management",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BarChart,
      title: "Creative Performance Analysis",
      description: "Deep insights into your ad performance with AI-powered recommendations for optimization",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Brain,
      title: "Complete Ad Copy Suite",
      description: "Full-scale ad copy generation including headlines, descriptions, CTAs, and A/B test variations",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50"
    },
    {
      icon: TrendingUp,
      title: "Competitor Intelligence",
      description: "Get insights into competitor strategies with predictive analysis to stay ahead of the market",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50"
    },
    {
      icon: Palette,
      title: "Enhanced User Experience",
      description: "Completely redesigned interface with intuitive workflows and lightning-fast performance",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What's Coming to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AdGenesis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building the most advanced AI advertising platform. Here's what's in our pipeline to revolutionize your marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {upcomingFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 ${feature.bgColor} relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <Sparkles className="w-6 h-6 text-blue-600 mr-3" />
            <span className="text-gray-800 font-semibold text-lg">
              And many more exciting features coming soon...
            </span>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-600 text-lg">
              Have a feature request? <a href="mailto:hello@adgenesis.com" className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4 hover:underline-offset-2 transition-all">Let us know!</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
