import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './Pages/LandingPage/LandingPage'
import SkillsPage from './Pages/SkillsPage/SkillsPage'
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage'
import ProjectPage from './Pages/ProjectsPage/ProjectsPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import {AnimatedCircularProgressBar} from "./components/magicui/Animated-Progress-Bar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

const[value, setValue] = useState(0)
const [showApp, setShowApp] = useState(false)

  useEffect(() => {
   
    const Interval = setInterval(() => {
      setValue((prev) => {
      if(prev === 100){
        
        setTimeout(() => {
           setShowApp(true)
        }, 1000);

        return 100
      }
      return prev + 25
    })
    },1000)

    return () => clearInterval(Interval)

  },[])

  if(showApp === false){
    return(
    <div className="absolute w-full min-h-screen top-0 flex justify-center items-center text-white bg-black z-10">
    <AnimatedCircularProgressBar
     value={value}
     gaugePrimaryColor="rgb(79 70 229)"
     gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
    </div>
    )
  }

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
