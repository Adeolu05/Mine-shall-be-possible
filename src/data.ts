import { Event, Testimony, PrayerRequest, OutreachReport, TrainingResource, Sermon, CourseModule } from './types.ts';

export const IMPACT_STATS = [
  { label: 'Souls Won for Christ', count: '14,250+', sub: 'Through Global outreaches' },
  { label: 'Equipped Soul Winners', count: '1,820+', sub: 'Trained & actively deployed' },
  { label: 'Intercessory Hours', count: '50,000+', sub: 'Sustained general prayer chain' },
  { label: 'Outreaches Conducted', count: '380+', sub: 'Rural & urban missions' },
  { label: 'Testimonies Recorded', count: '2,400+', sub: 'Salvation, breakthrough, healing' },
];

export const CORE_FOCUS_AREAS = [
  {
    title: 'Soul Winning & Evangelism',
    description: 'Fulfilling the great commission with tireless passion, mounting intense street evangelism, open-air crusades, and personal witnessing across communities.',
    icon: 'Flame',
    color: '#D4AF37', // Gold
  },
  {
    title: 'Discipleship & Training',
    description: 'Transforming new converts into dedicated Kingdom ambassadors through structured development pipelines, Bible studies, and growth tracks.',
    icon: 'BookOpen',
    color: '#123B73', // Royal Blue
  },
  {
    title: 'Prayer & Intercession',
    description: 'Tapping into the power of the Holy Spirit with aggressive, continuous intercession to break yokes, trigger revivals, and command breakthroughs.',
    icon: 'Radio',
    color: '#081C3D', // Deep Navy
  },
  {
    title: 'Community Outreach',
    description: 'Demonstrating God’s love in tangible, practical ways by distributing welfare materials, free medical assistance, food supplies, and school kits.',
    icon: 'Heart',
    color: '#D4AF37',
  },
  {
    title: 'Revival & Restoration',
    description: 'Igniting structural spirit-led revivals to restore backslipped souls, restore families, and trigger spiritual awakenings across nations.',
    icon: 'Compass',
    color: '#123B73',
  },
];

export const STATEMENT_OF_FAITH = [
  {
    title: 'The Scriptures Inspired',
    details: 'We believe the Bible is the inspired, only infallible, authoritative Word of God, serving as our absolute foundation for faith, life, and ministry action.',
    scripture: '2 Timothy 3:16'
  },
  {
    title: 'The Divine Trinity',
    details: 'One God, eternally co-existent in three Persons: God the Father, God the Son, and God the Holy Spirit.',
    scripture: 'Genesis 1:26, Matthew 28:19'
  },
  {
    title: 'Salvation by Grace',
    details: 'We believe that the only means of being cleansed from sin is through repentance and faith in the precious, precious blood of Jesus Christ.',
    scripture: 'Ephesians 2:8-9'
  },
  {
    title: 'Active Power of the Holy Spirit',
    details: 'We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues, empowering the believer for authoritative witnessing and holy living.',
    scripture: 'Acts 1:8, Acts 2:4'
  },
  {
    title: 'The Great Commission Mandate',
    details: 'We believe that soul winning represents the primary heartbeat of God, commanding every believer to actively pray, go, list, and make disciples.',
    scripture: 'Mark 16:15, Proverbs 11:30'
  },
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'evt-001',
    title: 'Night of Divine Abundance Crusade',
    date: 'June 18, 2026',
    time: '5:00 PM (GMT+1)',
    location: 'Open Ground, Obada Oko, Ogun State, Nigeria',
    description: 'Join Prophet Maruph Oladele for an intense atmosphere of raw Holy Spirit power, salvation of souls, instant miraculous healings, profound deliverance, and prophetic restoration. "Mine Shall Be Possible" is the divine verdict!',
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1200',
    countdownDate: '2026-06-18T17:00:00+01:00',
    category: 'revival',
  },
  {
    id: 'evt-002',
    title: 'Global Soul Winners Boot Camp',
    date: 'July 04, 2026',
    time: '9:00 AM (GMT+1)',
    location: 'Auditorium, CAC Mine Shall Be Possible HQ, Obada Oko, Ogun State',
    description: 'An intensive, hands-on training to activate your calling as an evangelist. Learn direct street evangelism strategies, conversational soul winning, and post-saved follow-up tracking techniques.',
    image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=1200',
    countdownDate: '2026-07-04T09:00:00+01:00',
    category: 'discipleship',
  },
  {
    id: 'evt-003',
    title: '7-Day Intercessory Fire Fasting Program',
    date: 'July 15 - 21, 2026',
    time: '6:00 AM Daily',
    location: 'Online and In-Person HQ',
    description: 'Laying hold of the altar! Seven days of strict fasting and unified continuous prayer to break ancestral barriers, release financial breakthroughs, and call down revival over communities.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=1200',
    countdownDate: '2026-07-15T06:00:00+01:00',
    category: 'prayer',
  },
];

