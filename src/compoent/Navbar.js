import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import img1 from "../Assets/images/svcelogo.png"
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar w-full mb-4'>
      <img src={img1}  alt=" by Magicle" className="logo p-0 m-0" />
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/gallery' className='gallery'>
            <li>AMPLE 2k23</li>
          </Link>
          <Link to='/sponsers' className='sponsers'>
            <li>Sponsers</li>
          </Link>
          <Link to='/events' className='events'>
            <li>Events
            </li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>contact</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
