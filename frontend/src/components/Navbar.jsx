import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaTruck, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [focused, setFocused] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div className=" ">
      {/* Navbar */}
      <div className="bg-black rounded-2xl mx-2  h-18 shadow-md flex items-center px-10 justify-between">
        
        {/* Left Section */}
        <ul className="flex gap-10 ml-8 text-white font-zalando text-xl items-center">
          <li className="cursor-pointer hover:opacity-50">Home</li>
          <li className="cursor-pointer hover:opacity-50">Collection</li>
          <li className="cursor-pointer hover:opacity-50">Category</li>
        </ul>

        {/* Center Logo */}
        <p className="font-bbh-sans-bartle text-3xl text-white">ZYLO</p>

        {/* Right Section */}
        <ul className="flex gap-10 text-white font-zalando text-xl items-center relative">
          {/* Search Box */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#111] h-12 w-80 rounded-xl text-white placeholder-gray-400 shadow-inner text-sm
                         pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />

            {focused && (
              <IoSearchSharp className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 hover:text-white transition-all duration-300 cursor-pointer" />
            )}
          </div>

          {/* Profile Dropdown Trigger */}
          <div className="relative">
            <li
              className="cursor-pointer mr-8 hover:opacity-50 text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                setProfile(!profile);
              }}
            >
              <MdPeopleAlt />
            </li>

            {profile && (
              <>
                {/* Invisible full-screen backdrop to close dropdown */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setProfile(false)}
                ></div>

                {/* Dropdown */}
                <div className="absolute right-0 mt-4 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-auto w-56 mt-5  bg-black rounded-2xl flex flex-col gap-2 p-3 shadow-[0_0_2px_black]"
                    onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
                  >
                    {/* Profile */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgb(31,31,31)",
                      }}
                      className="h-12 w-full rounded-xl text-white flex items-center text-xl px-4 cursor-pointer transition-all duration-200"
                    >
                      <MdPeopleAlt className="mr-4 text-gray-300" />
                      <p className="font-zalando text-md">Profile</p>
                    </motion.div>

                    {/* Cart */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgb(31,31,31)",
                      }}
                      className="h-12 w-full rounded-xl text-white flex items-center text-xl px-4 cursor-pointer transition-all duration-200"
                    >
                      <FaCartShopping className="mr-4 text-gray-300" />
                      <p className="font-zalando text-md">Cart</p>
                    </motion.div>

                    {/* Orders */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgb(31,31,31)",
                      }}
                      className="h-12 w-full rounded-xl text-white flex items-center text-xl px-4 cursor-pointer transition-all duration-200"
                    >
                      <FaTruck className="mr-4 text-gray-300" />
                      <p className="font-zalando text-md">Orders</p>
                    </motion.div>

                    {/* Logout */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgb(220,38,38)",
                      }}
                      className="bg-red-500 h-12 w-full rounded-xl text-white flex items-center text-xl px-4 cursor-pointer transition-all duration-200"
                    >
                      <FaSignOutAlt className="mr-4 text-white" />
                      <p className="font-zalando text-md font-semibold">
                        Log Out
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
