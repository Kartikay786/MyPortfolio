import React from 'react'
import Navbar from '../Component/Home/Navbar'
import Project_sct from '../Component/Home/Project_sct'
import Service_sct from '../Component/Home/Service_sct'
import About from '../Component/Home/About'
import Footer from '../Component/Home/Footer'
import Header from '../Component/Home/Header'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Project_sct />
      <About />
      <Service_sct />
      <Footer />
    </>
  )
}

export default Home