import React, { useState, useEffect } from 'react';
import { Star, Send, CheckCircle, RefreshCw, Filter, Award } from 'lucide-react';
import { INITIAL_TESTIMONIES } from '../data.ts';
import { Testimony } from '../types.ts';

export default function TestimoniesView() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [filterCategory, setFilterCategory] = useState<'all' | 'salvation' | 'healing' | 'restoration' | 'breakthrough'>('all');

  // Form inputs
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<'salvation' | 'healing' | 'restoration' | 'breakthrough'>('healing');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('testimonies_archive_list');
    if (saved) {
      setTestimonies(JSON.parse(saved));
    } else {
      setTestimonies(INITIAL_TESTIMONIES);
      localStorage.setItem('testimonies_archive_list', JSON.stringify(INITIAL_TESTIMONIES));
    }
  }, []);

  const handleShareTestimony = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content || !location) return;
    setLoading(true);

    setTimeout(() => {
      const newTestimony: Testimony = {
        id: `tst-${Date.now()}`,
        name,
        location,
        category,
        content,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        approved: true // Approved by default for smooth client interaction!
      };

      const updated = [newTestimony, ...testimonies];
      setTestimonies(updated);
      localStorage.setItem('testimonies_archive_list', JSON.stringify(updated));

      // Reset
      setName('');
      setLocation('');
      setContent('');
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const filteredTestimonies = filterCategory === 'all'
    ? testimonies
    : testimonies.filter(t => t.category === filterCategory);

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            GLORIOUS DELIVERANCE BULLETINS
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Testimony Archives
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Sharing your testimonies keeps the fire of belief blazing. Read structural reports of miraculous healing, breakthroughs, and radical repentances. Share yours too!
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Share testimony form */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
            
            <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
              Declare What God Has Done!
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Did you receive salvation, healing, restore peace, or see a massive financial delay dissolve during the "CAC Mine Shall Be Possible" services? Do not stay silent.
            </p>

            {success && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs text-green-400 text-center animate-fadeIn">
                ✓ Glory to God! Your testimony has been recorded and immediately made live on our Global Testimony Altar. Thank you for declaring Jesus' name!
              </div>
            )}

            <form onSubmit={handleShareTestimony} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase">My Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sis. Helen Chigozie"
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">My Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lagos, Nigeria"
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">Testimony Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white text-slate-200"
                  >
                    <option value="healing">Miraculous Healing</option>
                    <option value="salvation">Salvation Testimony</option>
                    <option value="restoration">Family Restoration</option>
                    <option value="breakthrough">Financial breakthrough</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase">Description of miracle</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  placeholder="Tell your story. Explain your situation before the prayer, what Prophet Maruph prayed, and what miracle manifest afterwards..."
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span> TRANSMITTING MIRACLE DETAIL...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>PUBLISH MY TESTIMONY</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Testimony archive with category filtering */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              Miracle Bulletins Archive
            </h3>

            {/* Sub filter options */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Miracles' },
                { id: 'healing', label: 'Healings' },
                { id: 'salvation', label: 'Salvation' },
                { id: 'restoration', label: 'Restorations' },
                { id: 'breakthrough', label: 'Breakthroughs' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-display font-bold uppercase tracking-wider border transition-all ${
                    filterCategory === tab.id
                      ? 'bg-[#D4AF37] text-[#081C3D] border-[#D4AF37]'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredTestimonies.length === 0 ? (
              <p className="text-xs text-slate-500 italic text-center py-12">No testimonies matching this category are currently logged. Settle your heart, pray, and yours will be next!</p>
            ) : (
              filteredTestimonies.map((item) => (
                <div 
                  key={item.id}
                  className="p-6 rounded-2xl glass-panel relative border border-white/5 space-y-4"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-display font-bold text-base text-white uppercase tracking-wide">
                        {item.name}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-500 mt-0.5">{item.location} • Verified on {item.date}</p>
                    </div>

                    <span className="text-[10px] font-display font-black uppercase px-2.5 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 tracking-widest font-mono shrink-0">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-serif pt-1">
                    "{item.content}"
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      COVENANT OF "CAC MINE SHALL BE POSSIBLE" SHOWN
                    </span>
                    <span>BULLETIN #{item.id.replace('tst-', 'B').slice(0, 5)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
