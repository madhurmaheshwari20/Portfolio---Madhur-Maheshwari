
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const IMAGES = [
  "https://lh3.googleusercontent.com/d/1yfQw9Y6wfeBGj4PpOHwkWvEMeJJzicoa",
  "https://lh3.googleusercontent.com/d/1-axnvScYv6WdHF8VMOn9xXWHwZhqLkq-",
  "https://lh3.googleusercontent.com/d/1E1uE5w-6UbSXsC3wcnSmw_VilogGJDdr",
  "https://lh3.googleusercontent.com/d/1lADQJDWS4vg49-w8fbQcLvOemUfJJXMC",
  "https://lh3.googleusercontent.com/d/18cFMsWTKHeF-0Z5q8QEPeKrEU_cNiy_n",
  "https://lh3.googleusercontent.com/d/1cjfaa9HMYrH9bU6PmGOoCg2MiKhY2ssX",
  "https://lh3.googleusercontent.com/d/1k1Qj6RElHXnIQjY8192Myb_OkP1_Kwd-",
  "https://lh3.googleusercontent.com/d/15k9STTDSiI0n8dMj1axwJFscm4wZaPn1",
  "https://lh3.googleusercontent.com/d/1aTgDFH9Ko5WWe6slEBFfjKdxJMQGB9MR",
];

const IntelliGradeCaseStudy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <div className="max-w-4xl mx-auto space-y-24 pb-24">
      {/* HERO SECTION */}
      <section className="space-y-8">
        <div className="space-y-6 text-center">
          <h1 className="text-[36px] font-black tracking-tight text-neutral-900 uppercase">
            IntelliGrade
          </h1>
          
          {/* Image Carousel - Smaller Size */}
          <div className="max-w-2xl mx-auto w-full">
            <div 
              className="relative group aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={IMAGES[currentIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to a placeholder if attachment fails
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/intelligrade-${currentIndex}/800/500`;
                  }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentIndex ? "bg-neutral-900 w-3" : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="text-[16px] text-neutral-600 leading-relaxed max-w-2xl pt-2 mx-auto">
            AI that automates cognitive labor by grading handwritten scripts with step-wise feedback within hours.
          </p>

          <div className="pt-4 flex justify-center">
            <a 
              href="https://aistudio.google.com/app/apps/a3c0eb48-6391-40fa-992c-66d6d786a0ec?showPreview=true&showAssistant=true&fullscreenApplet=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 hover:bg-indigo-600 active:bg-neutral-950 border border-neutral-800 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-indigo-600/20 hover:shadow-lg tracking-wider uppercase"
            >
              <svg className="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span>Interactive Prototype</span>
              <svg className="w-3.5 h-3.5 text-white/50 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-black rounded-2xl space-y-2">
            <p className="text-[32px] font-bold text-white">90%+</p>
            <p className="text-[16px] text-white/80">AI Precision and coverage</p>
          </div>
          <div className="p-8 bg-black rounded-2xl space-y-2">
            <p className="text-[32px] font-bold text-white">₹15–16</p>
            <p className="text-[16px] text-white/80">Cost per answer sheet</p>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            The grading system is broken
          </h2>
          <ul className="text-[16px] text-neutral-600 space-y-4 leading-relaxed list-disc pl-5">
            <li>
              Teachers lose 40-60% of their time to manual grading instead of teaching. 
            </li>
            <li>
              Students face 2-3 week delays for feedback that lacks explanation.
            </li>
            <li>
              Digital incumbents only move paper to a screen; they don't solve the human fatigue, bias, or inconsistency inherent in manual evaluation.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
            <p className="text-[24px] font-bold text-neutral-900">40–60%</p>
            <p className="text-[16px] text-neutral-500">Teacher time lost to grading</p>
          </div>
          <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
            <p className="text-[24px] font-bold text-neutral-900">2–3 Weeks</p>
            <p className="text-[16px] text-neutral-500">Average feedback delay</p>
          </div>
          <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
            <p className="text-[24px] font-bold text-neutral-900">15–25%</p>
            <p className="text-[16px] text-neutral-500">Grade inconsistency</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            AI that checks, understands, and teaches
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            IntelliGrade uses multimodal AI to read handwriting, evaluate steps against rubrics, and assign partial credit. It delivers same-day results with personalized practice sets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-[16px] font-bold text-neutral-900">Prof. Meera (Educator)</h3>
            <p className="text-[16px] text-neutral-500 leading-relaxed">Swaps weekend grading for instant class-level insights.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[16px] font-bold text-neutral-900">Rahul (Dept. Head)</h3>
            <p className="text-[16px] text-neutral-500 leading-relaxed">Eliminates parent complaints with auditable, fair AI grades.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[16px] font-bold text-neutral-900">Priya (Student)</h3>
            <p className="text-[16px] text-neutral-500 leading-relaxed">Receives instant, step-wise feedback and targeted practice.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-8">
        <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
          How It Works
        </h2>
        <div className="space-y-6">
          {[
            { step: "Step 1 - Upload", desc: "Teacher submits question paper, model answers, and marking rubrics." },
            { step: "Step 2 - Submit", desc: "Scanned handwritten student answer sheets are uploaded in bulk." },
            { step: "Step 3 - Grade", desc: "OCR/LLMs extract text and evaluate semantic logic step-by-step." },
            { step: "Step 4 - Feedback", desc: "Students access scores and AI-generated practice sets via their portal." },
            { step: "Step 5 - Insights", desc: "Teachers review a \"Classroom Intelligence Dashboard\" highlighting collective weak spots." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-none w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-[16px] font-bold text-neutral-900">{item.step}</h3>
                <p className="text-[16px] text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GO-TO-MARKET */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            18 months to institutional dominance
          </h2>
          <div className="space-y-6">
            <div className="p-6 border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="text-[16px] font-bold text-neutral-900">Phase 1 (Months 1-6): Focus on department pilots.</h3>
              <p className="text-[16px] text-neutral-600">Target: 2 institutions, 30k sheets, 95% accuracy.</p>
            </div>
            <div className="p-6 border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="text-[16px] font-bold text-neutral-900">Phase 2 (Months 7–12): Systemic LMS integration and executive advocacy.</h3>
              <p className="text-[16px] text-neutral-600">Target: 8 institutions, 120k sheets, 98% accuracy.</p>
            </div>
            <div className="p-6 bg-neutral-900 rounded-2xl space-y-3">
              <h3 className="text-[16px] font-bold text-white">Phase 3 (Months 13–18): Deploy regional language grading.</h3>
              <p className="text-[16px] text-neutral-400">Vernacular R&D Moat to meet NEP 2020 mandates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITORS */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            They digitized the paper; we automated the thinking.
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <h3 className="text-[16px] font-bold text-neutral-900">Eklavvya</h3>
              <p className="text-[16px] text-neutral-600 leading-relaxed">
                Leading incumbent that digitizes paper but requires teachers to mark every answer manually. We are 40% cheaper (₹15 vs ₹25) and automate the cognitive work.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[16px] font-bold text-neutral-900">GradeSense</h3>
              <p className="text-[16px] text-neutral-600 leading-relaxed">
                Limited to MCQs and objective patterns. We handle complex, descriptive handwritten answers.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[16px] font-bold text-neutral-900">Gradescope</h3>
              <p className="text-[16px] text-neutral-600 leading-relaxed">
                Optimized for US-style typed/structured exams. We are built for Indian vernacular scripts and high-volume handwritten datasets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntelliGradeCaseStudy;
