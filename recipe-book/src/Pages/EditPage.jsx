import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditForm from "../components/EditForm";
import Footer from "../components/Footer";

function EditPage(props) {
  const { recipeId } = useParams();
  console.log(recipeId);

  return (
    <>
      <Navbar />
      <div>
        <div id="mainSection">
          <Sidebar />
          <EditForm recipeList={props.recipeList} setRecipeList={props.setRecipeList} />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default EditPage;

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
