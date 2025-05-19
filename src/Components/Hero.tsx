'use client'
import React, { useEffect, useRef } from 'react';
import { Button } from "@/Components/ui/button"
import { TimelineDemo } from './TimelineD';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-16 pb-20 md:pt-16 md:pb-32 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d946ef] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050814] to-transparent"></div>
      
      {/* Wave background element */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-[#0a0e1e] opacity-30">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,218.7C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Button variant='outline'  className=" animate-fade-in font-medium mb-6 opacity-0 bg-black border-neutral-950 text-[#cd6bdc]">Our Process</Button>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 opacity-0 transition-opacity duration-1000 ease-out"
        >
          Become a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] to-[#8b5cf6]">Zuperior Pro</span> in sec...
        </h1>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-300">
          🚀 Sign up. Fund. Trade.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in animation-delay-500">
          <TimelineDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;