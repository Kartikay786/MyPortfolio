import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router';

const Navbar = ({ serviceRef, aboutRef,headerRef }) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menutoggle = () => {
        setVisible(!visible);
    };

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            setTimeout(() => {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    const handleNavigation = (section) => {
        if (location.pathname !== "/") {
            // Store the section in localStorage before navigating
            localStorage.setItem("scrollToSection", section);
            navigate("/");
        } else {
            // Directly scroll if already on home page
            if (section === "service") {
                scrollToSection(serviceRef);
            } else if (section === "about") {
                scrollToSection(aboutRef);
            }
            else if(section === "header"){
                scrollToSection(headerRef);
            }
        }
    };

    return (
        <>
            {!visible && (
                <div className="navbar">
                    <div className="logo">Portfolio</div>
                    <div className='nav_middle'>
                        <div className="nav_elem">
                            <Link to="/" onClick={() => handleNavigation("header")}>Home</Link>
                            <Link to="/projects">Project</Link>
                            <Link to="/" onClick={() => handleNavigation("service")}>Skill & Service</Link>
                            <Link to="/" onClick={() => handleNavigation("about")}>About</Link>
                        </div>
                        <i id='hamburger' onClick={menutoggle} style={{ fontSize: '1.8rem', color: '#E2F1E7', fontWeight: '100', cursor: 'pointer' }} className="ri-menu-3-fill"></i>
                    </div>
                    <div className="btn">
                        <button onClick={()=>navigate('/contact')}>Contact</button>
                    </div>
                </div>
            )}

            {/* Mobile Navbar */}
            {visible && (
                <div className='mobile_nav'>
                    <div className="close_icn">
                        <i onClick={menutoggle} className="ri-close-large-line"></i>
                    </div>
                    <div className="mobile_nav_elem">
                        <Link to="/" onClick={() => {handleNavigation("header") ; setVisible(false)}}>HOME</Link>
                        <Link to="/projects" onClick={() => setVisible(false)}>PROJECTS</Link>
                        <Link to='/' onClick={() => {handleNavigation("service"); setVisible(false);  }}>SKILL & SERVICES</Link>
                        <Link to='/' onClick={() => {handleNavigation("about"); setVisible(false);  }}>ABOUT</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
