import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  setTab: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Save locally to display list in admin or just give sleek success
      const list = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!list.includes(email)) {
        list.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(list));
      }
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040C1A] border-t border-white/10 overflow-hidden text-slate-300">
      
      {/* Visual Ambient Background Ornaments reminding of oil pouring down */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-[#123B73]/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section - Ministry Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display font-black text-2xl text-white tracking-widest uppercase">
              OIL FOR SOUL WINNING <span className="text-[#D4AF37]">EVANGELICAL MINISTRIES</span>
            </h2>
            <p className="font-sans text-sm text-[#D4AF37] font-semibold tracking-wider">
              a.k.a CAC MINE SHALL BE POSSIBLE
            </p>
            
            {/* The Great Commission Scripture */}
            <div className="p-6 rounded-2xl glass-panel-gold border-amber-500/10 space-y-3">
              <p className="italic text-base text-[#D4AF37] font-serif leading-relaxed">
                "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you..."
              </p>
              <div className="flex items-center justify-between">
                <span className="font-display text-xs text-white uppercase tracking-widest font-black">
                  Matthew 28:19-20
                </span>
                <span className="text-xs font-semibold text-slate-400">Our Primary Ministry Core Mandate</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Subscribe to Fire Alerts & Missions Reports
            </h3>
            <p className="text-xs text-slate-400">
              Receive notifications for upcoming crusades, prophetic fasting guides, testimony bulletins, and digital missionary studies.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your active email address"
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-[#D4AF37] font-medium animate-pulse">
                  ✓ Hallelujah! You are now subscribed to our Kingdom Bulletin.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Middle Section - Links & Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/5 text-sm">
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white tracking-widest uppercase pb-2 border-b border-[#D4AF37]/20">
              Core Departments
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setTab('evangelism'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Soul Winning Hub
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('prayer'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Prayer Wall & Requests
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('discipleship'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Discipleship Growth Pathway
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('outreach'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Outreach Activities
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('resources'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Sermon & PDF Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Group II */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white tracking-widest uppercase pb-2 border-b border-[#D4AF37]/20">
              Strategic Partners
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setTab('about'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Our Statement of Faith
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('minister'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Prophet Maruph Oladele (Biog)
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('events'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Upcoming Holy Crusades
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('volunteer'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Apply as Ministry Helper
                </button>
              </li>
              <li>
                <button onClick={() => { setTab('testimonies'); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] transition-colors">
                  Glorious Miracle Testimonies
                </button>
              </li>
            </ul>
          </div>

          {/* Ministry Headquarters */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-display font-bold text-xs text-white tracking-widest uppercase pb-2 border-b border-[#D4AF37]/20">
              Obada Oko Headquarters Office
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Oil For Soul Winning Evangelical Ministries HQ,<br />
                  Obada Oko (Near Abeokuta), Ogun State, Nigeria.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:09065377288" className="hover:text-white transition-colors">09065377288</a>
                  <span className="mx-2 text-slate-500">|</span>
                  <a href="tel:08029171289" className="hover:text-white transition-colors">08029171289</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <a 
                  href="https://wa.me/2349065377288?text=Hello%20CAC%20Mine%20Shall%20Be%20Possible,%20I%20want%20to%20connect%20with%20the%20ministry." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-emerald-400 font-medium transition-colors"
                >
                  Direct WhatsApp Interaction
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Copyright and Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Oil For Soul Winning Evangelical Ministries (a.k.a CAC Mine Shall Be Possible). All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="flex items-center text-[#D4AF37]">
              Made for Kingdom Mobilisation <Heart className="w-3 h-3 ml-1 fill-amber-500 text-amber-500" />
            </span>
            <button 
              onClick={scrollToTop} 
              className="p-2 rounded bg-slate-900 border border-white/10 text-[#D4AF37] hover:bg-slate-800 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
