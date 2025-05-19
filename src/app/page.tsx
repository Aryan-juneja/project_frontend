'use client'
import Hero from '@/Components/Hero';
import Plans from '@/Components/Plans';

import React from 'react'

const page = () => {
  return (
    <div className="relative overflow-hidden bg-[#050814] text-white min-h-screen">
      <div className="absolute inset-0 bg-gradient-radial from-[#0F1535] via-[#050814] to-[#050814] opacity-70"></div>
          <Hero />
          <Plans />
        
      </div>

  );
}

export default page
