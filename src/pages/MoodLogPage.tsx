import React from 'react';
import { motion } from 'framer-motion';
import MoodForm from '../components/mood/MoodForm';
import MoodHistory from '../components/mood/MoodHistory';

const MoodLogPage: React.FC = () => {
  return (
    <div className="py-12 pt-28 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-heading font-bold text-neutral-800">
            Mood Log
          </h1>
          <p className="text-neutral-600">
            Track your emotions to get personalized recipe recommendations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MoodForm />
          <MoodHistory />
        </div>
      </div>
    </div>
  );
};

export default MoodLogPage;