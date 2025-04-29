
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-game-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Fortune Factory</h4>
            <p className="text-gray-400 text-sm">
              Build your virtual empire and turn digital assets into real success.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="font-semibold mb-4">Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#gameplay" className="hover:text-white transition-colors">Gameplay</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="font-semibold mb-4">Newsletter</h5>
            <p className="text-sm text-gray-400 mb-2">
              Subscribe for early access and updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-gray-800 text-white rounded-l px-3 py-2 text-sm flex-grow focus:outline-none"
              />
              <button className="bg-game-blue rounded-r px-3 py-2 text-sm hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Fortune Factory. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
