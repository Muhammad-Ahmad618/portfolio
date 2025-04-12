import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './Pages/LandingPage/LandingPage'
import SkillsPage from './Pages/SkillsPage/SkillsPage'
import ExperiencePage from './Pages/ExperiencePage/ExperincePage'
import ProjectPage from './Pages/ProjectsPage/ProjectsPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <Router>  
    <Navbar/>
    <Routes>
     <Route path='/' element={<LandingPage/>}/>
     <Route path='/skills' element={<SkillsPage/>}/>
     <Route path='/experience' element={<ExperiencePage/>}/>
     <Route path='/projects' element={<ProjectPage/>}/>
     <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
