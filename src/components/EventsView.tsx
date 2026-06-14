import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Award, Check, RefreshCw, Send, Sparkles, X, ChevronRight, Bookmark } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data.ts';
import { Event } from '../types.ts';

export default function EventsView() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  // Modal registration states
  const [ticketName, setTicketName] = useState('');
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketPhone, setTicketPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [issuedTicket, setIssuedTicket] = useState<{ id: string; name: string; email: string; dateIssued: string; eventTitle: string } | null>(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set up ticking countdown to closest event: Night of Divine Abundance Crusade (June 18, 2026)
    const targetDate = new Date('2026-06-18T17:00:00+01:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRegisterForEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !ticketName || !ticketEmail) return;
    setLoading(true);

    setTimeout(() => {
      const ticket = {
        id: `TCK-${Math.floor(Date.now() / 1000000)}-${Math.floor(Math.random() * 900) + 100}`,
        name: ticketName,
        email: ticketEmail,
        dateIssued: new Date().toLocaleDateString(),
        eventTitle: selectedEvent.title
      };

      // Save locally
      const list = JSON.parse(localStorage.getItem('registered_tickets_list') || '[]');
      list.push(ticket);
      localStorage.setItem('registered_tickets_list', JSON.stringify(list));

      setIssuedTicket(ticket);
      setLoading(false);

      // Reset fields
      setTicketName('');
      setTicketEmail('');
      setTicketPhone('');
    }, 1500);
  };

  const closeTicketModal = () => {
    setIssuedTicket(null);
    setSelectedEvent(null);
  };

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left relative">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            UPCOMING COVENANT MEETINGS
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Holy Crusades & Prayer Assemblies
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Prepare your hearts to encounter the unceasing anointing. Claim your digital Crusade Access ticket, examine countdowns, and note locations. CAC Mine Shall Be Possible!
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* 2. LIVE COUNTDOWN BOX FOR THE CLOSEST HOLY CRUSADE */}
      <div className="glass-panel-gold p-8 sm:p-12 rounded-[2rem] border-amber-500/20 bg-gradient-to-br from-[#0c1f44] to-[#040d1c] relative overflow-hidden text-center space-y-8">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
        
        <div className="space-y-2 max-w-xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-[#D4AF37] border border-amber-500/30 text-[10px] font-bold uppercase tracking-widest rounded-full">
            COUNTDOWN TO POWER VISITATION
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
            Night of Divine Abundance Crusade
          </h3>
          <p className="text-xs text-slate-400">
            Open Ground, Obada Oko, Ogun State, Nigeria. Featuring Prophet Maruph Oluwasegun Oladele. (OMOOBAOLOGO).
          </p>
        </div>

        {/* Countdown dials */}
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto relative z-10">
          
          <div className="p-4 bg-black/60 rounded-2xl border border-white/5 flex flex-col justify-center">
            <span className="font-display font-black text-3xl sm:text-4xl text-white">{timeLeft.days}</span>
            <span className="text-[9px] uppercase font-mono text-slate-500 mt-1">DAYS</span>
          </div>

          <div className="p-4 bg-black/60 rounded-2xl border border-white/5 flex flex-col justify-center">
            <span className="font-display font-black text-3xl sm:text-4xl text-amber-200">{timeLeft.hours}</span>
            <span className="text-[9px] uppercase font-mono text-slate-500 mt-1">HOURS</span>
          </div>

          <div className="p-4 bg-black/60 rounded-2xl border border-white/5 flex flex-col justify-center">
            <span className="font-display font-black text-3xl sm:text-4xl text-[#D4AF37]">{timeLeft.minutes}</span>
            <span className="text-[9px] uppercase font-mono text-slate-500 mt-1">MINUTES</span>
          </div>

          <div className="p-4 bg-black/60 rounded-2xl border border-white/5 flex flex-col justify-center">
            <span className="font-display font-black text-3xl sm:text-4xl text-white animate-pulse">{timeLeft.seconds}</span>
            <span className="text-[9px] uppercase font-mono text-slate-500 mt-1">SECONDS</span>
          </div>

        </div>

        <button
          onClick={() => setSelectedEvent(UPCOMING_EVENTS[0])}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider relative z-10 hover:scale-105 transition-all glow-btn"
        >
          Enlist for Free Crusade Ticket
        </button>
      </div>

      {/* 3. LIST OF UPCOMING EVENTS */}
      <div className="space-y-6 pt-6">
        <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
          Crusade Calendar Portfolio
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((evt) => (
            <div 
              key={evt.id} 
              className="glass-panel rounded-3xl overflow-hidden border border-white/5 flex flex-col hover:border-[#D4AF37]/40 transition duration-300"
            >
              <img 
                src={evt.image} 
                alt={evt.title} 
                className="w-full h-44 object-cover"
              />
              <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#D4AF37] uppercase">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {evt.date}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">{evt.category}</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-white leading-tight">
                    {evt.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {evt.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="line-clamp-2">{evt.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Time: {evt.time}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedEvent(evt)}
                  className="w-full py-2 bg-[#050B14] hover:bg-[#D4AF37] border border-white/10 hover:text-[#081C3D] text-xs font-display font-black uppercase tracking-wider text-[#D4AF37] transition duration-200 rounded-lg"
                >
                  Acquire Free Ticket
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. MODAL POPUP PASS ADMISSION SLIP */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md glass-panel rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden relative animate-scaleIn bg-[#081222]/95">
            
            <button 
              onClick={closeTicketModal}
              className="absolute right-4 top-4 p-1 rounded-full bg-white/5 text-slate-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>

            {!issuedTicket ? (
              <form onSubmit={handleRegisterForEvent} className="p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase">COVENANT ENTRY SYSTEM</span>
                  <h4 className="font-display font-bold text-lg text-white">Acquire Admission Pass</h4>
                  <p className="text-xs text-slate-400">
                    Registering helps our follow-up teams organize seats, counsel handouts, and dedicated miracle oil dispensers.
                  </p>
                </div>

                <div className="p-3 bg-[#03060E] border border-white/5 rounded-lg text-xs space-y-1 text-slate-300">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase block">CRUSADE MEETING SELECTED:</span>
                  <p className="font-display font-medium text-white">{selectedEvent.title}</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">My Full Name</label>
                    <input 
                      type="text" 
                      value={ticketName} 
                      onChange={(e) => setTicketName(e.target.value)}
                      placeholder="e.g. Sis. Abigail Peterson" 
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">My Email Address</label>
                    <input 
                      type="email" 
                      value={ticketEmail} 
                      onChange={(e) => setTicketEmail(e.target.value)}
                      placeholder="e.g. abigail@example.com" 
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Phone (WhatsApp Optional)</label>
                    <input 
                      type="tel" 
                      value={ticketPhone} 
                      onChange={(e) => setTicketPhone(e.target.value)}
                      placeholder="e.g. 09011223344" 
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Generating Admission pass...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Acquire Admission Ticket</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Ticket Layout */
              <div className="p-6 sm:p-8 space-y-6 text-center animate-fadeIn relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-8 bg-black/80 rounded-r-full" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-8 bg-black/80 rounded-l-full" />

                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Hallelujah! Admission Approved</h4>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wide">
                    OIL FOR SOUL WINNING EVANGELICAL MINISTRIES
                  </p>
                </div>

                {/* Styled Slip */}
                <div className="p-5 rounded-2xl bg-[#03060E] border border-[#D4AF37]/40 text-left space-y-3 font-mono relative">
                  <div className="flex justify-between text-[9px] text-[#D4AF37] border-b border-white/5 pb-2">
                    <span>PORTAL CRUSADE PASS</span>
                    <span>{issuedTicket.id}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] text-slate-500 block">EVENT MEETING:</span>
                    <span className="text-xs font-bold text-white uppercase font-display block leading-tight">{issuedTicket.eventTitle}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] text-slate-500 block">ADMITTED VISITOR:</span>
                    <span className="text-xs font-semibold text-slate-300 block">{issuedTicket.name}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-2">
                    <div>
                      <span className="text-[9px] text-slate-500 block">ADMISSION TYPE:</span>
                      <span className="text-[10px] text-emerald-400 font-bold block bg-[#0c1c38] px-1.5 py-0.5 rounded border border-[#123B73] w-fit">FREE ENTRY</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block">DATE ISSUED:</span>
                      <span className="text-[10px] text-slate-300 block">{issuedTicket.dateIssued}</span>
                    </div>
                  </div>

                  <p className="text-[9px] text-[#D4AF37] italic pt-1 text-center font-serif leading-relaxed">
                    "Mine Shall Be Possible - Present this slip at the Obada Oko gate!"
                  </p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      alert("🖨️ Initializing raw print spooler...\n\nDigital Crusade Admission Slip has been queued. Keep it safe in photo snapshots!");
                    }}
                    className="flex-1 py-2 text-xs font-display font-semibold uppercase bg-white/5 hover:bg-white/10 text-white rounded transition"
                  >
                    Print ticket
                  </button>
                  <button 
                    onClick={closeTicketModal}
                    className="flex-1 py-2 text-xs font-display font-semibold uppercase bg-[#D4AF37] hover:bg-white text-[#081C3D] rounded transition"
                  >
                    Close & Finish
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
