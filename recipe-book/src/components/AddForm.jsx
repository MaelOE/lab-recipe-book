import { useState } from "react";

function AddForm({addRecipe}) {

const [recipeName, setRecipeName]=useState("")
const [calories, setCalories]=useState("")
const [servings, setServings]=useState("")


  const handleOnChange = (event) => {
    console.log(event.target);  

    switch(event.target.name){
        case("recipeName"):
            setRecipeName(event.target.value)
            break
        case("calories"):
            setCalories(event.target.value)
            break
        case("servings"):
            setServings(event.target.value)

    }
      
  };

  const handleSaveRecipe = (event) => {
    event.preventDefault()

    const newRecipe = {
        name: recipeName,
        calories: calories,
        servings: servings,
        image: null,
        id:null
    }
    addRecipe(newRecipe)
    setRecipeName("")
    setCalories("")
    setServings("")

    
  }

  

  return (
    <>
      <h1>Add new recipe</h1>
        <form onSubmit={handleSaveRecipe}>
        <label htmlFor="recipeName">Recipe Name: </label>
        <input type="text" name="recipeName" onChange={handleOnChange} value={recipeName}/>

        <label htmlFor="calories">Calories: </label>
        <input type="text" name="calories" onChange={handleOnChange} value={calories} />

        <label htmlFor="servings">Servings: </label>
        <input type="text" name="servings" onChange={handleOnChange} value={servings}/>
        
        <input type="submit" value="Send Request" />
        </form>
        </>
  );
}

export default AddForm;
//Routing
// Create a link to the AddForm page in the side bar
// We need to make a add form page similar the to the dashboard page

// Add new items
// we have to make a form that collects the 3 inputs
// we have to submit the form to the dashboard page state

// Update existing items
// Add an edit button in the recipe detail page
// Create an edit page similar to the add new item page but with pre-filled data
// ALlow the user to input data and update the existing page

//Fix the delete button
// redirect to dashboard page after adding new items
// set an actual id and img for new food