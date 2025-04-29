
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

type BuildingTile = {
  id: number;
  type: string | null;
  level: number;
  color: string;
};

const BuildingArea = () => {
  const [tiles, setTiles] = useState<BuildingTile[]>(
    Array(16).fill(null).map((_, index) => ({
      id: index,
      type: null,
      level: 0,
      color: 'bg-gray-200',
    }))
  );
  
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  
  const buildings = [
    { type: 'factory', name: 'Factory', color: 'bg-blue-500' },
    { type: 'shop', name: 'Shop', color: 'bg-green-500' },
    { type: 'bank', name: 'Bank', color: 'bg-game-gold' },
  ];
  
  const handleTileClick = (tileId: number) => {
    if (!selectedBuilding) return;
    
    setTiles(prevTiles => 
      prevTiles.map(tile => 
        tile.id === tileId 
          ? { 
              ...tile, 
              type: selectedBuilding, 
              level: 1,
              color: buildings.find(b => b.type === selectedBuilding)?.color || 'bg-gray-200'
            } 
          : tile
      )
    );
  };

  const handleUpgrade = (tileId: number) => {
    setTiles(prevTiles => 
      prevTiles.map(tile => 
        tile.id === tileId && tile.type 
          ? { ...tile, level: Math.min(tile.level + 1, 3) } 
          : tile
      )
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="font-bold text-lg mb-4">Building Area</h3>
      
      <div className="flex gap-4 mb-6">
        {buildings.map((building) => (
          <button
            key={building.type}
            className={`p-2 rounded ${selectedBuilding === building.type ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedBuilding(building.type)}
          >
            <div className={`w-12 h-12 ${building.color} rounded flex items-center justify-center text-white`}>
              {building.type.charAt(0).toUpperCase()}
            </div>
            <div className="text-xs mt-1">{building.name}</div>
          </button>
        ))}
      </div>
      
      <div className="game-grid bg-gray-100 rounded-md p-2">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`game-tile ${tile.color} rounded cursor-pointer flex items-center justify-center relative`}
            onClick={() => handleTileClick(tile.id)}
          >
            {tile.type ? (
              <>
                <span className="font-bold text-white">
                  {tile.type.charAt(0).toUpperCase()}
                  <sub className="text-xs">{tile.level}</sub>
                </span>
                <button 
                  className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUpgrade(tile.id);
                  }}
                >
                  <Plus className="w-3 h-3 text-gray-600" />
                </button>
              </>
            ) : (
              <span className="text-gray-400 text-xs">Empty</span>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-gray-500 italic">
        Select a building type, then click on a tile to place it.
      </div>
    </div>
  );
};

export default BuildingArea;
