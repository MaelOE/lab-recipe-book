// import AboutPage from "../Pages/Aboutpage"
import { Link } from "react-router-dom"

function Sidebar() {
  return (

    <>
    <div id="sidebar">
      <Link to = "/"> <h3>Dashboard</h3> </Link>
      <Link to = "/about"> <h3>About</h3> </Link>
      <Link to = "/addRecipe"> <h3>Add Recipe</h3> </Link>
    </div>
</>
  )
}

export default Sidebar