import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
            <NavLink className="navbar-brand navbar-logo" to="/">
                Hadia Shafique
            </NavLink>
            <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <i className='fas fa-bars text-white'></i>

            </button>
            <div className='collapse navbar-collapse' id="navbarSupportedContent">
                <ul className='navbar-nav ml-auto'>
                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='right'></div>
                    </div>
                    <li className='nav-item active'>
                        <NavLink className="nav-link" to="/">
                            <i className='fas fa-tachometer-alt'>
                                Home
                            </i>

                        </NavLink>
                    </li>
                    <li className='nav-item active'>
                        <NavLink className="nav-link" to="/about">
                            <i className='fas fa-tachometer-alt'>
                                About
                            </i>

                        </NavLink>
                    </li>
                    <li className='nav-item active'>
                        <NavLink className="nav-link" to="/contact">
                            <i className='fas fa-tachometer-alt'>
                                Contact
                            </i>

                        </NavLink>
                    </li>
                    <li className='nav-item active'>
                        <NavLink className="nav-link" to="/projects">
                            <i className='fas fa-tachometer-alt'>
                                Projects
                            </i>

                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar