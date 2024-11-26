import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const menutoggle = () => {
        setVisible(!visible);
    }

    return (
        <>

            {
                !visible && (
                    <div className="navbar">
                        <div className="logo">Portfolio</div>
                        <div className='nav_middle'>
                            <div className="nav_elem">
                                <Link to="/">Home</Link>
                                <Link to="#">Project</Link>
                                <Link to="#">Skill & Service</Link>
                                <Link to="#">About</Link>
                             
                            </div>
                            <i id='hamburger' onClick={menutoggle} style={{ fontSize: '1.8rem', color: '#E2F1E7', fontWeight: '100', cursor: 'pointer' }} className="ri-menu-3-fill"></i>
                        </div>
                        <div className="btn">
                            <button>Contact</button>
                        </div>
                    </div>
                )
            }




            {/* mobile navbar */}

            {
                visible && (
                    <div className='mobile_nav'>
                        <div className="close_icn">
                            <i onClick={menutoggle} className="ri-close-large-line"></i>

                        </div>
                        <div className="mobile_nav_elem">
                            <Link to="">HOME</Link>
                            <Link to="">PROJECTS</Link>
                            <Link to="">SKILL & SERVICES</Link>
                            <Link to="">ABOUT</Link>
                        </div>
                    </div>
                )
            }


        </>
    )
}

export default Navbar