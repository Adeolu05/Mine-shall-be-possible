import React, { useState } from 'react';
import { Heart, CheckCircle2, ChevronRight, ChevronLeft, Shield, Award, Sparkles, RefreshCw, Send, Users } from 'lucide-react';

export default function VolunteerCentreView() {
  const [step, setStep] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState('Evangelism Team');

  // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [consecrated, setConsecrated] = useState(false);

  const [loading, setLoading] = useState(false);
  const [badgeDetail, setBadgeDetail] = useState<{ id: string; name: string; department: string; dateApplied: string } | null>(null);

  const teams = [
    {
      name: 'Evangelism Team',
      desc: 'Active on frontlines. Mount street outreaches, markets personal witnessing dialogues, and community crusade flyers distribution.',
      badge: 'Frontline Witness'
    },
    {
      name: 'Prayer Team',
      desc: 'Sustaining midnight and daily watches. Intercedes specifically for upcoming crusades, sick requests, and territorial strongmen binding.',
      badge: 'Altar Warrior'
    },
    {
      name: 'Follow-up Team',
      desc: 'Nurture converts. Guide new salvation decisions through weekly calls, home counseling audits, and accompanying them during baptism.',
      badge: 'Convert Shepherd'
    },
    {
      name: 'Media Team',
      desc: 'Spread global unction. Handle heavy camera gear, audio streaming soundboards, television recording edit decks, and digital updates.',
      badge: 'Digital Apostle'
    },
    {
      name: 'Welfare Team',
      desc: 'Hands of compassion. Organize food supplies, clothing packs, and educational kits for widows, prisons, and families in Obada Oko.',
      badge: 'Mercy Giver'
    }
  ];

  const handleNextStep = () => {
    if (step === 2 && (!name || !email)) {
      alert('Please fill out your active name and email address to proceed.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleVolunteerEnlistment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const badge = {
        id: `CAC-VOL-${Math.floor(Math.random() * 900000) + 100000}`,
        name,
        department: selectedTeam,
        dateApplied: new Date().toLocaleDateString()
      };

      // Save locally
      const list = JSON.parse(localStorage.getItem('volunteer_applications_list') || '[]');
      list.push(badge);
      localStorage.setItem('volunteer_applications_list', JSON.stringify(list));

      setBadgeDetail(badge);
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  const resetVolunteerWizard = () => {
    setName('');
    setEmail('');
    setPhone('');
    setReason('');
    setConsecrated(false);
    setBadgeDetail(null);
    setStep(1);
  };

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Heart className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            KINGDOM HELPER ENLISTMENT
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Join the Deployment Team
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          The harvest is plenteous, but the laborers are few. Complete our modern multi-step questionnaire to declare your dedication and receive your digital volunteer enlistment credentials.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      {/* Multi-step layout wizard */}
      <div className="max-w-3xl mx-auto">
        
        {/* Step indicator breadcrumbs */}
        <div className="flex items-center justify-between pb-8 border-b border-white/5 relative z-10 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#D4AF37] text-[#081C3D]' : 'bg-white/5 text-slate-400'}`}>1</span>
            <span className={step >= 1 ? 'text-white' : ''}>Pick Team</span>
          </div>
          <div className="h-0.5 bg-white/10 flex-1 mx-4" />
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#D4AF37] text-[#081C3D]' : 'bg-white/5 text-slate-400'}`}>2</span>
            <span className={step >= 2 ? 'text-white' : ''}>Personal Profile</span>
          </div>
          <div className="h-0.5 bg-white/10 flex-1 mx-4" />
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-[#D4AF37] text-[#081C3D]' : 'bg-white/5 text-slate-400'}`}>3</span>
            <span className={step >= 3 ? 'text-white' : ''}>Review</span>
          </div>
        </div>

        {/* Dynamic step displays */}
        <div className="pt-8">
          
          {/* STEP 1: PICK TEAM */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">Select Your Ministry Team</h3>
                <p className="text-xs text-slate-400">Choose the structural army division you feel called to support with your gifts.</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {teams.map((t) => (
                  <div 
                    key={t.name}
                    onClick={() => setSelectedTeam(t.name)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      selectedTeam === t.name 
                        ? 'bg-[#123B73]/30 border-2 border-[#D4AF37] text-white shadow-xl shadow-[#D4AF37]/5' 
                        : 'glass-panel border-white/5 text-slate-400 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-left">
                        <span className={`w-2 h-2 rounded-full ${selectedTeam === t.name ? 'bg-[#D4AF37]' : 'bg-slate-700'}`} />
                        <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                      </div>
                      <span className="text-[9px] font-mono uppercase bg-white/5 px-2 py-0.5 rounded text-amber-200">{t.badge}</span>
                    </div>
                    <p className="text-xs leading-relaxed mt-2 text-slate-300 pl-5">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-lg bg-[#D4AF37] text-[#081C3D] font-display font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#081C3D] transition flex items-center gap-1.5"
                >
                  Configure Profile Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PERSONAL INPUT DETAILS */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">Your Personal Mission Profile</h3>
                <p className="text-xs text-slate-400">Provide contact references and spell out your spiritual standing.</p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">My Full Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Brother Barnabas Kola" 
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white"
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
                      placeholder="e.g. barnabas@gmail.com" 
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white"
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
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">My Motivation / Spiritual Calling</label>
                  <textarea 
                    value={reason} 
                    onChange={(e) => setReason(e.target.value)}
                    rows={3}
                    placeholder="Explain briefly why you want to support this specific team track..." 
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-xs text-white"
                  />
                </div>

                {/* Holy consecration switch */}
                <div 
                  onClick={() => setConsecrated(!consecrated)}
                  className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 flex items-center justify-between cursor-pointer hover:border-amber-500/20"
                >
                  <div className="space-y-0.5 text-left pr-4">
                    <p className="text-xs font-bold text-white">CAC Covenant Consecration Pledge</p>
                    <p className="text-[10px] text-slate-400">"I pledge to maintain a life of holiness, diligent prayer watches, and strict physical discipline to serve as an unspotted channel for the oil."</p>
                  </div>
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${consecrated ? 'bg-[#D4AF37] text-[#081C3D] border-[#D4AF37]' : 'border-white/20 text-transparent'}`}>
                    ✓
                  </div>
                </div>

              </div>

              <div className="flex justify-between pt-4">
                <button 
                  onClick={handlePrevStep}
                  className="px-4 py-2 border border-white/10 text-slate-400 hover:text-white rounded-lg text-xs font-display font-medium uppercase tracking-wider flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Go Back
                </button>
                <button 
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-lg bg-[#D4AF37] text-[#081C3D] font-display font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#081C3D] transition flex items-center gap-1.5"
                >
                  Audit Application Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: AUDIT & SUBMIT */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">Confirm Your Enlistment</h3>
                <p className="text-xs text-slate-400">Please audit your details before transmitting the dossier to the department catalog.</p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4 font-mono text-xs">
                
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">MEMBER ARMY TRACK:</span>
                  <span className="text-white font-bold font-display uppercase text-sm text-[#D4AF37]">{selectedTeam}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-500 block">WARRIOR NAME:</span>
                    <span className="text-white font-semibold font-display uppercase">{name}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">EMAIL REFERENCE:</span>
                    <span className="text-slate-300">{email}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-500 block">PHONE:</span>
                    <span className="text-slate-300">{phone || 'Not Supplied'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">PLEDGE COMMITTED:</span>
                    <span className={consecrated ? 'text-green-400 font-bold' : 'text-amber-500 font-bold'}>
                      {consecrated ? '✓ FULL PLEDGE COMMITTED' : '∅ COVENANT PENDING'}
                    </span>
                  </div>
                </div>

                {reason && (
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-slate-500 block text-[10px]">WHY I WANT TO DEPLOY:</span>
                    <p className="text-slate-300 italic text-[11px] font-sans">"{reason}"</p>
                  </div>
                )}

              </div>

              <div className="flex justify-between pt-4">
                <button 
                  onClick={handlePrevStep}
                  className="px-4 py-2 border border-white/10 text-slate-400 hover:text-white rounded-lg text-xs font-display font-medium uppercase tracking-wider flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Edit Profile
                </button>
                <button 
                  onClick={handleVolunteerEnlistment}
                  disabled={loading}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider hover:scale-105 transition-all flex items-center gap-1.5"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting application dossier...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Application Dossier</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: EARNED BADGE SUCCESS */}
          {step === 4 && badgeDetail && (
            <div className="p-8 rounded-3xl bg-[#081C3D]/60 border-2 border-[#D4AF37] text-center space-y-6 animate-scaleIn relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[80px]" />
              
              <div className="relative z-10 space-y-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-[#D4AF37] text-[#081C3D] flex items-center justify-center mx-auto shadow-lg">
                  <Award className="w-8 h-8 font-black" />
                </div>
                
                <h3 className="font-display font-black text-white text-xl uppercase tracking-widest">
                  COMMISSION VOLUNTEER PASS
                </h3>
                <p className="text-xs text-[#D4AF37] font-semibold">CAC MINE SHALL BE POSSIBLE PLATFORM ENLISTMENT</p>
              </div>

              {/* Holographic Roster Badge Sheet */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-950/80 border border-white/10 text-left space-y-4 font-mono relative z-10 text-xs">
                
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>VOLUNTEER ROSTER NUMBER:</span>
                  <span className="text-emerald-400 font-bold">✓ DOSSIER LOGGED</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-500 block text-[10px]">VISITOR BARCODE:</span>
                    <span className="text-[#D4AF37] font-bold">{badgeDetail.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">DATE RECRUITED:</span>
                    <span className="text-slate-300 font-semibold">{badgeDetail.dateApplied}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-500 block text-[10px]">DIGNITARY VOLUNTEER:</span>
                  <span className="text-sm font-bold text-white font-display uppercase block">{badgeDetail.name}</span>
                </div>

                <div className="space-y-1 border-t border-white/5 pt-2">
                  <span className="text-slate-500 block text-[10px]">ASSIGNED SYSTEM DIVISION:</span>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase font-display block">{badgeDetail.department}</span>
                </div>

                <p className="text-[9px] text-[#D4AF37] italic text-center border-t border-white/5 pt-2 font-serif leading-relaxed">
                  "Stand as a pure and anointed vessel. The oil of acceleration is working on your behalf!"
                </p>
              </div>

              <div className="relative z-10 flex gap-4 justify-center">
                <button 
                  onClick={() => alert('🎨 Volunteers directory updated.\n\nYour application has been locked in of our admin archives and we will message your phone shortly with directives!')}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition"
                >
                  Verify Dossier Placement
                </button>
                <button 
                  onClick={resetVolunteerWizard}
                  className="px-6 py-2 rounded-lg bg-[#D4AF37] text-[#081C3D] hover:bg-white font-display font-bold text-xs uppercase tracking-wider"
                >
                  Register New Division
                </button>
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}
