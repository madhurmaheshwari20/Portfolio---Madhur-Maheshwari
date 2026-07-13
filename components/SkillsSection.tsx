
import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

interface Skill {
  code: string;
  title: string;
  x: number; // offset from center
  y: number; // offset from center
  z: number; // z-index/order
}

// Optimized coordinates to prevent overlapping edges
// Cards are roughly 144px-176px wide and 80px-100px tall
const skills: Skill[] = [
  { code: 'GA', title: 'Google Analytics', x: 70, y: -200, z: 50 },
  { code: 'JIRA', title: 'Jira', x: -120, y: -160, z: 10 },
  { code: 'PM', title: 'Project Management', x: 160, y: -100, z: 20 },
  { code: 'PDM', title: 'Product Management', x: -90, y: -40, z: 40 },
  { code: 'SQL', title: 'SQL', x: 140, y: 20, z: 15 },
  { code: 'SM', title: 'Stakeholder Management', x: -110, y: 90, z: 5 },
  { code: 'GTM', title: 'GTM', x: 120, y: 150, z: 30 },
  { code: 'WF', title: 'Wireframing', x: -10, y: 220, z: 25 },
];

const SkillsSection: React.FC = () => {
  const [isGathered, setIsGathered] = useState(false);

  useEffect(() => {
    // 3 second cycle for high-velocity interaction
    const interval = setInterval(() => {
      setIsGathered((prev) => !prev);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <Reveal>
            <div className="max-w-lg z-10 relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900 mb-6">
                Technical Skills
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-6">
                An ever-incomplete list, most of these skills were picked up while building projects, solving real problems, and following curiosity wherever it led.
              </p>
            </div>
          </Reveal>

          {/* Right Dynamic Skill Cloud Container */}
          <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-neutral-50 rounded-full blur-[80px] opacity-60 pointer-events-none" />

            <div className="relative w-full h-full perspective-[1000px]">
              {skills.map((skill, index) => (
                <div
                  key={skill.code}
                  className={`
                    absolute left-1/2 top-1/2 
                    w-36 md:w-44 bg-white p-2.5 md:p-3.5 rounded-xl border border-neutral-100 
                    shadow-[0_8px_20px_-6px_rgba(0,0,0,0.06)] 
                    flex flex-col items-start gap-2
                    transition-all duration-[800ms] cubic-bezier(0.2, 1.2, 0.5, 1)
                    cursor-default group
                  `}
                  style={{
                    zIndex: skill.z,
                    // Highly snappy gather/scatter animation
                    transform: isGathered 
                      ? `translate(-50%, -50%) scale(0) rotateX(60deg) rotateZ(${index * 20}deg)`
                      : `translate(calc(-50% + ${skill.x}px), calc(-50% + ${skill.y}px)) scale(1) rotateX(0deg) rotateZ(0deg)`,
                    opacity: isGathered ? 0 : 1,
                    transitionDelay: `${index * 15}ms`,
                  }}
                >
                  <div className="px-2 py-0.5 bg-black text-white text-[8px] font-black rounded-full uppercase tracking-widest transition-transform duration-300 group-hover:scale-105">
                    {skill.code}
                  </div>
                  <div className="text-[11px] md:text-[13px] font-bold text-neutral-800 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    {skill.title}
                  </div>
                  
                  {/* Reduced float intensity for compact feel */}
                  <style>{`
                    @keyframes float-${index} {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-3px); }
                    }
                    .skill-card-float-${index} {
                      animation: float-${index} ${2 + index * 0.2}s ease-in-out infinite;
                    }
                  `}</style>
                  {!isGathered && (
                    <div className={`absolute inset-0 skill-card-float-${index} pointer-events-none rounded-xl shadow-[0_15px_30px_-8px_rgba(0,0,0,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  )}
                </div>
              ))}

              {/* Central point for visual feedback during gather */}
              <div 
                className={`
                  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-3 h-3 bg-amber-500 rounded-full blur-lg transition-all duration-700
                  ${isGathered ? 'scale-[6] opacity-15' : 'scale-0 opacity-0'}
                `} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
