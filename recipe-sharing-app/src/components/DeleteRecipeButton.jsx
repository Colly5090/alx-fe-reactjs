import React from "react";
import useRecipeStore from "../store/recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); //after deleting nav to home
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
