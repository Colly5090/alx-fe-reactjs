import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipeId, onClose }) => {
  const { recipes, updateRecipe } = useRecipeStore();

  //find the recipe with matching ID
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  //Initialize or populate the form with the current recipe data
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    //update the recipe in the store with edited ones
    updateRecipe(recipeId, { title, description });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>
        cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
