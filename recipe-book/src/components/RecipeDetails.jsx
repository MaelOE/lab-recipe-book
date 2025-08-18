function RecipeDetails(props) {

const chosenRecipe= props.recipeList.find((element)=> {return element.id === props.recipeId})
  
  return (<>
  <div className="detailsBlock">
  <img src={chosenRecipe.image} style={{height:"150px", width:"150px"}}></img> 
  <h1>{chosenRecipe.name}</h1>
  <h3>{chosenRecipe.calories}</h3>
  <h3>{chosenRecipe.servings}</h3>
  </div>
  
  
  
  </>);
}
export default RecipeDetails;

//   <div className="imageContainer">
//     <img src={recipe.image} alt="recipe image" />
//   </div>
//   <div className="information">
//     <h2>{recipe.name}</h2>
//     <p>
//       <span>Calories:</span> {recipe.calories} |{" "}
//       <span>Serving:</span> {recipe.servings} |{" "}
//       {recipe.calories < 200 ? `Healthy ✔️` : `Go to sport ❌`}
//     </p>
//     <button onClick={() => handleDeleteRecipe(index)}>
//       Delete
//     </button>
//   </div>
