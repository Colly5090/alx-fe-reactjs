import React, { useEffect } from "react";
import useRecipeStore from "../store/recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const favorites = useRecipeStore((state) => state.favorites);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations, favorites]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations &&
        recommendations.length > 0 &&
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
    </div>
  );
};

export default RecommendationsList;
