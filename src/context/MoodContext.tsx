import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { format } from 'date-fns';

export type MoodType = 'happy' | 'sad' | 'neutral' | 'excited' | 'tired' | 'stressed' | 'relaxed';

export interface MoodEntry {
  id: string;
  mood: MoodType;
  date: string;
  notes: string;
}

interface MoodContextType {
  moods: MoodEntry[];
  addMood: (mood: MoodType, notes: string) => void;
  deleteMood: (id: string) => void;
  getMoodHistory: (days?: number) => MoodEntry[];
  getCurrentMood: () => MoodEntry | null;
}

const MoodContext = createContext<MoodContextType>({} as MoodContextType);

export const useMood = () => useContext(MoodContext);

const mockMoods: MoodEntry[] = [
  {
    id: '1',
    mood: 'happy',
    date: format(new Date().setDate(new Date().getDate() - 6), 'yyyy-MM-dd'),
    notes: 'Had a great day at work!'
  },
  {
    id: '2',
    mood: 'stressed',
    date: format(new Date().setDate(new Date().getDate() - 5), 'yyyy-MM-dd'),
    notes: 'Deadline approaching, feeling the pressure.'
  },
  {
    id: '3',
    mood: 'relaxed',
    date: format(new Date().setDate(new Date().getDate() - 4), 'yyyy-MM-dd'),
    notes: 'Spent the evening reading and relaxing.'
  },
  {
    id: '4',
    mood: 'excited',
    date: format(new Date().setDate(new Date().getDate() - 3), 'yyyy-MM-dd'),
    notes: 'Looking forward to the weekend!'
  },
  {
    id: '5',
    mood: 'tired',
    date: format(new Date().setDate(new Date().getDate() - 2), 'yyyy-MM-dd'),
    notes: 'Didn\'t sleep well last night.'
  },
  {
    id: '6',
    mood: 'sad',
    date: format(new Date().setDate(new Date().getDate() - 1), 'yyyy-MM-dd'),
    notes: 'Missing my friends who live far away.'
  },
  {
    id: '7',
    mood: 'neutral',
    date: format(new Date(), 'yyyy-MM-dd'),
    notes: 'Regular day, nothing special.'
  }
];

interface MoodProviderProps {
  children: ReactNode;
}

export const MoodProvider: React.FC<MoodProviderProps> = ({ children }) => {
  const [moods, setMoods] = useState<MoodEntry[]>([]);
  
  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use mock data
    const storedMoods = localStorage.getItem('moodbites_moods');
    if (storedMoods) {
      setMoods(JSON.parse(storedMoods));
    } else {
      setMoods(mockMoods);
      localStorage.setItem('moodbites_moods', JSON.stringify(mockMoods));
    }
  }, []);

  const addMood = (mood: MoodType, notes: string) => {
    const newMood: MoodEntry = {
      id: Date.now().toString(),
      mood,
      date: format(new Date(), 'yyyy-MM-dd'),
      notes
    };
    
    const updatedMoods = [...moods, newMood];
    setMoods(updatedMoods);
    localStorage.setItem('moodbites_moods', JSON.stringify(updatedMoods));
  };

  const deleteMood = (id: string) => {
    const updatedMoods = moods.filter(mood => mood.id !== id);
    setMoods(updatedMoods);
    localStorage.setItem('moodbites_moods', JSON.stringify(updatedMoods));
  };

  const getMoodHistory = (days = 7) => {
    // Get moods for the last 'days' days
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (days - 1));
    
    return moods
      .filter(mood => new Date(mood.date) >= startDate)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getCurrentMood = () => {
    const today = format(new Date(), 'yyyy-MM-dd');
    return moods.find(mood => mood.date === today) || null;
  };

  const value = {
    moods,
    addMood,
    deleteMood,
    getMoodHistory,
    getCurrentMood
  };

  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
};