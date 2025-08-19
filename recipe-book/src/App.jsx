import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipeTable from "./components/RecipeTable";
import DashboardPage from "./Pages/DashboardPage";
import AboutPage from "./Pages/AboutPage";
import DetailsPage from "./Pages/DetailsPage";
import EditPage from "./Pages/EditPage";
import NotFoundPage from "./Pages/NotFoundPage";
import recipes from "./assets/recipes.json";
import AddNewItemPage from "./Pages/AddNewItemPage";

import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [recipeList, setRecipeList] = useState(recipes);

  const addRecipe = (recipe) => {
    const newRecipe = {
      id: null,
      image: null,
      name: recipe.name,
      calories: Number(recipe.calories),
      servings: Number(recipe.servings),
    };
    setRecipeList((prev) => [newRecipe, ...prev]);
  };

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <DashboardPage
              recipeList={recipeList}
              setRecipeList={setRecipeList}
            />
          }
        />
        <Route
          path={"/details/:recipeId"}
          element={
            <DetailsPage
              recipeList={recipeList}
              setRecipeList={setRecipeList}
            />
          }
        />
        <Route
          path={"/edit/:recipeId"}
          element={
            <EditPage recipeList={recipeList} setRecipeList={setRecipeList} />
          }
        />
        <Route path={"/about"} element={<AboutPage />} />
        <Route
          path={"/addRecipe"}
          element={<AddNewItemPage addRecipe={addRecipe} />}
        />

        {/* gaurd clause */}
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
