import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })

  return (
    <>
      <Home />
    </>
  )
}

export default App
