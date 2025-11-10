"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {
 

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
  })

  const navigate = useNavigate()

 
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const res = await axios.post(`${import.meta.env.VITE_URL}/user/register`,form)
    navigate("/login")
    
    alert("Signup successful ✅")
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={form.firstname}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 text-black rounded-xl border border-gray-200 focus:border-black outline-none"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={form.lastname}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 rounded-xl text-black border border-gray-200 focus:border-black outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-xl text-black border border-gray-200 focus:border-black outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2  rounded-xl text-black border border-gray-200 focus:border-black outline-none"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-4 py-2 rounded-xl  text-black border border-gray-200 focus:border-black outline-none resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold mt-2"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "} 
          <a href="/login" className="text-black font-medium hover:underline">
            Log In
          </a>
        </p>
        <p className="text-center text-sm text-gray-500 mt-4">
           Store account?{" "} 
          <a href="/storesignup" className="text-black font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
