import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import ExperiencePage from "./Pages/ExperiencePage/ExperiencePage";
import ProjectPage from "./Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
