
import React, { useState } from 'react';
import { Coin, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Resource = {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
};

const ResourcePanel = () => {
  const [resources, setResources] = useState<Resource[]>([
    { name: 'Coins', value: 1000, icon: <Coin className="h-5 w-5" />, color: 'text-yellow-500' },
    { name: 'Stars', value: 5, icon: <Star className="h-5 w-5" />, color: 'text-blue-500' },
    { name: 'Trophies', value: 0, icon: <Trophy className="h-5 w-5" />, color: 'text-purple-500' },
  ]);

  const collectCoins = () => {
    setResources(prev => 
      prev.map(resource => 
        resource.name === 'Coins' 
          ? { ...resource, value: resource.value + 100 } 
          : resource
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="font-bold text-lg mb-4">My Resources</h3>
      
      <div className="flex flex-col gap-4">
        {resources.map((resource) => (
          <div key={resource.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full bg-gray-100 ${resource.color}`}>
                {resource.icon}
              </div>
              <span className="font-medium text-gray-800">{resource.name}</span>
            </div>
            <span className={`font-bold ${resource.color}`}>
              {resource.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Button 
          onClick={collectCoins}
          className="w-full bg-game-gold hover:bg-yellow-500 text-white"
        >
          Collect Daily Bonus
        </Button>
      </div>
    </div>
  );
};

export default ResourcePanel;
