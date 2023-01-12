//importing my from react router to set up my routes for SPA
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// importing my pages 
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Project/Projects'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
        </div>
    )
}

export default App