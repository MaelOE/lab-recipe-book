import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import RecipeTable from "../components/RecipeTable";
import Navbar from "../components/Navbar";

function DashboardPage() {
  return (
    <>
      <Navbar/>
    <div>
      <div id="mainSection">
<Sidebar/>
        
        <RecipeTable/>
      </div>
    </div>
      
      <Footer/>
</>

  );
}
export default DashboardPage;
