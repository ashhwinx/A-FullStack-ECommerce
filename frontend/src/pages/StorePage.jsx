"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Drop ${i + 1}`,
  price: (2499 + i * 100).toLocaleString(),
  image: `https://source.unsplash.com/600x600/?streetwear,fashion,${i}`,
  category: i % 2 === 0 ? "Hoodies" : "Tees",
  color: i % 3 === 0 ? "Black" : "White",
}));

const categories = ["All", "Hoodies", "Tees", "Pants", "Accessories"];
const colors = ["All", "Black", "White", "Beige", "Grey"];

const StorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [added, setAdded] = useState(null);

  const handleAddToCart = (id) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 2000); // reset after 2s
  };

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      (selectedColor === "All" || p.color === selectedColor)
  );

  return (
    <section className="w-full min-h-screen mt-20 text-black pt-10 pb-16 relative">
      {/* 👇 Store About Section (Compact) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center px-6 md:px-8 mb-14"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="Store Profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm"
          />
          <h1 className="text-3xl md:text-4xl font-bold font-orbitron">
            Urban Threads Co.
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl leading-relaxed font-gothic">
            Blending street energy with modern minimalism. Designed for movement,
            comfort, and timeless edge — crafted to define your everyday luxury.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaMapMarkerAlt />
            <span>Mumbai, India</span>
          </div>
        </div>
      </motion.div>

      {/* 👇 Main Section - Filters + Products */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-4">
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-[22%] bg-white border border-gray-200 rounded-3xl p-6 h-fit sticky top-24 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 font-orbitron">Filters</h2>

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
                    className={`text-sm ${
                      selectedCategory === cat
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
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-2 font-gothic">
              Color
            </h3>
            <ul className="space-y-2">
              {colors.map((clr) => (
                <li key={clr}>
                  <button
                    onClick={() => setSelectedColor(clr)}
                    className={`text-sm ${
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
          </div>
        </div>

        {/* Right Side - Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-orbitron text-black font-semibold">
                All Products
              </h2>
              <p className="text-gray-500 text-sm font-gothic">
                Showing {filteredProducts.length} items
              </p>
            </div>

            {/* Sort Dropdown */}
            <select className="border border-gray-300 text-black rounded-xl p-2 text-sm font-gothic focus:outline-none">
              <option>Sort by</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-[300px] object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col items-start">
                  <h3 className="font-semibold text-black text-base">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-gothic">
                    ₹{product.price}
                  </p>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAddToCart(product.id)}
                    className={`mt-3 w-full py-2 rounded-xl flex items-center  justify-center font-gothic text-sm border transition-all duration-500
                      ${
                        added === product.id
                          ? "bg-green-500 border-green-500 text-white"
                          : "bg-black text-white border-black hover:bg-gray-800"
                      }`}
                  >
                    {added === product.id ? "Added!" : "Add to Cart "}     <FaCartShopping className="ml-2"/>
                  </motion.button> 
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorePage;
