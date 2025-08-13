import recipes from "../assets/recipes.json"
let x=recipes[0]

function RecipeTable() {
    return (

    <>
    <div className="recipe">
<div className="imageContainer">
    <img src={x.image} alt="recipe image"></img>
</div>
    <div className="information"> 
    <h2>{x.name}</h2>
    <p><span>Calories:</span> {x.calories}</p>
    <p> <span>Serving: </span>{x.servings}</p>
</div>
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