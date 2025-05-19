import React from 'react';
import { TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold">TradeX</span>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
            <li><a href="#" className="text-purple-400 font-medium">Compare Plans</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Resources</a></li>
          </ul>
        </nav>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;