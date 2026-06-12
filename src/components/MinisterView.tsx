import React, { useState } from 'react';
import { Award, Compass, Heart, Flame, Shield, Send, MessageSquareCode, Check, RefreshCw } from 'lucide-react';

export default function MinisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Counseling');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [propheticVerdict, setPropheticVerdict] = useState('');

  const handlePostMessageToProphet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setLoading(true);

    const scriptureBlessings = [
      "Job 22:28 - You shall also decree a thing, and it shall be established unto you: and the light shall shine upon your ways. Your delays are cancelled!",
      "Philippians 4:19 - My God shall supply all your need according to his riches in glory by Christ Jesus. Your business receives fresh divine oil!",
      "Deut 28:13 - The Lord shall make thee the head, and not the tail; and thou shalt be above only. Rise up into your Kingdom Ambassadorship!",
      "Isaiah 10:27 - And it shall come to pass in that day, that his burden shall be taken away from off thy shoulder... the yoke shall be destroyed because of the anointing. Walk in raw freedom!",
    ];

    setTimeout(() => {
      // Save locally
      const list = JSON.parse(localStorage.getItem('messages_to_prophet') || '[]');
      list.push({ name, email, subject, message, date: new Date().toLocaleDateString() });
      localStorage.setItem('messages_to_prophet', JSON.stringify(list));

      const randomVerdict = scriptureBlessings[Math.floor(Math.random() * scriptureBlessings.length)];
      setPropheticVerdict(randomVerdict);
      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* 1. Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            MEET THE MINISTER IN CHARGE
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Prophet Maruph Oladele
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          The under-shepherd anointed to pioneer this global evangelical mobilization. Also affectionately called <strong>Omoobaologo</strong> (The Prince of Glory).
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* 2. Biography & Personal Calling */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Pictures panel on the left */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent z-10 rounded-2xl" />
            <div className="absolute -inset-1 bg-[#D4AF37]/25 rounded-2xl blur" />
            
            <img 
              src="/prophet.png" 
              alt="Prophet Maruph Oladele praying"
              className="w-full h-auto aspect-square object-cover rounded-2xl relative z-0"
            />

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <p className="font-display text-[#D4AF37] font-black text-xs uppercase tracking-widest">PROPHECY & POWER</p>
              <h4 className="font-display font-bold text-white text-lg">CAC Mine Shall Be Possible</h4>
              <p className="text-xs text-slate-300 font-mono">Obada Oko Sanctuary Headquarters</p>
            </div>
          </div>

          {/* Quick stats panel */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <h5 className="font-display font-bold text-xs text-[#D4AF37] uppercase tracking-widest">MINISTRY EXPERIENCE</h5>
            
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#050505]">
                <span className="block text-slate-500">ORDINATION</span>
                <span className="text-sm font-bold text-white">CAC Apostolic</span>
              </div>
              <div className="p-3 rounded-lg bg-[#050505]">
                <span className="block text-slate-500">MANDATE CORE</span>
                <span className="text-sm font-bold text-[#D4AF37]">Soul Winning</span>
              </div>
              <div className="p-3 rounded-lg bg-[#050505]">
                <span className="block text-slate-500">TELEVISION AUDIENCE</span>
                <span className="text-sm font-bold text-white">Global Feed</span>
              </div>
              <div className="p-3 rounded-lg bg-[#050505]">
                <span className="block text-slate-500">GEOGRAPHY</span>
                <span className="text-sm font-bold text-white">Ogun State, NG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Core Text */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <h3 className="font-display font-bold text-lg text-white">The Man, The Calling, and The Mandate</h3>
            <p>
              Prophet Maruph Oladele represents a rugged prophetic voice ordained by God to trigger global soul harvests, unlock structural financial abundance, and break physical delays blocking the destinies of genuine believers.
            </p>
            <p>
              He was born with royalty in his veins - hence the name <strong>Omoobaologo</strong> - but walked away from secular positions to answer the glorious calling of our Lord. He underwent rigorous theological purification and prayer consecration inside Christ Apostolic Church (CAC). After months of solitary spiritual battles on mountain altars, he was called to Obada Oko in Ogun State to build the platform: CAC Mine Shall Be Possible.
            </p>
            <p>
              Prophet Oladele’s primary heartbeat is not centered on commercializing the anointing oil. His focus is on raising a <strong className="text-white">self-sufficient, militant army of soul winners</strong> through direct street actions. His teachings focus on raw faith, absolute adherence to Matthew 28:19, physical holiness, and divine acceleration.
            </p>
          </div>

          {/* Core Prophetic Pillars booklet theme */}
          <div className="p-6 rounded-2xl glass-panel-gold space-y-4">
            <h4 className="font-display font-black text-sm text-amber-100 uppercase tracking-wide">
              Prophetic Pillar Verdicts
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start space-x-3">
                <Flame className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>The Mandate of Possibility:</strong> When you walk in covenant obedience with Christ, every physical obstacle in safety, business, health, and family melts. CAC Mine Shall Be Possible is a spiritual reality.</span>
              </div>
              <div className="flex items-start space-x-3">
                <Compass className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>The Anointing of the Soil:</strong> The oil we spray carries spiritual protection and authority to release delayed speed for territorial expansion.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Counselor counseling with Prophet Omoobaologo */}
      <div className="glass-panel p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-[#081C3D]/80 to-[#123B73]/20 border-[#D4AF37]/20">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 blur-[50px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <MessageSquareCode className="w-5 h-5 animate-pulse" />
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              Direct Prophetic Counsel
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Do you have a personal challenge or require spiritual advice from Prophet Maruph Oladele? Use this private interface to submit your request directly to the Prophet. Enjoy an instant prophetic verdict block drawn from real-test scriptural covenants.
            </p>
          </div>

          <div className="lg:col-span-7 col-span-1">
            {!submitted ? (
              <form onSubmit={handlePostMessageToProphet} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Your Name</label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Brother Samuel" 
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Subject Channel</label>
                    <select 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      <option value="Counseling">Deliverance/Counseling</option>
                      <option value="Family Yoke">Family Covenant breakthrough</option>
                      <option value="Business Speed">Business Anointing</option>
                      <option value="Salvation Decision">Salvation Commitment</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">Your Situation Details</label>
                  <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Describe your situation and ask for Prophet Maruph Oladele's spiritual attention..." 
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-xs text-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Anointing Connection...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message to Prophet</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-900 border border-green-500/20 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto text-green-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-white text-base">Hallelujah! Counsel transmitted.</h4>
                <p className="text-xs text-slate-400">Your message has been safely recorded on Prophet Maruph Oladele's prayer altar register.</p>
                
                <div className="p-4 rounded-xl bg-amber-500/10 border border-[#D4AF37]/30 text-left space-y-2">
                  <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">Prophetic Verdict Decree:</p>
                  <p className="italic text-xs text-white leading-relaxed font-serif">"{propheticVerdict}"</p>
                </div>

                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono font-bold text-slate-400 hover:text-white"
                >
                  ← Transmit another counseling note
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
