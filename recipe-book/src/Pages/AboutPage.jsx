import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import RecipeTable from "../components/RecipeTable";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <>
      <Navbar />

      <div id="mainSection">
        <Sidebar />

        <main className="about-container">
          <section className="about-card">
            <h2>Project Description</h2>
            <p>
              Small React project to manage recipes. Built by a student team as
              a hands-on exercise.
            </p>

            <h3>Team</h3>
            <ul className="team-list">
              <li>
                <span>Alejandro</span>
                <a
                  href="https://github.com/AlejandroDuqueG-design"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <span>Dillan</span>
                <a
                  href=" https://github.com/dillanDataNerd "
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <span>Maël</span>
                <a
                  href="https://github.com/MaelOE"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>

            <p className="repo-line">
              Repository:{" "}
              <a
                href="https://github.com/MaelOE/lab-react-cohort-tools?tab=readme-ov-file"
                target="_blank"
                rel="noreferrer"
              >
                GitHub – lab-react-cohort-tools
              </a>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
