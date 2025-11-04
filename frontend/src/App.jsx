import React from 'react'
import Navbar from "./components/Navbar"
import HeroPage from "./pages/HeroPage"
import CollectionPage from './pages/CollectionPage'
import ProductDetailPage  from './pages/ProductDEtailPage'
import StorePage from './pages/StorePage'

const App = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <>
      <Navbar/>
      {/* <HeroPage/> */}
      {/* <CollectionPage/> */}
      {/* <ProductDetailPage/> */}
      <StorePage/>
    </>
  )
}

export default App