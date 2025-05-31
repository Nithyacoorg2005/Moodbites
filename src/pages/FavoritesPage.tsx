import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RecipeList from '../components/recipes/RecipeList';
import { recipes, Recipe } from '../data/recipes';

const FavoritesPage: React.FC = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites = localStorage.getItem('moodbites_favorites');
      const favoriteIds = storedFavorites ? JSON.parse(storedFavorites) : [];
      
      const favorites = recipes.filter(recipe => favoriteIds.includes(recipe.id));
      setFavoriteRecipes(favorites);
    };
    
    loadFavorites();
    
    // Add event listener to update favorites if they change in another tab/component
    window.addEventListener('storage', loadFavorites);
    
    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);
  
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
            Your Favorite Recipes
          </h1>
          <p className="text-neutral-600">
            Access your saved recipes for quick reference.
          </p>
        </motion.div>
        
        {favoriteRecipes.length === 0 ? (
          <div className="bg-white rounded-xl shadow-card p-8 text-center">
            <h3 className="text-xl font-medium mb-4">No favorites yet</h3>
            <p className="text-neutral-600 mb-6">
              Browse our recipes and click the heart icon to save your favorites.
            </p>
          </div>
        ) : (
          <RecipeList 
            recipes={favoriteRecipes} 
            title=""
          />
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;