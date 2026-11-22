import "./App.css";
import MyCard from "./components/MyCard";
import SideMenu from "./components/SideMenu";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import EduExp from "./pages/EduExp";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Spec from "./pages/Spec";

const pages = {
  "/": { title: "Home", component: Home },
  "/about": { title: "About Me", component: AboutMe },
  "/eduexp": { title: "Education & Experience", component: EduExp },
  "/spec": { title: "Specializations", component: Spec },
  "/projects": { title: "Projects", component: Projects },
  "/skills": { title: "Skills", component: Skill },
  "/contactme": { title: "Contact Me", component: ContactMe },
};

function App() {
  const currentPage = pages[window.location.pathname] ?? pages["/"];
  const Page = currentPage.component;

  return (
    <div className="app-shell">
      <div className="portfolio">
        <MyCard />
        <main className="page-panel" aria-label={currentPage.title}>
          <Page />
        </main>
        <div className="desktop-nav">
          <SideMenu />
        </div>
      </div>
      <div className="mobile-nav">
        <SideMenu />
      </div>
    </div>
  );
}

export default App;
