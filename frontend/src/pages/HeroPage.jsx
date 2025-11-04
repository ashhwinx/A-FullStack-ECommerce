import React from 'react'
import Hero from '../sections/Hero/Hero'
import Collection from '../sections/Hero/Collections'
import FeaturedProducts from '../sections/Hero/FeaturedProducts'
import LifestyleBanner from '../sections/Hero/LifestyleBanner'
import Testimonials from '../sections/Hero/Testimonials'
import Footer from "../components/other/Footer"
import About from "../sections/Hero/About"
const HeroPage = () => {
  return (
    <>




    <Hero/>
    <Collection/>
    <FeaturedProducts/>
    <About/>
    <LifestyleBanner/>
    <Testimonials/>
    <Footer/>
      
    </>
  )
}

export default HeroPage