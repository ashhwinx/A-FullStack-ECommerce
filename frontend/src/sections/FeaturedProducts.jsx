import React from "react";
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";
import ScrollFloat from "../components/other/ScrollFloat"

const featuredProducts = [
  {
    id: 1,
    name: "Minimal Black Hoodie",
    price: 1499,
    oldPrice: 1799,
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3a29?q=80&w=800",
  },
  {
    id: 2,
    name: "White Oversized Tee",
    price: 899,
    oldPrice: 1099,
    img: "https://images.unsplash.com/photo-1618354691515-1c6b7c4c3f93?q=80&w=800",
  },
  {
    id: 3,
    name: "Denim Street Jacket",
    price: 1899,
    oldPrice: 2199,
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800",
  },
  {
    id: 4,
    name: "Chunky Sneakers",
    price: 2599,
    oldPrice: 2999,
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6 ">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 tracking-widest uppercase text-sm">Handpicked</p>
        <ScrollFloat
  animationDuration={0.5}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
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
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-black rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] transition-all duration-500"
          >
            {/* Image */}
            <div className="w-full h-72 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <div className="flex items-center mt-2 space-x-3">
                <p className="text-md font-orbitron text-black">₹{product.price}</p>
                <p className="text-gray-400 line-through text-md font-orbitron">
                  ₹{product.oldPrice}
                </p>
              </div>

              {/* Add to Cart */}
              <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 border text-black border-black rounded-xl font-gothic text-base transition-all duration-500 group-hover:bg-black group-hover:text-white">
                <span>Add To Cart</span>
                <FaCartShopping className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Background Accent */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_center,black,transparent_60%)]"></div>
    </section>
  );
};

export default FeaturedProducts;
