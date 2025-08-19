function RecipeDetails(props) {

const chosenRecipe= props.recipeList.find((element)=> {return element.id === props.recipeId})
  
  return (
    <div className="details-page">
      <article className="details-card">
        <div className="details-image">
          <img src={chosenRecipe.image} alt={`${chosenRecipe.name}`} />
        </div>

        <h1 className="details-title">{chosenRecipe.name}</h1>

        <div className="details-meta">
          <p><strong>Calories:</strong> {chosenRecipe.calories}</p>
          <p><strong>Servings:</strong> {chosenRecipe.servings}</p>
        </div>
      </article>
    </div>
  );
};

export default RecipeDetails;

