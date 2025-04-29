
import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gamepad className="h-6 w-6 text-game-blue" />
          <span className="font-display font-bold text-xl text-game-blue">Fortune Factory</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-game-blue transition-colors">Features</a>
          <a href="#gameplay" className="text-gray-600 hover:text-game-blue transition-colors">Gameplay</a>
          <a href="#roadmap" className="text-gray-600 hover:text-game-blue transition-colors">Roadmap</a>
        </div>
        
        <div>
          <Button className="bg-game-blue hover:bg-blue-700 text-white rounded-md">
            Play Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
