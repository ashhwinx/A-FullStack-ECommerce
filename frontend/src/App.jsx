import React from 'react'
import Navbar from "./components/Navbar"
import HeroPage from "./pages/HeroPage"
import CollectionPage from './pages/CollectionPage'
import ProductDetailPage  from './pages/ProductDEtailPage'
import StoreDashboard from "./pages/StoreDashboard"
import AdminLayout from './pages/AdminLayout'
const App = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <>
      {/* <Navbar/> */}
      {/* <HeroPage/> */}
      {/* <CollectionPage/> */}
      {/* <ProductDetailPage/> */}
      {/* <StorePage/> */}
      {/* <StoreDashboard/> */}
      <AdminLayout/>
    </>
  )
}

export default App