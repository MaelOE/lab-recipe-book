import { Link } from "react-router-dom";

function RecipeTable({ recipeList, setRecipeList }) {
  const handleDeleteRecipe = (idToRemove) => {
    const cloneList = structuredClone(recipeList);
    cloneList.splice(idToRemove, 1);
    setRecipeList(cloneList);
  };

return (
    <div className="recipe-list">
      {recipeList.map((recipe, index) => (
        <div className="recipe-row" key={recipe.id}>
          <div className="recipe-img">
            <img src={recipe.image} alt={`${recipe.name}`} />
          </div>

          <div className="recipe-main">
            <h3 className="recipe-title">{recipe.name}</h3>
            <p className="recipe-meta">
              <span><strong>Serving:</strong> {recipe.servings}</span> |{" "}
              <span><strong>Calories:</strong> {recipe.calories}</span> |{" "}
              <span className={`health ${recipe.calories < 200 ? "good" : "bad"}`}>
                {recipe.calories < 200 ? "Healthy ✔️" : "Go do some sport ❌"}
              </span>
            </p>
          </div>

          <div className="recipe-actions">
            <button className="btn btn-danger" onClick={() => handleDeleteRecipe(index)}>
              Delete
            </button>
            <Link className="btn btn-secondary" to={`/details/${recipe.id}`}>
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}


export default RecipeTable;
