import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import CircularText from "./CircularText ";




const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 rounded-2xl py-16 px-6 md:px-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bbh-sans-bartle text-white mb-4">ZYLO</h2>
          <p className="text-gray-400 text-sm leading-relaxed font-gothic">
            Redefining streetwear for the new generation. 
            Crafted with purpose, worn with confidence.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4 font-orbitron">Shop</h3>
          <ul className="space-y-2 text-gray-400 font-gothic">
            <li className="hover:text-white transition duration-300 cursor-pointer">Men</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Women</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Accessories</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">New Arrivals</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4 font-orbitron">Support</h3>
          <ul className="space-y-2 text-gray-400 font-gothic">
            <li className="hover:text-white transition duration-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">FAQs</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Track Order</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4 font-orbitron">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3 font-gothic">
            Subscribe for drops, offers & news.
          </p>
          <form className="flex border-b border-gray-600 focus-within:border-white transition">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full text-gray-200 placeholder-gray-500 outline-none py-2 text-sm font-gothic"
            />
            <button
              type="submit"
              className="text-white font-orbitron text-sm hover:text-gray-400 transition px-2"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row   items-center mt-10 gap-6">
        {/* Social Icons */}
        <div className="flex gap-6 text-gray-400  text-lg">
          <FaInstagram className="hover:text-white cursor-pointer transition duration-300 ml-20" />
          <FaFacebookF className="hover:text-white cursor-pointer transition duration-300" />
          <FaTwitter className="hover:text-white cursor-pointer transition duration-300" />
          <FaYoutube className="hover:text-white cursor-pointer transition duration-300 mr-60" />
        </div>

        <CircularText
  text="*ZYLO*ZYLO"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class "
/>

        {/* Copyright */}
        <p className="text-gray-500 text-sm ml-50 font-gothic text-center">
          © {new Date().getFullYear()} STYLEGENZ. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
