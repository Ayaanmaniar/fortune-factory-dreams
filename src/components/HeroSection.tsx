
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-game-dark leading-tight">
              Build Your Virtual <span className="text-game-blue">Empire</span> in Fortune Factory
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Create, trade, and grow your virtual business in an immersive economy. Start small and expand into a billion-dollar empire with real rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-game-blue hover:bg-blue-700 text-white gap-2 group">
                Start Building
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-game-blue text-game-blue hover:bg-blue-50">
                Watch Tutorial
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-green-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-500">
                Join 10,000+ players already building
              </span>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full h-80 md:h-96 bg-game-blue/10 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-game-blue/20 rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-float">
                  <div className="w-24 h-24 bg-game-gold animate-pulse-gold rounded-xl shadow-lg transform rotate-45 absolute -top-10 left-10"></div>
                  <div className="w-16 h-16 bg-game-green rounded-lg shadow-lg transform -rotate-12 absolute top-8 -left-10"></div>
                  <div className="w-20 h-20 bg-game-light-blue rounded-lg shadow-lg transform rotate-12 absolute top-20 left-20"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-game-gold/20 rounded-full blur-xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
