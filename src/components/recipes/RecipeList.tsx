import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../../data/recipes';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface RecipeListProps {
  recipes: Recipe[];
  title?: string;
  showFilters?: boolean;
}

const RecipeList: React.FC<RecipeListProps> = ({ 
  recipes, 
  title = "Recipes",
  showFilters = true 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('moodbites_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Get unique tags from all recipes
  const allTags = Array.from(new Set(recipes.flatMap(recipe => recipe.tags))).sort();
  
  const handleToggleFavorite = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    localStorage.setItem('moodbites_favorites', JSON.stringify(newFavorites));
  };
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = activeTag ? recipe.tags.includes(activeTag) : true;
    
    return matchesSearch && matchesTag;
  });
  
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
    <div>
      {title && (
        <h2 className="text-2xl font-heading font-semibold mb-6">{title}</h2>
      )}
      
      {showFilters && (
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTag === null
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              All
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  tag === activeTag
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-500">No recipes found matching your criteria.</p>
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredRecipes.map(recipe => (
            <motion.div key={recipe.id} variants={itemVariants}>
              <RecipeCard 
                recipe={recipe} 
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RecipeList;