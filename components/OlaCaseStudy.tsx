import React from 'react';
import { 
  Bus, 
  TrendingUp, 
  MapPin, 
  ShieldAlert, 
  Users, 
  Layers, 
  Tv, 
  Utensils, 
  RotateCcw, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Zap,
  Clock
} from 'lucide-react';

const OlaCaseStudy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-24 pb-24">
      {/* HERO SECTION */}
      <section className="space-y-8 text-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 block mb-2">
            Product Strategy & Mobility
          </span>
          <h1 className="text-[36px] font-black tracking-tight text-neutral-900 uppercase">
            Ola Intercity Bus
          </h1>
          
          {/* Main Hero Showcase */}
          <div className="max-w-3xl mx-auto w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" 
              alt="Ola Intercity Bus Hero"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
              <div className="text-left">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                  Strategic Playbook
                </span>
                <p className="text-xl font-bold text-white mt-2">Your Door To Destination</p>
              </div>
            </div>
          </div>

          <p className="text-[16px] text-neutral-600 leading-relaxed max-w-2xl pt-2 mx-auto">
            Long-distance travel in India is stressful and fragmented. By expanding from intracity rides to an end-to-end intercity platform, Ola has the opportunity to redefine intercity bus booking and operations, competing directly with basic aggregators like RedBus.
          </p>

          <div className="pt-4 flex justify-center">
            <a 
              href="/ola-case-study.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 hover:bg-lime-600 active:bg-neutral-950 border border-neutral-800 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-lime-600/20 hover:shadow-lg tracking-wider uppercase group"
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
            <p className="text-[28px] font-bold text-neutral-400 line-through">1.0x</p>
            <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Standard Aggregator</p>
            <p className="text-[14px] text-neutral-500 font-medium">Ticket sales only</p>
          </div>
          <div className="p-8 bg-black rounded-2xl space-y-2 relative overflow-hidden group">
            <div className="absolute top-3 right-3 text-white/20">
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <p className="text-[32px] font-extrabold text-white">3-4x</p>
            <p className="text-xs font-bold tracking-widest text-lime-400 uppercase">Ecosystem Revenue</p>
            <p className="text-[14px] text-white/85 font-medium">Monetized across entire lifecycle</p>
          </div>
          <div className="p-8 bg-lime-50 rounded-2xl border border-lime-100 space-y-2 hover:border-lime-200 transition-colors">
            <p className="text-[32px] font-bold text-neutral-900">2.4M</p>
            <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Target Users (SOM)</p>
            <p className="text-[14px] text-neutral-700 font-medium">10% digital market share target</p>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE SECTION */}
      <section className="space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 border border-red-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Anxious & Disjointed Journeys</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            The Challenge: Fragmented Intercity Travel
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            While India's intercity travel market is massive—boasting <strong className="text-neutral-900 font-semibold">59.1M annual passengers</strong>—the experience is filled with friction. Current aggregators only address ticket sales, leaving massive service gaps:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900">Fragmented Connections</h3>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Passengers must arrange their own first-mile and last-mile travel, creating anxiety about missing scheduled bus departures.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900">Safety & Tracking Gaps</h3>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Inconsistent safety protocols, lack of reliable tracking sharing with families, and unverified roadside stop risks.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900">Rigid Rescheduling</h3>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Cumbersome modification processes and harsh penalty fees when schedules shift or operators cancel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE TRAVELERS - PERSONAS */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-50 text-neutral-800 border border-lime-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Customer Segmentation</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            Meet the Travelers: Core Segments
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            By identifying the core customer bases, we tailored a journey mapping approach focusing on convenience and comfort:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Persona 1 */}
          <div className="p-8 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-sm font-mono font-bold uppercase text-[#88a014]">Segment 01</span>
                <span className="text-3xl">💼</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-semibold text-neutral-900">The Urban Professional</h3>
                <p className="text-xs text-neutral-500 font-medium">Ages 25-45 • Digitally-Savvy</p>
              </div>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Frequent intercity business travelers (2-4 trips/month). They prioritize punctuality, seamless transfers, work-friendly facilities, and time-saving coordination.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-200/50 space-y-1">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">Core Expectation</p>
              <p className="text-xs font-bold text-neutral-800">Time-Saving Integrations & Comfort</p>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="p-8 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-sm font-mono font-bold uppercase text-[#88a014]">Segment 02</span>
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-semibold text-neutral-900">The High-Anxiety Family</h3>
                <p className="text-xs text-neutral-500 font-medium">Leisure & Seasonal Travelers</p>
              </div>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Traveling with elders or young children. They seek absolute journey predictability, guaranteed safety features, and vetted hygienic roadside meal stops.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-200/50 space-y-1">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">Core Expectation</p>
              <p className="text-xs font-bold text-neutral-800">Verified Safety & Clean Stopovers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCLES FRAMEWORK */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-800 border border-neutral-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Strategy Framework</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            The CIRCLES Framework Application
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            Applying the standard product strategy method to guide deep discovery, prioritization, and execution of the integrated platform:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 pt-4">
          <div className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#88a014]">01</span>
            <h4 class="text-xs font-bold text-neutral-900 uppercase">Comprehend</h4>
            <p className="text-[11px] text-neutral-500">Addressing fragmented intercity corridors for 59M travelers.</p>
          </div>
          <div className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#88a014]">02</span>
            <h4 class="text-xs font-bold text-neutral-900 uppercase">Identify</h4>
            <p className="text-[11px] text-neutral-500">Focusing on digitally-fluent urban commuters & families.</p>
          </div>
          <div className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#88a014]">03</span>
            <h4 class="text-xs font-bold text-neutral-900 uppercase">Report</h4>
            <p className="text-[11px] text-neutral-500">Listing key needs: safety, flexible delays, hygiene, tracking.</p>
          </div>
          <div className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#88a014]">04</span>
            <h4 class="text-xs font-bold text-neutral-900 uppercase">Cut-through</h4>
            <p className="text-[11px] text-neutral-500">Prioritizing Core Booking first, Premium Add-ons later.</p>
          </div>
          <div className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#88a014]">05</span>
            <h4 class="text-xs font-bold text-neutral-900 uppercase">List</h4>
            <p className="text-[11px] text-neutral-500">Designing cab+bus sync, Ola Eats meal delivery, live GPS.</p>
          </div>
          <div className="p-5 bg-neutral-50 border border-neutral-100 rounded-xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#88a014]">06</span>
            <h4 class="text-xs font-bold text-neutral-900 uppercase">Evaluate</h4>
            <p className="text-[11px] text-neutral-500">Balancing technical complexity against market speed.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl space-y-2">
            <span className="text-xs font-mono font-bold text-white">07</span>
            <h4 class="text-xs font-bold text-white uppercase">Recommend</h4>
            <p className="text-[11px] text-neutral-300">Launch MVP on key metro corridors and iterate on KPIs.</p>
          </div>
        </div>
      </section>

      {/* CORE PRODUCT STRATEGY - 4 PILLARS */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-50 text-neutral-900 border border-lime-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Product Architecture</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            The Core Solution: A 4-Pillar Product Strategy
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            Unlike simple aggregators, we leverage Ola’s existing ecosystem of cabs, local food networks, and digital trust to build a seamless travel standard:
          </p>
        </div>

        <div className="space-y-6">
          {/* Pillar 1 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-700 shrink-0">
              <Bus className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 1</span>
                <h3 className="text-[18px] font-bold text-neutral-900">Door-to-Door Integration</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> Seamless multimodal journeys combining Ola cabs, auto-rickshaws, or bikes for first-mile and last-mile connectivity.
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Single booking, unified payment, and coordinated timing ensure passengers never miss their bus, providing a truly unified transfer experience.
              </p>
              <p className="text-[14px] text-lime-700 font-semibold">
                Impact: Elevates the utility from basic ticket sales to complete logistics as a service.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-700 shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 2</span>
                <h3 className="text-[18px] font-bold text-neutral-900">Automated Food Delivery (Ola Eats)</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> Pre-scheduled meal delivery at designated transit stops through Ola Eats ecosystem integration.
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Choose meals directly during the booking flow, which are prepared and delivered fresh right at optimal journey points, eliminating the typical uncertainty and poor hygiene of roadside restaurants.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 3</span>
                <h3 className="text-[18px] font-bold text-neutral-900">Verified Safety Suite & Rescheduling</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> Instant one-tap rescheduling with zero-penalty, alongside physical tracking capabilities and emergency systems.
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Features verified background checks on drivers, live real-time driver performance ratings, continuous SOS in-app panic buttons, and 24/7 dedicated support hotlines.
              </p>
              <p className="text-[14px] text-lime-700 font-semibold">
                Impact: Provides piece-of-mind security during nocturnal long-distance highway routes.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 border border-neutral-200 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-700 shrink-0">
              <Tv className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[9px] font-bold uppercase rounded">Pillar 4</span>
                <h3 className="text-[18px] font-bold text-neutral-900">Digital Entertainment & Live Tracking</h3>
              </div>
              <p className="text-[15px] text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">The Feature:</strong> Stream-on-the-go bundles and location updates.
              </p>
              <p className="text-[15px] text-neutral-500 leading-relaxed">
                Access Netflix, Prime, or Hotstar content on the move via local bus high-speed WiFi networks, coupled with real-time GPS coordinates sharing and smart geofence wake-up alarms before arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE MODEL & STRATEGIC INSIGHT */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-50 text-neutral-900 border border-lime-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Ecosystem Flywheel</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight">
            Ecosystem Flywheel: Why Ola Wins
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            While standard ticket vendors work on thin single-sale commission margins, Ola’s robust cross-platform capability leverages cross-selling across the whole travel lifecycle:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-neutral-100 bg-neutral-50/50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center">
              <Zap className="w-5 h-5 text-lime-400" />
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900">First-and-Last Mile Cross-Sell</h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Every bus booking directly drives cab or auto ride conversions at both origin and destination cities, yielding higher ride utilization and a 3-4x larger transaction basket than simple aggregators.
            </p>
          </div>

          <div className="p-8 border border-neutral-100 bg-neutral-50/50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center">
              <Utensils className="w-5 h-5 text-lime-400" />
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900">Ancillary Stream Attachment</h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Monetizing travelers through Ola Eats food partnerships and digital entertainment bundle additions creates consistent recurring ancillary streams during long-distance transit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OlaCaseStudy;
