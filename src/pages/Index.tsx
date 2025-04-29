
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GameInterface from '@/components/GameInterface';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Heart, Gamepad, Coin } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Gamepad className="h-8 w-8 text-game-blue" />,
      title: "Virtual Business Simulator",
      description: "Build and manage your own virtual businesses. Start small, strategize, and expand your empire."
    },
    {
      icon: <Coin className="h-8 w-8 text-game-gold" />,
      title: "Real Economic Ecosystem",
      description: "Trade assets with real players, navigate market dynamics, and make strategic investments."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Community-Driven Growth",
      description: "Join forces with other players, form business alliances, and unlock collaborative achievements."
    }
  ];

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation Launch",
      description: "Core gameplay, basic trading systems, and virtual asset creation.",
      status: "Live",
      color: "bg-green-500"
    },
    {
      phase: "Phase 2",
      title: "Economic Expansion",
      description: "Advanced market dynamics, secondary marketplaces, and business collaborations.",
      status: "Coming Q3",
      color: "bg-blue-500"
    },
    {
      phase: "Phase 3",
      title: "Global Ecosystem",
      description: "Cross-platform integration, real-world rewards, and enterprise partnerships.",
      status: "Planned 2026",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-game-dark mb-4">
              Why Fortune Factory Will Make Billions
            </h2>
            <p className="text-lg text-gray-600">
              Our unique approach combines proven gaming mechanics with real economic value creation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-game-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-game-blue hover:bg-blue-700 text-white">
              Explore All Features
            </Button>
          </div>
        </div>
      </section>
      
      <GameInterface />
      
      {/* Roadmap Section */}
      <section className="py-16 bg-white" id="roadmap">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-game-dark mb-4">
              Path to $1 Billion
            </h2>
            <p className="text-lg text-gray-600">
              Our strategic roadmap to creating a game-changing platform with real economic impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white font-bold shrink-0`}>
                  {index + 1}
                </div>
                
                <div className="ml-6 p-6 bg-white rounded-lg shadow-md border border-gray-200 flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm font-medium text-gray-500">{item.phase}</span>
                      <h3 className="text-xl font-bold mb-2 text-game-dark">{item.title}</h3>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-game-gold hover:bg-yellow-500 text-white gap-2 group">
              Join Early Access
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-game-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Fortune?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of players already creating value in our virtual economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-game-blue hover:bg-gray-100 gap-2">
                <Check className="h-5 w-5" />
                Start Playing Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Join Our Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
