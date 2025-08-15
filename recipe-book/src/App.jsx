import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipeTable from "./components/RecipeTable";
import DashboardPage from "./Pages/DashboardPage";
import AboutPage from "./Pages/Aboutpage";
import ItemDetailsPage from "./Pages/ItemDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";

import { Routes, Route, Link } from "react-router-dom";
import AddNewItemPage from "./Pages/AddNewItemPage";


function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DashboardPage/>} />
        <Route path={"/details/:recipeId"} element= {<ItemDetailsPage />}/>
        <Route path={"/about"} element= {<AboutPage />}/>
        <Route path={"/addRecipe"} element={<AddNewItemPage />}/>

        {/* gaurd clause */}
        <Route path={"*"} element= {<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