export const INITIAL_TESTIMONIES: Testimony[] = [
  {
    id: 't-001',
    name: 'Brother Abraham Adeosun',
    location: 'Abeokuta, Ogun State',
    category: 'salvation',
    content: 'For 12 years, I was locked inside hard drug addiction and violent gangs. During the Obada Oko crusade, a soul winner handstripped me a gospel flyer. I attended in heavy skepticism, but as Prophet Maruph Oladele was praying, the power of the Holy Spirit hit me like light. I collapsed code-cold, and woke up completely delivered! Today, I have undergone full discipleship and I am also leading street outreaches!',
    date: 'May 14, 2026',
    approved: true
  },
  {
    id: 't-002',
    name: 'Sister Deborah Akinyemi',
    location: 'Lagos, Nigeria',
    category: 'healing',
    content: 'My doctors diagnosed me with stage 3 severe fibroids and scheduled me for an expensive surgery with low conception prospects. I registered for the 3-Day Power of Divine Anointing prayers. As the Prophet was shouting "CAC Mine Shall be Possible!", I felt a burning sensation in my abdomen. Yesterday, my routine ultrasound scan showed absolutely nothing! The fibroids had totally melted away! God is incredibly awesome!',
    date: 'May 28, 2026',
    approved: true
  },
  {
    id: 't-003',
    name: 'Deacon Samuel Kolawole',
    location: 'Ibadan, Oyo State',
    category: 'breakthrough',
    content: 'My business collapsed entirely in 2024 leaving me in heavy multi-million debt. I became a laughing stock. I was challenged to join the Soul Winning challenge, sowing hours witnessing to souls instead of crying. Just three months in, I received a surprise call from a foreign company offering me a premium partnership. My debts are fully paid off and we have opened a secondary logistics office in Obada Oko!',
    date: 'June 05, 2026',
    approved: true
  },
];

export const INITIAL_PRAYER_WALL: PrayerRequest[] = [
  {
    id: 'p-101',
    name: 'Sister Faith O.',
    request: 'Praying for divine speed and supernatural fruitfulness in my marriage. The enemy has mocked us for 6 years, but I know that with God, CAC Mine Shall Be Possible!',
    category: 'Family & Marriage',
    date: 'Jun 11, 2026',
    answeredCount: 42,
    hasPrayed: false,
  },
  {
    id: 'p-102',
    name: 'Evang. Emmanuel Ezekiel',
    request: 'Profound grace and backing of the Holy Spirit as we storm the rural villages in Imeko-Afon. Let every strongman spirit blocking the people from gospel light be broken!',
    category: 'Evangelism Outreaches',
    date: 'Jun 11, 2026',
    answeredCount: 89,
    hasPrayed: true,
  },
  {
    id: 'p-103',
    name: 'Brother Timothy S.',
    request: 'Requesting healing for my aged mother suffering from severe arthritis. She can barely stand up for daily prayers. Let the abundant anointing oil touch her knees.',
    category: 'Healing & Health',
    date: 'Jun 12, 2026',
    answeredCount: 15,
    hasPrayed: false,
  },
];

export const DAILY_PRAYER_POINTS = [
  { Day: 'Monday', Theme: 'Soul Winning Fire & Harvest', Anchor: 'John 15:16', Point: 'Father, release raw, fresh burning passion over all our deployed soul winners, and grant a supernatural harvest of souls during our street crusades.' },
  { Day: 'Tuesday', Theme: 'Raw Anointing & Prophet Demands', Anchor: 'Isaiah 10:27', Point: 'We pray for continuous divine multiplication of fire, fresh revelation, and ultimate physical protection over our Minister-in-Charge, Prophet Maruph Oladele.' },
  { Day: 'Wednesday', Theme: 'Deliverance & Yoke Breaking', Anchor: 'Galatians 5:1', Point: 'Father, let thy raw apostolic fire consume every ancestral covenant and curse that holds any family in Obada Oko in spiritual captivity.' },
  { Day: 'Thursday', Theme: 'Maturity & Disciple Preservation', Anchor: 'Ephesians 4:13', Point: 'We intercede for our newly saved coverts. Let they be deep-rooted in discipleship, grow in scripture study, and become rigid Kingdom ambassadors.' },
  { Day: 'Friday', Theme: 'Global Open Doors & Financial Supply', Anchor: 'Philippians 4:19', Point: 'Father, trigger abnormal financial supply to construct rural worship shelters, purchase sound rigs, and feed welfare beneficiaries.' },
  { Day: 'Saturday', Theme: 'Weekend Crusades & Sign Post Miracles', Anchor: 'Mark 16:20', Point: 'Lord, manifest your absolute power during dry crusades this weekend with massive healings, raw deliverance, and immediate confessions of Jesus.' },
  { Day: 'Sunday', Theme: 'Revival Floodgates over the Church', Anchor: 'Habakkuk 3:2', Point: 'Father, cover our sanctuary with heavy clouds of spiritual worship, raw conviction of sins, and absolute restoration of backslidden believers.' },
];

