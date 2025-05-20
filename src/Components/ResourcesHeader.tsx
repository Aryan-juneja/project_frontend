import React, { useRef } from 'react';
import { categories } from '../data/resourcesData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ResourcesHeaderProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ResourcesHeader: React.FC<ResourcesHeaderProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  const headerRef = useRef<HTMLDivElement>(null!);
  const isIntersecting = useIntersectionObserver({
    ref: headerRef,
    threshold: 0.2,
  });

  return (
    <div 
      ref={headerRef} 
      className="mb-8"
    >
      <div 
        className={`transform transition-all duration-1000 ml-24 ${
          isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <p className="text-purple-500 font-medium mb-2">Resources</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Learn while <span className="text-purple-500">Trading</span>
        </h2>
        <p className="text-gray-400 mb-8">Learn & Trade - Master Markets Like a Pro</p>
      </div>

      <div 
        className={`flex space-x-6 border-b border-gray-800 transition-all duration-1000 transform delay-300 ${
          isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`pb-2 px-1 text-sm font-medium transition-colors relative ${
              activeCategory === category.id
                ? 'text-purple-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {category.name}
            {activeCategory === category.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourcesHeader;