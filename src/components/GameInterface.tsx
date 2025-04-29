
import React from 'react';
import ResourcePanel from './ResourcePanel';
import BuildingArea from './BuildingArea';
import { Button } from '@/components/ui/button';
import { ArrowUp, Check } from 'lucide-react';

const GameInterface = () => {
  return (
    <section className="py-16 bg-gray-50" id="gameplay">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-game-dark mb-4">
            Experience the Gameplay
          </h2>
          <p className="text-lg text-gray-600">
            Build, expand and optimize your virtual businesses in our immersive economic simulation.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-game-blue text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Fortune Factory Simulator</h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white/10">
                Save
              </Button>
              <Button size="sm" className="bg-white text-game-blue hover:bg-gray-100">
                <Check className="h-4 w-4 mr-1" /> Upgrade
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 p-6">
            <div className="md:col-span-1">
              <ResourcePanel />
            </div>
            <div className="md:col-span-2">
              <BuildingArea />
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Demo Version 0.1 - Billions await in the full game!
              </div>
              <Button size="sm" className="bg-game-blue hover:bg-blue-700 text-white gap-1">
                <ArrowUp className="h-3 w-3" /> Unlock Full Version
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInterface;
