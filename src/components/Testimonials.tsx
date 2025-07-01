
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "Fashion Forward",
      content: "AdGenesis reduced our ad creation time by 90%. We're now able to test 10x more creative variations and our ROAS has improved dramatically.",
      rating: 5,
      avatar: "SC",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "E-commerce Manager",
      company: "TechGear Pro",
      content: "The AI-generated product photos are incredible. We saved thousands on photoshoots and can now create assets for our entire catalog in hours.",
      rating: 5,
      avatar: "MR",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Thompson",
      role: "Growth Marketing Lead",
      company: "Home & Garden Co",
      content: "The Shopify integration is seamless. Our team can now focus on strategy instead of manual ad creation. Game-changer for our marketing efforts.",
      rating: 5,
      avatar: "ET"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> E-commerce Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how AdGenesis is transforming the way businesses create and scale their advertising efforts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className={`w-12 h-12 ${index === 2 ? 'bg-gradient-to-br from-gray-400 to-gray-500' : 'bg-gradient-to-br from-blue-500 to-purple-600'} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                      {testimonial.avatar}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
