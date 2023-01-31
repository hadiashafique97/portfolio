import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
// import { ReactComponent as Logo } from '../../assets/logoone.svg'
import "./Navbar.css"
import "../../styles/structure.css"
import { NavLink } from "react-router-dom"
import BurgerMenu from "../BurgerMenu"
function Navbar() {
  const navRef = useRef()
  
  const handleBurgerMenu = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const hideNavBar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

  return (
    <header>
      
        <img  className="navbar-logo"src={require('../../assets/markup-cropped.svg').default} alt="" />
      
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