import React, { useRef } from 'react';
import ResourceCard from './ResourceCard';
import { resourcesData, ResourceCard as ResourceCardType } from '../data/resourcesData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ResourcesCardsProps {
  activeCategory: string;
}

const ResourcesCards: React.FC<ResourcesCardsProps> = ({ activeCategory }) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const isIntersecting = useIntersectionObserver({
    ref: containerRef,
    threshold: 0.1,
  });

  const filteredResources = activeCategory === 'all' 
    ? resourcesData 
    : resourcesData.filter(card => card.category === activeCategory);

  return (
    <div ref={containerRef} className="mt-8 relative">
      <div className="absolute right-0 -top-20 flex space-x-2">
        <button 
          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
          aria-label="Previous"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
          aria-label="Next"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredResources.map((card, index) => (
          <ResourceCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesCards;