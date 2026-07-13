
import React from 'react';
import { JOURNEY_ITEMS } from '../constants';
import Reveal from './Reveal';

const GraduationIcon = () => (
  <svg viewBox="0 0 512 512" className="w-3.5 h-3.5 text-white" fill="currentColor">
    <path d="M496 152a16 16 0 0 0-8-13.84L264.33 11.53a15.86 15.86 0 0 0-16.66 0L16 138.16a16 16 0 0 0 0 27.68L120 225.2V320c0 40 33.14 71.8 74.34 78.4a161 161 0 0 0 123.32 0c41.2-6.6 74.34-38.4 74.34-78.4v-94.8l48-26.65a16 16 0 0 0 16-27.69zM256 48l184.28 104L256 256 71.72 152zm112 272c0 23.47-23.73 45.41-55.57 52.82a129.28 129.28 0 0 1-112.86 0C167.73 365.41 144 343.47 144 320v-75.1l112 62.2 112-62.2zM448 352a32 32 0 1 0 32-32 32 32 0 0 0-32 32zm32 48a16 16 0 0 0-16 16v32a16 16 0 0 0 32 0v-32a16 16 0 0 0-16-16z" />
  </svg>
);

const CareerIcon = () => (
  <svg viewBox="0 0 512 512" className="w-3.5 h-3.5 text-white" fill="currentColor">
    <path d="M448 128h-32V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v32h-64v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v32h-64v-32a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v32H64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h432a16 16 0 0 0 16-16V144a16 16 0 0 0-16-16z" />
    <circle cx="320" cy="80" r="32" />
  </svg>
);

const VentureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
};

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic text-white mb-2">
              My Journey
            </h2>
            <div className="h-1 w-24 bg-amber-500 rounded-full" />
          </div>
        </Reveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Persistent Vertical Line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-[1px] bg-neutral-800" />

          {/* Timeline Items */}
          <div className="space-y-20">
            {JOURNEY_ITEMS.map((item, index) => (
              <div key={item.id} className="relative pl-16 lg:pl-24">
                
                {/* Node (Icon Button on the line) */}
                <div className="absolute left-[24px] lg:left-[32px] top-0 transform -translate-x-1/2 z-10">
                   <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0a0a0a] border border-neutral-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group hover:border-amber-500 transition-colors duration-300">
                      <div className="w-full h-full rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-neutral-900">
                        {item.badge === "FOUNDATIONAL EDUCATION" && <GraduationIcon />}
                        {item.badge === "PROFESSIONAL CAREER" && <CareerIcon />}
                        {item.badge === "POST GRADUATION CHALLENGE" && <VentureIcon />}
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7">
                    <Reveal delay={100}>
                      <div className="space-y-6">
                        {/* Badge next to the node */}
                        <div className="flex items-center">
                          <div className="px-5 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800 text-[10px] font-black tracking-[0.2em] text-neutral-400 uppercase">
                            {item.badge}
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-6 pt-2">
                          <h3 className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight text-white">
                            {item.highlightTitle} <br />
                            <span className="text-amber-500">{item.accentText}</span>
                          </h3>

                          <ul className="space-y-3 max-w-xl">
                            {item.description.split('. ').filter(line => line.trim()).map((line, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                                <p className="text-neutral-500 text-[14px] font-light leading-relaxed">
                                  {line.trim()}{!line.trim().endsWith('.') && '.'}
                                </p>
                              </li>
                            ))}
                          </ul>

                          {/* Points List */}
                          {item.points && item.points.length > 0 && (
                            <ul className="space-y-6 pt-4">
                              {item.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-5 group/point">
                                  <div className="mt-1 w-8 h-8 rounded-full border border-neutral-800 flex flex-shrink-0 items-center justify-center text-[12px] font-bold text-neutral-500 group-hover/point:border-amber-500 group-hover/point:text-white transition-all duration-300">
                                    {i + 1}
                                  </div>
                                  <p className="text-[16px] lg:text-[18px] text-neutral-400 font-light tracking-wide leading-relaxed pt-0.5">
                                    {point.split(' ').map((word, wi) => {
                                      const isStrong = word.match(/\d+[%+]?|Lacs|Crores|members|PPOs|startups|impactful|M+|international|Cars24|academic|Computer|automation/i);
                                      return isStrong ? <strong key={wi} className="font-bold text-white group-hover/point:text-amber-400 transition-colors">{word} </strong> : word + ' ';
                                    })}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Right Column: Visual Preview */}
                  <div className="lg:col-span-5 lg:pt-16">
                    <Reveal delay={300}>
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-neutral-800 group/media shadow-2xl bg-[#111]">
                        {Array.isArray(item.image) ? (
                          <ImageSlider images={item.image} />
                        ) : (
                          <img 
                            src={item.image} 
                            alt={item.company} 
                            className="w-full h-full object-cover transition-all duration-1000"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 right-4 z-20">
                          <div className="px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-md border border-white/5 text-[8px] font-black text-white/50 uppercase tracking-widest">
                            {item.year}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
