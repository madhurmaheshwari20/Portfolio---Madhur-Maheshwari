
import React, { useRef, useEffect, useState } from 'react';
import { Project } from '../types';

interface Props {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectCarousel: React.FC<Props> = ({ projects, onProjectClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we're at the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ 
            left: scrollLeft + clientWidth * 0.8, 
            behavior: 'smooth' 
          });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Custom Scroll Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-50 hidden lg:flex"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-50 hidden lg:flex"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="flex-none w-[75vw] sm:w-[320px] snap-center cursor-pointer group/card bg-[#1a1d23] rounded-2xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light line-clamp-2">
                {project.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
