import React, { useState } from 'react';
import { BookOpen, Shield, Flame, Compass, Heart, Award, ArrowRight, Activity } from 'lucide-react';
import { STATEMENT_OF_FAITH } from '../data.ts';

export default function AboutView() {
  const [activeStatement, setActiveStatement] = useState<number | null>(null);

  const coreValues = [
    { name: 'Divine Unction', desc: 'Cultivating and protecting the tangible anointing of the Holy Spirit for supernatural results.' },
    { name: 'Evangelistic Urgency', desc: 'Working with a deep sense of divine urgency to win the lost before the great day of the Lord.' },
    { name: 'Biblical Consecration', desc: 'Uncompromising submission to the holy scriptures as our infallible guide for doctrinal holiness.' },
    { name: 'Aggressive Prayer', desc: 'Using aggressive persistent prayers as our weapon of warfare to pull down strongholds.' },
    { name: 'Tangible Compassion', desc: 'Showing genuine Christian charity by supporting widows, orphans, and distressed rural dwellers.' },
  ];

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            OUR HEAVENLY CONSTITUTION
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          The Mandate & Vision
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Discover the foundational covenants, spiritual history, and administrative values backing Oil For Soul Winning Evangelical Ministries (a.k.a CAC Mine Shall Be Possible).
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* History and Kingdom Mandate Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* History card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-8 rounded-3xl space-y-4 border-l-4 border-l-[#D4AF37]">
            <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
              Anointed Origins (Our History)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Oil For Soul Winning Evangelical Ministries arose out of a deep divine visitation. Witnessing a spiritual drought and decay across several communities in Nigeria, Prophet Maruph Oladele retired into absolute seclusion and prolonged dry fasting, laying hold of the altar in intense prayers.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              In this atmosphere of consecration, the Holy Spirit delivered a clear mandate: <em className="text-[#D4AF37] font-semibold">"Go, pour the anointing oil of soul-winning. Gather the praying saints, mount crusades, and establish the truth that with me, all things shall be possible."</em> 
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Under this unction, the ministry expanded rapidly in Obada Oko, Ogun State, establishing high-impact crusage teams, feeding thousands of local indigenes, releasing deliverance, and gathering millions of testimonies worldwide.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
              The Kingdom Ambassadorship Mandate
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We do not measure our success based on filled building rows alone. We measure success on how many converted believers have been <strong className="text-white">raised, equipped, and deployed</strong>. Every person on this platform is trained to become a self-sufficient minister of the gospel and a spiritual diplomat bringing God’s authority into business, families, and classrooms.
            </p>
          </div>
        </div>

        {/* Vision & Mission bento widgets */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Vision Panel */}
          <div className="glass-panel p-8 rounded-3xl bg-gradient-to-br from-[#123B73]/30 to-[#081C3D]/65 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#D4AF37]/10 blur-2xl" />
            <span className="text-[#D4AF37] font-display text-xs font-black uppercase tracking-widest block mb-2">THE VISION</span>
            <h4 className="font-display font-black text-white text-lg sm:text-xl leading-snug">
              A global soul-winning army raising dedicated Kingdom ambassadors and transforming lost lives for eternity.
            </h4>
            <div className="mt-4 flex items-center space-x-2 text-xs text-slate-400 font-mono">
              <Activity className="w-4 h-4 text-[#D4AF37]" />
              <span>ACTIVE TERRITORIAL DOMINION</span>
            </div>
          </div>

          {/* Mission Panel */}
          <div className="glass-panel p-8 rounded-3xl bg-gradient-to-br from-[#0c1c38] to-[#1a1a1a] border border-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl" />
            <span className="text-[#D4AF37] font-display text-xs font-black uppercase tracking-widest block mb-2">THE MISSION</span>
            <p className="text-sm text-slate-200 leading-relaxed font-serif">
              "To win souls continuously for Christ through radical street evangelism, thorough bible-based discipleship, continuous warfare prayers, community compassion outreaches, and the raw manifestation of the Spirit’s unction."
            </p>
            <div className="mt-4 text-xs font-display font-bold text-[#D4AF37]">
              MATTHEW 28:19 · ACTS 1:8
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Statement of Faith */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider">
            Our Statement of Faith
          </h3>
          <p className="text-xs text-slate-400">
            Interactive Dossier. Click on any doctrinal statement below to study our biblical references.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATEMENT_OF_FAITH.map((item, idx) => {
            const isExpanded = activeStatement === idx;
            return (
              <div 
                key={idx}
                onClick={() => setActiveStatement(isExpanded ? null : idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isExpanded 
                    ? 'bg-[#123B73]/30 border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/5' 
                    : 'glass-panel hover:border-[#D4AF37]/35'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display font-bold text-[#D4AF37] text-xs uppercase tracking-widest">
                    DOCTRINE 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-slate-400 uppercase font-mono">
                    {item.scripture}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-white mt-3 group-hover:text-[#D4AF37]">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {item.details}
                </p>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs italic text-amber-200 bg-[#050505]/40 p-3 rounded-lg leading-relaxed animate-fadeIn">
                    "This Biblical foundation guarantees that our ministerial actions are clean, scriptural, and safe for souls. Let us hold fast to the pattern of sound scripture words."
                  </div>
                )}
                
                <div className="mt-4 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>{isExpanded ? 'Click to collapse' : 'Click to study scripture'}</span>
                  <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-[#050C19] rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#123B73]/10 blur-[80px]" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-slate-400 font-display text-xs font-bold uppercase tracking-widest">
              ETHICAL STANDARDS
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
              The Pillars of Our Consecration
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We adhere to maximum scriptural transparency, administrative excellence, and physical discipline to remain an uncorrupted channel for the Holy Spirit anointing oil.
            </p>
          </div>

          <div className="lg:col-span-7 col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#03060E] border border-white/5 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">{val.name}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
