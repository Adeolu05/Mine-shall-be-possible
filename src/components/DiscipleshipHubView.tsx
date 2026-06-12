import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, ChevronRight, Award, Lock, ArrowRight, Play, RefreshCw } from 'lucide-react';
import { COURSE_MODULES } from '../data.ts';

export default function DiscipleshipHubView() {
  const [userMilestones, setUserMilestones] = useState<string[]>([]);
  const [unlockedLevel, setUnlockedLevel] = useState<'Believer' | 'Disciple' | 'Leader' | 'Ambassador'>('Believer');

  useEffect(() => {
    const saved = localStorage.getItem('discipleship_completed_milestones');
    if (saved) {
      const parsed = JSON.parse(saved);
      setUserMilestones(parsed);
      calculateLevel(parsed);
    }
  }, []);

  const calculateLevel = (milestones: string[]) => {
    if (milestones.includes('m4')) {
      setUnlockedLevel('Ambassador');
    } else if (milestones.includes('m3')) {
      setUnlockedLevel('Leader');
    } else if (milestones.includes('m2')) {
      setUnlockedLevel('Disciple');
    } else {
      setUnlockedLevel('Believer');
    }
  };

  const handleMilestoneToggle = (id: string) => {
    let updated: string[];
    if (userMilestones.includes(id)) {
      updated = userMilestones.filter(x => x !== id);
    } else {
      updated = [...userMilestones, id];
    }
    setUserMilestones(updated);
    localStorage.setItem('discipleship_completed_milestones', JSON.stringify(updated));
    calculateLevel(updated);
  };

  const clearProgress = () => {
    localStorage.removeItem('discipleship_completed_milestones');
    setUserMilestones([]);
    setUnlockedLevel('Believer');
  };

  const pathwayCheckpoints = [
    {
      id: 'm1',
      title: 'Repentance & Salvation Confession',
      description: 'Accepted Christ as eternal Savior. Old ways washed clean.',
      badge: 'Saved Spirit'
    },
    {
      id: 'm2',
      title: 'Full Immersion Water Baptism',
      description: 'Public declaration of burial with Christ and rising in raw new life.',
      badge: 'Baptized Member'
    },
    {
      id: 'm3',
      title: 'Holy Ghost Baptism & Speaking in Tongues',
      description: 'Answering raw power. Receiving spiritual anointing tools for combat.',
      badge: 'Empowered Disciple'
    },
    {
      id: 'm4',
      title: 'Global Ambassador Commissioning',
      description: 'Equipped to lead street cells, plant bible missions, and direct outreaches.',
      badge: 'Kingdom Ambassador'
    }
  ];

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <BookOpen className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            DISCIPLE OF CHRIST ACADEMY
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          The Ambassador Growth Pathway
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          From a new convert into a fully deployed Kingdom diplomat. Interact with our maturation tracker below, complete lessons, and access bible study references.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* Interactive Growth Tracker Card */}
      <div className="glass-panel p-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#081C3D]/80 to-[#123B73]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-[#D4AF37] font-display text-[10px] font-bold uppercase tracking-widest">
              SPIRITUAL MATURITY ENGINE
            </span>
            <h3 className="font-display font-black text-2xl text-white">
              My Growth Milestone Pathway
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Where do you stand currently on your journey with God? Check off your completed spiritual checkpoints to visualize your current standing. Our matching system automatically updates your training tier.
            </p>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-amber-200 text-[#081C3D] flex items-center justify-center font-display font-black text-sm">
                {unlockedLevel[0]}
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 block">CURRENT TIER LEVEL</span>
                <span className="text-sm font-bold text-white font-display uppercase tracking-widest">{unlockedLevel} Level</span>
              </div>
              {userMilestones.length > 0 && (
                <button 
                  onClick={clearProgress}
                  className="ml-auto text-[10px] font-mono text-slate-500 hover:text-slate-300"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 border-r border-white/5 h-24 hidden lg:block" />

          {/* Connected Pathway Checklist */}
          <div className="lg:col-span-6 space-y-4">
            {pathwayCheckpoints.map((pt, idx) => {
              const isChecked = userMilestones.includes(pt.id);
              return (
                <div 
                  key={pt.id}
                  onClick={() => handleMilestoneToggle(pt.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    isChecked 
                      ? 'bg-[#123B73]/30 border-[#D4AF37]/50 text-white' 
                      : 'bg-[#03060E] border-white/5 text-slate-400 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3 text-left">
                    <CheckCircle className={`w-5 h-5 shrink-0 ${isChecked ? 'text-[#D4AF37]' : 'text-slate-600'}`} />
                    <div>
                      <h4 className="text-xs font-bold font-display text-white">{idx + 1}. {pt.title}</h4>
                      <p className="text-[10px] text-slate-400 leading-normal mt-0.5">{pt.description}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 font-mono text-[#D4AF37] uppercase select-none">
                    {pt.badge}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Curriculum Modules */}
      <div className="space-y-6">
        <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider text-left">
          Discipleship Curriculum Modules
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSE_MODULES.map((mod) => {
            const isUnlocked = 
              mod.level === 'Believer' || 
              (mod.level === 'Disciple' && unlockedLevel !== 'Believer') ||
              (mod.level === 'Leader' && (unlockedLevel === 'Leader' || unlockedLevel === 'Ambassador')) ||
              (mod.level === 'Ambassador' && unlockedLevel === 'Ambassador');

            return (
              <div 
                key={mod.id}
                className={`p-6 rounded-2xl border transition relative overflow-hidden flex flex-col justify-between ${
                  isUnlocked 
                    ? 'glass-panel border-white/10 text-left hover:border-[#D4AF37]/30' 
                    : 'bg-black/40 border-white/5 opacity-50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-wider">
                    <span className="text-[#D4AF37] font-bold">{mod.level} Track</span>
                    <span className="text-slate-500">{mod.duration} • {mod.lessonsCount} lessons</span>
                  </div>

                  <h4 className="font-display font-bold text-white text-base mt-3 leading-tight flex items-center justify-between">
                    {mod.title}
                    {!isUnlocked && <Lock className="w-3.5 h-3.5 text-slate-500" />}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mt-2 font-sans">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  {isUnlocked ? (
                    <>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">★ Study Materials Ready</span>
                      <button 
                        onClick={() => alert(`📚 Initializing Course Core:\n\nCourse "${mod.title}" lessons are fully integrated and accessible in local audio playback and workbook formats.\n\nKeep focused, write notes, and grow in truth!`)}
                        className="px-3 py-1.5 rounded bg-white/5 text-white hover:bg-white/10 text-[10px] font-display font-bold uppercase tracking-wider flex items-center gap-1"
                      >
                        <Play className="w-3 h-3 text-[#D4AF37]" /> Start Lessons
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">🔒 Unlockable via maturity meter above</span>
                      <span className="text-[10px] text-slate-500 font-mono">Tier Locked</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
