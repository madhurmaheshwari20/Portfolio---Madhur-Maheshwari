
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60] pointer-events-none">
      <div 
        className="h-full bg-neutral-900 transition-all duration-150 ease-out" 
        style={{ width: `${width}%` }} 
      />
    </div>
  );
};

export default ScrollProgress;