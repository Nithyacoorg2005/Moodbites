import React from 'react';
import { motion } from 'framer-motion';
import { MoodType } from '../../context/MoodContext';

interface MoodSelectorProps {
  selectedMood: MoodType | null;
  onSelectMood: (mood: MoodType) => void;
}

const moodOptions: { type: MoodType; emoji: string; label: string }[] = [
  { type: 'happy', emoji: '😊', label: 'Happy' },
  { type: 'sad', emoji: '😢', label: 'Sad' },
  { type: 'neutral', emoji: '😐', label: 'Neutral' },
  { type: 'excited', emoji: '😃', label: 'Excited' },
  { type: 'tired', emoji: '😴', label: 'Tired' },
  { type: 'stressed', emoji: '😰', label: 'Stressed' },
  { type: 'relaxed', emoji: '😌', label: 'Relaxed' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onSelectMood }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-neutral-800 mb-3">How are you feeling today?</h3>
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-4">
        {moodOptions.map((mood) => (
          <motion.button
            key={mood.type}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectMood(mood.type)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all ${
              selectedMood === mood.type
                ? 'bg-primary-100 border-2 border-primary-300'
                : 'bg-white border-2 border-neutral-100 hover:bg-neutral-50'
            }`}
          >
            <span className="text-4xl mb-2" role="img" aria-label={mood.label}>
              {mood.emoji}
            </span>
            <span className="text-sm font-medium text-neutral-700">{mood.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;