import React, { useState } from 'react';
import { Menu, X, Flame, Radio, BookOpen, Heart, Calendar, Phone, Landmark, Award, Shield, Library } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Landmark, category: 'Core' },
    { id: 'about', label: 'Mandate & Faith', icon: Shield, category: 'About' },
    { id: 'minister', label: 'The Minister', icon: Award, category: 'About' },
    { id: 'evangelism', label: 'Soul Winner Hub', icon: Flame, category: 'Mobilise' },
    { id: 'prayer', label: 'Prayer Wall', icon: Radio, category: 'Mobilise' },
    { id: 'discipleship', label: 'Discipleship Track', icon: BookOpen, category: 'Training' },
    { id: 'outreach', label: 'Outreach & Missions', icon: Heart, category: 'Impact' },
    { id: 'resources', label: 'Resource Centre', icon: Library, category: 'Training' },
    { id: 'events', label: 'Holy Crusades', icon: Calendar, category: 'Core' },
    { id: 'volunteer', label: 'Volunteer', icon: Heart, category: 'Mobilise' },
    { id: 'contact', label: 'Contact', icon: Phone, category: 'Core' },
  ];

  const handleNavClick = (id: string) => {
    setTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Grouped navigation for top-bar drop-downs (desktop)
  const categories = ['About', 'Mobilise', 'Training', 'Impact'];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Elegant Vector Logo Emblem reproducing symbolisms */}
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#123B73] to-[#081C3D] flex items-center justify-center border border-[#D4AF37]/40 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-black text-white text-xs tracking-widest text-center leading-none">
                CAC<br/>MSBP
              </span>
              {/* Anointing drop decoration effect */}
              <div className="absolute -bottom-1 right-0 w-3 h-3 rounded-full bg-[#D4AF37] border border-[#081C3D] shadow animate-bounce" />
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-display font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                OIL FOR SOUL WINNING
              </h1>
              <p className="font-sans text-[10px] uppercase text-[#D4AF37] font-semibold tracking-widest">
                CAC MINE SHALL BE POSSIBLE
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-display font-bold roundedTransition transition-all duration-200 ${
                currentTab === 'home' 
                  ? 'text-[#D4AF37] bg-white/5 border border-[#D4AF37]/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {/* Dropdown-like groupings */}
            {categories.map((cat) => {
              const items = menuItems.filter(item => item.category === cat);
              return (
                <div key={cat} className="relative group/dropdown">
                  <button className="px-4 py-2 text-xs uppercase tracking-wider font-display font-bold text-slate-300 hover:text-white flex items-center gap-1">
                    {cat}
                    <span className="text-[9px] text-[#D4AF37] group-hover/dropdown:rotate-180 transition-transform duration-200">▼</span>
                  </button>
                  
                  {/* Dropdown panel */}
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl glass-panel border border-white/10 p-2 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300">
                    {items.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-xs transition-all duration-200 ${
                            isActive 
                              ? 'bg-[#123B73]/40 text-[#D4AF37] border-l-2 border-[#D4AF37]' 
                              : 'text-slate-200 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <button 
              onClick={() => handleNavClick('events')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-display font-bold transition-all duration-200 ${
                currentTab === 'events' 
                  ? 'text-[#D4AF37] bg-white/5 border border-[#D4AF37]/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Crusades
            </button>

            <button 
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-display font-bold transition-all duration-200 ${
                currentTab === 'contact' 
                  ? 'text-[#D4AF37] bg-white/5 border border-[#D4AF37]/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right High Impact Call-to-Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => handleNavClick('evangelism')}
              className="px-4 py-2 rounded-md bg-transparent border border-[#D4AF37]/40 text-[#D4AF37] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              Join Mission
            </button>
            <button 
              onClick={() => handleNavClick('prayer')}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] hover:text-white font-display font-black text-xs uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow shadow-[#D4AF37]/40 glow-btn"
            >
              Request Prayer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#D4AF37] hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-2 pt-2 pb-4 space-y-1 shadow-inner max-h-[85vh] overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-left text-sm transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#123B73]/50 text-[#D4AF37] border-l-4 border-[#D4AF37]' 
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
                <span className="font-semibold">{item.label}</span>
              </button>
            );
          })}
          
          <div className="pt-4 pb-2 border-t border-white/5 flex flex-col space-y-2 px-4">
            <button
              onClick={() => handleNavClick('evangelism')}
              className="w-full text-center py-2.5 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] font-display font-bold text-xs uppercase tracking-wider"
            >
              Become A Soul Winner
            </button>
            <button
              onClick={() => handleNavClick('prayer')}
              className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#123B73] text-[#081C3D] font-display font-black text-xs uppercase tracking-wider"
            >
              Submit Prayer Request
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
