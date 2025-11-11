import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from "./components/Navbar"
import HeroPage from "./pages/HeroPage"
import CollectionPage from './pages/CollectionPage'
import ProductDetailPage from "./pages/ProductDetailPage";
import StorePage from './pages/StorePage'
import StoreDashboard from "./pages/StoreDashboard"
import AdminLayout from './pages/AdminLayout'
import Signup from './pages/Signup'
import Login from './pages/Login'
import StoreSignup from './pages/StoreSignup'
import StoreLogin from './pages/StoreLogin'
import  Profile from "./components/NavbarBox/Profile"
import Cart from "./components/NavbarBox/Cart";
import Orders from "./components/NavbarBox/Orders";

const App = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <>
    
    
    <Router>
    <Navbar/>
      <Routes>

    

      <Route path="home/" element={<HeroPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/" element={<Login/>}  />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/collection" element={<CollectionPage/>}/>

      </Routes>
    </Router>
      
   
    </>
  )
}

export default App