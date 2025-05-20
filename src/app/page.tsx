'use client'
import Hero from '@/Components/Hero';
import Plans from '@/Components/Plans';
import TradingSection from '@/Components/Trading-Section';
// import Wavy from '../Components/Wavy';

import React from 'react'
import HeroSection from '@/Components/HeroSection';
import Wavy from '@/Components/Wavy';

const page = () => {
  return (
    <div className="relative overflow-hidden bg-[#050814] text-white min-h-screen">
      <div className="absolute inset-0 bg-gradient-radial from-[#0F1535] via-[#050814] to-[#050814] opacity-70"></div>
          <Hero />
          <Plans />
          <TradingSection />
          {/* <HeroSection/> */}
          <Wavy/>
      </div>

  );
}

export default page
