import React from 'react';
import { motion } from 'framer-motion';
import { useMood } from '../../context/MoodContext';
import { Trash2 } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const MoodHistory: React.FC = () => {
  const { moods, deleteMood } = useMood();
  
  // Sort moods by date (newest first)
  const sortedMoods = [...moods].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const getMoodEmoji = (mood: string) => {
    const moodEmojis: Record<string, string> = {
      'happy': '😊',
      'sad': '😢',
      'neutral': '😐',
      'excited': '😃',
      'tired': '😴',
      'stressed': '😰',
      'relaxed': '😌'
    };
    
    return moodEmojis[mood] || '❓';
  };
  
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Mood History</h3>
      
      {sortedMoods.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-neutral-500">No mood entries yet. Start tracking your mood!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedMoods.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start p-4 rounded-lg border border-neutral-100 hover:border-primary-100 hover:bg-primary-50/20 transition-colors"
            >
              <div className="text-3xl mr-4">{getMoodEmoji(entry.mood)}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-neutral-800 capitalize">{entry.mood}</h4>
                    <p className="text-sm text-neutral-500">{format(parseISO(entry.date), 'MMMM d, yyyy')}</p>
                  </div>
                  <button
                    onClick={() => deleteMood(entry.id)}
                    className="text-neutral-400 hover:text-error-500 transition-colors p-1"
                    aria-label="Delete mood entry"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                {entry.notes && <p className="mt-2 text-neutral-600">{entry.notes}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodHistory;