import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import RecipeTable from "./components/RecipeTable"


function App() {
  

  return (
    <>
<Navbar></Navbar>

<div id="mainSection">
<Sidebar></Sidebar>
<RecipeTable></RecipeTable>
</div>

<Footer></Footer>
    </>
  )
}

export default App

