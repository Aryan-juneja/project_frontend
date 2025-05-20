import React, { useState, useEffect, useRef } from 'react';
import type { JSX } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // optional custom tag (like span/div)
}

const BlurText: React.FC<BlurTextProps> = ({ text, delay = 0, className = '', as = 'span' }) => {
  const [isBlurred, setIsBlurred] = useState(true);
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsBlurred(false);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  const Component = as as React.ElementType;

  return (
    <Component
      ref={textRef as any}
      className={`${className} transition-all duration-700 ${
        isBlurred ? 'blur-sm opacity-60' : 'blur-0 opacity-100'
      }`}
    >
      {text}
    </Component>
  );
};

export default BlurText;
