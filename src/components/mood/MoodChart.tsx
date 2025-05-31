import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useMood, MoodType, MoodEntry } from '../../context/MoodContext';
import { format, parseISO } from 'date-fns';

const getMoodValue = (mood: MoodType): number => {
  const moodValues: Record<MoodType, number> = {
    'happy': 4,
    'excited': 5,
    'relaxed': 3,
    'neutral': 2,
    'tired': 1,
    'sad': 0,
    'stressed': -1
  };
  
  return moodValues[mood];
};

const getMoodColor = (mood: MoodType): string => {
  const moodColors: Record<MoodType, string> = {
    'happy': '#22C55E', // success-500
    'excited': '#FF6B00', // accent-500
    'relaxed': '#00C2A0', // secondary-500
    'neutral': '#64748B', // neutral-500
    'tired': '#94A3B8', // neutral-400
    'sad': '#334155', // neutral-700
    'stressed': '#EF4444' // error-500
  };
  
  return moodColors[mood];
};

const MoodChart: React.FC = () => {
  const { getMoodHistory } = useMood();
  
  const moodHistory = getMoodHistory(7);
  
  const data = moodHistory.map((entry) => ({
    date: entry.date,
    value: getMoodValue(entry.mood),
    mood: entry.mood,
    formattedDate: format(parseISO(entry.date), 'MMM d')
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const entry = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-neutral-100">
          <p className="font-medium">{format(parseISO(entry.date), 'MMMM d, yyyy')}</p>
          <p className="text-lg">
            Mood: <span style={{ color: getMoodColor(entry.mood) }}>{entry.mood}</span>
          </p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Your Mood Trends</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 20, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="formattedDate" 
              stroke="#64748B" 
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#64748B" 
              fontSize={12}
              tickLine={false}
              domain={[-1, 5]}
              ticks={[-1, 0, 1, 2, 3, 4, 5]}
              tickFormatter={(value) => {
                const labels: Record<number, string> = {
                  5: 'Excited',
                  4: 'Happy',
                  3: 'Relaxed',
                  2: 'Neutral',
                  1: 'Tired',
                  0: 'Sad',
                  [-1]: 'Stressed'
                };
                return labels[value] || '';
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3366FF" 
              strokeWidth={2}
              activeDot={{ r: 8, fill: '#3366FF' }}
              dot={{ r: 4, fill: '#3366FF', strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodChart;