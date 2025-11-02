import React from 'react'
import Navbar from "./components/Navbar"
import Hero from './sections/Hero'
import Collection from './sections/Collections'
import FeaturedProducts from './sections/FeaturedProducts'
import LifestyleBanner from './sections/LifestyleBanner'
import Testimonials from './sections/Testimonials'
import Footer from "./sections/Footer"
import About from "./sections/About"

const App = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <>
      <Navbar/>
      


      <Hero/>
      <Collection/>
      <About/>
   
      <FeaturedProducts/>
      <LifestyleBanner/>
      <Testimonials/>
      <Footer/>
      
    
    
    </>
  )
}

export default App