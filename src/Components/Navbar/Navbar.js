import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import { ReactComponent as Logo } from '../../assets/logoone.svg'
import "./Navbar.css"
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Projects from '../../pages/Project/Projects'
import Home from '../../pages/Home/Home'
import { NavLink } from "react-router-dom"
function Navbar() {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const hideNavBar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

  return (
    <header>
      <div className='logo-img'>
        <img src={require('../../assets/logoone.svg').default} alt="" />
      </div>
      <nav ref={navRef}>
        <NavLink onClick={hideNavBar} to="/">
          Home
        </NavLink>

        <NavLink onClick={hideNavBar}  to="/projects">
          Projects
        </NavLink>
        <NavLink  onClick={hideNavBar} to="/contact">
          Contact
        </NavLink>
        <NavLink onClick={hideNavBar} to="/about">
          About
        </NavLink>

        <button className="nav-btn nav-close-btn" onClick={hideNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar