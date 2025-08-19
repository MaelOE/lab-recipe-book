import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import EditForm from "../components/EditForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecipeDetails from "../components/RecipeDetails";

function DetailsPage(props) {
  const { recipeId } = useParams();
  console.log(recipeId);
  console.log(props);
  return (
    <>
      <Navbar />
      <div>
        <div id="mainSection">
          <Sidebar />
          <RecipeDetails
            recipeId={recipeId}
            recipeList={props.recipeList}
            setRecipeList={props.setRecipeList}
          />
          <Link to={`/edit/${recipeId}`}> Edit </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default DetailsPage;

/*import { useParams, Link } from 'react-router-dom';
 
function ProjectDetailsPage(props) {
  const { projectId } = useParams();
  console.log('projectId -->', projectId);
 
  return (
    <div>
      <h1>Project Details</h1>
 
      <Link to="/projects">Back</Link>
    </div>
  );
}
 
export default ProjectDetailsPage;*/
