import React from 'react';

interface WaveAnimationProps {
  className?: string;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {/* Main glow effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* Bright center core */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-radial from-pink-500/50 via-purple-500/30 to-transparent"></div>
        
        {/* Layered glows */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-radial from-pink-400/40 via-purple-400/20 to-transparent transform scale-125"></div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-radial from-white/30 via-pink-300/20 to-transparent transform scale-150"></div>
        
        {/* Animated pulse layers */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-radial from-pink-300/30 via-purple-300/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-radial from-pink-200/25 via-transparent to-transparent animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default WaveAnimation;