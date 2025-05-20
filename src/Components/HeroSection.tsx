import React from 'react';
import BlurText from './BlurText';
import Counter from './Counter';
import WaveAnimation from './WaveAnimation';
import { ArrowRight } from 'lucide-react';
import { WavyBackground } from "./ui/wavy-background";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-[#0a0a18] to-[#12121f] text-white overflow-hidden">
      {/* Top text with blur effect */}
      <div className="mb-3 tracking-wide">
        <BlurText
          text="Payouts"
          className="text-gray-400 uppercase text-sm tracking-widest mb-3"
        />
      </div>

      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
          <BlurText
            text="We've Paid Out Over"
            delay={100}
          />
        </h1>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <BlurText
            text="$1M to Traders"
            delay={300}
          />
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          <BlurText
            text="Your Trust is Our Fuel—Power Up with Zuperior"
            delay={500}
          />
        </p>
      </div>

      {/* Counter with continuously incrementing value */}
      <div className="mt-12 mb-8">
        <Counter
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-300"
          startValue={999156}
          interval={3000}
        />
      </div>

      {/* Wave and button container at bottom */}
      <div className="relative w-full h-[300px] mt-10">
        <WavyBackground
          blur={15}
          speed="slow"
          waveOpacity={0.1}
          className="absolute inset-0"
          containerClassName="absolute inset-0"
          waveWidth={5}
          colors={["#d946ef", "#a855f7", "#7c3aed"]}
        >
          <button className="relative z-10 bg-black/40 backdrop-blur-md border border-white/10 text-white py-3.5 px-7 rounded-full flex items-center justify-center gap-2 hover:bg-black/50 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            Are you Next? <ArrowRight size={18} />
          </button>
        </WavyBackground>
      </div>


    </div>
  );
};

export default HeroSection