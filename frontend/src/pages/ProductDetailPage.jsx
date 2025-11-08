"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";

const product = {
  id: 1,
  name: "Urban Oversized Jacket",
  price: 2499,
  images: [
    "https://source.unsplash.com/900x900/?streetwear,jacket",
    "https://source.unsplash.com/900x900/?urban,jacket,black",
    "https://source.unsplash.com/900x900/?model,jacket",
  ],
  description:
    "The Urban Oversized Jacket blends bold streetwear aesthetics with timeless minimalism. Made with premium cotton blend and structured silhouette — perfect for layering or standing out solo.",
  sizes: ["S", "M", "L", "XL"],
};

const ProductDetailPage = ({product}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  console.log(product)





  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="w-full min-h-screen px-6 md:px-16 py-20 ">
      {/* Main Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-14"
      >
        {/* Left - Product Images */}
        <div className="flex-1 flex justify-center items-start gap-6">
          {/* Side thumbnails */}
          <div className="flex flex-col gap-4">
            {product.images.map((img, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(img)}
                src={img}
                alt={`thumb-${i}`}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border transition-all duration-300 ${
                  selectedImage === img
                    ? "border-black shadow-md"
                    : "border-gray-300 hover:border-black"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full lg:w-[550px] h-[600px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.05)] bg-white border border-gray-200"
          >
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right - Product Details */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-orbitron text-black"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 font-gothic leading-relaxed"
          >
            {product.description}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-orbitron text-black"
          >
            ₹{product.price.toLocaleString()}
          </motion.h2>

          {/* Sizes */}
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-3 font-gothic">
              Select Size
            </h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-xl border text-sm font-gothic transition-all duration-300 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300 text-black hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-2 w-full md:w-[280px] py-3 rounded-xl font-gothic text-sm transition-all duration-300 ${
              added
                ? "bg-green-500 text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {added ? "Added to Cart ✓" : "Add to Cart"} <FaCartShopping />
          </motion.button>
        </div>
      </motion.div>

      {/* About the Store - scrolls into view */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-32 border-t border-gray-300 pt-16 text-center"
      >
        <h2 className="text-3xl font-orbitron text-black mb-4">
          About The Store
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 font-gothic leading-relaxed">
          ZYLO fuses street culture with luxury craftsmanship —
          bold, minimal, and made to stand out. Each drop is built for creators
          who live unapologetically and move with purpose.
        </p>
      </motion.div>
    </section>
  );
};

export default ProductDetailPage;
