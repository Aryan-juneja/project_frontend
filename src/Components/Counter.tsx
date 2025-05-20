import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  startValue?: number;
  incrementBy?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  interval?: number;
}

const Counter: React.FC<CounterProps> = ({
  startValue = 999156,
  incrementBy = 1,
  prefix = '$',
  suffix = '+',
  className = '',
  interval = 2000, // Increment every 2 seconds
}) => {
  const [count, setCount] = useState(startValue);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    let timerId: number | undefined;
    
    if (isVisible) {
      timerId = window.setInterval(() => {
        setCount(prevCount => prevCount + incrementBy);
      }, interval);
    }
    
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [incrementBy, interval, isVisible]);

  // Format number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return (
    <div ref={counterRef} className={className}>
      {prefix}{formattedCount}{suffix}
    </div>
  );
};

export default Counter;