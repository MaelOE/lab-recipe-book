import recipes from "../assets/recipes.json"
import { useState } from "react";


function RecipeTable() {

    const [recipeList, setRecipeList] = useState(recipes);

    const handleDeleteRecipe = (idToRemove)=>{
      const cloneList=structuredClone(recipeList)
      cloneList.splice(idToRemove,1)
      setRecipeList(cloneList)


    }


    /*  const handleRemoveFromFavourite = (indexToRemove) => {
    console.log("trying to remove a character", indexToRemove)

    const stateClone = structuredClone(favouriteList)
    stateClone.splice(indexToRemove, 1)
    setFavouriteList(stateClone)
    
    -----

    <p>Description: {eachFavChar.description}</p>
              <button onClick={() => handleRemoveFromFavourite(index)}>Remove from Fav</button>
            </div>
    
    
    */

  

  return (
    <>
      <div>
        <h1>Menu</h1>
        
            
          {recipeList.map((recipe, index) => (
           
              <div className="recipe" key={recipe.id}>
                <div className="imageContainer">
                  <img src={recipe.image} alt="recipe image" />
                </div>
                <div className="information">
                  <h2>{recipe.name}</h2>
                  <p><span>Calories:</span> {recipe.calories}   |   <span>Serving:</span> {recipe.servings}   |   {recipe.calories < 200 ? `Healthy ✔️` : `Go to sport ❌`}</p>
                  <button onClick={() => handleDeleteRecipe(index)}>Delete</button>
                </div>
              </div>
            
          ))}
        
      </div>
    </>
  )
}

export default RecipeTable




//   {
//     "id": "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "servings": 1
//   },

/*<div>
      <h1>Travel Plans</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <h2>{plan.destination}</h2>
            <img src={plan.image}/>
            <p>{plan.description}</p>
            <p>Price: {plan.totalCost} €</p>
          </li>
        ))}
      </ul>
    </div>*/