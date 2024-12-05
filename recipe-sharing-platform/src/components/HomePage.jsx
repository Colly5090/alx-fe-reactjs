import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching data from the .json file
    const fetchRecipes = async () => {
      try {
        const response = await fetch("src/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch recipe data.");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error loading recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
        <AddRecipeForm />
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-mycustomcolor">
        My Recipes
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="bg-gray-400 p-4 rounded-lg shadow-lg hover:bg-transparent"
            >
              <Link to={`/recipe/${recipe.id}`} className="block" >
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-mytitletext">
                  {recipe.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg">
                  {recipe.summary}
                </p>
                <div className="flex justify-center overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-28 h-28 sm:w-38 sm:h-38 lg:h-60 lg:w-60 object-cover rounded-full transform transition-transform ease-out duration-300 hover:scale-110 mt-4 mb-2"
                  />
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-center col-span-full">Loading recipes...</p>
        )}
      </ul>
    </div>
  );
}

export default HomePage;
