'use client';

import React, { useState, useEffect } from 'react';
import { BorderBeam } from "@/Components/magicui/border-beam";
import { ShineBorder } from "@/Components/magicui/shine-border";
// Enhanced moving spotlight animation for center card
const MovingSpotlight = () => {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev + 1) % 400);
    }, 20);
    
    return () => clearInterval(interval);
  }, []);
  
  // Creates a position that moves around the border
  const getSpotlightPosition = () => {
    const pos = position;
    
    // Top edge
    if (pos < 100) {
      return { top: 0, left: `${pos}%` };
    }
    // Right edge
    else if (pos < 200) {
      return { top: `${pos - 100}%`, right: 0 };
    }
    // Bottom edge
    else if (pos < 300) {
      return { bottom: 0, right: `${300 - pos}%` };
    }
    // Left edge
    else {
      return { bottom: `${400 - pos}%`, left: 0 };
    }
  };
  
  return (
    <div 
      className="absolute w-[30%] h-[30%] rounded-full blur-md opacity-70"
      style={{
        background: "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0) 70%)",
        ...getSpotlightPosition()
      }}
    />
  );
};

// HoverBorderGradient component (simplified version)


const PricingSection = () => {
  const pricingData = [
    {
      id: 'vintage',
      name: 'Vintage',
      description: 'Perfect for balanced, all-level traders looking for consistency and solid growth.',
      features: {
        initial: '$10%',
        spread: 'from 0.2 pips',
        fees: 'No Commission',
        leverage: '1:Unlimited',
        lot: '0.01',
        execution: '200 trades during peak hours',
        open: 'Unlimited',
        threshold: '0%',
        margin: '30%',
        swap: '0%',
        risk: 'Moderate'
      }
    },
    {
      id: 'cent',
      name: 'Cent',
      highlight: true,
      description: 'Designed for beginners ready to step into the trading world with minimal risk.',
      features: {
        initial: '$10',
        spread: 'from 0.3 pips',
        fees: 'Zero Commission',
        leverage: '1:Unlimited',
        lot: 'Same',
        execution: '200 trades during peak hours',
        open: 'Unlimited',
        threshold: '0%',
        margin: '30%',
        swap: '0%',
        risk: 'Low'
      }
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Ideal for experienced traders seeking precision, speed, and high-stakes performance.',
      features: {
        initial: '$500',
        spread: 'from 0.1 pips',
        fees: 'No Commission',
        leverage: '1:Unlimited',
        lot: 'Same',
        execution: '200 trades during peak hours',
        open: 'Unlimited',
        threshold: '0%',
        margin: '30%',
        swap: '0%',
        risk: 'High'
      }
    }
  ];

  const featureRows = [
    { id: 'who', name: 'Who it\'s For' },
    { id: 'initial', name: 'Initial Capital Requirement' },
    { id: 'spread', name: 'Spread Advantage' },
    { id: 'fees', name: 'Trading Fees' },
    { id: 'leverage', name: 'Leverage Capacity' },
    { id: 'lot', name: 'Minimum Lot Size' },
    { id: 'execution', name: 'Trade Execution Limit' },
    { id: 'open', name: 'Open Position Capacity' },
    { id: 'threshold', name: 'Stop Out Threshold' },
    { id: 'margin', name: 'Margin Call Activation' },
    { id: 'swap', name: 'Swap Policy' },
    { id: 'risk', name: 'Risk Exposure' }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="text-center mb-12">
        <div className="bg-neutral-950 border border-neutral-900 text-purple-400 px-4 py-1 rounded-full inline-block mb-6 text-sm">
          Compare Plans
        </div>
        <h1 className="text-5xl font-bold mb-2">
          Compare your <span className="text-purple-500">Zuper</span> plan
        </h1>
        <p className="text-gray-400">Flexible Deposits for Every Trader</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-4">
        {/* Feature Labels Column */}
        <div className="space-y-8">
          <div className="h-24"></div> {/* Empty space for card headers */}
          {featureRows.map((feature) => (
            <div
              key={feature.id}
              className="text-gray-400 h-12 flex items-center text-sm"
            >
              {feature.name}
            </div>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {pricingData.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              featureRows={featureRows} 
              isCenter={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Plan card component
type Plan = {
  id: string;
  name: string;
  description: string;
  highlight?: boolean;
  features: { [key: string]: string };
};

type FeatureRow = {
  id: string;
  name: string;
};

interface PlanCardProps {
  plan: Plan;
  featureRows: FeatureRow[];
  isCenter: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, featureRows, isCenter }) => {
  // Get feature value or description for "Who it's For"
  const getFeatureValue = (featureId: string): string | undefined => {
    if (featureId === 'who') {
      return plan.description;
    }
    return plan.features[featureId];
  };

  // Card content component to avoid duplication
  const CardContent = () => (
    <div className={`h-full rounded-xl overflow-hidden ${isCenter ? 'bg-black' : 'bg-gradient-to-b from-purple-850/90 to-purple-900/50'}`}>
      <div className="p-6 text-center border-b border-gray-700/40">
        <h3 className="text-2xl font-semibold mb-2">Zuper {plan.name}</h3>
        <p className="text-sm text-gray-400 h-12">{plan.description}</p>
      </div>
      
      <div className="space-y-8 pt-8">
        {featureRows.slice(1).map((feature) => (
          <div 
            key={feature.id} 
            className="text-center h-12 flex items-center justify-center text-sm border-b border-gray-700/10 px-4"
          >
            {getFeatureValue(feature.id)}
          </div>
        ))}
      </div>
    </div>
  );

  // If center card, use both animations
  if (isCenter) {
    return (
      <div className="relative transform scale-105 z-10">
        
          <div className="relative h-full">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
             
            <CardContent />
            <BorderBeam duration={9} size={300} />
            {/* <ShineBorder shineColor={["#fff"]} /> */}
          </div>
        
      </div>
      </div>
    );
  }

  // Regular card
  return (
    <div className="relative h-full">
      <CardContent />
    </div>
  );
};

export default PricingSection;