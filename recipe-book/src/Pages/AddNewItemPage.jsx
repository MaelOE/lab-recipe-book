import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AddForm from "../components/AddForm";
import Navbar from "../components/Navbar";

function AddNewItemPage({ addRecipe }) {
  return (
    <>
      <Navbar />
      <div id="mainSection">
        <Sidebar />

        <main className="page-content">
          <div className="form-shell">
            <h2 className="page-title">Add a new recipe</h2>

            <section className="form-card">
              <AddForm addRecipe={addRecipe} />
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
export default AddNewItemPage;
