//importing my from react router to set up my routes for SPA
import { Route, Routes } from "react-router-dom"
import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Project/Projects'
import Home from './pages/Home/Home'

const App = () => {
    return (
        // <div>
        // <React.Fragment>
        //     <Navbar/>
        // </React.Fragment>
        // </div>
        <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
    )
}

export default App