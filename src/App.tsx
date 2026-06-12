import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import HomeView from './components/HomeView.tsx';
import AboutView from './components/AboutView.tsx';
import MinisterView from './components/MinisterView.tsx';
import EvangelismHubView from './components/EvangelismHubView.tsx';
import PrayerHubView from './components/PrayerHubView.tsx';
import DiscipleshipHubView from './components/DiscipleshipHubView.tsx';
import OutreachHubView from './components/OutreachHubView.tsx';
import TestimoniesView from './components/TestimoniesView.tsx';
import ResourceCentreView from './components/ResourceCentreView.tsx';
import EventsView from './components/EventsView.tsx';
import VolunteerCentreView from './components/VolunteerCentreView.tsx';
import ContactView from './components/ContactView.tsx';

import { Flame, Radio, Award } from 'lucide-react';

export default function App() {
  const [tab, setTab] = useState<string>('home');

  // Fast scroll on tab change with nice easing
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [tab]);

  const renderActiveView = () => {
    switch (tab) {
      case 'home':
        return <HomeView setTab={setTab} />;
      case 'about':
        return <AboutView />;
      case 'minister':
        return <MinisterView />;
      case 'evangelism':
        return <EvangelismHubView />;
      case 'prayer':
        return <PrayerHubView />;
      case 'discipleship':
        return <DiscipleshipHubView />;
      case 'outreach':
        return <OutreachHubView />;
      case 'testimonies':
        return <TestimoniesView />;
      case 'resources':
        return <ResourceCentreView />;
      case 'events':
        return <EventsView />;
      case 'volunteer':
        return <VolunteerCentreView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setTab={setTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden text-slate-100 flex flex-col justify-between font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      
      {/* Golden stream / Pouring Oil visual effect stream decoration of logo inspiration */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#081C3D] via-[#D4AF37] to-[#123B73] z-50 shadow-md" />

      {/* Main Sticky Header */}
      <Navbar currentTab={tab} setTab={setTab} />

      {/* Interactive Main Sections Container */}
      <main className="flex-1 w-full bg-[radial-gradient(ellipse_at_top,rgba(18,59,115,0.18),transparent_80%)]">
        
        {/* Render Active Hub Panel with subtle transition triggers */}
        <div className="relative animate-fadeIn">
          {renderActiveView()}
        </div>

      </main>

      {/* Secondary Quick Action Bar for high conversion on mobile touch devices */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden flex items-center bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2.5 shadow-2xl space-x-4 max-w-[90vw]">
        <button 
          onClick={() => setTab('evangelism')}
          className={`flex flex-col items-center justify-center p-1 px-3 rounded-full transition ${tab === 'evangelism' ? 'text-[#D4AF37] bg-white/5' : 'text-slate-400'}`}
        >
          <Flame className="w-4 h-4" />
          <span className="text-[9px] uppercase font-mono mt-0.5 font-bold">Enlist</span>
        </button>
        <button 
          onClick={() => setTab('prayer')}
          className={`flex flex-col items-center justify-center p-1 px-3 rounded-full transition ${tab === 'prayer' ? 'text-[#D4AF37] bg-white/5' : 'text-slate-400'}`}
        >
          <Radio className="w-4 h-4" />
          <span className="text-[9px] uppercase font-mono mt-0.5 font-bold">Prayer</span>
        </button>
        <button 
          onClick={() => setTab('events')}
          className={`flex flex-col items-center justify-center p-1 px-3 rounded-full transition ${tab === 'events' ? 'text-[#D4AF37] bg-white/5' : 'text-slate-400'}`}
        >
          <Award className="w-4 h-4" />
          <span className="text-[9px] uppercase font-mono mt-0.5 font-bold">Crusades</span>
        </button>
      </div>

      {/* Shared Platform Footer with Matthew 28:19 and Obada Oko references */}
      <Footer setTab={setTab} />

    </div>
  );
}
