import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CollectionBox from "../../components/collection/CollectionBox";
import ScrollFloat from "../../components/other/ScrollFloat";
import axios from "axios";

const Collection = () => {
  const items = [
    "Men",
    "Women",
    "Girls",
    "Boys",
    "Kids",
    "Jackets",
    "Pants",
    "Jeans",
    "Skirt",
    "Shoes",
    "Baggy Pants",
    "TrackSuits",
    "Sneakers",
    "Hoodies",
    "T-Shirts",
    "Caps",
  ];


  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 8;
  const token = localStorage.getItem("token")


 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_URL}/productdata/products`,{token} ,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(res.data.products); 
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []); 
  

 
  const handleNext = () => {
    if (startIndex + productsPerPage < products.length) {
      setStartIndex(startIndex + productsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - productsPerPage >= 0) {
      setStartIndex(startIndex - productsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <ScrollFloat
          animationDuration={0.5}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          BEST SELLER
        </ScrollFloat>
      </div>

      {/* Infinite Scroll Buttons */}
      <div className="scroll-track flex gap-6 animate-scroll mb-12">
        {[...items, ...items].map((item, i) => (
          <button
            key={i}
            className="px-6 py-2 bg-black text-white border border-black rounded-xl text-sm hover:bg-white hover:text-black transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 18s linear infinite;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Product Section */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-white hover:text-black border border-black transition-all"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ease-in-out">
          {visibleProducts.map((product) => (
            <CollectionBox key={product._id || product.id} product={product} />
          ))}
        </div>

        {/* Right Arrow */}
        {startIndex + productsPerPage < products.length && (
          <button
            onClick={handleNext}
            className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-white hover:text-black border border-black transition-all"
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Collection;
