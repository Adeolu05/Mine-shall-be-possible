import React, { useState } from 'react';
import { Heart, Globe, Eye, Landmark, MapPin, Sparkles, Filter, Users } from 'lucide-react';
import { OUTREACH_REPORTS } from '../data.ts';

export default function OutreachHubView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'welfare' | 'rehabilitation' | 'crusades'>('all');

  const galleryItems = [
    {
      id: 'g1',
      title: 'Obada Oko Marketplace Soul winning',
      category: 'crusades',
      image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=600',
      caption: 'Evangelism teams talking to marketplace traders and sharing tracts.'
    },
    {
      id: 'g2',
      title: 'Free Welfare Food Distribution Packets',
      category: 'welfare',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600',
      caption: 'Distributing essential welfare resources to widows in Obada Oko local sectors.'
    },
    {
      id: 'g3',
      title: 'Abeokuta Ibara Correctional Ministry',
      category: 'rehabilitation',
      image: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?auto=format&fit=crop&q=80&w=600',
      caption: 'Ministering redemptive gospel hope behind prison walls.'
    },
    {
      id: 'g4',
      title: 'Night of deliverance crusade scene',
      category: 'crusades',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600',
      caption: 'Over 5,000 worshippers raised to command raw spiritual freedom.'
    },
    {
      id: 'g5',
      title: 'Children Educational Bible Study supplies',
      category: 'welfare',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
      caption: 'Providing notebooks, school bags, and primary children bible literature.'
    },
    {
      id: 'g6',
      title: 'Prophet Maruph counseling village elders',
      category: 'rehabilitation',
      image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=600',
      caption: 'Bridging tribal bounds with divine wisdom counseling cycles.'
    }
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Heart className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            COMPASSION & MISSIONS OUTPOST
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Outreach & Global Missions
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Demonstrating God’s love in tangible formats. We Feed the hungry, supply schooling accessories, visit prison inmates, and spread the Gospel.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* Welfare Impact Metrics bento row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-[#D4AF37]">
          <span className="text-[10px] text-slate-400 font-mono block">FOOD DISPENSARY</span>
          <p className="text-2xl font-black font-display text-white mt-1">8,400+ Packs</p>
          <p className="text-xs text-slate-500 mt-2">Shared with low-income families and market widows.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-400">
          <span className="text-[10px] text-slate-400 font-mono block">PRISON REHABILITATION</span>
          <p className="text-2xl font-black font-display text-white mt-1">420+ Inmates</p>
          <p className="text-xs text-slate-500 mt-2">Placed on personal developmental Bible growth paths.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-emerald-400">
          <span className="text-[10px] text-slate-400 font-mono block">FREE MEDICAL TESTS</span>
          <p className="text-2xl font-black font-display text-white mt-1">1,900+ Indigenes</p>
          <p className="text-xs text-slate-500 mt-2">Supplied health consultations and primary drugs free.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-purple-400">
          <span className="text-[10px] text-slate-400 font-mono block">EDUCATIONAL SCHOLARSHIPS</span>
          <p className="text-2xl font-black font-display text-white mt-1">75 Kids</p>
          <p className="text-xs text-slate-500 mt-2">Full school expenses paid by CAC MSBP charity core.</p>
        </div>
      </div>

      {/* Outreach Reports */}
      <div className="space-y-6 pt-6">
        <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
          Recent Field reports
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OUTREACH_REPORTS.map((report) => (
            <div 
              key={report.id} 
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 flex flex-col hover:border-[#D4AF37]/35 transition-all duration-300"
            >
              <img 
                src={report.image} 
                alt={report.title} 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#D4AF37] uppercase">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {report.location}
                    </span>
                    <span>{report.date}</span>
                  </div>
                  
                  <h4 className="font-display font-bold text-lg text-white leading-tight">
                    {report.title}
                  </h4>
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {report.narrative}
                  </p>
                </div>

                {/* Micro report counters */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 text-center text-xs font-mono bg-[#03060E]/50 rounded-xl p-3">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">SOULS SECURED</span>
                    <span className="font-black text-white text-[#D4AF37]">{report.soulsWon} Souls</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">TRACTS DISTRIBUTED</span>
                    <span className="font-black text-white">{report.tractsDistributed} Copies</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Photo Gallery with Category Filters */}
      <div className="space-y-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
              Missions Field Photo Gallery
            </h3>
            <p className="text-xs text-slate-500">
              Filtering Portfolio. Study high-impact snapshots representing active fields.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 self-start">
            {[
              { id: 'all', label: 'All Fields' },
              { id: 'welfare', label: 'Welfare Aid' },
              { id: 'rehabilitation', label: 'Rehabilitation' },
              { id: 'crusades', label: 'Crusades/Revival' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider border transition-all ${
                  activeFilter === f.id 
                    ? 'bg-[#D4AF37] text-[#081C3D] border-[#D4AF37]' 
                    : 'bg-white/5 border-white/5 text-slate-300 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden glass-panel border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 aspect-video"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Fade Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 p-4 flex flex-col justify-end text-left" />

              <div className="absolute bottom-4 left-4 right-4 z-10 text-left space-y-1">
                <span className="text-[9px] uppercase font-mono font-bold text-[#D4AF37] tracking-widest bg-[#081C3D] px-2 py-0.5 rounded border border-[#D4AF37]/20 w-fit block">
                  {item.category}
                </span>
                <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                <p className="text-[10px] text-slate-300 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
