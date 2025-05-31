import React from 'react';
import { motion } from 'framer-motion';
import RecipeList from '../components/recipes/RecipeList';
import { recipes } from '../data/recipes';

const RecipesPage: React.FC = () => {
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
            Recipe Collection
          </h1>
          <p className="text-neutral-600">
            Discover recipes designed to nourish your body and enhance your mood.
          </p>
        </motion.div>
        
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default RecipesPage;