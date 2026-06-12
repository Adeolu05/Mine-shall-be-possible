import React, { useState, useEffect } from 'react';
import { Flame, Star, BookOpen, Download, Check, RefreshCw, Send, Sparkles, ChevronRight, Trophy } from 'lucide-react';
import { TRAINING_RESOURCES } from '../data.ts';

interface SoulWinner {
  name: string;
  location: string;
  email: string;
  dateJoined: string;
}

export default function EvangelismHubView() {
  const [registeredWinner, setRegisteredWinner] = useState<SoulWinner | null>(null);
  
  // Roster inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [territory, setTerritory] = useState('Obada Oko');
  const [loading, setLoading] = useState(false);
  
  // Challenge tracker
  const [loggedSouls, setLoggedSouls] = useState<Record<string, string>>({});
  const [monthInput, setMonthInput] = useState('June');
  const [soulName, setSoulName] = useState('');
  const [soulPhone, setSoulPhone] = useState('');

  // Download simulation
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    // Load registered state if any
    const saved = localStorage.getItem('registered_soul_winner');
    if (saved) {
      setRegisteredWinner(JSON.parse(saved));
    }

    const savedSouls = localStorage.getItem('soul_winning_challenge_months');
    if (savedSouls) {
      setLoggedSouls(JSON.parse(savedSouls));
    }
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !location) return;
    setLoading(true);

    setTimeout(() => {
      const winner: SoulWinner = {
        name,
        location,
        email,
        dateJoined: new Date().toLocaleDateString()
      };
      localStorage.setItem('registered_soul_winner', JSON.stringify(winner));
      setRegisteredWinner(winner);
      setLoading(false);

      // Add to global roster list for other counters
      const globalRoster = JSON.parse(localStorage.getItem('soul_winners_roster') || '[]');
      globalRoster.push(winner);
      localStorage.setItem('soul_winners_roster', JSON.stringify(globalRoster));
    }, 1500);
  };

  const handleSoulLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!soulName) return;

    const newLogs = { ...loggedSouls, [monthInput]: soulName };
    localStorage.setItem('soul_winning_challenge_months', JSON.stringify(newLogs));
    setLoggedSouls(newLogs);
    setSoulName('');
    setSoulPhone('');
  };

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      // Trigger native layout simulation or just simple alert file download
      alert(`🎉 Hallelujah! "${title}" has been successfully downloaded with full print-ready layouts.\n\nYou can now print and share this tract with souls on your territorial walks!`);
    }, 1500);
  };

  const resetWinnerRegistration = () => {
    localStorage.removeItem('registered_soul_winner');
    setRegisteredWinner(null);
  };

  const clearChallengeTracker = () => {
    localStorage.removeItem('soul_winning_challenge_months');
    setLoggedSouls({});
  };

  const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* 1. Header Hero Panel */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Flame className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            SOUL WINNERS DIGITAL HUB
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          An Anointed Army of Evangelists
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          The primary weapon of CAC Mine Shall Be Possible for territorial dominion. Access printing-ready tracks, training manuals, and log your personal soul harvests.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* 2. Interactive Registration Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Registration form or active badge */}
        <div className="lg:col-span-6 space-y-6">
          {!registeredWinner ? (
            <div className="glass-panel p-8 rounded-3xl space-y-6 border border-[#D4AF37]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
              
              <div className="space-y-2">
                <span className="text-amber-400 font-display text-[10px] font-bold uppercase tracking-widest pb-1 block border-b border-white/5">
                  COMMISSION ENLISTMENT
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  Enlist in the Soul-Winning Army
                </h3>
                <p className="text-xs text-slate-400">
                  Join 1,800+ actively registered agents. You will receive digital updates, training credentials, and access territory directives.
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">My Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Deaconess Abigail Alabi"
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">My Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. abigail@gmail.com"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 08012345678"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">My City / Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Abeokuta, Ogun State"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Preferred Target Territory</label>
                    <select
                      value={territory}
                      onChange={(e) => setTerritory(e.target.value)}
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white text-slate-200"
                    >
                      <option value="Obada Oko">Obada Oko Markets</option>
                      <option value="Abeokuta Central">Abeokuta Central Square</option>
                      <option value="Imeko Afon">Imeko Afon Villages</option>
                      <option value="Digital Missions">Online & Social Tracting</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Anointing Roster registration...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Enlist in Evangelist Army</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-[#081C3D]/60 border-2 border-[#D4AF37] relative overflow-hidden text-center space-y-6 animate-fadeIn">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[70px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-[#D4AF37] text-[#081C3D] flex items-center justify-center mx-auto shadow-lg">
                  <Trophy className="w-8 h-8 font-black" />
                </div>
                
                <h4 className="font-display font-black text-white text-xl uppercase tracking-widest mt-4">
                  DIGITAL ENLISTMENT SECURE
                </h4>
                <div className="h-0.5 w-16 bg-[#D4AF37] mx-auto my-2" />
                <p className="text-xs text-slate-300">
                  CAC MINE SHALL BE POSSIBLE EVANGELICAL COMMISSION
                </p>
              </div>

              {/* Digital Certificate Badge Layout */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 text-left space-y-3 relative z-10 font-mono">
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>REGISTRATION ID: CAC-SW-0{Math.floor(Math.random() * 800) + 1200}</span>
                  <span className="text-[#D4AF37] font-bold">✓ MISSION ACTIVE</span>
                </div>
                
                <div>
                  <label className="text-[10px] text-slate-500">EVANGELIST NAME:</label>
                  <p className="text-sm font-bold text-white font-display uppercase">{registeredWinner.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-slate-500">TERRITORY BASE:</label>
                    <p className="text-xs text-slate-300 font-semibold">{registeredWinner.location}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500">ENLISTED DATE:</label>
                    <p className="text-xs text-slate-300 font-semibold">{registeredWinner.dateJoined}</p>
                  </div>
                </div>

                <p className="text-[10px] text-[#D4AF37] italic border-t border-white/5 pt-2 text-center">
                  Matthew 28:19 - Go therefore and make disciples of all nations!
                </p>
              </div>

              <div className="pt-2 relative z-10 flex gap-4 justify-center">
                <button 
                  onClick={resetWinnerRegistration}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-semibold transition"
                >
                  Change Profile Directives
                </button>
              </div>

            </div>
          )}
        </div>

        {/* Challenge tracker monthly checkins on the right */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-panel p-8 rounded-3xl space-y-6 border border-white/10 relative overflow-hidden">
            
            <div className="space-y-2">
              <span className="text-[#D4AF37] font-display text-[10px] font-bold uppercase tracking-widest pb-1 block border-b border-white/5">
                ACTIVE SOUL CHALLENGE
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                "One Soul Every Month" Tracker
              </h3>
              <p className="text-xs text-slate-400">
                Laying hold of absolute obedience. Choose a month in 2026, log the name of the precious soul you won for Christ, and keep your divine commission streak alive!
              </p>
            </div>

            {/* Input form */}
            <form onSubmit={handleSoulLog} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
              <div className="sm:col-span-4 space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase">Target Month</label>
                <select 
                  value={monthInput} 
                  onChange={(e) => setMonthInput(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-xs text-white"
                >
                  {monthsOfTheYear.map(m => (
                    <option key={m} value={m}>{m} 2026</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-6 space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase">Soul Name / Reference</label>
                <input 
                  type="text" 
                  value={soulName}
                  onChange={(e) => setSoulName(e.target.value)}
                  placeholder="e.g. Bro. Kenneth Chukwu" 
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-xs text-white"
                  required
                />
              </div>

              <button 
                type="submit"
                className="pointer-events-auto sm:col-span-2 py-2 px-3 rounded-lg bg-[#D4AF37] text-[#081C3D] font-display font-bold text-xs uppercase hover:bg-white transition flex items-center justify-center"
              >
                Log +
              </button>
            </form>

            {/* Rendered calendar checker */}
            <div className="space-y-2 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-white uppercase tracking-wider font-display">My 2026 Harvest Streak:</p>
                <button 
                  onClick={clearChallengeTracker}
                  className="text-[10px] font-mono text-slate-500 hover:text-slate-300"
                >
                  Clear logs
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {monthsOfTheYear.map((month) => {
                  const savedSoul = loggedSouls[month];
                  return (
                    <div 
                      key={month}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        savedSoul 
                          ? 'bg-gradient-to-br from-[#123B73]/40 to-[#081C3D]/80 border-[#D4AF37]/50 text-[#D4AF37]' 
                          : 'bg-[#03060E] border-white/5 text-slate-600'
                      }`}
                      title={savedSoul ? `Soul won: ${savedSoul}` : 'No harvest logged yet'}
                    >
                      <p className="text-[9px] uppercase font-mono font-bold tracking-wider">{month.slice(0, 3)}</p>
                      {savedSoul ? (
                        <div className="mt-1 flex flex-col items-center">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span className="text-[8px] truncate max-w-[80px] text-white" title={savedSoul}>{savedSoul}</span>
                        </div>
                      ) : (
                        <span className="block mt-1 text-[11px] font-bold">∅</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 3. Tract Download Center */}
      <div className="space-y-6 pt-6">
        <div className="space-y-2">
          <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider">
            Downloadable Gospel Materials
          </h3>
          <p className="text-xs text-slate-400">
            Print-ready tracts authorized by Christ Apostolic Church. Distribute these physically during market, street, and house evangelism walks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINING_RESOURCES.filter(tr => tr.category === 'evangelism' || tr.category === 'discipleship').map((res) => {
            const isDownloading = downloadingId === res.id;
            return (
              <div 
                key={res.id}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#D4AF37]/40 transition"
              >
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#D4AF37] uppercase">
                    <span>{res.format} FILE</span>
                    <span className="text-slate-500">{res.durationOrPages}</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base leading-tight">
                    {res.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <button 
                  onClick={() => handleDownload(res.id, res.title)}
                  disabled={isDownloading}
                  className="w-full py-2 px-4 rounded-lg bg-white/5 hover:bg-[#D4AF37] text-slate-300 hover:text-[#081C3D] font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-white/10"
                >
                  {isDownloading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>DOWNLOADING MATERIAL...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>DOWNLOAD PRINTABLE</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
