import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Heart } from 'lucide-react';
import { Recipe } from '../../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  recipe, 
  isFavorite = false,
  onToggleFavorite
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="recipe-card h-full"
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="recipe-card-img"
        />
        {onToggleFavorite && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(recipe.id);
            }}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-neutral-600 hover:text-primary-500 transition-colors"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              size={20} 
              className={isFavorite ? "fill-primary-500 text-primary-500" : ""}
            />
          </button>
        )}
      </div>
      
      <div className="recipe-card-body">
        <Link to={`/recipes/${recipe.id}`} className="block">
          <h3 className="font-heading font-semibold text-lg mb-2 hover:text-primary-500 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
            {recipe.description}
          </p>
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {recipe.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-pastel-blue bg-opacity-20 text-primary-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="recipe-card-footer flex justify-between text-sm text-neutral-500">
        <div className="flex items-center">
          <Clock size={14} className="mr-1" />
          <span>{recipe.prepTime + recipe.cookTime} min</span>
        </div>
        <div className="flex items-center">
          <Users size={14} className="mr-1" />
          <span>{recipe.servings} servings</span>
        </div>
        <div className="flex items-center">
          <span>{recipe.calories} cal</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;