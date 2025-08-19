import { useParams } from "react-router-dom";
import { useState } from "react";

function EditForm(props) {
  const params = useParams();
  const chosenRecipe = props.recipeList.find((element) => {
    return element.id === params.recipeId;
  });
  console.log(chosenRecipe);

  const [recipeName, setRecipeName] = useState(chosenRecipe.name);
  const [calories, setCalories] = useState(chosenRecipe.calories);
  const [servings, setServings] = useState(chosenRecipe.servings);
  const [image, setImage] = useState(chosenRecipe.image);

  const handleSaveRecipe = (event) => {
    event.preventDefault();

    const clone = structuredClone(props.recipeList);
    const chosenRecipeIndex = props.recipeList.findIndex(
      (element) => element.id === params.recipeId
    );

    clone[chosenRecipeIndex].name = recipeName;
    clone[chosenRecipeIndex].calories = calories;
    clone[chosenRecipeIndex].servings = servings;
    clone[chosenRecipeIndex].image = image;

    props.setRecipeList(clone);
  };

  const handleOnChange = (event) => {
    console.log(event.target);

    switch (event.target.name) {
      case "recipeName":
        setRecipeName(event.target.value);
        break;
      case "calories":
        setCalories(event.target.value);
        break;
      case "servings":
        setServings(event.target.value);
        break;
      case "image":
        setImage(event.target.value);
        break;
    }
  };

  return (
    <>
      <div>EditForm</div>;<h1>Add new recipe</h1>
      <form onSubmit={handleSaveRecipe}>
        <label htmlFor="recipeName">Recipe Name: </label>
        <input
          type="text"
          name="recipeName"
          value={recipeName}
          onChange={handleOnChange}
        />

        <label htmlFor="calories">Calories: </label>
        <input
          type="text"
          name="calories"
          value={calories}
          onChange={handleOnChange}
        />

        <label htmlFor="servings">Servings: </label>
        <input
          type="text"
          name="servings"
          value={servings}
          onChange={handleOnChange}
        />

        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleOnChange}
        />

        <input type="submit" value="Send Request" />
      </form>
    </>
  );
}

export default EditForm;
