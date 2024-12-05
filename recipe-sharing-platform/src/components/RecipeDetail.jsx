import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        // Fetching from public folder using the relative path
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details.");
        }
        const data = await response.json();
        // Find the recipe with the matching ID
        const recipeDetail = data.find(
          (recipe) => recipe.id === parseInt(id, 10)
        );
        if (recipeDetail) {
          setRecipe(recipeDetail);
        } else {
          setError("Recipe not found");
        }
      } catch (error) {
        setError("An error occurred while fetching the recipe.");
      }
    };
    fetchRecipeDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-600 text-center">{error}</p>;
  }

  if (!recipe) {
    return <p className="text-center">Loading recipe details...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md my-6 w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-mytitletext">
          {recipe.title}
        </h1>
        <ul>
          <li>
            <div className="flex justify-center overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-28 h-28 sm:w-38 sm:h-38 lg:h-60 lg:w-60 object-cover rounded-full transform transition-transform ease-out duration-300 hover:scale-110 mt-4 mb-2"
              />
            </div>
          </li>
          <div className="container p-6 rounded-lg shadow-md my-6 w-full md:w-2/3 lg:w-1/2">
              <li>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-violet-400">Ingredients</h2>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-lg sm:text-xl text-gray-700">{ingredient}</li>
                  ))}
                </ul>
              </li>
          </div>
          <li className="container p-6 rounded-lg shadow-md my-6 w-full md:w-2/3 lg:w-3/4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600">Cooking Instructions</h2>
            <p className="text-lg sm:text-xl text-gray-700">{recipe.instructions}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetail;
