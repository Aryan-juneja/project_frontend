"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import { Button } from "./button";
import { Button } from "../ui/moving-border";

import { ArrowUpRight } from 'lucide-react';
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div
      className="w-full bg-dark dark:bg-neutral-950 font-sans px-4 md:px-8"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-6xl mx-auto py-20">
        {/* Static Transparent Line Background */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-gray-700 opacity-30 -z-10" />
        
        {/* Animated Progress Line */}
        <motion.div
          style={{
            height: heightTransform,
          }}
          className="absolute top-0 left-1/2 w-[2px] -translate-x-1/2 bg-white z-0"
        />

        {/* Timeline Entries */}
        {data.map((item, index) => {
          const isLeft = index % 2 !== 0;
          return (
            <div
              key={index}
              className={`relative mb-20 md:mb-32 flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Background Title (Light Grey) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-dark dark:bg-neutral-950 px-4">
                <div className="text-gray-500 text-xl font-medium whitespace-nowrap opacity-40">
                  {item.title}
                </div>
              </div>

              {/* Foreground Title (White) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-dark dark:bg-neutral-950 px-4">
                <div className="text-white text-3xl font-medium whitespace-nowrap">
                  {item.title}
                </div>
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 p-6 md:p-10 ${
                  isLeft ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"
                }`}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
      <Button
      borderRadius="1rem"
      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-purple-500/50 text-white font-semibold transition-all duration-300"
     
      
    >
      <span className="flex items-center gap-2">
        Open FREE Account
        <ArrowUpRight className="w-5 h-5" />
      </span>
    </Button>
      </div>
    </div>
  );
};