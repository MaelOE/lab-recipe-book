import recipes from "../assets/recipes.json"
import { useState } from "react";
import { Link } from "react-router-dom";


function RecipeTable() {

    const [recipeList, setRecipeList] = useState(recipes);

    const handleDeleteRecipe = (idToRemove)=>{
      const cloneList=structuredClone(recipeList)
      cloneList.splice(idToRemove,1)
      setRecipeList(cloneList)


    }


  

  return (
    <>
    
      <div>   
                
          {recipeList.map((recipe, index) => (
        <Link to ={`/details/${recipe.id}`}> 
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
              </Link>
          ))}
        
      </div>
    </>
  )
}

export default RecipeTable


