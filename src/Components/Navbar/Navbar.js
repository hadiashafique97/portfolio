import React from 'react'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
// import { ReactComponent as Logo } from '../../assets/logoone.svg'
import "./Navbar.css"
import "../../styles/structure.css"
import { NavLink } from "react-router-dom"
import BurgerMenu from "../BurgerMenu"
function Navbar() {
  const navRef = useRef()
  const [menuOpen, setMenuOpen] = useState(false)
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setLocation(window.location.pathname);

    if (location === "/") {

    }
  }, [location]);
  const handleBurgerMenu = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const hideNavBar = () => {
    navRef.current.classList.remove("responsive_nav")
  }

  return (




    <header>


      <img className="navbar-logo" src={require('../../assets/markup-cropped.svg').default} alt="Hadia Shafique" title='Hadia Shafique' />

      <nav ref={navRef}>
        <NavLink onClick={hideNavBar} to="/">
          <i class="ri-home-fill">Home</i>
        </NavLink>

        <NavLink onClick={hideNavBar} to="/about">
          <i class="ri-map-pin-user-fill">About</i>
        </NavLink>

        <NavLink onClick={hideNavBar} to="/projects">
          <i class="ri-folder-chart-fill">Projects</i>
        </NavLink>
        <NavLink onClick={hideNavBar} to="/contact">
          <i class="ri-contacts-book-2-fill">Contact</i>
        </NavLink>


        <button className="nav-btn nav-close-btn" onClick={hideNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <i class="ri-menu-fold-line"></i>
      </button>
    </header>
  )
}

export default Navbar