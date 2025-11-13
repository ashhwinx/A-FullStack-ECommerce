"use client";
import React, { useState ,useEffect } from "react";
import { motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import axios from "axios"






const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token")
  const [total, setTotal] = useState(null)
  const [charges, setCharges] = useState(0)
  const [quantity, setQuantity] = useState([])

  

  useEffect(() => {

    const fetchCartItem = async (req,res)=>{
        try {
            const res = await axios.get(`${import.meta.env.VITE_URL }/cart/getcartitem`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            const cartProducts = res.data.cart[0].products
            
            const ids = cartProducts.map((p) => p.productId)
            


            const product = await axios.post(`${import.meta.env.VITE_URL}/productdata/cartProduct`,{ids},{
              headers:{
                Authorization:`Bearer ${token}`
              }
            })
            const apiProduct = product.data.products
            setCartItems(apiProduct)

            const qty = cartProducts.map((p)=>p.quantity)
            const money = apiProduct.map((p)=>p.price)
            setQuantity(qty)


            
           

            setTotal(money.reduce((c,a,i)=>c+ a *qty[i],0))

            
           
        } catch (error) {
            return res.status(400).json({error:error.message})
        }
    }
    fetchCartItem()
    

  }, [])
  
  


  const handleDelete = async (productId) => {
    try {
      console.log(productId);
  
      const res = await axios.delete(`${import.meta.env.VITE_URL}/cart/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId }, 
      });
      window.location.reload();


    } catch (error) {
      console.error(error.message);
    }
  };


  const handleOrder = async ()=>{
      try {

        const res = await axios.get(`${import.meta.env.VITE_URL}/order/buy`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })

        window.location.reload();
        
      } catch (error) {
        return res.status(400).json({error:error.message})
      }
  }
  

  

  return (
    <div className=" text-black px-30 py-10 flex flex-col md:flex-row">
      
      <div className="flex-1 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 w-full max-w-2xl">Your Cart</h2>

        <div className="space-y-5 w-full max-w-2xl">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty 🛒</p>
          ) : (
            cartItems.map((item, i) => (
              <motion.div
                key={item.id || i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-4 hover:shadow-md transition-all duration-300"
              >
              
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || "https://source.unsplash.com/100x100/?product"}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-xl border border-gray-200"
                  />
                  <div>
                    <h3 className="font-medium text-black">{item.title}</h3>
                    <div className="flex">
                    <p className="text-gray-600 text-sm">₹{item.price}</p>
                    <div className="text-black ml-4 text-sm flex">QTY<p className="text-black ml-1 text-sm">{quantity[i]}</p></div>
                    </div>
                    
                    
                  </div>
                  
                </div>

                {/* DELETE BUTTON */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(item._id)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                >
                  <FiTrash2 size={18} />
                </motion.button>
              </motion.div>
            ))
          )}
        </div>
      </div>

   
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full md:w-80 bg-white border mt-30 border-gray-200 rounded-2xl shadow-sm p-6 h-fit"
      >
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <div className="space-y-2 text-gray-700 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{charges}</span>
          </div>
          <div className="flex justify-between font-semibold text-black border-t border-gray-200 pt-2">
            <span>Total</span>
            <span>₹{(total + 100).toLocaleString()}</span>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="mt-5">
          <label className="block text-sm text-gray-700 mb-1">
            Payment Method
          </label>
          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-black">
            
            <option>Cash on Delivery</option>
          </select>
        </div>

        {/* ORDER BUTTON */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOrder}
          className="w-full mt-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition-all"
        >
          Place Order
        </motion.button>
      </motion.div>
    </div>
  );
};


export default CartPage;
