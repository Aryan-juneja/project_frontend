import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ResourceCard as ResourceCardType } from '../data/resourcesData';

interface ResourceCardProps {
  card: ResourceCardType;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ card, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver({
    ref: cardRef as React.RefObject<HTMLElement>,
    threshold: 0.2,
  });


  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg transition-all duration-1000 transform 
      ${isIntersecting 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-20'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="bg-gray-900 h-full flex flex-col rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={card.image} 
            alt={card.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-gray-900 to-gray-950">
          <p className="text-gray-400 text-sm mb-2">{card.readTime}</p>
          <h3 className="text-white text-lg font-medium mb-2">{card.title}</h3>
          <div className="mt-auto">
            <a href="#" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;