import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MoodSelector from './MoodSelector';
import { useMood, MoodType } from '../../context/MoodContext';
import { format } from 'date-fns';

const MoodForm: React.FC = () => {
  const { addMood } = useMood();
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMood) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      addMood(selectedMood, notes);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setSelectedMood(null);
        setNotes('');
        setIsSuccess(false);
      }, 3000);
    }, 500);
  };
  
  const today = format(new Date(), 'EEEE, MMMM d, yyyy');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-card p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-semibold text-neutral-800">Log Your Mood</h2>
        <p className="text-neutral-600">{today}</p>
      </div>
      
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success-50 text-success-700 p-4 rounded-lg text-center"
        >
          <p className="text-lg font-medium mb-2">Mood logged successfully!</p>
          <p>We've updated your mood for today.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <MoodSelector selectedMood={selectedMood} onSelectMood={setSelectedMood} />
          
          <div className="mb-6">
            <label htmlFor="notes" className="block text-lg font-medium text-neutral-800 mb-2">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What's on your mind today? Add any details about how you're feeling..."
              className="w-full h-32 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!selectedMood || isSubmitting}
              className={`btn btn-primary py-3 px-6 ${
                !selectedMood ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : 'Save Mood'}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default MoodForm;