
import React from 'react';
import SectionTitle from './SectionTitle';

const DropshippingChallenge: React.FC = () => {
  const stats = [
    {
      value: "3.1 LACS",
      label: "Revenue Generated",
      subtext: "Achieved in 8 Weeks",
      chart: (
        <svg className="w-full h-24 mt-8" viewBox="0 0 400 100">
          <defs>
            <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#444" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <path
            d="M0 90 L 50 85 L 100 88 L 150 75 L 200 60 L 250 55 L 300 30 L 400 5"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
          <line x1="0" y1="95" x2="400" y2="95" stroke="#222" strokeDasharray="4 4" />
          <text x="5" y="80" fill="#444" fontSize="8" className="font-mono uppercase tracking-[0.2em]">WEEK 1</text>
          <text x="350" y="25" fill="#888" fontSize="8" className="font-mono uppercase tracking-[0.2em]">WEEK 8</text>
        </svg>
      )
    },
    {
      value: "80K+",
      label: "Website Impressions",
      subtext: "High-intent organic traffic",
      chart: (
        <div className="mt-8 flex items-end gap-1 h-24 w-full">
          {[20, 35, 45, 60, 55, 75, 90, 100].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-neutral-900 border-t border-neutral-700 hover:bg-white transition-all duration-300"
              style={{ height: `${h}%` }}
            />
          ))}
          <div className="absolute top-12 right-4 text-[9px] text-neutral-500 font-mono text-right leading-tight uppercase tracking-widest">
            Traffic<br/>Velocity
          </div>
        </div>
      )
    },
    {
      value: "50K+",
      label: "Total Marketing Reach",
      subtext: "Social & Search Campaigns",
      chart: (
        <div className="mt-8 relative h-24 w-full flex flex-col justify-center">
          <div className="w-full h-1 bg-neutral-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-[85%] bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Target: 40k</span>
            <span className="text-[10px] font-mono text-white uppercase tracking-widest">Actual: 50k+</span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div className={`h-full bg-neutral-600 w-${i === 4 ? '1/2' : 'full'}`} />
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="dropshipping" className="py-16 border-t border-neutral-200 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="Dropshipping Venture Challenge" 
          subtitle="I with my team launched and operated Mirayaa, building the Shopify store, running Meta Ads, testing pricing and creatives, and managing end-to-end operations to understand how a business is built."
          className="!text-white mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="relative p-8 bg-black border border-neutral-800 rounded-xl hover:border-neutral-400 transition-all duration-500 group overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-5xl font-black tracking-tighter italic text-white mb-2 uppercase">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-600 mt-1 uppercase tracking-wider">
                  {stat.subtext}
                </div>
                {stat.chart}
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-white to-transparent transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* Visual Evidence Section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-1 bg-neutral-800" />
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">ON THE GROUND</h3>
            <div className="h-[1px] flex-1 bg-neutral-800" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative aspect-video overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
              <img 
                src="https://lh3.googleusercontent.com/d/1AD_mbCRGUud8_AHt1uG7ZGMsnBPkFDn5" 
                alt="Dropshipping Evidence 1" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>

            <div className="group relative aspect-video overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
              <img 
                src="https://lh3.googleusercontent.com/d/10lWKtzG1HApvmaW10rF9w_hk13eIDx86" 
                alt="Dropshipping Evidence 2" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropshippingChallenge;
