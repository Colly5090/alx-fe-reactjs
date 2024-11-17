import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const numericRecipeId = Number(recipeId); //convert useparam string
  const recipes = useRecipeStore((state) => state.recipes); //for debugging
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === numericRecipeId)
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  //A button that when click will open the form to edit the recipe
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={toggleEdit}>
        {isEditing ? "Cancel Edit" : "Edit Recipe"}
      </button>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      {isEditing && (
        <EditRecipeForm recipeId={numericRecipeId} onClose={toggleEdit} />
      )}
      <DeleteRecipeButton
        recipeId={numericRecipeId}
        onDelete={() => console.log("Form deleted")}
      />
    </div>
  );
};

export default RecipeDetails;
