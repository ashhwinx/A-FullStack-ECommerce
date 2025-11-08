"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";




const categories = ["All", "Men", "Women", "Kids"];
const subCategory = ["All", "Tshirt", "Shirt", "Pants", "Shoe",""];

const CollectionPage = () => {
  const [products, setProducts] = useState([])


  const [category, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");


  const [addedProduct, setAddedProduct] = useState(null);
  const [selectedPrice, setselectedPrice] = useState("Sort by")
  const token = localStorage.getItem("token")
  


  useEffect(() => {
    const fetchProducts = async()=>{
        try {

          const res = await axios.post(`${import.meta.env.VITE_URL}/productdata/products`,{category,selectedPrice}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

            setProducts(res.data.products)  
        } catch (error) {
          console.error("Error fetching featured products:", error);
        }


    }
  
    
   fetchProducts()


  }, [category, selectedPrice])




  const handleAddToCart = async (productId) => {
    setAddedProduct(productId);

    setTimeout(() => setAddedProduct(null), 2000);

    const res = await axios.post(`${import.meta.env.VITE_URL}/cart/add`,{productId},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    
    
  };

  const handleSortChange = (e)=>{
        setselectedPrice(e.target.value)
       
  }

  const filteredProducts = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (selectedColor === "All" || p.color === selectedColor)
  );

  return (
    <section className="w-full min-h-screen mt-10 py-16 px-6 md:px-12 flex gap-10">
      {/* Left Sidebar - Filters */}
      <div className="w-[22%] hidden md:block bg-white border border-gray-200 rounded-3xl p-6 h-fit sticky top-24 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-black font-orbitron">Filters</h2>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-sm uppercase text-gray-500 mb-2 font-gothic">
            Category
          </h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm transition-all ${
                    category === cat
                      ? "font-semibold text-black underline"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Color Filter */}
        {/* <div>
          <h3 className="text-sm uppercase text-gray-500 mb-2 font-gothic">
            Sub Category
          </h3>
          <ul className="space-y-2">
            {subCategory.map((clr) => (
              <li key={clr}>
                <button
                  onClick={() => setSelectedColor(clr)}
                  className={`text-sm transition-all ${
                    selectedColor === clr
                      ? "font-semibold text-black underline"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {clr}
                </button>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      {/* Right Side - Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-orbitron text-black font-semibold">
              Collection
            </h2>
            <p className="text-gray-500 text-sm font-gothic">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {/* Sort Dropdown */}
          <select 
            className="border border-gray-300 text-black rounded-xl p-2 text-sm font-gothic focus:outline-none"
            value={selectedPrice}
            onChange={handleSortChange}
          >

            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-[0_5px_25px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden relative group">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[340px] text-black object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-black text-[1.05rem] tracking-tight">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm font-gothic mb-2">
                  ₹{product.price}
                </p>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(product._id)}
                  className={`mt-2 w-full py-2 rounded-xl font-gothic text-sm font-medium transition-all duration-300 ${
                    addedProduct === product._id
                      ? "bg-green-500 text-white"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {addedProduct === product.id ? "Added ✓" : "Add to Cart"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>


      
      
      
      
       </section>
  );
};

export default CollectionPage;
