import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Radio, 
  BookOpen, 
  Heart, 
  Compass, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowUpRight,
  Activity,
  ArrowDown
} from 'lucide-react';

export default function App() {
  // Navigation sticky transparent-to-solid transition on scroll
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Quick Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 90; // account for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSending(true);

    setTimeout(() => {
      const list = JSON.parse(localStorage.getItem('contact_submissions_list') || '[]');
      list.push({
        name,
        email,
        phone,
        message,
        date: new Date().toLocaleDateString()
      });
      localStorage.setItem('contact_submissions_list', JSON.stringify(list));

      setSending(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  const testimonials = [
    {
      initials: "AA",
      title: "12 Years of Addiction Shattered",
      name: "Brother Abraham Adeosun",
      location: "Abeokuta, Ogun State",
      text: "For 12 years, I was locked inside hard drug addiction and violent gangs. During the Obada Oko crusade, a soul winner handed me a gospel tract. As Prophet Maruph was praying, the power of the Holy Spirit hit me like light. I collapsed, and when I woke up, the addiction was completely gone! Today, I am actively witnessing on the streets.",
      verified: true
    },
    {
      initials: "DA",
      title: "Stage-3 Fibroids Healed Instantly",
      name: "Sister Deborah Akinyemi",
      location: "Lagos, Nigeria",
      text: "My doctors diagnosed me with severe stage-3 fibroids and scheduled me for an expensive, risky surgery. I attended the three-day prayer sessions at Obada Oko. As the Prophet shouted 'CAC Mine Shall be Possible!', I felt a warm heat. Yesterday, my routine ultrasound scan confirmed the fibroids had totally melted away!",
      verified: true
    },
    {
      initials: "SK",
      title: "Foundational Debt Melted Away",
      name: "Deacon Samuel Kolawole",
      location: "Ibadan, Oyo State",
      text: "My business collapsed entirely in 2024, leaving me in multi-million debt. I was challenged to join the Soul Winning challenge, sowing hours witnessing to souls instead of worrying. Within three months, I received a surprise partnership offer from a foreign firm. Today, my debts are fully settled!",
      verified: true
    }
  ];

  const focusAreas = [
    {
      title: "Rescue (Evangelism)",
      description: "Reaching deep into rural villages and urban corridors to pull back lives from the precipice, demonstrating Christ's love through tireless street action.",
      icon: Flame,
      color: "#D4AF37"
    },
    {
      title: "Ground (Discipleship)",
      description: "Taking new converts and carefully building them into mature, unshakeable Kingdom ambassadors who know their biblical foundations.",
      icon: BookOpen,
      color: "#123B73"
    },
    {
      title: "Empower (Prayer)",
      description: "Unlocking heavenly portals and shattering ancestral barriers through aggressive, unceasing warfare prayer watches.",
      icon: Radio,
      color: "#081C3D"
    },
    {
      title: "Heal (Outreach Care)",
      description: "Extending hands of mercy with food supplies, medical checks, and educational welfare packages to widows and children.",
      icon: Heart,
      color: "#D4AF37"
    },
    {
      title: "Ignite (Restoration)",
      description: "Spurring Holy Spirit awakenings to restore backslidden hearts, rebuild broken homes, and command physical breakthroughs.",
      icon: Compass,
      color: "#123B73"
    }
  ];

  const programmes = [
    {
      title: "Evangelism Outreach",
      subhead: "Find Your Fire",
      description: "Join the frontlines as we share tracts, pray for the sick in marketplaces, and rescue the lost.",
      icon: Flame,
      time: "Saturdays, 9:00 AM",
      location: "Central Market Ground & Environs"
    },
    {
      title: "Prayer Meetings",
      subhead: "Break Your Yokes",
      description: "Enter the sanctuary for aggressive intercession to destroy foundational limitations and command deliverance.",
      icon: Radio,
      time: "Tuesdays, 5:00 PM",
      location: "HQ Sanctuary Chapel, Obada Oko"
    },
    {
      title: "Revival Services",
      subhead: "Activate Your Power",
      description: "A glorious atmosphere of raw worship, prophetic decrees, signs, and miraculous restoration.",
      icon: Compass,
      time: "Sundays, 8:00 AM",
      location: "Main Auditorium, Obada Oko"
    },
    {
      title: "Bible Study & Discipleship",
      subhead: "Ground Your Faith",
      description: "Deep scriptural exposition to feed your spirit, sharpen your calling, and prepare you for ambassadorial works.",
      icon: BookOpen,
      time: "Thursdays, 5:30 PM",
      location: "Bible School Hall, HQ"
    }
  ];

  const stats = [
    { count: "14,500+", label: "Souls Reached" },
    { count: "380+", label: "Outreaches Held" },
    { count: "1,200+", label: "Prayer Meetings" },
    { count: "25+", label: "Communities Impacted" }
  ];

  return (
    <div className="min-h-screen bg-light-bg text-dark-text font-sans antialiased selection:bg-navy-deep/10 selection:text-navy-deep">
      
      {/* HEADER / NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-navy-deep shadow-lg border-b border-primary-gold/15 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Brand */}
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center space-x-3 group cursor-pointer text-left"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-primary-gold/30 shadow-md group-hover:scale-102 transition-transform duration-300 bg-navy-deep">
                <img 
                  src="/logo.jpg" 
                  alt="CAC Mine Shall Be Possible Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xs sm:text-sm tracking-wider text-white group-hover:text-primary-gold transition-colors leading-tight uppercase">
                  OIL FOR SOUL WINNING
                </span>
                <span className="font-mono text-[8px] uppercase text-primary-gold/90 font-bold tracking-widest leading-none mt-0.5">
                  CAC MINE SHALL BE POSSIBLE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-1">
              <a 
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#vision"
                onClick={(e) => handleNavClick(e, 'vision')}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Vision
              </a>
              <a 
                href="#programmes"
                onClick={(e) => handleNavClick(e, 'programmes')}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Programmes
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden md:block">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-5 py-2.5 rounded-lg btn-primary text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md"
              >
                <span>Join The Mission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-primary-gold focus:outline-none p-2"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-navy-deep/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-6 animate-fadeIn">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="w-7 h-7" />
            </button>
            
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-base uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-base uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#vision"
              onClick={(e) => handleNavClick(e, 'vision')}
              className="text-base uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Vision
            </a>
            <a 
              href="#programmes"
              onClick={(e) => handleNavClick(e, 'programmes')}
              className="text-base uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Programmes
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-base uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-4 px-8 py-3.5 rounded-xl btn-primary text-xs uppercase tracking-wider shadow-lg"
            >
              Join The Mission
            </a>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section 
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        {/* Navy Overlay to protect contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/90 to-navy-deep/95 z-0" />
        
        {/* Minimal ambient light effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-primary-gold/5 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 mt-8">
          
          {/* Header Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-primary-gold animate-pulse" />
            <span className="font-mono text-[9.5px] uppercase text-primary-gold font-bold tracking-widest">
              CAC MINE SHALL BE POSSIBLE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none uppercase">
            Raising A Generation <br className="hidden sm:inline"/>To <span className="bg-gradient-to-r from-amber-200 via-primary-gold to-amber-400 bg-clip-text text-transparent">Win Souls</span>
          </h1>

          {/* Subheadline (Refined to be extremely warm and personal) */}
          <p className="font-sans text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            If you are searching for raw spiritual fire, if you desire to grow as a disciple of Jesus Christ, or if you simply need a place to stand in prayer—we welcome you. You are invited to join the frontlines.
          </p>

          {/* Core Scripture Badge (Directly below copy as the anchor) */}
          <div className="py-2 max-w-xl mx-auto space-y-1">
            <p className="font-serif italic text-base sm:text-lg text-primary-gold leading-tight">
              "Go therefore and make disciples of all nations..."
            </p>
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">— Matthew 28:19</span>
          </div>

          {/* Spaced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary text-xs uppercase tracking-wider text-center shadow-md"
            >
              Join The Mission
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-secondary text-xs uppercase tracking-wider text-center"
            >
              Contact Us
            </a>
          </div>

        </div>

        {/* Scroll indicator */}
        <a 
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDown className="w-5 h-5 animate-bounce text-primary-gold" />
        </a>

      </section>

      {/* SOCIAL PROOF IMPACT STATS (Consistent visual bridge) */}
      <section className="bg-navy-deep border-y border-primary-gold/15 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <span className="block font-display font-black text-2xl sm:text-3xl text-primary-gold tracking-tight">
                  {stat.count}
                </span>
                <span className="block font-mono text-[9px] uppercase text-white/75 tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT THE MINISTRY (Who We Are) */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-light-bg text-dark-text relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Header block */}
          <div className="text-left max-w-3xl space-y-3 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest font-black text-blue-royal block">
              OUR SPIRITUAL FOUNDATION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-navy-deep uppercase tracking-tight">
              Who We Are
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-gold to-blue-royal" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Ministry Description (Birthed in Consecration history narrative) */}
            <div className="lg:col-span-6 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed text-left font-sans">
              <p className="text-navy-deep font-semibold text-lg font-serif italic leading-relaxed">
                "This ministry did not begin as an administrative decision or a corporate project. It was birthed in solitary distress."
              </p>
              <p>
                Oil For Soul Winning Evangelical Ministries (a.k.a <strong>CAC Mine Shall Be Possible</strong>) arose out of a deep divine visitation. Witnessing a dry spiritual season across communities, Prophet Maruph Oladele retired into absolute seclusion inside Christ Apostolic Church (CAC)—laying hold of the altar in prolonged fasting and night prayer battles.
              </p>
              <p>
                In this quiet place of consecration, the Holy Spirit delivered a fire-brand verdict: <em>"Go, pour the anointing oil of soul-winning. Gather the intercessors, storm the rural lands, and establish the truth that with Me, your expectations shall be made possible."</em> What started as a prayer cry on mountain tops has erupted into a vibrant global mobilization army based in Obada Oko, Ogun State.
              </p>
              <p className="italic border-l-2 border-primary-gold pl-4 py-1 font-serif text-slate-800 text-sm sm:text-base">
                We do not measure our success based on filled building rows alone. We measure success on how many converted believers have been raised, equipped, and deployed to storm territories for Christ.
              </p>
            </div>

            {/* Right: Vision & Mission cards */}
            <div id="vision" className="lg:col-span-6 space-y-6 w-full">
              
              {/* Vision Card */}
              <div className="p-8 rounded-3xl bg-navy-deep text-white border border-primary-gold/20 shadow-lg text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary-gold/5 blur-xl pointer-events-none" />
                <span className="text-primary-gold font-mono text-[9px] font-bold uppercase tracking-widest block mb-2">
                  THE VISION
                </span>
                <h4 className="font-display font-black text-lg sm:text-xl leading-snug uppercase mb-3 text-white">
                  A Soul-Winning Army
                </h4>
                <p className="font-serif italic text-slate-300 leading-relaxed text-sm sm:text-base">
                  "A soul-winning army raising dedicated, scripture-grounded Kingdom ambassadors who possess the spiritual fire and authority to transform lives for eternity."
                </p>
                <div className="mt-6 flex items-center space-x-2 text-[9px] text-slate-400 font-mono">
                  <Activity className="w-3.5 h-3.5 text-primary-gold" />
                  <span>ACTIVE GLOBAL DEPLOYMENT</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="p-8 rounded-3xl bg-white text-dark-text border border-slate-200/80 shadow-lg text-left relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-blue-royal/5 blur-xl pointer-events-none" />
                <span className="text-blue-royal font-mono text-[9px] font-bold uppercase tracking-widest block mb-2">
                  THE MISSION
                </span>
                <h4 className="font-display font-black text-lg sm:text-xl leading-snug uppercase mb-3 text-navy-deep">
                  To Win and To Ground
                </h4>
                <p className="font-serif italic text-slate-600 leading-relaxed text-sm sm:text-base">
                  "To win souls continuously and aggressively for Christ through radical street evangelism, systematic Bible discipleship, prayer warfare, and delivering humanitarian help directly to distressed families."
                </p>
                <div className="mt-6 flex items-center space-x-2 text-[9px] text-slate-400 font-mono font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-blue-royal" />
                  <span>MATTHEW 28:19 · ACTS 1:8</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: OUR FOCUS (KINGDOM ASSIGNMENT) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-dark-text border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest font-black text-primary-gold block">
              OUR SERVICE AREAS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-navy-deep uppercase tracking-tight">
              Our Kingdom Assignment
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-gold to-blue-royal mx-auto" />
          </div>

          {/* Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-[#F8F9FB] border border-slate-200/60 shadow-md hover:shadow-lg hover:border-primary-gold/30 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      <IconComponent className="w-5.5 h-5.5" style={{ color: area.color }} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-lg text-navy-deep uppercase leading-tight">
                        {area.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/50 flex items-center text-[9px] font-mono text-slate-400 tracking-wider">
                    <span>COVENANT FIELD FOCUS 0{idx+1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: MINISTER'S MESSAGE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-deep text-white relative overflow-hidden">
        
        {/* Soft visual background glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-gold/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Minister photo container - using /pastor.jpg */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative max-w-[320px] w-full aspect-[3/4] rounded-3xl overflow-hidden border border-primary-gold/20 shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-10" />
                <img 
                  src="/pastor.jpg" 
                  alt="Prophet Maruph Oladele (Omoobaologo)" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-navy-deep/90 border border-white/10 backdrop-blur-md p-4 rounded-2xl text-center shadow-lg">
                  <p className="font-display font-black text-primary-gold uppercase tracking-wider text-xs">
                    Prophet Maruph Oladele
                  </p>
                  <p className="text-[9px] text-slate-400 font-mono uppercase tracking-widest mt-1">
                    General Overseer (Omoobaologo)
                  </p>
                </div>
              </div>
            </div>

            {/* Minister Message */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-primary-gold text-xs font-mono font-bold uppercase tracking-widest block">
                MESSAGE FROM THE ALTAR
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white leading-snug tracking-tight uppercase">
                Welcome to a Place of Possibilities
              </h3>
              
              {/* Refinement with Drop-cap for highly aesthetic layout */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                <p className="drop-cap">
                  My Beloved Friend, I welcome you not to another digital space, but to a sanctuary of hope. God did not call us to build monuments of wood and brick; He called us to build a living, breathing army of soul-winners. He called us to stand in the gap when the world grows dark.
                </p>
                
                <blockquote className="border-l-2 border-primary-gold pl-4 py-2 font-serif text-slate-200 text-lg sm:text-xl italic leading-relaxed">
                  "If you have walked through deep stagnation, if foundational limitations have blocked your destiny, let this prophetic verdict comfort you: CAC Mine Shall Be Possible. The oil of the Holy Spirit is flowing even now to accelerate your journey and dissolve your yokes."
                </blockquote>

                <p>
                  "Arise, enlist on our discipleship tracks, attend our crusades, and let us win the world for Christ together."
                </p>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <div className="h-0.5 w-12 bg-primary-gold" />
                <div className="text-left font-serif">
                  <span className="font-bold text-white block">Prophet M. Oladele</span>
                  <span className="text-[10px] text-slate-400 block font-mono">Obada Oko Sanctuary, Ogun State</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: PROGRAMMES */}
      <section id="programmes" className="py-24 px-4 sm:px-6 lg:px-8 bg-light-bg text-dark-text relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest font-black text-blue-royal block">
              WORSHIP WITH US
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-navy-deep uppercase tracking-tight">
              Join Our Programmes
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-gold to-blue-royal mx-auto" />
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map((prog, idx) => {
              const IconComponent = prog.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-primary-gold/30 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-royal/10 flex items-center justify-center text-blue-royal">
                      <IconComponent className="w-5 h-5 text-blue-royal" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-primary-gold uppercase tracking-wider font-bold">
                        {prog.subhead}
                      </span>
                      <h4 className="font-display font-black text-lg text-navy-deep uppercase leading-tight">
                        {prog.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {prog.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-slate-100 space-y-2 text-xs font-sans text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-gold" />
                      <span>{prog.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue-royal shrink-0 mt-0.5" />
                      <span>{prog.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6: GALLERY PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-dark-text border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest font-black text-primary-gold block">
              VISUAL CHRONICLES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-navy-deep uppercase tracking-tight">
              Moments Of Impact
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-gold to-blue-royal mx-auto" />
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Gallery Image 1 */}
            <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[4/3] group border border-slate-200/80 bg-navy-deep">
              <div className="absolute inset-0 bg-navy-deep/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white text-left">
                  <span className="text-[10px] font-mono tracking-wider block text-primary-gold uppercase">CRUSADE FIRE</span>
                  <strong className="text-sm uppercase font-display block mt-1">Village Storm Outreaches</strong>
                  <p className="text-[10.5px] text-slate-300 mt-1 leading-normal">Tears of repentance and fresh fire on rural crusades.</p>
                </div>
              </div>
              <img 
                src="/service1.jpg" 
                alt="Worship congregation at CAC Mine Shall Be Possible" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery Image 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[4/3] group border border-slate-200/80 bg-navy-deep">
              <div className="absolute inset-0 bg-navy-deep/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white text-left">
                  <span className="text-[10px] font-mono tracking-wider block text-primary-gold uppercase">HOLY SANCTUARY</span>
                  <strong className="text-sm uppercase font-display block mt-1">Intercessory Prayer Program</strong>
                  <p className="text-[10.5px] text-slate-300 mt-1 leading-normal">Families united in praise at the Obada Oko sanctuary.</p>
                </div>
              </div>
              <img 
                src="/service2.jpg" 
                alt="Congregation family photo at CAC Mine Shall Be Possible" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery Image 3 */}
            <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[4/3] group border border-slate-200/80 bg-navy-deep">
              <div className="absolute inset-0 bg-navy-deep/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white text-left">
                  <span className="text-[10px] font-mono tracking-wider block text-primary-gold uppercase">ANNOINTED COUNSEL</span>
                  <strong className="text-sm uppercase font-display block mt-1">Prophet Maruph Oladele in Sanctuary</strong>
                  <p className="text-[10.5px] text-slate-300 mt-1 leading-normal">Prophet Maruph ministering under the tangible unction.</p>
                </div>
              </div>
              <img 
                src="/pastor.jpg" 
                alt="Prophet Maruph Oladele" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="mt-12 text-center">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-slate-200 hover:border-primary-gold text-xs font-display font-extrabold uppercase tracking-wider text-navy-deep hover:bg-[#F8F9FB] transition-all cursor-pointer shadow-sm"
            >
              <span>View More Moments</span>
              <ArrowUpRight className="w-4 h-4 text-primary-gold" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-royal text-white relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-navy-deep/30 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          
          {/* Header block */}
          <div className="space-y-4 mb-14">
            <span className="text-xs uppercase font-mono tracking-widest font-bold text-primary-gold block">
              DIVINE MIRACLE WITNESSES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Lives Being Transformed
            </h2>
            <div className="h-1 w-20 bg-primary-gold mx-auto" />
          </div>

          {/* Testimonial card slider */}
          <div className="relative stained-glass p-8 sm:p-12 rounded-[2rem] border border-white/20 text-left shadow-2xl animate-fadeIn min-h-[300px] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Star rating/faith check */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] text-primary-gold uppercase tracking-wider font-bold bg-white/5 border border-primary-gold/30 px-2.5 py-1 rounded">
                  {testimonials[activeTestimonial].title}
                </span>
                <span className="text-[#D4AF37] text-lg">★★★★★</span>
              </div>

              {/* Quote details */}
              <p className="font-serif italic text-base sm:text-lg text-slate-100 leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </p>

            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-navy-deep border border-primary-gold flex items-center justify-center font-display font-black text-primary-gold text-xs">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white leading-none font-serif">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                    {testimonials[activeTestimonial].location}
                  </span>
                </div>
              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-2.5 rounded-lg bg-navy-deep/80 hover:bg-navy-deep text-white border border-white/10 hover:border-primary-gold transition-colors focus:outline-none"
                  aria-label="Previous testimony"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-lg bg-navy-deep/80 hover:bg-navy-deep text-white border border-white/10 hover:border-primary-gold transition-colors focus:outline-none"
                  aria-label="Next testimony"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: CALL TO ACTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-deep text-white relative overflow-hidden">
        
        {/* Soft yellow glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-gold/10 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-primary-gold text-xs font-mono font-bold uppercase tracking-widest block">
            ENLIST TODAY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            Become Part Of The Mission
          </h2>
          <p className="font-sans text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A single soul is worth more than all the gold in the world. Join us as we reach souls, raise disciples, and advance God's Kingdom. Stand up, enlist, and let God write your name in the chronicles of His army.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary text-xs uppercase tracking-wider text-center shadow-lg"
            >
              Visit Us
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-secondary text-xs uppercase tracking-wider text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-light-bg text-dark-text relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Header block */}
          <div className="text-left max-w-3xl space-y-3 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest font-black text-blue-royal block">
              ESTABLISH CONNECTION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-navy-deep uppercase tracking-tight">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-gold to-blue-royal" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Left Column: Contact Directories / Address */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary-gold uppercase tracking-wider block">
                  SANCTUARY LOCATION
                </span>
                <div className="flex items-start gap-3 text-slate-700 text-sm font-sans">
                  <MapPin className="w-5 h-5 text-blue-royal shrink-0 mt-0.5" />
                  <span>
                    Oil For Soul Winning Evangelical Ministries Headquarters,<br />
                    Obada Oko, near Abeokuta, Ogun State, Nigeria.
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary-gold uppercase tracking-wider block">
                  TELEPHONE CHANNELS
                </span>
                <div className="space-y-2">
                  <a href="tel:09065377288" className="flex items-center gap-3 text-slate-800 font-display font-bold text-sm hover:text-blue-royal transition-colors">
                    <Phone className="w-4 h-4 text-blue-royal" />
                    <span>09065377288</span>
                  </a>
                  <a href="tel:08029171289" className="flex items-center gap-3 text-slate-800 font-display font-bold text-sm hover:text-blue-royal transition-colors">
                    <Phone className="w-4 h-4 text-blue-royal" />
                    <span>08029171289</span>
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary-gold uppercase tracking-wider block">
                  EMAIL CHANNEL
                </span>
                <a href="mailto:oilforsoulwinning@gmail.com" className="flex items-center gap-3 text-slate-800 text-sm hover:text-blue-royal transition-colors font-sans font-semibold">
                  <Mail className="w-4 h-4 text-blue-royal" />
                  <span>oilforsoulwinning@gmail.com</span>
                </a>
              </div>

              {/* WhatsApp direct support action */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[10px] font-mono font-bold text-[#4ade80] uppercase tracking-wider block mb-3">
                  DIRECT WHATSAPP MESSENGER
                </span>
                <a 
                  href="https://wa.me/2349065377288?text=Hello%20CAC%20Mine%20Shall%20Be%20Possible,%20I%20am%20connecting%20from%20the%20ministry%20homepage."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-500 border border-emerald-500/30 rounded-xl text-xs font-display font-black uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Google Maps Placeholder */}
              <div className="w-full h-48 rounded-2xl bg-slate-200 border border-slate-300 relative overflow-hidden flex items-center justify-center text-center shadow-inner">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600')" }} />
                <div className="relative z-10 p-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl shadow-md">
                  <MapPin className="w-6 h-6 text-navy-deep mx-auto mb-1 animate-bounce" />
                  <strong className="text-xs uppercase font-display block text-navy-deep">CAC Mine Shall Be Possible HQ</strong>
                  <span className="text-[10px] text-slate-500 block">Obada Oko Sanctuary, Ogun State</span>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl w-full">
              <h4 className="font-display font-black text-lg text-navy-deep uppercase tracking-wider mb-6 pb-2 border-b border-slate-100">
                Send A Prayer Request or message
              </h4>

              {success ? (
                <div className="p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-black text-navy-deep text-lg uppercase">Message Transmitted!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto font-sans">
                    Hallelujah! Your contact submission was received and logged under local databases. Our secretariat will pray and reach back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 font-sans text-xs text-slate-700">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block font-bold">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Brother Samuel"
                        className="w-full bg-light-bg border border-slate-200 focus:border-primary-gold focus:outline-none p-3.5 rounded-lg text-slate-800 font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block font-bold">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. samuel@gmail.com"
                        className="w-full bg-light-bg border border-slate-200 focus:border-primary-gold focus:outline-none p-3.5 rounded-lg text-slate-800 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block font-bold">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 09065377288"
                      className="w-full bg-light-bg border border-slate-200 focus:border-primary-gold focus:outline-none p-3.5 rounded-lg text-slate-800 font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block font-bold">Message or Prayer Request</label>
                    <textarea 
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your prayer requests or questions with the Prophet..."
                      className="w-full bg-light-bg border border-slate-200 focus:border-primary-gold focus:outline-none p-3.5 rounded-lg text-slate-800 font-sans leading-relaxed resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={sending}
                    className="w-full px-6 py-4 rounded-xl btn-primary text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                  >
                    {sending ? (
                      <span>TRANSMITTING DETAILS...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SUBMIT MESSAGE / REQUEST</span>
                      </>
                    )}
                  </button>
                  
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep border-t border-primary-gold/15 py-16 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left text-sm leading-relaxed">
            
            {/* Column 1: Brand Logo & Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary-gold bg-navy-deep">
                  <img src="/logo.jpg" alt="CAC Mine Shall Be Possible Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xs tracking-wider text-white uppercase">OIL FOR SOUL WINNING</span>
                  <span className="font-mono text-[8.5px] uppercase text-primary-gold font-bold tracking-widest mt-0.5">CAC MINE SHALL BE POSSIBLE</span>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                A growing evangelical ministry in Nigeria raising a soul-winning army of Kingdom ambassadors and transforming lives for eternity under the mandate of Prophet Maruph Oladele.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-xs text-white uppercase tracking-widest pb-2 border-b border-white/5">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-primary-gold transition-colors">Home View</a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-primary-gold transition-colors">Who We Are</a>
                </li>
                <li>
                  <a href="#vision" onClick={(e) => handleNavClick(e, 'vision')} className="hover:text-primary-gold transition-colors">Vision & Mission</a>
                </li>
                <li>
                  <a href="#programmes" onClick={(e) => handleNavClick(e, 'programmes')} className="hover:text-primary-gold transition-colors">Our Programmes</a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-primary-gold transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-xs text-white uppercase tracking-widest pb-2 border-b border-white/5">
                HQ Sanctuary Office
              </h4>
              <ul className="space-y-2 text-xs font-sans">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                  <span>Obada Oko Sanctuary, near Abeokuta, Ogun State, Nigeria.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-gold" />
                  <span>09065377288 | 08029171289</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-gold" />
                  <span>oilforsoulwinning@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Closing Scripture */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-xs text-white uppercase tracking-widest pb-2 border-b border-white/5">
                Primary Mandate
              </h4>
              <p className="font-serif italic text-xs text-primary-gold">
                "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit..."
              </p>
              <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest">— MATTHEW 28:19-20</span>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              &copy; {new Date().getFullYear()} Oil For Soul Winning Evangelical Ministries (a.k.a CAC Mine Shall Be Possible). All rights reserved.
            </p>
            <p className="font-mono text-[9.5px] tracking-wider text-slate-500">
              TAGLINE: ONE SOUL AT A TIME, WE WIN THE WORLD FOR CHRIST.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
