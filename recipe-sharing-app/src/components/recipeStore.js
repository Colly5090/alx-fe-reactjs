import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
  persist(
    (set) => ({
      searchTerm: "",
      favorites: [],
      recipes: [],
      filteredRecipes: [],
      recommendations: [],

      addFavorite: (recipeId) =>
        set((state) => ({ favorites: [...state.favorites, recipeId] })),
      removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== recipeId),
        })),
      generateRecommendations: () =>
        set((state) => {
          // Mock implementation based on favorites
          const recommended = state.recipes.filter(
            (recipe) =>
              state.favorites.includes(recipe.id) && Math.random() > 0.5
          );
          return { recommendations: recommended };
        }),
      setSearchTerm: (term) => set({ searchTerm: term }),
      filterRecipes: () =>
        set((state) => ({
          filteredRecipes: state.recipes.filter((recipe) => {
            const searchTermLower = state.searchTerm.toLowerCase();

            // Check if search term is in title or description
            return (
              recipe.title.toLowerCase().includes(searchTermLower) ||
              recipe.description.toLowerCase().includes(searchTermLower)
            );
          }),
        })),
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        })),
      setRecipes: (recipes) => set({ recipes }),
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),
      updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
        })),
    }),
    {
      name: "recipe-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useRecipeStore;
