export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  countdownDate: string; // ISO format string or just date for countdown
  category: 'revival' | 'outreach' | 'prayer' | 'discipleship';
}

export interface Testimony {
  id: string;
  name: string;
  location: string;
  category: 'salvation' | 'healing' | 'restoration' | 'breakthrough';
  content: string;
  date: string;
  approved: boolean;
}

export interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  category: string;
  date: string;
  answeredCount: number;
  hasPrayed?: boolean;
}

export interface OutreachReport {
  id: string;
  title: string;
  location: string;
  date: string;
  soulsWon: number;
  tractsDistributed: number;
  narrative: string;
  image: string;
}

export interface TrainingResource {
  id: string;
  title: string;
  description: string;
  format: 'pdf' | 'audio' | 'video';
  durationOrPages: string;
  url: string;
  category: 'evangelism' | 'prayer' | 'discipleship';
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  audioUrl: string;
  category: string;
  summary: string;
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessonsCount: number;
  description: string;
  level: 'Believer' | 'Disciple' | 'Leader' | 'Ambassador';
}
