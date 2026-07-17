import React from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  Smartphone, 
  Users, 
  BookOpen, 
  Sparkles, 
  Split, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Zap,
  Target,
  UserCheck,
  Award,
  ArrowRight
} from 'lucide-react';

const FamAppCaseStudy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-24 pb-24">
      {/* HERO SECTION */}
      <section className="space-y-8 text-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 block mb-2">
            Go-To-Market & Adoption Strategy
          </span>
          <h1 className="text-[36px] font-black tracking-tight text-neutral-900 uppercase">
            FamApp GTM Evolution
          </h1>
          
          {/* Main Hero Showcase */}
          <div className="max-w-3xl mx-auto w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" 
              alt="FamApp Financial Hero"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-8">
              <div className="text-left">
                <span className="px-3 py-1 bg-[#FFA726] rounded-full text-[10px] font-bold uppercase tracking-wider text-black border border-[#FFA726]/20">
                  Marketing Challenge
                </span>
                <p className="text-xl font-bold text-white mt-2 font-outfit">Money Management Made Fun</p>
              </div>
            </div>
          </div>

          <p className="text-[16px] text-neutral-600 leading-relaxed max-w-2xl pt-2 mx-auto">
            Reducing onboarding friction, conquering the parent-consent hurdle, and cultivating daily lifestyle stickiness for Gen Z. Our diagnostic approach crafts precise, age-segmented solutions to turn registration drop-offs into compounding virality.
          </p>

          <div className="pt-4 flex justify-center">
            <a 
              href="/famapp-case-study.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 hover:bg-amber-500 active:bg-neutral-950 border border-neutral-800 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-amber-500/20 hover:shadow-lg tracking-wider uppercase group"
            >
              <FileText className="w-4 h-4 text-white/90" />
              <span>View Presentation Deck</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Core Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-2 hover:border-neutral-200 transition-colors text-center">
            <p className="text-[32px] font-bold text-neutral-900">12M+</p>
            <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Onboarded Users</p>
            <p className="text-[14px] text-neutral-500 font-medium">Massive primary Gen Z reach</p>
          </div>
          <div className="p-8 bg-neutral-950 rounded-2xl space-y-2 relative overflow-hidden group text-center text-white">
            <div className="absolute top-3 right-3 text-[#FFA726]/20">
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <p className="text-[32px] font-extrabold text-[#FFA726]">6M+</p>
            <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Monthly Transacting</p>
            <p className="text-[14px] text-neutral-400 font-medium">Consistent repeating transaction activity</p>
          </div>
          <div className="p-8 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-2 hover:border-amber-200 transition-colors text-center">
            <p className="text-[32px] font-bold text-amber-950">INR 24.3C</p>
            <p className="text-xs font-bold tracking-widest text-amber-800/80 uppercase">Annual Revenue</p>
            <p className="text-[14px] text-amber-900 font-medium">Recorded traction as of Mar '24</p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM MATRIX SECTION */}
      <section className="space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 border border-amber-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Onboarding Obstacles</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight font-outfit">
            The Diagnosis: Funnel Leakage & Gaps
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            While teen desire for independent spending power is immense, users faced key systemic friction areas during registration. Based on our primary survey findings (<strong class="text-neutral-900">N=47</strong>), major obstacles included:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-neutral-50 border border-neutral-100 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900 font-outfit">The Parental Hurdle</h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                Minor account setup is gated by parents. Busy schedules, trust skepticism, or a lack of immediate digital literacy often blocks secondary consent.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 border border-neutral-100 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900 font-outfit">System Instability</h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                App crashes, login difficulties, and unexpected OTP transmission delays during the high-intent sign-up process drive immediate abandonment.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-100 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-neutral-900 font-outfit">Value Proposition Gap</h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                After enduring rigorous KYC document steps, the app lacked an immediate "hook" or special incentive, resulting in a 3.4/5 app relevancy score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USER RESEARCH METHODOLOGY */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-800 border border-neutral-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Primary Research</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight font-outfit">
            Adoption Strategy Methodology
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            Our user-centric research process examined registration drop-offs and behavioral money habits to redesign the onboarding loops:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 border border-neutral-100 bg-neutral-50 rounded-xl space-y-2">
            <p className="text-xs font-mono font-bold text-amber-600 uppercase">Step 1 // Segmenting</p>
            <h4 className="text-[15px] font-bold text-neutral-900">Demographic Mapping</h4>
            <p className="text-[13px] text-neutral-500 leading-relaxed">Surveyed Gen Z students across school and college groups to identify diverging spending desires.</p>
          </div>
          <div className="p-6 border border-neutral-100 bg-neutral-50 rounded-xl space-y-2">
            <p className="text-xs font-mono font-bold text-amber-600 uppercase">Step 2 // Behavioral</p>
            <h4 className="text-[15px] font-bold text-neutral-900">Use Case Tracking</h4>
            <p className="text-[13px] text-neutral-500 leading-relaxed">Analyzed how peers handle payments, splits, bill saving, and brand loyalty rewards.</p>
          </div>
          <div className="p-6 border border-neutral-100 bg-neutral-50 rounded-xl space-y-2">
            <p className="text-xs font-mono font-bold text-amber-600 uppercase">Step 3 // Diagnostics</p>
            <h4 className="text-[15px] font-bold text-neutral-900">Barrier Pinpointing</h4>
            <p className="text-[13px] text-neutral-500 leading-relaxed">Isolated KYC blockages, parent consent drops, app errors, and fee resentment.</p>
          </div>
          <div className="p-6 border border-neutral-100 bg-neutral-50 rounded-xl space-y-2">
            <p className="text-xs font-mono font-bold text-amber-600 uppercase">Step 4 // Validating</p>
            <h4 className="text-[15px] font-bold text-neutral-900">Feature Polling</h4>
            <p className="text-[13px] text-neutral-500 leading-relaxed">Gauged user interest in physical debit cards, group splitting, and gamified education.</p>
          </div>
        </div>
      </section>

      {/* AGE-SEGMENTED RECOMMENDATIONS */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-neutral-900 border border-amber-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Tailored Product Architecture</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight font-outfit">
            Age-Segmented Recommendations
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            We split recommendations into distinct product pathways based on regulatory boundaries and user age needs:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Under 18 */}
          <div className="p-8 border border-neutral-200/80 rounded-2xl space-y-6 hover:shadow-lg transition-all duration-300">
            <div className="space-y-2">
              <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[9px] font-bold uppercase rounded">Segment A</span>
              <h3 className="text-[18px] font-bold text-neutral-900 font-outfit">Minor Users (Below 18 Years)</h3>
              <p className="text-[14px] text-neutral-500">Creating high-utility daily lifestyle habits</p>
            </div>
            
            <ul className="space-y-4 text-[13.5px] text-neutral-600">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFA726] font-bold pt-0.5"><ArrowRight className="w-3.5 h-3.5" /></span>
                <span><strong>Daily Transit:</strong> Integrate metro and bus ticket bookings to drive daily app openings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFA726] font-bold pt-0.5"><ArrowRight className="w-3.5 h-3.5" /></span>
                <span><strong>Financial Literacy:</strong> Launch interactive educational quizzes to build financial awareness safely.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFA726] font-bold pt-0.5"><ArrowRight className="w-3.5 h-3.5" /></span>
                <span><strong>Smart Splits:</strong> Add peer-to-peer split options to leverage social loops.</span>
              </li>
            </ul>
          </div>

          {/* Over 18 */}
          <div className="p-8 border border-neutral-200/80 rounded-2xl space-y-6 hover:shadow-lg transition-all duration-300">
            <div className="space-y-2">
              <span className="px-2 py-0.5 bg-[#FFA726] text-black font-mono text-[9px] font-bold uppercase rounded">Segment B</span>
              <h3 className="text-[18px] font-bold text-neutral-900 font-outfit font-bold">Major Users (18 Years & Over)</h3>
              <p className="text-[14px] text-neutral-500">Unlocking professional financial tools</p>
            </div>
            
            <ul className="space-y-4 text-[13.5px] text-neutral-600">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFA726] font-bold pt-0.5"><ArrowRight className="w-3.5 h-3.5" /></span>
                <span><strong>No Hidden Fees:</strong> Remove mandatory onboarding fees and replace with reward-based KYC.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFA726] font-bold pt-0.5"><ArrowRight className="w-3.5 h-3.5" /></span>
                <span><strong>Credit Building:</strong> Provide loan repayment channels and early credit score building.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFA726] font-bold pt-0.5"><ArrowRight className="w-3.5 h-3.5" /></span>
                <span><strong>Co-Branded Cards:</strong> Partner with commercial banks to launch co-branded debit/credit cards.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* GTM PLOT BLUEPRINTS */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-neutral-900 border border-amber-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span>Market Entry GTM</span>
          </div>
          <h2 className="text-[24px] font-bold text-neutral-900 uppercase tracking-tight font-outfit">
            The Go-To-Market Blueprint
          </h2>
          <p className="text-[16px] text-neutral-600 leading-relaxed">
            Our specialized campaign strategies target high-intent communities to establish FamApp as the definitive Gen Z lifestyle and spending ecosystem:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-neutral-100 bg-neutral-50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold text-xs">
              📍
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900 font-outfit">FamZones: Student Privileges</h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Create exclusive student-only discount zones around campus hangouts and cafes. Repositions FamApp from a plain transactional utility to a core everyday lifestyle asset.
            </p>
          </div>

          <div className="p-8 border border-neutral-100 bg-neutral-50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold text-xs">
              ✨
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900 font-outfit">Spark Grant: Funding Dreams</h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Start a ₹1 Lakh monthly in-app voting grant for student initiatives and startups. Generates deep organic brand loyalty and community advocacy.
            </p>
          </div>

          <div className="p-8 border border-neutral-100 bg-neutral-50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold text-xs">
              🎟️
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900 font-outfit">Fest-Pay: College Fest Partner</h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Position FamApp as the official payment gateway for college fests, providing express entry and reward multipliers to drive high-density adoption over 2-3 day periods.
            </p>
          </div>

          <div className="p-8 border border-neutral-100 bg-neutral-50 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold text-xs">
              👥
            </div>
            <h3 className="text-[18px] font-bold text-neutral-900 font-outfit">Squad Wallet: Group Spending</h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Add shared group wallet balances that auto-track and log shared expenditures. Removes friction from separate splitting utilities and creates powerful peer lock-in.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamAppCaseStudy;
