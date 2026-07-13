import React from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  Zap, 
  ShieldAlert, 
  UserCheck, 
  Ruler, 
  Layers, 
  ShieldCheck, 
  Video, 
  Gift,
  FileText,
  ExternalLink
} from 'lucide-react';

const ZeptoCaseStudy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-24 pb-24">
      {/* HERO SECTION */}
      <section className="space-y-8 text-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 block mb-2">
            E-Commerce / Scale-Up Strategy
          </span>
          <h1 className="text-[36px] font-black tracking-tight text-neutral-900 uppercase">
            Zepto Fashion Scale-Up
          </h1>
          
          {/* Main Hero Showcase */}
          <div className="max-w-3xl mx-auto w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" 
              alt="Zepto Fashion Scale-Up Hero"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
              <div className="text-left">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                  Playbook Strategy
                </span>
                <p className="text-xl font-bold text-white mt-2">Cracking Fashion in Quick Commerce</p>
              </div>
            </div>
          </div>

          <p className="text-[16px] text-neutral-600 leading-relaxed max-w-2xl pt-2 mx-auto">
            As the grocery market gets crowded, the next big growth engine for Quick Commerce is moving into high-margin lifestyle categories. This case study maps out an end-to-end product and operational strategy for Zepto to launch a high-velocity fashion vertical.
          </p>

          <div className="pt-4 flex justify-center">
            <a 
              href="/zepto-case-study.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 hover:bg-indigo-600 active:bg-neutral-950 border border-neutral-800 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-indigo-600/20 hover:shadow-lg tracking-wider uppercase group"
            >
              <FileText className="w-4 h-4 text-white/90" />
              <span>View Case Presentation</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Core Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-2 hover:border-neutral-200 transition-colors">
            <p className="text-[28px] font-bold text-neutral-400 line-through">₹500</p>
            <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Grocery AOV</p>
            <p className="text-[14px] text-neutral-500 font-medium">10% Take Rate (₹50 fee)</p>
          </div>
          <div className="p-8 bg-black rounded-2xl space-y-2 relative overflow-hidden group">
            <div className="absolute top-3 right-3 text-white/20">
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <p className="text-[32px] font-extrabold text-white">₹2,000+</p>
            <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Target Fashion AOV</p>
            <p className="text-[14px] text-white/85 font-medium">18% Take Rate (₹360 fee)</p>
          </div>
          <div className="p-8 bg-indigo-50 rounded-2xl border border-indigo-100 space-y-2 hover:border-indigo-200 transition-colors">
            <p className="text-[32px] font-bold text-indigo-600">7.2x</p>
            <p className="text-xs font-bold tracking-widest text-indigo-500 uppercase">Revenue Multiplication</p>
            <p className="text-[14px] text-indigo-600/80 font-medium">Fee income leap over grocery</p>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE SECTION */}
      <section className="space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 border border-red-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Low Margins vs High Growth</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            The Challenge: Low Margins & Market Share Shifts
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            While India's Quick Commerce sector is booming—expected to hit <strong className="text-neutral-900 font-semibold">₹2,00,000 Cr by FY28</strong>—staple grocery delivery hits a clear financial ceiling. Scalability relies on branching out:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900">The Margin Problem</h3>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                A typical grocery order has an Average Order Value (AOV) of ₹500, yielding a slim profit cushion after delivery expenses and storage overheads.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900">The Growth Gap</h3>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Zepto recently experienced a <strong className="text-neutral-800 font-medium">600 bps reduction</strong> in market share, highlighting fierce competition and the urgency to offer high-velocity, high-retention alternatives.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900">The Opportunity</h3>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Switching to a Fashion-First model shifts order dynamics to high AOV and an 18% take rate, unlocking a massive <strong className="text-neutral-800 font-medium">7.2x revenue scale-up</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE SHOPPERS - PERSONAS */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Customer Segmentation</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            Meet the Shoppers: 3 Core Target Personas
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            To build custom app features, we mapped out distinct target customers who would prioritize high-velocity apparel delivery:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Persona 1 */}
          <div className="p-8 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-sm font-mono font-bold uppercase text-red-600">Persona 01</span>
                <span className="text-3xl">🚨</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-semibold text-neutral-900">The Social Emergency</h3>
                <p className="text-xs text-neutral-500 font-medium">Metro Professional • Age 22–32</p>
              </div>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Spilled coffee right before an interview, or got a sudden last-minute event invite. Needs guaranteed sizing and trusted brands in minutes.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-200/50 space-y-1">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">Core Expectation</p>
              <p className="text-xs font-bold text-neutral-800">Speed Over Price & Perfect Fit</p>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="p-8 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-sm font-mono font-bold uppercase text-amber-600">Persona 02</span>
                <span className="text-3xl">⚡</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-semibold text-neutral-900">The Impulse Trendsetter</h3>
                <p className="text-xs text-neutral-500 font-medium">Digital Natives • Gen Z & Millennial</p>
              </div>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Saw a viral outfit on an Instagram Reel or prepping for an upcoming gig/fest. Demands instant visual gratification and hyper-fast deliveries.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-200/50 space-y-1">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">Core Expectation</p>
              <p className="text-xs font-bold text-neutral-800">Visual Trust & Direct Style Validation</p>
            </div>
          </div>

          {/* Persona 3 */}
          <div className="p-8 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-sm font-mono font-bold uppercase text-indigo-600">Persona 03</span>
                <span className="text-3xl">📦</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-semibold text-neutral-900">The Value Planner</h3>
                <p className="text-xs text-neutral-500 font-medium">High-stress Family Managers</p>
              </div>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Doing seasonal bulk clothes shopping or prepping ethnic outfits for family festivals. Demands price transparency and seamless, hassle-free operations.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-200/50 space-y-1">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">Core Expectation</p>
              <p className="text-xs font-bold text-neutral-800">Clear Policy & Zero-friction Returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRODUCT STRATEGY - 4 PILLARS */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Product Infrastructure</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            The Core Solution: A 4-Pillar Product Strategy
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            By implementing a clever mix of user-facing UI enhancements and smart reverse-logistic frameworks, we keep the operation scalable and asset-light:
          </p>
        </div>

        <div className="space-y-6">
          {/* Pillar 1 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-indigo-500 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 1</span>
                <h3 className="text-[18px] font-bold text-neutral-900">The "VIP Trial Service" (Killing Size Anxiety)</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> An elegant checkbox toggle on the checkout screen allowing users to pay a small convenience fee (₹29).
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                <strong className="text-neutral-800">How it works:</strong> The delivery partner waits at the doorstep while the customer tries the garment. If it doesn’t fit, it is instantly handed back for a 10-minute return right on the spot.
              </p>
              <p className="text-[14px] text-indigo-600 font-medium">
                Impact: Mimics a physical trial room to build absolute buyer trust, instantly rescuing potentially failed conversions.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <Ruler className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 2</span>
                <h3 className="text-[18px] font-bold text-neutral-900">Cross-Brand "True-Size" Mapping</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> An intuitive size profiling mechanism in the cart asking users to select their comfortable fitting sizes in mainstream retail stores (e.g., Zara, H&M, Marks & Spencer).
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                The underlying system references standard dimensions of other brands to predict the user's perfect fit in Zepto's database, slashing overall platform return rates on day one.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-sky-500 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 3</span>
                <h3 className="text-[18px] font-bold text-neutral-900">Logistical Intelligence (Hub-and-Spoke Architecture)</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> Shifting urban dark stores to high-velocity, trend-mapped fashion hubs that carry only 2–4 hours of hyper-localized apparel inventories.
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                <strong className="text-neutral-800">How it works:</strong> Stores are replenished three times daily from massive regional warehouses based on predictive, real-time demand scoring.
              </p>
              <p className="text-[14px] text-sky-600 font-medium">
                Impact: Maximizes revenue per square foot in pricey city zones without clogging dark stores.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-500 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 4</span>
                <h3 className="text-[18px] font-bold text-neutral-900">Zero-Risk Consignment (Protecting the P&L)</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> Launching partner clothing brands on a strict Sale-or-Return (SOR) consignment model.
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Consigning partner brands to retain inventory ownership on catalog shelves and process their own reverse logistics for non-moving merchandise clears major inventory write-off risks off Zepto's balance sheet entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE STACK */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-50 text-violet-700 border border-violet-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Optimizing the Funnel</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            Driving Conversion & Value: The Experience Stack
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            To lift conversion rates and convince users to add stylish pieces to their baskets during grocery runs, we introduced two crucial interactive updates:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-neutral-100 bg-neutral-50/50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center pb-0.5">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900">3-Second "Texture Clips"</h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Short, high-framerate looping micro-videos right inside the main carousel that display authentic fabric drape, stretch, and material thickness. This completely replaces the "tactile touch feel" barrier of physical retail shopping, giving users a realistic understanding of clothes in movement.
            </p>
          </div>

          <div className="p-8 border border-neutral-100 bg-neutral-50/50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
              <Gift className="w-5 h-5" />
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900">Occasion Bundles</h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Express curated shopping packs like <strong className="text-neutral-800">"The Date Night Kit"</strong> or <strong className="text-neutral-800">"The Interview Ready"</strong> bundle. One-tap shopping adds complete styling, accessories, and corresponding personal care kits to the bag instantly—multiplying AOV effortlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZeptoCaseStudy;
