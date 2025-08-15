import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import RecipeTable from "../components/RecipeTable";
import Navbar from "../components/Navbar";

function DashboardPage({recipeList,setRecipeList}) {
  return (
    <>
      <Navbar />
      <div>
        <div id="mainSection">
          <Sidebar />

          <RecipeTable recipeList={recipeList} setRecipeList={setRecipeList} />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default DashboardPage;
