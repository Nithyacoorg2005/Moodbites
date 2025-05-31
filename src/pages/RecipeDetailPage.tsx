import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getRecipeById } from '../data/recipes';
import RecipeDetail from '../components/recipes/RecipeDetail';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = id ? getRecipeById(id) : undefined;
  
  if (!recipe) {
    return <Navigate to="/recipes\" replace />;
  }
  
  return (
    <div className="py-12 pt-28 bg-neutral-50">
      <div className="container-custom">
        <RecipeDetail recipe={recipe} />
      </div>
    </div>
  );
};

export default RecipeDetailPage;