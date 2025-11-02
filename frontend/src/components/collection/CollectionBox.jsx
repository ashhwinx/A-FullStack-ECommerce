import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const CollectionBox = () => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // revert after 2 sec
  };

  return (
    <>
      <div className="group relative w-72 bg-white border border-black rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:-translate-y-2">

        {/* Image Section */}
        <div className="w-full h-72   p-2 rounded-2xl overflow-hidden">
          <img
            src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
            alt="Jacket"
            className="object-cover w-full h-full transition-transform duration-500 rounded-xl group-hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="p-4 text-black flex flex-col items-start">
          <p className="font-gothic text-lg tracking-wide">JACKET</p>
          <div className="flex items-center mt-2 space-x-3">
            <h1 className="font-orbitron text-lg">₹1299</h1>
            <h1 className="font-orbitron text-gray-400 text-lg line-through">₹1499</h1>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`mt-4 w-full flex items-center justify-center space-x-2 py-2 border border-black rounded-xl font-gothic text-base transition-all duration-500
              ${added
                ? "bg-green-500 text-white border-green-500"
                : "group-hover:bg-black group-hover:text-white bg-white text-black"
              }`}
          >
            <span>{added ? "Added!" : "Add To Cart"}</span>
            <FaCartShopping
              className={`text-lg transition-transform duration-500 ${
                added ? "text-white" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectionBox;
