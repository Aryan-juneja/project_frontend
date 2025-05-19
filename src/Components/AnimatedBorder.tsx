import React from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  highlight?: boolean;
}

const AnimatedBorder = ({ children, highlight = false }: AnimatedBorderProps) => {
  return (
    <div className={`relative rounded-lg overflow-hidden ${highlight ? 'z-10 scale-105' : ''}`}>
      {/* Animated border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-shine" />
      
      {/* Inner content container */}
      <div className="relative m-[1px] rounded-lg overflow-hidden bg-[#0B0F19]">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;