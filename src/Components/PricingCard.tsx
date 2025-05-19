import React from 'react';
import { PlanType } from '../types';
import AnimatedBorder from './AnimatedBorder';

interface PricingCardProps {
  plan: PlanType;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  const { name, description, price, spreadValue, highlight } = plan;

  return (
    <AnimatedBorder highlight={highlight}>
      <div className="bg-gray-900 bg-opacity-60 p-8 h-full flex flex-col">
        <h3 className="text-2xl font-bold mb-4">Zuper {name}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        
        <div className="mb-8">
          <div className="text-xl font-bold">${price}</div>
          <div className="text-sm text-gray-400 mt-2">
            from {spreadValue} pips
          </div>
        </div>
        
        <div className="mt-auto">
          <button className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors font-medium">
            Start Trading
          </button>
        </div>
      </div>
    </AnimatedBorder>
  );
};

export default PricingCard;