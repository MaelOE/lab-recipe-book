import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import RecipeTable from "../components/RecipeTable";
import Navbar from "../components/Navbar";


function AboutPage() {
  return (
    <>
    <Navbar/>
      <div id="mainSection">
        <Sidebar/>
        <div>
          <h3>Project Description</h3>
          <p>Alejandro, Dillan, Maël</p>
              <a href="https://github.com/MaelOE/lab-react-cohort-tools?tab=readme-ov-file"> GitHub repository</a>
        </div>
      </div>

      </>
  )
}
export default AboutPage

 