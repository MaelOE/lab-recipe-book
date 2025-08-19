import { useState } from "react";
import { Link } from "react-router-dom";

function AddForm({ addRecipe }) {
  const [recipeName, setRecipeName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");

  const handleOnChange = (event) => {
    console.log(event.target);

    switch (event.target.name) {
      case "recipeName":
        setRecipeName(event.target.value);
        break;
      case "calories":
        setCalories(event.target.value);
        break;
      case "image":
        setImage(event.target.value);
        break;
      case "servings":
        setServings(event.target.value);
    }
  };

  const handleSaveRecipe = (event) => {
    event.preventDefault();
    let id = toString(Math.floor(Math.random() * 10000000));

    const newRecipe = {
      name: recipeName,
      calories: calories,
      servings: servings,
      image: image,
      id: id,
    };
    addRecipe(newRecipe);gitp
    setRecipeName("");
    setCalories("");
    setServings("");
    setImagege ("")

  };

  return (
    <>
      <h1>Add new recipe</h1>
      <form onSubmit={handleSaveRecipe}>
        <label htmlFor="recipeName">Recipe Name: </label>
        <input
          type="text"
          name="recipeName"
          onChange={handleOnChange}
          value={recipeName}
        />

        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          onChange={handleOnChange}
          value={image}
        />

        <label htmlFor="calories">Calories: </label>
        <input
          type="text"
          name="calories"
          onChange={handleOnChange}
          value={calories}
        />

        <label htmlFor="servings">Servings: </label>
        <input
          type="text"
          name="servings"
          onChange={handleOnChange}
          value={servings}
        />

        <input type="submit" value="Add Recipe" />
      </form>
    </>
  );
}

export default AddForm;
