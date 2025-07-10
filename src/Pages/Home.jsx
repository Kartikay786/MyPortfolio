import React, { useEffect, useRef } from 'react'
import Navbar from '../Component/Home/Navbar'
import Project_sct from '../Component/Home/Project_sct'
import Service_sct from '../Component/Home/Service_sct'
import About from '../Component/Home/About'
import Footer from '../Component/Home/Footer'
import Header from '../Component/Home/Header'

const Home = () => {
  const serviceRef = useRef(null);
  const aboutRef= useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const section = localStorage.getItem("scrollToSection");
    if (section) {
        if (section === "service") {
            serviceRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (section === "about") {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        else if(section === "header"){
          headerRef.current?.scrollIntoView({behavior:'smooth'});
        }
        localStorage.removeItem("scrollToSection"); // Clear after use
    }
}, []);

  return (
    <>
      <Navbar serviceRef={serviceRef} headerRef={headerRef} aboutRef={aboutRef} />
      <Header ref={headerRef}/>
      <Project_sct />
      <About ref={aboutRef} />
      <Service_sct ref={serviceRef} />
      <Footer />
    </>
  )
}

export default Home