export const OUTREACH_REPORTS: OutreachReport[] = [
  {
    id: 'out-001',
    title: 'Obada Oko Community Welfare Outreach',
    location: 'Obada Oko, Ogun State',
    date: 'May 10, 2026',
    soulsWon: 142,
    tractsDistributed: 800,
    narrative: 'Our team stormed the central market square of Obada Oko. Along with sharing the Gospel, we set up full welfare aid camps. We distributed fresh food packs, free over-the-counter medical checkups, and school materials for kids. 142 individuals repented and were introduced into our growth track!',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'out-002',
    title: 'Abeokuta Prison Spiritual Revival Crusade',
    location: 'Ibara Prison, Abeokuta',
    date: 'May 24, 2026',
    soulsWon: 74,
    tractsDistributed: 150,
    narrative: 'We received special clearance to minister to inmates at the Ibara Correctional Center. Prophet Maruph Oladele preached deeply on the redemptive freedom found in Christ. The prison yard was heavy with tears of raw repentance. 74 inmates surrendered their hearts completely to Jesus.',
    image: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?auto=format&fit=crop&q=80&w=600',
  },
];

export const TRAINING_RESOURCES: TrainingResource[] = [
  {
    id: 'tr-001',
    title: 'The Modern Soul Winner Handbook',
    description: 'A structured, actionable manual on answering common objections, leading conversational salvations, and demonstrating power in public street witnessing.',
    format: 'pdf',
    durationOrPages: '42 Pages',
    url: '#download-soul-winner-handbook',
    category: 'evangelism'
  },
  {
    id: 'tr-002',
    title: 'Effective Intercession Blueprint',
    description: 'Learn how to mount continuous prayer watches, bind strongmen, command prophetic decrees, and break ancestral holdover communities.',
    format: 'audio',
    durationOrPages: '1hr 15m',
    url: '#download-effective-intercession',
    category: 'prayer'
  },
  {
    id: 'tr-003',
    title: 'Anointing & Mandate Manifestation Masterclass',
    description: 'Practical, theological lectures explaining how to cultivate divine anointing oil power, maintain a clean consecration, and unlock missionary miracles.',
    format: 'video',
    durationOrPages: '4 Video Sessions',
    url: '#watch-masterclass',
    category: 'discipleship'
  }
];

export const SERMONS: Sermon[] = [
  {
    id: 'srm-001',
    title: 'Spiritual Oil for Divine Acceleration',
    speaker: 'Prophet Maruph Oladele',
    date: 'Sunday, June 07, 2026',
    duration: '48 Min',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Raw sample audio
    category: 'Anointing & Grace',
    summary: 'When divine oil rubs your feet, speed becomes natural! Prophet Maruph teaches on breaking physical delays and taking territory under the anointing of CAC Mine Shall Be Possible.'
  },
  {
    id: 'srm-002',
    title: 'The Cost of the Great Commission',
    speaker: 'Prophet Maruph Oladele',
    date: 'Sunday, May 31, 2026',
    duration: '54 Min',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    category: 'Soul Winning',
    summary: 'God does not seek famous golden cups; He seeks clean and broken ones available to carry the water of life to a dark, drying, thirsty world.'
  },
  {
    id: 'srm-003',
    title: 'Winning Your Village & City For Christ',
    speaker: 'Prophet Maruph Oladele',
    date: 'Sunday, May 24, 2026',
    duration: '1hr 02m',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    category: 'Evangelism Methods',
    summary: 'A tactical outline of territorial mapping, binding local geographical strongmen, and using radical acts of kindness to open complex hearts for the Gospel.'
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'mod-1',
    title: 'Foundations of Eternal Salvation',
    duration: '3 Weeks',
    lessonsCount: 6,
    description: 'Learn the core theological elements of blood-redemption, water-baptism, repentance from sins, and daily walking in the Holy Ghost.',
    level: 'Believer'
  },
  {
    id: 'mod-2',
    title: 'The Art of Personal Evangelism',
    duration: '4 Weeks',
    lessonsCount: 8,
    description: 'Learn direct dialogue models, how to overcome spiritual hesitation, handle tough scriptural debates, and lead short prayer altars in marketplaces.',
    level: 'Disciple'
  },
  {
    id: 'mod-3',
    title: 'Intercessory Warfare & Prophetic Mantles',
    duration: '6 Weeks',
    lessonsCount: 12,
    description: 'For prayer leaders. Explores geographical spiritual structures, sustained early-morning watches, and laying hands over the sick and afflicted.',
    level: 'Leader'
  },
  {
    id: 'mod-4',
    title: 'Kingdom Diplomatic Ambassador Deployment',
    duration: '8 Weeks',
    lessonsCount: 16,
    description: 'Equipping global missionaries for community restoration, church planting, budget administration, security intelligence, and mass revival orchestration.',
    level: 'Ambassador'
  },
];
