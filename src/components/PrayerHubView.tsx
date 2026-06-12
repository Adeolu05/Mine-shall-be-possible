import React, { useState, useEffect } from 'react';
import { Radio, Send, Heart, Calendar, Check, RefreshCw, Star, Users, Flame, Info } from 'lucide-react';
import { INITIAL_PRAYER_WALL, DAILY_PRAYER_POINTS } from '../data.ts';
import { PrayerRequest } from '../types.ts';

export default function PrayerHubView() {
  const [prayerList, setPrayerList] = useState<PrayerRequest[]>([]);
  
  // Form inputs
  const [name, setName] = useState('');
  const [requestContent, setRequestContent] = useState('');
  const [category, setCategory] = useState('Healing & Restoration');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Intercession Signup state
  const [intercessionJoined, setIntercessionJoined] = useState(false);
  const [intercessionName, setIntercessionName] = useState('');
  const [intercessionWatch, setIntercessionWatch] = useState('00:00 - 04:00 (Early Watch)');

  // Selected Day for daily points (defaults to current system day!)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentSystemDay = days[new Date().getDay()];
  const [selectedDay, setSelectedDay] = useState(currentSystemDay);

  useEffect(() => {
    // Load lists
    const saved = localStorage.getItem('prayer_requests_list');
    if (saved) {
      setPrayerList(JSON.parse(saved));
    } else {
      setPrayerList(INITIAL_PRAYER_WALL);
      localStorage.setItem('prayer_requests_list', JSON.stringify(INITIAL_PRAYER_WALL));
    }

    const intercessionJoinedSaved = localStorage.getItem('intercession_team_joined');
    if (intercessionJoinedSaved === 'true') {
      setIntercessionJoined(true);
    }
  }, []);

  const handlePostRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !requestContent) return;
    setSubmitting(true);

    setTimeout(() => {
      const newReq: PrayerRequest = {
        id: `pr-${Date.now()}`,
        name,
        request: requestContent,
        category,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        answeredCount: 1,
        hasPrayed: false
      };

      const updated = [newReq, ...prayerList];
      setPrayerList(updated);
      localStorage.setItem('prayer_requests_list', JSON.stringify(updated));

      // Reset
      setName('');
      setRequestContent('');
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handlePrayForSomeone = (id: string) => {
    const updated = prayerList.map((item) => {
      if (item.id === id) {
        const alreadyPrayed = item.hasPrayed;
        return {
          ...item,
          answeredCount: alreadyPrayed ? item.answeredCount - 1 : item.answeredCount + 1,
          hasPrayed: !alreadyPrayed
        };
      }
      return item;
    });

    setPrayerList(updated);
    localStorage.setItem('prayer_requests_list', JSON.stringify(updated));
  };

  const handleJoinIntercession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!intercessionName) return;

    localStorage.setItem('intercession_team_joined', 'true');
    localStorage.setItem('intercession_team_name', intercessionName);
    localStorage.setItem('intercession_team_watch', intercessionWatch);
    setIntercessionJoined(true);
  };

  const clearTeamRegistration = () => {
    localStorage.removeItem('intercession_team_joined');
    localStorage.removeItem('intercession_team_name');
    localStorage.removeItem('intercession_team_watch');
    setIntercessionJoined(false);
    setIntercessionName('');
  };

  const activeDayPoint = DAILY_PRAYER_POINTS.find(p => p.Day === selectedDay) || DAILY_PRAYER_POINTS[0];

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* 1. Header Hero */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Radio className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            24/7 INTERCESSORY POWER WALL
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Laying Hold of the Altar
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Prophetic Intercession triggers instant miraculous deliverances. Submit your requests, pray for global brethren, and follow the CAC daily fasting prayer points.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* 2. Today's Daily Prayer Point & FASTING DIALECTS */}
      <div className="glass-panel p-8 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#081C3D]/80 to-[#123B73]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] font-semibold text-[#D4AF37] uppercase tracking-widest">
              DAILY WARFARE ALTAR
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              Daily Covenant Prayer Points
            </h3>
            
            {/* Week Tab toggler */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {days.map((d) => {
                const isCurrent = d === currentSystemDay;
                const isSelected = d === selectedDay;
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDay(d)}
                    className={`px-3 py-1 rounded text-[10px] uppercase tracking-wider font-semibold border transition-all ${
                      isSelected 
                        ? 'bg-[#D4AF37] text-[#081C3D] border-[#D4AF37]' 
                        : isCurrent 
                          ? 'bg-white/5 border-[#D4AF37]/40 text-white' 
                          : 'bg-[#03060E] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {d.slice(0, 3)} {isCurrent && '•'}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 col-span-1 bg-slate-950/60 border border-white/5 p-6 rounded-2xl relative">
            <div className="flex items-center justify-between">
              <p className="font-display text-xs text-[#D4AF37] font-black uppercase tracking-wider">
                {activeDayPoint.Day} Theme: {activeDayPoint.Theme}
              </p>
              <span className="text-[10px] text-slate-500 font-mono">Anchor: {activeDayPoint.Anchor}</span>
            </div>

            <p className="text-sm italic text-slate-200 leading-relaxed mt-4 font-serif">
              "{activeDayPoint.Point}"
            </p>

            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-blue-400" />
                Recommended Fasting Hours: 6:00 AM - 3:00 PM Daily
              </span>
              <span className="text-[#D4AF37]">CAC MSBP Core Commandment</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Post Prayer Request & Prayer Wall Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Post Prayer form */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
            <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
              Submit Your Prayer Request
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We believe in the raw, supernatural power of shared prayers. Write your request below. It will immediately publish onto our public wall for warriors around the globe to cover you in prayers.
            </p>

            {submitted && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs text-green-400 text-center animate-fadeIn">
                ✓ Hallelujah! Your request has been securely mounted on the Prayer Wall. Our intercession warriors are activated over your name immediately!
              </div>
            )}

            <form onSubmit={handlePostRequest} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase">My Name / Initial</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Bro. David"
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase">Need Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option value="Healing & Restoration">Healing & Health</option>
                  <option value="Deliverance & Yoke">Deliverance & Protection</option>
                  <option value="Business Speed">Business & Financial speed</option>
                  <option value="Salvation & Sanctity">Salvation & Family Consecration</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase">Situation description</label>
                <textarea
                  value={requestContent}
                  onChange={(e) => setRequestContent(e.target.value)}
                  rows={4}
                  placeholder="Describe your situation and what you want the army of prayer warriors to decree..."
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span> TRANSMITTING TO WALL...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>MOUNT REQUEST ON ALTAR</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Live Active Prayer Wall */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              The Live Prayer Wall Archive
            </h3>
            <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-400 font-mono">
              TOTAL PRAYING AGENTS: {prayerList.length * 4 + 48} ACTIVE
            </span>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {prayerList.length === 0 ? (
              <p className="text-xs text-slate-500 italic text-center py-12">No requests currently mounted on the altar. Be the first!</p>
            ) : (
              prayerList.map((item) => (
                <div 
                  key={item.id} 
                  className={`p-5 rounded-xl border transition-all ${
                    item.hasPrayed 
                      ? 'bg-[#123B73]/25 border-[#D4AF37]/50 shadow-md' 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <p className="text-xs font-bold text-white uppercase">{item.name}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-[#D4AF37] uppercase">{item.category}</span>
                      <span className="text-slate-500">{item.date}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mt-3 font-sans">
                    {item.request}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{item.answeredCount} Intercessors have stood on this name</span>
                    </span>

                    <button
                      onClick={() => handlePrayForSomeone(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-display font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 ${
                        item.hasPrayed 
                          ? 'bg-[#D4AF37] text-[#081C3D]' 
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${item.hasPrayed ? 'fill-[#081C3D] text-[#081C3D]' : 'text-[#D4AF37]'}`} />
                      <span>{item.hasPrayed ? '✓ STOOD IN AGREEMENT' : 'I STAND IN AGREEMENT'}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* 4. Intersession Team Register Form */}
      <div className="bg-[#050C19] rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 blur-[90px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-slate-400 font-mono text-[10px] uppercase">Join Global 24/7 Prayer Roster</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Enlist in the Intercession Team
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We maintain an unbroken continuous prayer hedge, divided into 4-hour shifts ("Watches") daily. Register your name, select your preferred watch time, and help us sustain high-intensity Holy Spirit fire over nations.
            </p>
          </div>

          <div className="lg:col-span-7 col-span-1">
            {!intercessionJoined ? (
              <form onSubmit={handleJoinIntercession} className="space-y-4 bg-slate-950/40 p-6 rounded-2xl border border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Warrior Name</label>
                    <input 
                      type="text" 
                      value={intercessionName} 
                      onChange={(e) => setIntercessionName(e.target.value)}
                      placeholder="e.g. Sister Deborah Adewale" 
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">My Prayer Watch Shift</label>
                    <select 
                      value={intercessionWatch} 
                      onChange={(e) => setIntercessionWatch(e.target.value)}
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white text-slate-200"
                    >
                      <option value="00:00 - 04:00 (Early Watch)">00:00 - 04:00 (Early Watch - Altar Fire)</option>
                      <option value="04:00 - 08:00 (Morning Command)">04:00 - 08:00 (Morning Command)</option>
                      <option value="08:00 - 12:00 (Territory Watch)">08:00 - 12:00 (Territory Watch)</option>
                      <option value="12:00 - 16:00 (Afternoon Break)">12:00 - 16:00 (Afternoon Break)</option>
                      <option value="16:00 - 20:00 (Evening Sacrifices)">16:00 - 20:00 (Evening Sacrifices)</option>
                      <option value="20:00 - 00:00 (Midnight Watch)">20:00 - 00:00 (Midnight Watch - Deliverance Theme)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#D4AF37] text-[#081C3D] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition"
                >
                  Register shift on the global roster
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-[#081C3D]/40 border-2 border-[#D4AF37]/50 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto text-[#D4AF37]">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="font-display font-bold text-white text-base">Hallelujah! Shift registered.</h4>
                <p className="text-xs text-slate-400">
                  Your commitment on the <strong>{localStorage.getItem('intercession_team_watch')}</strong> has been locked. Remember to mount your knees early in continuous prayer.
                </p>
                <button 
                  onClick={clearTeamRegistration}
                  className="text-xs font-mono font-bold text-slate-500 hover:text-white"
                >
                  ← Terminate registration and change shift
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
