import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send, CheckCircle2, RefreshCw, Compass, Bookmark } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Enquiry');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);

    setTimeout(() => {
      // Save locally
      const list = JSON.parse(localStorage.getItem('contact_submissions_list') || '[]');
      list.push({ name, email, subject, message, date: new Date().toLocaleDateString() });
      localStorage.setItem('contact_submissions_list', JSON.stringify(list));

      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="space-y-16 py-12 px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-display font-black tracking-widest text-[#D4AF37]">
            GET IN DIRECT CONTACT WITH US
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Ministry Communications Office
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Need physical guidance to find our Obada Oko sanctuary? Want to send a physical logistics package or book counseling sessions? Get through directly to our secretariate.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-[#123B73]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact vectors on the left column */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel p-8 rounded-3xl space-y-6 border border-white/5 relative overflow-hidden">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider pb-3 border-b border-white/5">
              Contact Directories
            </h3>

            {/* Address */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">SANCTUARY HEADQUARTERS</span>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  Oil For Soul Winning Evangelical Ministries HQ,<br />
                  Ibara Orile/Onisasa Ewekoro, Abeokuta 110101, Ogun State, Nigeria.
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">TELEPHONE LINES</span>
              
              <div className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <a href="tel:09065377288" className="hover:text-amber-400 font-display font-bold transition-all block">09065377288</a>
                  <a href="tel:08029171289" className="hover:text-amber-400 font-display font-bold transition-all block">08029171289</a>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="space-y-2 pt-3 border-t border-white/5 text-xs text-slate-400">
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block font-bold">24/7 WHATSAPP ADVISOR</span>
              <div className="flex items-center space-x-3 mt-1.5">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/2349065377288?text=Hello%20CAC%20Mine%20Shall%20Be%20Possible,%20I%20visited%20the%20Kingdom%20Mobilisation%20platform%20and%20want%20to%20submit%20an%20enquiry." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-400 border border-emerald-500/30 rounded-lg text-[10px] font-display font-black uppercase tracking-wider transition-colors block w-fit"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>

          </div>

          {/* Custom vector architectural coordinates map block */}
          <div className="glass-panel p-6 rounded-3xl space-y-4 border border-[#D4AF37]/20 text-center">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span className="uppercase block text-left font-sans font-bold">Obada Oko Sanctuary Map</span>
              <span className="text-amber-200">7.1750° N, 3.3464° E</span>
            </div>
            
            <div className="w-full aspect-[4/3] rounded-2xl bg-black/60 border border-white/5 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5753931869335!2d3.346448!3d7.1749807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a495dc3aa366f%3A0x164efc112668c62c!2sOil%20For%20Soul%20Winning%20Evangelical%20Ministries!5e0!3m2!1sen!2sng!4v1781472798665!5m2!1sen!2sng"
                className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity duration-300 grayscale contrast-[1.2] invert-[0.9]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oil For Soul Winning Evangelical Ministries Location Map"
              />
            </div>

            <a 
              href="https://share.google/xrLiuj4C2f8Mv5bCj"
              target="_blank" 
              rel="noreferrer" 
              className="w-full py-2.5 bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/45 rounded-xl text-[10px] font-display font-black text-[#D4AF37] uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Launch Google Maps Navigation</span>
            </a>

            <p className="text-[10px] text-slate-400 italic leading-relaxed text-left">
              *Transportation tips: When coming from Lagos, stop at Obada Oko junction near Abeokuta, take a short cycle ride towards the CAC "Mine Shall Be Possible" signposts at Ibara Orile/Onisasa Ewekoro!
            </p>
          </div>

        </div>

        {/* Contact Form on the right column */}
        <div className="lg:col-span-7 col-span-1">
          <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6">
            
            <div className="space-y-1">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">Send an Administrative enquiry</h3>
              <p className="text-xs text-slate-400">For partnership matters, scheduling appointments or requesting spiritual booklets deliveries.</p>
            </div>

            {success && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs text-green-400 text-center animate-fadeIn">
                ✓ Thank you! Your administrative enquiry has been transmitted. Our desk secretariat officers will check your details and feedback on your email or phone!
              </div>
            )}

            <form onSubmit={handleSubmitContactForm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Your Sender Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Deacon Gabriel Smith" 
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Channel Topic</label>
                  <select 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white text-slate-200"
                  >
                    <option value="Enquiry">General Enquiries</option>
                    <option value="Partnership">Ministry Partnership</option>
                    <option value="Booking">Counseling Appointment</option>
                    <option value="Logistic">Missions Material Support</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Sender Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. gabriel@gmail.com" 
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Write message content</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Explain your purpose details..." 
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-xs text-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Transmitting record...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message Enquiry</span>
                  </>
                )}
              </button>
            </form>

          </div>
        </div>

      </div>

    </div>
  );
}
