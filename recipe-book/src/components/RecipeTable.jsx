import { Link } from "react-router-dom";

function RecipeTable({ recipeList, setRecipeList }) {
  const handleDeleteRecipe = (idToRemove) => {
    const cloneList = structuredClone(recipeList);
    cloneList.splice(idToRemove, 1);
    setRecipeList(cloneList);
  };

  return (
    <>
      <div>
        {recipeList.map((recipe, index) => (
          <div className="recipe" key={recipe.id}>
            <div className="imageContainer">
              <img src={recipe.image} alt="recipe image" />
            </div>
            <div className="information">
              <h2>{recipe.name}</h2>
              <p>
                <span>Calories:</span> {recipe.calories} | <span>Serving:</span>{" "}
                {recipe.servings} |{" "}
                {recipe.calories < 200 ? `Healthy ✔️` : `Go to sport ❌`}
              </p>
              <button onClick={() => handleDeleteRecipe(index)}>Delete</button>
              <Link to={`/details/${recipe.id}`}>
                <button>Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipeTable;
