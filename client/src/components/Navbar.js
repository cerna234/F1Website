import React from 'react'
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
function Navbar() {
  return (
    <div className='navBar'>
        <img className="logo" src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"/>
        <div className="navLinks">
            <Link to="/">HOME </Link>
            <Link to="/drivers">DRIVERS </Link>
            <Link to="/teams">TEAMS </Link>
           
        </div>
    </div>
  )
}

export default Navbar