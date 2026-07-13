
import React, { useState, useRef, useEffect } from 'react';
import { chatWithPMTwin } from '../services/geminiService';
import { Message } from '../types';

const AITwinChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi, I'm the digital twin of this Product Manager. Ask me anything about their strategy, design process, or projects." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await chatWithPMTwin([...messages, userMsg]);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-neutral-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-[380px] h-[550px] bg-white border border-neutral-200 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-neutral-900 p-4 text-white flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold">PM</div>
            <div>
              <h4 className="font-semibold text-sm">PM Digital Twin</h4>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Always Online</span>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-neutral-900 text-white' 
                    : 'bg-white border border-neutral-200 text-neutral-800'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 p-3 rounded-lg flex gap-1">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-neutral-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about IntelliGrade or Ola..."
                className="flex-1 bg-neutral-100 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-neutral-900 outline-none"
              />
              <button 
                onClick={handleSend}
                className="bg-neutral-900 text-white p-2 rounded-full hover:bg-neutral-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AITwinChat;
