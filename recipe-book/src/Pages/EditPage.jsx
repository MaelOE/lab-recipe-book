import { useParams, Link } from "react-router-dom";

function EditPage(props) {
  const { recipeId } = useParams();
  console.log(recipeId);

  return (
    <>
      <Navbar />
      <div>
        <div id="mainSection">
          <Sidebar />
          <EditForm />
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
