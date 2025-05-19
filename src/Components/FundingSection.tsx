"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShimmerButton } from "@/Components/magicui/shimmer-button";
import { ArrowUpRight } from 'lucide-react';

const FundingSection = () => {
  return (
    <section className="py-20 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e123a] to-transparent opacity-30 pointer-events-none"></div>
      <div className="relative z-10">
        <motion.p 
          className="bg-neutral-950 border border-neutral-900 text-purple-400 px-4 py-1 rounded-full inline-block mb-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Prop Firm
        </motion.p>
        
        <motion.h2 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          Get Funded Up to <span className="text-purple-500">$10,000</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Prove your skills, get funded, and trade like a pro.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <ShimmerButton className="shadow-2xl bg-purple-600 gap-1">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Get Funded
            </span>
            <ArrowUpRight className="w-5 h-5" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default FundingSection;