import React from 'react'
import Navbar from "./components/Navbar"
import HeroPage from "./pages/HeroPage"
import CollectionPage from './pages/CollectionPage'
import ProductDetailPage  from './pages/ProductDEtailPage'
import StorePage from './pages/StorePage'
import StoreDashboard from "./pages/StoreDashboard"
import AdminLayout from './pages/AdminLayout'
import Signup from './pages/Signup'
import Login from './pages/Login'
import StoreSignup from './pages/StoreSignup'
import StoreLogin from './pages/StoreLogin'



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
      {/* <AdminLayout/> */}
      {/* <Signup/> */}
      <Login/>
      
    </>
  )
}

export default App