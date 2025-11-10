"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiHome } from "react-icons/fi";

const UserProfile = () => {
  const [form, setForm] = useState({
    firstName: "Ashwin",
    lastName: "Singh",
    email: "ashwin@example.com",
    password: "********",
    address: "123 Street Name, Mumbai, India",
  });

  const handleChange = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  

  return (
    <div className=" mt-25  flex justify-center items-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row"
      >
        {/* LEFT SIDE — FORM */}
        <div className="w-full md:w-1/2 p-10 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-2xl font-bold text-black font-gothic mb-8 text-center md:text-left">
            PROFILE
          </h2>

          <form className="space-y-5">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative cursor-pointer">
                <FiUser className="absolute left-4 top-3.5 text-gray-400 text-lg" />
                <p
                  type="text"
                  
                  onChange={handleChange("firstName")}
                  placeholder="First Name"
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-black focus:border-black focus:ring-2 focus:ring-black outline-none transition-all"
                >{form.firstName}</p>
              </div>
              <div className="relative cursor-pointer">
                <FiUser className="absolute left-4 top-3.5 text-gray-400 text-lg" />
                <p
                  type="text"
                  
                  onChange={handleChange("lastName")}
                  placeholder="Last Name"
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-black focus:border-black focus:ring-2 focus:ring-black outline-none transition-all"
                >{form.lastName}</p>
              </div>
            </div>

            {/* Email */}
            <div className="relative cursor-pointer">
              <FiMail className="absolute left-4 top-3.5 text-gray-400 text-lg" />
              <p
                type="email"
                
                onChange={handleChange("email")}
                placeholder="Email Address"
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-black focus:border-black focus:ring-2 focus:ring-black outline-none transition-all"
              >{form.email}</p>
            </div>

            {/* Password */}
            <div className="relative cursor-pointer">
              <FiLock className="absolute left-4 top-3.5 text-gray-400 text-lg" />
              <p
                type="password"
                
                onChange={handleChange("password")}
                placeholder="Password"
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-black focus:border-black focus:ring-2 focus:ring-black outline-none transition-all"
              >{form.password}</p>
            </div>

            {/* Address */}
            <div className="relative cursor-pointer" >
              <FiHome className="absolute left-4 top-3.5  text-gray-400 text-lg" />
              <p
                
                onChange={handleChange("address")}
                placeholder="Address"
                rows={3}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-black focus:border-black focus:ring-2 focus:ring-black outline-none transition-all resize-none"
              > {form.address}</p>
            </div>

          
          </form>
        </div>

        {/* RIGHT SIDE — PROFILE CARD */}
        <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-4xl font-semibold mb-4"
          >
            {form.firstName[0]}
          </motion.div>
          <h3 className="text-xl font-semibold text-black">
            {form.firstName} {form.lastName}
          </h3>
          <p className="text-gray-500 text-sm mb-6">{form.email}</p>

          <div className="text-left space-y-2 w-full max-w-sm text-gray-600">
            <p>
              <span className="font-semibold text-black">Address:</span>{" "}
              {form.address}
            </p>
            <p>
              <span className="font-semibold text-black">Password:</span>{" "}
              ********
            </p>
          </div>

          
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
