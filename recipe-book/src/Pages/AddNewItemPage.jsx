import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AddForm from "../components/AddForm"
import Navbar from "../components/Navbar";

function AddNewItemPage({addRecipe}) {
  return (
    <>
      <Navbar />
      <div>
        <div id="mainSection">
          <Sidebar />
          <AddForm addRecipe={addRecipe}/>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AddNewItemPage;
