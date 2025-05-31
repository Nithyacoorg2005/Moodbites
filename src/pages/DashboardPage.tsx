import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Edit, PlusCircle, TrendingUp, Heart, ChevronRight } from 'lucide-react';
import { useMood } from '../context/MoodContext';
import { useAuth } from '../context/AuthContext';
import { getRecipesByMood } from '../data/recipes';
import MoodChart from '../components/mood/MoodChart';
import RecipeList from '../components/recipes/RecipeList';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { getCurrentMood } = useMood();
  const currentMood = getCurrentMood();
  
  const recommendedRecipes = currentMood 
    ? getRecipesByMood(currentMood.mood).slice(0, 3)
    : getRecipesByMood('neutral').slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <div className="py-12 pt-28 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-neutral-800">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-neutral-600">
              {currentMood 
                ? `You're feeling ${currentMood.mood} today.`
                : 'How are you feeling today?'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <MoodChart />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-card p-6 h-full">
                <h3 className="text-xl font-heading font-semibold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link 
                    to="/mood-log"
                    className="flex items-center p-4 rounded-lg border border-neutral-100 hover:border-primary-100 hover:bg-primary-50/20 transition-colors"
                  >
                    {currentMood ? (
                      <Edit size={20} className="text-primary-500 mr-4" />
                    ) : (
                      <PlusCircle size={20} className="text-primary-500 mr-4" />
                    )}
                    <div>
                      <h4 className="font-medium text-neutral-800">
                        {currentMood ? 'Update Today\'s Mood' : 'Log Today\'s Mood'}
                      </h4>
                      <p className="text-sm text-neutral-500">
                        {currentMood ? 'Change how you\'re feeling now' : 'Record how you\'re feeling today'}
                      </p>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/mood-log"
                    className="flex items-center p-4 rounded-lg border border-neutral-100 hover:border-primary-100 hover:bg-primary-50/20 transition-colors"
                  >
                    <TrendingUp size={20} className="text-primary-500 mr-4" />
                    <div>
                      <h4 className="font-medium text-neutral-800">View Mood History</h4>
                      <p className="text-sm text-neutral-500">See your emotional patterns over time</p>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/favorites"
                    className="flex items-center p-4 rounded-lg border border-neutral-100 hover:border-primary-100 hover:bg-primary-50/20 transition-colors"
                  >
                    <Heart size={20} className="text-primary-500 mr-4" />
                    <div>
                      <h4 className="font-medium text-neutral-800">Favorite Recipes</h4>
                      <p className="text-sm text-neutral-500">Access your saved recipes</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-2">
                {currentMood 
                  ? `Recipes for When You're Feeling ${currentMood.mood}`
                  : 'Recommended Recipes for Today'}
              </h2>
              <p className="text-neutral-600 mb-6">
                {currentMood
                  ? `These recipes are specially selected to complement your ${currentMood.mood} mood.`
                  : 'Log your mood to get more personalized recommendations.'}
              </p>
              <RecipeList 
                recipes={recommendedRecipes}
                title=""
                showFilters={false}
              />
              <div className="mt-8 text-center">
                <Link 
                  to="/recipes" 
                  className="btn btn-outline inline-flex items-center"
                >
                  View All Recipes <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;