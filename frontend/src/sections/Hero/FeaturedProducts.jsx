import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";
import ScrollFloat from "../../components/other/ScrollFloat";
import axios from "axios";
import ProductDetailPage from "../../pages/ProductDEtailPage";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [added, setAdded] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [dataSend, setDataSend] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_URL}/productdata/products`,
          {}, // no body needed
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const allProducts = res.data.products || [];
        // Shuffle & take 4 random products
        const randomFour = allProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
        setFeaturedProducts(randomFour);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchProducts();
  }, [token]);

  const handleAddToCart = async (productId) => {
    setAdded(productId);
    setTimeout(() => setAdded(null), 2000);

    try {
      await axios.post(
        `${import.meta.env.VITE_URL}/cart/add`,
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

const handleProductCard = (product) => {
    setClicked(true);
    setDataSend(product);
  };

  // ✅ Return JSX
  return clicked ? (
    <section className="py-20 px-6 relative">
    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-gray-500 tracking-widest uppercase text-sm">
        Handpicked
      </p>
      <ScrollFloat
        animationDuration={0.5}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Featured Product
      </ScrollFloat>
      <p className="text-gray-500 mt-0 max-w-md mx-auto font-gothic">
        Discover the best of our collection curated just for you.
      </p>
    </div>

    {/* Product Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {featuredProducts.length > 0 ? (
        featuredProducts.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => handleProductCard(product)}
            className="group relative bg-white border border-black rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer"
          >
            {/* Product Image */}
            <div className="w-full h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">
                {product.title}
              </h3>
              <div className="flex items-center mt-2 space-x-3">
                <p className="text-md font-orbitron text-black">
                  ₹{product.price}
                </p>
                {product.salePrice && (
                  <p className="text-gray-400 line-through text-md font-orbitron">
                    ₹{product.salePrice}
                  </p>
                )}
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.stopPropagation(); // stop card click
                  handleAddToCart(product._id);
                }}
                className={`mt-4 w-full flex items-center justify-center gap-2 py-2 border text-base font-gothic rounded-xl transition-all duration-500 ${
                  added === product._id
                    ? "bg-green-500 border-green-500 text-white"
                    : "text-black border-black hover:bg-black hover:text-white"
                }`}
              >
                {added === product._id ? (
                  <span>Added!</span>
                ) : (
                  <>
                    <span>Add To Cart</span>
                    <FaCartShopping className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">
          Loading products...
        </p>
      )}
    </div>

    {/* Background Accent */}
    <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_center,black,transparent_60%)]"></div>
  </section>
    
  ) : (
    <ProductDetailPage product={dataSend} onBack={() => setClicked(false)} />
  );
};

export default FeaturedProducts;
