import React, { useState } from 'react';
import { Flame, Radio, BookOpen, Heart, Calendar, ArrowRight, Compass, Award, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { IMPACT_STATS } from '../data.ts';

interface HomeViewProps {
  setTab: (tab: string) => void;
}

export default function HomeView({ setTab }: HomeViewProps) {
  // Inline contact form state for the new Home-Contact Section
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSending(true);

    setTimeout(() => {
      // Save submission to local storage list to match contact hub database
      const list = JSON.parse(localStorage.getItem('contact_submissions_list') || '[]');
      list.push({
        name,
        email,
        subject: 'Quick Homepage Enquiry',
        message,
        date: new Date().toLocaleDateString()
      });
      localStorage.setItem('contact_submissions_list', JSON.stringify(list));

      setSending(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="space-y-24 pb-24 font-sans text-slate-200">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE & GRADIENT OVERLAY */}
      <section 
        className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 px-4 md:px-8 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=1920&q=80')" }}
      >
        {/* Deep Navy/Black Gradient Overlay to protect contrast & make Montserrat text extremely legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081C3D]/95 via-[#081C3D]/90 to-[#050505]/95 z-0" />
        
        {/* Subtle gold dust abstract ambient light circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] z-0 pointer-events-none" />
        <div className="absolute bottom-10 left-12 w-[350px] h-[350px] rounded-full bg-[#123B73]/20 blur-[100px] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          
          {/* Left Text Presentation */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Elegant Tagline badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="font-display text-[10px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
                Matthew 28:19 · The Great Mandate
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6.5xl tracking-tight leading-[1.05] text-white">
              Raising A Generation Of <span className="bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-400 bg-clip-text text-transparent">Kingdom Ambassadors</span>
            </h1>

            <p className="font-sans text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              We are not just a static church; we are a fully mobilised <span className="text-white font-semibold">soul-winning army</span>. Backed by the power of the Holy Spirit, anointed on bended knees, and deployed to lead communities to Christ.
            </p>

            {/* Custom scriptural pullquote styled with Playfair Display font-serif for sacred reverence */}
            <blockquote className="border-l-4 border-[#D4AF37] pl-4 font-serif text-slate-300 text-sm sm:text-base italic leading-relaxed py-1.5 bg-white/2 max-w-xl">
              "One Soul At A Time, We Win The World For Christ. Hand-poured with holy anointing oil, grounded in Scripture, praying without ceasing."
            </blockquote>

            {/* Premium Glowing Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button 
                onClick={() => setTab('evangelism')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-extrabold text-xs uppercase tracking-widest text-center cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 grow-btn"
              >
                Join The Mission
              </button>
              <button 
                onClick={() => setTab('prayer')}
                className="px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-display font-bold text-xs uppercase tracking-widest text-center cursor-pointer hover:bg-white/5 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                Request Prayer
              </button>
            </div>

          </div>

          {/* Right 3D-effect Brand Card (Holy Anointing Symbolism) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[420px] aspect-square rounded-[2rem] p-1 bg-gradient-to-br from-[#D4AF37]/50 via-white/5 to-[#123B73]/40 shadow-2xl overflow-hidden group">
              
              {/* Internal Glassmorphic Layout using stained-glass style */}
              <div className="absolute inset-0.5 rounded-[1.9rem] bg-[#020710]/90 backdrop-blur-3xl p-8 flex flex-col justify-between overflow-hidden border border-[#D4AF37]/25">
                
                {/* Visual grid lines reminiscent of premium UI */}
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Top of Card ID seal */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-mono text-[9px] uppercase font-black tracking-widest text-[#D4AF37]">
                    CAC MSBP Divine Seal
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                </div>

                {/* Central Motif: Church Logo Medallion */}
                <div className="relative my-4 flex flex-col items-center justify-center py-4 z-10 text-center">
                  
                  {/* Glowing halo */}
                  <div className="absolute w-40 h-40 rounded-full bg-[#D4AF37]/15 blur-2xl animate-pulse" />
                  
                  <div className="relative w-32 h-32 rounded-full border-2 border-[#D4AF37] flex items-center justify-center p-0.5 bg-slate-950/60 shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden scale-105 group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src="/logo.jpg" 
                      alt="CAC Mine Shall Be Possible Logo" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <p className="mt-6 font-serif text-lg tracking-widest text-white uppercase font-black">
                    MINE SHALL BE POSSIBLE
                  </p>
                  <p className="text-[10px] text-amber-300 uppercase tracking-widest font-mono font-bold mt-1.5">
                    a.k.a CAC MINE SHALL BE POSSIBLE
                  </p>
                </div>

                {/* Bottom coordinates block mimicking premium credentials */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between relative z-10 text-left">
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 block tracking-wider uppercase">COMMUNITY BASE</span>
                    <strong className="text-xs font-bold text-white block">Obada Oko, Ogun State</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-[#D4AF37] block tracking-wider uppercase">ACCESS PROTOCOL</span>
                    <strong className="text-xs font-bold text-emerald-400 font-mono block">SECURE GATEWAY</strong>
                  </div>
                </div>

              </div>
              
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-700" />
            </div>
          </div>

        </div>

      </section>

      {/* 2. CORE IMPACT STATISTICS (Bento-styled) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display font-extrabold text-xs uppercase tracking-widest text-[#D4AF37]">
            Recorded Spiritual Milestones
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Our Collective Kingdom Achievements
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#123B73] mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {IMPACT_STATS.map((stat, i) => (
            <div 
              key={i} 
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-[#D4AF37]/45 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-16 h-16 rounded-full bg-white/1 group-hover:bg-[#D4AF37]/5 transition-colors" />
              <div className="relative z-10 text-left">
                <p className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-[#D4AF37] transition-colors leading-none">
                  {stat.count}
                </p>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#D4AF37] mt-3 uppercase tracking-wider">
                  {stat.label}
                </h4>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 italic font-sans relative z-10 text-left">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* 3. NEW VISION & MISSION SECTION (REVERENTIAL PLAYFAIR DISPLAY SCRIPTURES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081C3D]/40 rounded-3xl p-8 sm:p-14 border border-white/5 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#123B73]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start text-left">
            
            {/* The Vision Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/35">
                <span className="font-display text-[9px] font-black text-[#D4AF37] uppercase tracking-wider">Our Vision</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                A Soul-Winning Army Transforming Eternity
              </h3>
              <p className="font-serif text-base sm:text-lg text-slate-300 italic leading-relaxed">
                "A global, dynamic soul-winning army raising dedicated, scripture-grounded Kingdom ambassadors who possess the spiritual fire and authority to transform lives for eternity."
              </p>
              
              <div className="pt-4 border-t border-white/5 flex items-center space-x-3">
                <span className="text-amber-300 text-sm font-serif">Matthew 28:19</span>
                <span className="text-slate-500 font-mono text-[10px] uppercase">GO THEREFORE & MAKE DISCIPLES</span>
              </div>
            </div>

            {/* The Mission Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#123B73]/40 border border-[#123B73]/60">
                <span className="font-display text-[9px] font-black text-blue-300 uppercase tracking-wider">Our Mission</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                Consecrated To Winning and Equipping
              </h3>
              <p className="font-serif text-base sm:text-lg text-slate-300 italic leading-relaxed">
                "To win souls continuously and aggressively for Christ through street evangelism, systematic Bible discipleship, prayer warfare, and delivering humanitarian help directly to distressed families."
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center space-x-3">
                <span className="text-amber-300 text-sm font-serif">Acts 1:8</span>
                <span className="text-slate-500 font-mono text-[10px] uppercase">RECEIVE POWER & BE MY WITNESSES</span>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-xs text-slate-400 max-w-xl text-left font-sans">
              All missionary actions and doctrinal training pipelines are backed by our sacred biblical constitution.
            </p>
            <button 
              onClick={() => setTab('about')}
              className="inline-flex items-center space-x-2 text-xs font-display font-extrabold text-[#D4AF37] uppercase tracking-wider hover:text-white transition-all cursor-pointer"
            >
              <span>Explore Statement of Faith</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. PLATFORM CORE FOCUS AREAS / BENTO GRID FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left space-y-3 mb-12 max-w-3xl">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-[#D4AF37]">
            Core Operational Hubs
          </h2>
          <p className="font-display font-black text-2xl sm:text-4xl text-white leading-tight tracking-tight">
            Cultivating Spark, Fire, and Deliverance
          </p>
          <div className="h-1 w-16 bg-[#D4AF37]" />
        </div>

        {/* Bento Grid Construction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Identity Generator Card (Twice as wide) */}
          <div className="md:col-span-2 glass-panel p-8 rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#081C3D]/80 to-[#123B73]/30 flex flex-col justify-between space-y-6 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-[70px] pointer-events-none" />
            
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                IDENTITY DECREE
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3.5xl text-white leading-tight">
                The Soul Winner's Covenant Challenge
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl font-sans">
                Under the visionary direction of Prophet Maruph Oluwasegun Oladele. (OMOOBAOLOGO), we have committed to winning <strong className="text-white text-semibold font-sans">One Soul Every Month</strong>. By registering on our interactive Evangelism Hub, you get assigned local mission territories, receive downloadable tracts, and log outcomes. Let's make the Great Commission personal.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-slate-500 font-mono">CURRENT TERM:</span>
                <span className="text-[10px] font-bold font-display text-white bg-white/5 px-2 py-1 rounded tracking-wider">2026 GENERAL DEPLOYMENT</span>
              </div>
              <button 
                onClick={() => setTab('evangelism')}
                className="ml-auto px-6 py-3 rounded-xl bg-[#D4AF37] text-[#081C3D] font-display font-black text-xs uppercase tracking-wider hover:bg-white hover:text-[#081C3D] transition-all cursor-pointer"
              >
                Start My Hub Journey →
              </button>
            </div>
          </div>

          {/* Feature: Prayer Watch */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/30 transition-all duration-300 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
              <Radio className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-display font-bold text-lg text-white">Aggressive Prayer Wall</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Intercede for brothers and sisters around the globe. Post requests and receive instant notifications as prayer warriors click "Amen" to cover you.
              </p>
            </div>
            <button 
              onClick={() => setTab('prayer')}
              className="text-xs font-display font-bold text-[#D4AF37] uppercase tracking-widest text-left hover:text-white flex items-center gap-1.5 pt-4 border-t border-white/5 cursor-pointer"
            >
              Access Prayer Room <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature: Discipleship Track */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/30 transition-all duration-300 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-display font-bold text-lg text-white">Growth & Ambassador Path</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Structured progressive curriculum modules checking in from foundational Salvation theology up to Global Ambassador missionary commissioning.
              </p>
            </div>
            <button 
              onClick={() => setTab('discipleship')}
              className="text-xs font-display font-bold text-[#D4AF37] uppercase tracking-widest text-left hover:text-white flex items-center gap-1.5 pt-4 border-t border-white/5 cursor-pointer"
            >
              Begin Growth Track <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature: Community Mercy Outreach */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/30 transition-all duration-300 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
              <Heart className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-display font-bold text-lg text-white">Community Outreach Care</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Distributing food and general welfare materials in Obada Oko and prison compartments. Read documented testimonies and outreach field statistics.
              </p>
            </div>
            <button 
              onClick={() => setTab('outreach')}
              className="text-xs font-display font-bold text-[#D4AF37] uppercase tracking-widest text-left hover:text-white flex items-center gap-1.5 pt-4 border-t border-white/5 cursor-pointer"
            >
              View Mission Reports <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature: Resource Center */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/30 transition-all duration-300 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-display font-bold text-lg text-white">Apostolic Sermons & Media</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Stream audio messages, read sermon transcripts, and download tracts to share during personal witnessing, anytime and anywhere.
              </p>
            </div>
            <button 
              onClick={() => setTab('resources')}
              className="text-xs font-display font-bold text-[#D4AF37] uppercase tracking-widest text-left hover:text-white flex items-center gap-1.5 pt-4 border-t border-white/5 cursor-pointer"
            >
              Audios & PDFs <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </section>

      {/* 5. MINISTER'S WELCOME SECTION */}
      <section className="bg-gradient-to-b from-transparent via-[#081C3D]/30 to-transparent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-14 relative overflow-hidden">
            
            {/* Ambient gold glow decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Minister Photo Container */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081C3D] to-transparent z-10 rounded-2xl pointer-events-none" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#123B73] rounded-2xl blur opacity-25" />
                  
                  <img 
                    src="/prophet.png" 
                    alt="Prophet Maruph Oluwasegun Oladele. (OMOOBAOLOGO)"
                    className="w-full max-w-[320px] aspect-[4/5] object-cover rounded-2xl relative z-0 shadow-2xl"
                  />
                  
                  {/* Floating Caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#050505]/85 border border-white/10 backdrop-blur-xl p-4 rounded-xl text-center">
                    <p className="font-display font-black text-[#D4AF37] uppercase tracking-wide text-xs">Prophet Maruph Oluwasegun Oladele. (OMOOBAOLOGO)</p>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">GENERAL OVERSEER (Omoobaologo)</p>
                  </div>
                </div>
              </div>

              {/* Minister Message */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-[#D4AF37] text-xs font-display font-semibold uppercase tracking-widest block">
                  A Father's Vision & Call
                </span>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white leading-snug tracking-tight">
                  Welcome to the Household of Divine Possibilities
                </h3>
                
                {/* Scripture and quote styling */}
                <div className="space-y-4 font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>
                    "I welcome you to this platform not as a spectator, but as an assigned co-laborer in God’s Vineyard. God did not call us into an ordinary church layout. He called us to pour the <strong className="text-white">unceasing anointing oil</strong> of soul-winning, prayer, and absolute deliverance to raise believers into massive Kingdom giants.
                  </p>
                  
                  <blockquote className="border-l-4 border-[#D4AF37] pl-4 font-serif text-amber-200 italic py-1">
                    "We stand strictly upon the immortal, eternal scripture of Matthew 28:19. If you feel structured delays in your physical life, remember our verdict of CAC Mine Shall Be Possible."
                  </blockquote>

                  <p>
                    Start your obedience by winning one soul for the King today!"
                  </p>
                </div>
                
                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <button 
                    onClick={() => setTab('minister')}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/30 text-white hover:bg-white/10 font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Read Full Calling Testimony
                  </button>
                  <div className="text-left">
                    <span className="font-display text-xs text-[#D4AF37] block font-black">PROPHET MARUPH OLUWASEGUN OLADELE. (OMOOBAOLOGO)</span>
                    <span className="text-[10px] text-slate-500 font-mono">Obada Oko, Ogun State, Nigeria</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. COUNTDOWN SPOTLIGHT ON NEAREST HOLY CRUSADE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#081C3D] to-[#040d1c] border border-white/15 flex flex-col justify-between relative overflow-hidden text-left">
          
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#123B73]/25 blur-[100px] pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />

          {/* Header block with details */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/5 relative z-10">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-2 px-2.5 py-1 text-[10px] rounded bg-amber-500/10 text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-widest font-black">
                ★ FEATURED REVIVAL CRUSADE
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Night of Divine Abundance
              </h3>
              <p className="text-xs text-slate-400">
                Laying hold of absolute prophetic covenants in Obada Oko, Ogun State, Nigeria.
              </p>
            </div>
            
            <button 
              onClick={() => setTab('events')}
              className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#081C3D] hover:bg-white font-display font-black text-xs uppercase tracking-widest text-center transition-all cursor-pointer glow-btn"
            >
              Get Crusade Access Pass
            </button>
          </div>

          {/* Informative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 relative z-10 font-sans">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">DATE AND TIME HOUR</span>
              <strong className="text-base font-bold text-white mt-1 block">Thursday, June 18, 2026</strong>
              <span className="text-xs text-slate-400 block mt-0.5">Begins at 5:00 PM Prompt (GMT+1)</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">CRUSADE GROUND LOCATION</span>
              <strong className="text-base font-bold text-white mt-1 block">Open Ground, Obada Oko</strong>
              <span className="text-xs text-slate-400 block mt-0.5">Near Abeokuta Expressway, Ogun State, NG</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">MINISTERING UNCTION</span>
              <strong className="text-base font-bold text-[#D4AF37] mt-1 block">Prophet Maruph Oluwasegun Oladele. (OMOOBAOLOGO)</strong>
              <span className="text-xs text-slate-400 block mt-0.5">Evangelistic signs and prophetic miracles</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. RECENT CRUSADE TESTIMONIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-display font-extrabold text-xs uppercase tracking-widest text-[#D4AF37]">
            Power of Deliverance
          </h2>
          <p className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Signs, Miracles & Mighty Covenants
          </p>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Testimony Spotlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          <div className="glass-panel p-8 rounded-3xl relative flex flex-col justify-between space-y-6 border-white/5 bg-[#081C3D]/25">
            <p className="text-sm text-slate-300 leading-relaxed italic font-serif">
              "For 12 years, I was locked inside hard drug addiction and violent gangs. During the Obada Oko crusade, a soul winner handed me a gospel flyer. As Prophet Maruph Oluwasegun Oladele. (OMOOBAOLOGO) was praying, the power of the Holy Spirit hit me like light. Yesterday I was completely delivered!"
            </p>
            <div className="flex items-center space-x-4 border-t border-white/5 pt-4">
              <div className="w-10 h-10 rounded-full bg-[#123B73]/40 border border-[#D4AF37]/30 flex items-center justify-center font-display font-bold text-[#D4AF37]">
                BA
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Brother Abraham Adeosun</p>
                <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Salvation & Deliverance testimony</p>
              </div>
              <span className="ml-auto text-emerald-400 text-[10px] font-mono tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">✓ VERIFIED</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl relative flex flex-col justify-between space-y-6 border-white/5 bg-[#081C3D]/25">
            <p className="text-sm text-slate-300 leading-relaxed italic font-serif">
              "My doctors diagnosed me with stage 3 severe fibroids and scheduled me for an expensive, unsafe surgery. As the Prophet shouted 'CAC Mine Shall be Possible!', I felt a hot burning sensation. Routine ultrasound scan showed absolutely nothing! Totally melted away!"
            </p>
            <div className="flex items-center space-x-4 border-t border-white/5 pt-4">
              <div className="w-10 h-10 rounded-full bg-[#123B73]/40 border border-[#D4AF37]/30 flex items-center justify-center font-display font-bold text-[#D4AF37]">
                DA
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Sister Deborah Akinyemi</p>
                <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Glorious Miraculous Healing</p>
              </div>
              <span className="ml-auto text-emerald-400 text-[10px] font-mono tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">✓ VERIFIED</span>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setTab('testimonies')}
            className="px-6 py-3 rounded-xl border border-[#D4AF37]/30 text-xs font-display font-bold text-[#D4AF37] uppercase tracking-wider hover:bg-white hover:text-[#081C3D] transition-all cursor-pointer"
          >
            Review All Testimonies & Submit Yours
          </button>
        </div>

      </section>

      {/* 8. GET INVOLVED (Mobilisation Hub Actions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#0c1f44] to-[#123B73]/10 border border-white/10 text-center space-y-8 relative overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-[90px] pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10 text-center">
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
              Ready to Advance the Kingdom of God?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              There is an active deployment position waiting for you. Become a prayer partner, a street evangelist, welfare distributor, or media technician. Stand up to be counted.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto relative z-10 text-left">
            
            <div 
              onClick={() => setTab('evangelism')}
              className="p-6 rounded-2xl bg-[#050B14]/75 border border-white/5 hover:border-[#D4AF37]/40 cursor-pointer transition-colors space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-sm">Become A Soul Winner</h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">Receive territories, instruction manuals, tracts, and follow-up support.</p>
            </div>

            <div 
              onClick={() => setTab('volunteer')}
              className="p-6 rounded-2xl bg-[#050B14]/75 border border-white/5 hover:border-[#D4AF37]/40 cursor-pointer transition-colors space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#123B73]/20 flex items-center justify-center text-blue-400">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-sm">Sign Up As Volunteer</h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">Join follow-up, global welfare sharing, and crusade logistics.</p>
            </div>

            <div 
              onClick={() => setTab('prayer')}
              className="p-6 rounded-2xl bg-[#050B14]/75 border border-white/5 hover:border-[#D4AF37]/40 cursor-pointer transition-colors space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-500">
                <Radio className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-sm">Intercessory Warrior</h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">Commit daily hours to pray for lost souls, crusade grounds, and our ministers.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 9. NEW COMPREHENSIVE CONTACT HUB SANCTUARY (HIGH-CONVERTING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 relative overflow-hidden text-left bg-[#081C3D]/30">
          
          <div className="absolute top-0 right-0 w-84 h-84 bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-start">
            
            {/* Contact directories / Address info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  Connect With Us Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  Have questions about evangelism tracks, volunteer enlistment, or counseling arrangements? Want to find our physical sanctuary? Reach out directly.
                </p>
              </div>

              {/* Physical Headquarters Address */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-[#D4AF37] tracking-widest uppercase block font-bold">SANCTUARY HEADQUARTERS</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 flex items-start gap-2 font-sans">
                  <span className="text-[#D4AF37] text-base shrink-0">📍</span>
                  <span>
                    Oil For Soul Winning Evangelical Ministries Headquarters,<br />
                    Obada Oko, Abeokuta-Ibadan Expressway, Ogun State, Nigeria.
                  </span>
                </p>
              </div>

              {/* Telephone contacts */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-[#D4AF37] tracking-widest uppercase block font-bold">TELEPHONE ENQUIRIES</span>
                <div className="pt-1 space-y-1.5 font-display text-sm font-bold text-white">
                  <a href="tel:09065377288" className="hover:text-amber-300 transition-colors block">📞 09065377288</a>
                  <a href="tel:08029171289" className="hover:text-amber-300 transition-colors block">📞 08029171289</a>
                </div>
              </div>

              {/* WhatsApp direct support action */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <span className="text-[9px] font-mono text-[#4ade80] tracking-widest uppercase block font-bold">SECURE WHATSAPP HELPLINE</span>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a 
                    href="https://wa.me/2349065377288?text=Hello%20CAC%20Mine%20Shall%20Be%20Possible,%20I%20am%20enquiring%20from%20the%20Kingdom%20Mobilisation%20homepage."
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-400 border border-emerald-500/30 rounded-xl text-[10px] font-display font-black uppercase tracking-wider transition-colors inline-block cursor-pointer"
                  >
                    Direct Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-[#050505]/60 border border-white/10 p-6 sm:p-8 rounded-2xl relative">
              <h4 className="font-display font-bold text-base text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
                Send Fast Message
              </h4>

              {success ? (
                <div className="p-8 text-center space-y-4 animate-scaleUp">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white">Message Transmitted safely!</h4>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto font-sans">
                    Hallelujah! Your contact submission was received and logged under local databases. Our secretariate will pray and reach back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickContact} className="space-y-4 text-left font-sans text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Brother Samuel"
                        className="w-full bg-[#081C3D]/30 border border-white/10 focus:border-[#D4AF37] focus:outline-none p-3 rounded-lg text-white text-xs font-sans placeholder-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Your Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. samuel@gmail.com"
                        className="w-full bg-[#081C3D]/30 border border-white/10 focus:border-[#D4AF37] focus:outline-none p-3 rounded-lg text-white text-xs font-sans placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Message details</label>
                    <textarea 
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your brief enquiry details about soul winning, crusades, welfare needs or prayer..."
                      className="w-full bg-[#081C3D]/30 border border-white/10 focus:border-[#D4AF37] focus:outline-none p-3 rounded-lg text-white text-xs font-sans placeholder-slate-600 leading-relaxed resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#123B73] hover:from-[#123B73] hover:to-[#D4AF37] text-white hover:text-amber-200 text-xs font-display font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <span>{sending ? 'TRANSMITTING MESSAGE...' : 'TRANSMIT ENQUIRY MESSAGE'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10px] text-slate-500 font-mono text-center pt-2">
                    Secure local database recording · Guaranteed privacy
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
