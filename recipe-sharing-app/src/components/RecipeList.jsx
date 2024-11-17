import useRecipeStore from "./recipeStore";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes || []);
  const filteredRecipes = useRecipeStore(
    (state) => state.filteredRecipes || []
  );
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  const handleFavoriteToggle = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <SearchBar />
      {displayRecipes.length > 0
        ? displayRecipes.map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => handleFavoriteToggle(recipe.id)}>
                {favorites.includes(recipe.id) ? "★" : "☆"}
              </button>
              <Link to={`/recipe/${recipe.id}`}>See Details</Link>
            </div>
          ))
        : searchTerm && <p>No recipes found.</p>}
    </div>
  );
};

export default RecipeList;
