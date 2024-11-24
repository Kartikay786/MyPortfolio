import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="logo">Portfolio</div>
            <div className='nav_middle'>
                <div className="nav_elem">
                    <a href="">Home</a>
                    <a href="">Project</a>
                    <a href="">Skill & Service</a>
                    <a href="">About</a>
                </div>
                <i id='hamburger' style={{fontSize:'1.8rem',color:'#E2F1E7',fontWeight:'100',cursor:'pointer'}} className="ri-menu-3-fill"></i>
            </div>
            <div className="btn">
                <button>Contact</button>
            </div>
        </div>
    </>
  )
}

export default Navbar