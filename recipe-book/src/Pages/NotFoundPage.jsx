import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div>
        <div id="mainSection">
          <Sidebar />
          <h1>Error 404: We could not find this page but don't fret. Not all those that wander are lost. </h1>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default NotFoundPage