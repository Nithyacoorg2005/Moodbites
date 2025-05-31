import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChevronLeft, Heart } from 'lucide-react';
import { Recipe } from '../../data/recipes';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('moodbites_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  
  const isFavorite = favorites.includes(recipe.id);
  
  const handleToggleFavorite = () => {
    const newFavorites = isFavorite
      ? favorites.filter(id => id !== recipe.id)
      : [...favorites, recipe.id];
    
    setFavorites(newFavorites);
    localStorage.setItem('moodbites_favorites', JSON.stringify(newFavorites));
  };
  
  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to recipes
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="h-64 sm:h-96 relative">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                {recipe.title}
              </h1>
              <p className="text-neutral-100 mb-3 max-w-3xl">
                {recipe.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-white bg-opacity-20 text-white text-xs px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center text-neutral-700">
                <Clock size={18} className="mr-2" />
                <div>
                  <p className="text-sm text-neutral-500">Total Time</p>
                  <p className="font-medium">{recipe.prepTime + recipe.cookTime} min</p>
                </div>
              </div>
              
              <div className="flex items-center text-neutral-700">
                <Users size={18} className="mr-2" />
                <div>
                  <p className="text-sm text-neutral-500">Serves</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
              
              <div className="text-neutral-700">
                <p className="text-sm text-neutral-500">Calories</p>
                <p className="font-medium">{recipe.calories} per serving</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleFavorite}
              className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                isFavorite
                  ? 'bg-primary-50 text-primary-500'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <Heart 
                size={18} 
                className={`mr-2 ${isFavorite ? 'fill-primary-500' : ''}`} 
              />
              {isFavorite ? 'Saved to Favorites' : 'Add to Favorites'}
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-heading font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-pastel-lavender bg-opacity-30 rounded-lg">
            <h3 className="text-lg font-heading font-medium mb-2">Mood Benefits</h3>
            <p className="text-neutral-700">This recipe is especially good for: <strong>{recipe.moodBoosts.join(', ')}</strong> moods.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;