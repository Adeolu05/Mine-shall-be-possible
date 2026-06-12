import React, { useState, useEffect } from 'react';
import { Play, Pause, Bookmark, Download, Music, Shield, Info, Volume2, SkipForward, SkipBack, RefreshCw, Library } from 'lucide-react';
import { SERMONS } from '../data.ts';
import { Sermon } from '../types.ts';

export default function ResourceCentreView() {
  const [activeSermon, setActiveSermon] = useState<Sermon>(SERMONS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playProgress, setPlayProgress] = useState(12); // simulated percentage
  const [playbackTime, setPlaybackTime] = useState('05:46');
  const [savingIndex, setSavingIndex] = useState<string | null>(null);

  // Simulate audio track progression in intervals when playing is active
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlayProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          // calculate simulated timer minutes and seconds
          const totalSeconds = Math.floor((prev / 100) * 2800); // assume ~48min track
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          setPlaybackTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const selectNewSermonTrack = (sermon: Sermon) => {
    setActiveSermon(sermon);
    setIsPlaying(false);
    setPlayProgress(0);
    setPlaybackTime('00:00');
  };

  const handleDownloadSermon = (id: string, title: string) => {
    setSavingIndex(id);
    setTimeout(() => {
      setSavingIndex(null);
      alert(`🎉 Sermon Offline Pack Loaded!\n\n"${title}" has been downloaded in super-clear 128kbps stereo MP3. You can now transfer this sermon to your music devices or flash drives to bless souls!`);
    }, 1500);
  };

  const extraResources = [
    { id: 'pdf-01', title: 'Prophetic Prayer Directives for the 2026 Shift', file: 'PDF Manual', size: '1.2MB' },
    { id: 'pdf-02', title: 'The ABC of Market Soul Witnessing', file: 'Classroom Ebook', size: '2.4MB' },
    { id: 'pdf-03', title: 'Establishing CAC Mine Shall Be Possible Covenants', file: 'Doctrine booklet', size: '840KB' }
  ];

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Library className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            APOSTOLIC MEDIA PORTAL
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Resource & Sermon Centre
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Access structural apostolic tools compiled for your spiritual development. Stream audio messages, audit sermon outlines, and download doctrinal PDFs anytime.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* Interactive cassette/deck Audio player */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Visual Player deck card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-b from-[#081C3D] to-[#040C1A] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
              <span className="flex items-center gap-1.5"><Music className="w-3.5 h-3.5" /> LIQUID STREAM DECKS</span>
              <span>128KBPS LIVE STEREO</span>
            </div>

            {/* Custom Spinning Disc Animation Mock */}
            <div className="w-full aspect-[16/9] rounded-2xl bg-black/60 border border-white/5 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] bg-[size:16px_16px]" />
              
              <div className={`w-20 h-20 rounded-full border-4 border-[#D4AF37]/40 flex items-center justify-center p-2 relative bg-slate-900 shadow-xl ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                <div className="w-10 h-10 rounded-full bg-black border border-white/15" />
                <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37]" />
              </div>

              <span className="text-[9px] uppercase font-mono text-slate-500 mt-4 tracking-widest">
                {isPlaying ? '✓ UNCTION STREAM ACTIVE' : '∅ PLAYER IDLE'}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-display font-black text-white text-base leading-snug line-clamp-2">
                {activeSermon.title}
              </h3>
              <p className="text-xs text-[#D4AF37] font-semibold">{activeSermon.speaker}</p>
              <p className="text-[10px] text-slate-500 font-mono">{activeSermon.date} • {activeSermon.duration} duration</p>
            </div>
          </div>

          {/* Player controls */}
          <div className="space-y-4 pt-6 border-t border-white/5 relative z-10">
            
            {/* Timeline slider */}
            <div className="space-y-1">
              <div className="w-full h-1 rounded bg-white/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] to-amber-300" style={{ width: `${playProgress}%` }} />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-500">
                <span>{playbackTime}</span>
                <span>{activeSermon.duration}</span>
              </div>
            </div>

            {/* Buttons row */}
            <div className="flex items-center justify-center gap-6">
              <button 
                onClick={() => alert('← Loading previous track...')}
                className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white flex items-center justify-center shadow shadow-[#D4AF37]/30 transition-all scale-105 active:scale-95"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>

              <button 
                onClick={() => alert('→ Fast-forwarding dynamic playback...')}
                className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs italic text-slate-400 text-center leading-relaxed p-3 bg-white/2 rounded-xl">
              "{activeSermon.summary}"
            </div>
          </div>

        </div>

        {/* Sermon lists on the right */}
        <div className="lg:col-span-7 col-span-1 space-y-6">
          <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
            Available Sermons playlist
          </h3>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {SERMONS.map((sermon) => {
              const isActive = activeSermon.id === sermon.id;
              return (
                <div 
                  key={sermon.id}
                  onClick={() => selectNewSermonTrack(sermon)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-[#123B73]/30 border-[#D4AF37]/50 shadow-md' 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 text-left">
                      <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-amber-200">{sermon.category}</span>
                      <h4 className="font-display font-bold text-sm text-white mt-1.5">{sermon.title}</h4>
                      <p className="text-[10px] text-slate-400">{sermon.speaker} • {sermon.date}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-1">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadSermon(sermon.id, sermon.title);
                        }}
                        disabled={savingIndex === sermon.id}
                        className="p-2 rounded bg-white/5 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081C3D] transition-colors"
                        title="Download MP3"
                      >
                        {savingIndex === sermon.id ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Download className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Doctrinal booklets and PDF center */}
      <div className="space-y-6 pt-6">
        <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
          Doctrinal Booklets & PDF Manuals
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extraResources.map((pdf) => (
            <div key={pdf.id} className="p-6 rounded-2xl bg-[#081222] border border-white/5 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-[#D4AF37] block uppercase">{pdf.file} • {pdf.size}</span>
                <h4 className="font-display font-bold text-sm text-white leading-snug">{pdf.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Authorized training guide designed to assist structural prayer works and territorial street evangelism.
                </p>
              </div>

              <button
                onClick={() => {
                  alert(`📖 Preparing Content Assembly:\n\n"${pdf.title}" is assembling for download. Check your system resources for physical PDF printing.`);
                }}
                className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition border border-white/10"
              >
                Download Document
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
