'use client';
import React from 'react'
import Header from './Header';
import PricingSection from './PricingSection';
import FundingSection from './FundingSection';

const Plans = () => {
  return (
    <div className="min-h-screen bg-[#000] text-white font-sans">
      
      <main className="container mx-auto px-4 py-8">
        <PricingSection />
        <FundingSection />
      </main>
    </div>
  )
}

export default Plans
