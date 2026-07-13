
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionTitle from './components/SectionTitle';
import ProjectCarousel from './components/ProjectCarousel';
import DropshippingChallenge from './components/DropshippingChallenge';
import AITwinChat from './components/AITwinChat';
import Journey from './components/Journey';
import SkillsSection from './components/SkillsSection';
import ScrollProgress from './components/ScrollProgress';
import Reveal from './components/Reveal';
import IntelliGradeCaseStudy from './components/IntelliGradeCaseStudy';
import ZeptoCaseStudy from './components/ZeptoCaseStudy';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS, PM_BIO } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <ScrollProgress />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 px-6 lg:px-12 py-6 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-neutral-200 py-4 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="flex items-center">
          <div className="relative">
            {/* Main Circle with M */}
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 relative">
              M
            </div>
            {/* Particles breaking off to the left */}
            <div className="absolute -left-1 top-0 w-3 h-3 bg-indigo-600 rounded-full"></div>
            <div className="absolute -left-3 top-2 w-2 h-2 bg-indigo-600 rounded-full"></div>
            <div className="absolute -left-4 top-5 w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
            <div className="absolute -left-2 top-7 w-2 h-2 bg-indigo-600 rounded-full"></div>
            <div className="absolute -left-5 top-1 w-1 h-1 bg-indigo-600 rounded-full"></div>
            <div className="absolute -left-6 top-4 w-1 h-1 bg-indigo-600 rounded-full"></div>
          </div>
          <div className="text-2xl font-bold tracking-tight text-neutral-900 ml-0.5">adhur Maheshwari</div>
        </div>
        <div className="hidden sm:flex gap-12 text-sm font-medium uppercase tracking-widest text-neutral-500">
          <a href="#work" className="hover:text-neutral-900 transition-colors">Work</a>
          <a href="#journey" className="hover:text-neutral-900 transition-colors">Journey</a>
          <a href="#skills" className="hover:text-neutral-900 transition-colors">Skills</a>
          <a href="#dropshipping" className="hover:text-neutral-900 transition-colors">Dropshipping</a>
        </div>
      </nav>

      {/* Hero */}
      <Reveal>
        <header className="pt-24 md:pt-28 pb-10 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="space-y-0.5">
                  <h1 className="text-4xl md:text-[56px] font-black tracking-tighter text-neutral-900 leading-[1.1]">
                    Hello!
                  </h1>
                  <h1 className="text-4xl md:text-[56px] font-black tracking-tighter text-neutral-900 leading-[1.1] whitespace-nowrap">
                    I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Madhur</span>
                  </h1>
                </div>
                
                <div className="h-10 md:h-[48px] flex items-center relative">
                  <div className="text-2xl md:text-[44px] font-black tracking-tighter text-neutral-900 whitespace-nowrap">
                    Product Manager
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-3 text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                  <p>A keen learner full of dreams; my curiosity keeps me versatile. Currently, I am a PGP student in Technology and Business Management at Masters’ Union.</p>
                  <p>Prior to that, I worked as an APM at Schbang, where I managed E2E website & app development for multiple clients. And as an IT Consultant at Transunion CIBIL.</p>
                  <p>I am an engineer by training, having completed my B.Tech from Maharashtra Institute of Technology, Pune.</p>
                </div>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-3">
                     <span className="w-8 h-[1px] bg-neutral-900"></span>
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Based in Gurgaon, India</span>
                   </div>
                   <a 
                    href="https://www.linkedin.com/in/madhurmaheshwari20/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest underline underline-offset-4 decoration-1 hover:text-neutral-500 transition-colors inline-block w-fit"
                   >
                     Let's connect
                   </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative group p-2">
                {/* Glow effect matching the screenshot */}
                <div className="absolute inset-0 bg-indigo-500/15 rounded-full blur-2xl transition-all duration-700 group-hover:bg-indigo-500/25 scale-105"></div>
                
                <div className="relative w-56 h-56 md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-white shadow-[0_0_40px_-10px_rgba(79,70,229,0.4)] transition-transform duration-700 group-hover:scale-[1.02]">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1bQS1lE_l2wgmwDgqwWiQji7M3hge_sKv" 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    alt="Madhur Maheshwari"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </Reveal>

      {/* Work Section */}
      <Reveal>
        <section id="work" className="pt-8 pb-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6">
            <SectionTitle 
              title="Selected Projects" 
              subtitle="Where design engineering meets business logic to solve complex friction points."
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <ProjectCarousel 
              projects={PROJECTS} 
              onProjectClick={handleProjectClick} 
            />
          </div>
        </section>
      </Reveal>

      {/* Journey Section */}
      <Journey />

      {/* Skills Section */}
      <SkillsSection />

      {/* Dropshipping Venture Challenge Section */}
      <Reveal>
        <DropshippingChallenge />
      </Reveal>

      {/* Footer */}
      <footer className="py-24 px-6 lg:px-12 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="relative">
                {/* Main Circle with M */}
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-3xl z-10 relative">
                  M
                </div>
                {/* Particles breaking off to the left */}
                <div className="absolute -left-1 top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="absolute -left-4 top-2 w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                <div className="absolute -left-5 top-6 w-2 h-2 bg-indigo-600 rounded-full"></div>
                <div className="absolute -left-3 top-9 w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                <div className="absolute -left-6 top-1 w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                <div className="absolute -left-7 top-5 w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
              </div>
              <div className="text-3xl font-bold tracking-tight text-neutral-900 ml-1">adhur Maheshwari</div>
            </div>
            <p className="text-neutral-500 max-w-sm">Building digital experiences that bridge the gap between technical possibility and human necessity.</p>
          </div>
          <div className="flex gap-24">
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Social</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.linkedin.com/in/madhurmaheshwari20/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:maheshwari.madhur2000@gmail.com" className="hover:underline text-neutral-900 font-medium">maheshwari.madhur2000@gmail.com</a></li>
                <li><a href="tel:+918290865062" className="hover:underline text-neutral-500">+91-8290865062</a></li>
                <li><span className="text-neutral-500">Gurgaon, India</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-100 text-[10px] text-neutral-400 uppercase tracking-[0.3em] flex flex-col sm:flex-row justify-between">
          <span>© 2025 All Rights Reserved</span>
          <span>Designed with Intent • Prompted with Care</span>
        </div>
      </footer>

      {/* Project Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white animate-in fade-in zoom-in duration-300">
          <button 
            onClick={closeOverlay}
            className="fixed top-8 left-6 md:left-12 z-[60] flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-full hover:bg-neutral-50 hover:border-neutral-300 text-neutral-800 hover:text-indigo-600 shadow-sm hover:shadow-md transition-all duration-200 group/back font-bold text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
            <span>Go back</span>
          </button>

          <div className="max-w-5xl mx-auto py-32 px-6">
            {selectedProject.id === 'intelligrade' ? (
              <IntelliGradeCaseStudy />
            ) : selectedProject.id === 'zepto' ? (
              <ZeptoCaseStudy />
            ) : (
              <>
                <div className="space-y-6 text-center mb-16">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-[36px] font-black tracking-tight text-neutral-900 uppercase">
                    {selectedProject.title}
                  </h2>
                  <p className="text-[16px] text-neutral-600 leading-relaxed max-w-2xl pt-2 mx-auto">
                    {selectedProject.description}
                  </p>
                </div>
                
                {/* Gallery / Presentation Section */}
                {selectedProject.gallery ? (
                  <div className="space-y-12 mb-24">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 border-b border-neutral-100 pb-4">Full Case Presentation</h4>
                    <div className="space-y-8">
                      {selectedProject.gallery.map((img, i) => (
                        <div key={i} className="aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xl">
                          <img src={img} className="w-full h-full object-cover" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <img src={selectedProject.image} className="w-full aspect-[21/9] object-cover mb-24 rounded-2xl shadow-2xl" alt="" />
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
                  <div className="md:col-span-2 space-y-20">
                    <section className="relative">
                      <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border border-neutral-200 bg-white" />
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-900 mb-6">Problem Statement</h4>
                      <p className="text-[16px] text-neutral-600 leading-relaxed font-normal">
                        {selectedProject.caseStudy?.problem}
                      </p>
                    </section>
                    <section className="relative">
                      <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-amber-500 bg-white" />
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-900 mb-6">The Solution</h4>
                      <p className="text-[16px] text-neutral-600 leading-relaxed font-normal">
                        {selectedProject.caseStudy?.solution}
                      </p>
                    </section>
                    <section className="relative">
                       <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-neutral-900" />
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-900 mb-6">Impact & Scale</h4>
                      <p className="text-[16px] text-neutral-600 leading-relaxed font-normal">
                        {selectedProject.caseStudy?.outcome}
                      </p>
                    </section>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-8">Metadata</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 mb-1">Lead Role</h5>
                          <p className="text-neutral-500 text-sm">Product Manager & Strategist</p>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 mb-1">Focus Areas</h5>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedProject.tags.map(t => (
                              <span key={t} className="text-[10px] px-2 py-1 bg-white border border-neutral-200 rounded text-neutral-600 font-bold uppercase tracking-widest">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {selectedProject.caseStudy?.promptUsed && (
                      <div className="p-8 bg-black rounded-2xl border border-neutral-800">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 mb-6">Prompt Sample</h4>
                        <p className="text-xs font-mono text-neutral-400 leading-relaxed italic">
                          "{selectedProject.caseStudy.promptUsed}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* AI Assistant Button & Chat */}
      <AITwinChat />
    </div>
  );
};

export default App;
