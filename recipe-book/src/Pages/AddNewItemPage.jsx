import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AddForm from "../components/AddForm"
import Navbar from "../components/Navbar";

function AddNewItemPage() {
  return (
    <>
      <Navbar />
      <div>
        <div id="mainSection">
          <Sidebar />
          <AddForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AddNewItemPage;
