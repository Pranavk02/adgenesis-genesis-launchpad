
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.google.com/", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-5 h-5 bg-white rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-white w-8 h-8 mr-3" />
            <span className="text-white font-semibold text-lg">Ready to Transform Your Ads?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Start Creating Professional Ads
            <br />
            <span className="text-blue-200">in Minutes, Not Hours</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of e-commerce brands already using AdGenesis to scale their advertising efforts with AI-powered creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              onClick={handleRegisterClick}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Generate Now - It&apos;s Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="text-blue-200 text-sm">
            ✨ No credit card required • ⚡ Setup in under 5 minutes • 🚀 Start generating ads immediately
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
