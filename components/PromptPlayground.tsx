
import React, { useState } from 'react';
import { getPromptFeedback } from '../services/geminiService';
import SectionTitle from './SectionTitle';

const PromptPlayground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const result = await getPromptFeedback(prompt);
    setFeedback(result);
    setLoading(false);
  };

  return (
    <section id="ai" className="py-24 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="Prompt Engineering" 
          subtitle="Prompting is the new coding. Here's a playground to see how I optimize instructions for complex model behaviors." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 p-8 rounded-sm shadow-sm">
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Input your prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Write a product requirement document for a feature that..."
                className="w-full h-48 p-4 border border-neutral-200 focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 outline-none text-neutral-800 font-mono text-sm resize-none"
              />
              <button
                onClick={handleReview}
                disabled={loading || !prompt}
                className={`mt-4 w-full py-4 text-sm font-semibold tracking-widest uppercase transition-all ${
                  loading ? 'bg-neutral-100 text-neutral-400' : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                {loading ? 'Analyzing...' : 'Analyze Prompt Quality'}
              </button>
            </div>
          </div>

          <div className="bg-neutral-50 border border-dashed border-neutral-300 p-8 rounded-sm min-h-[400px]">
            {feedback ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-neutral-900">Expert Feedback</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-500">Clarity Score:</span>
                    <span className="text-2xl font-black text-neutral-900">{feedback.score}/10</span>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed italic border-l-4 border-neutral-900 pl-4">
                  "{feedback.critique}"
                </p>
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3">Suggested Optimizations</h5>
                  <ul className="space-y-3">
                    {feedback.suggestions.map((s: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600 text-sm">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-12 h-12 mb-4 text-neutral-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-neutral-400 max-w-xs mx-auto">
                  Submit a prompt to receive a professional AI evaluation and optimization tips.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPlayground;
