"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.(form);
    alert("Login successful ✅");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f8f8]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.08)] border border-gray-200 p-10 w-full max-w-md"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-2 text-black">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Please log in to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FiMail className="absolute left-4 top-3.5 text-gray-400 text-lg" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-black placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black outline-none transition-all"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-3.5 text-gray-400 text-lg" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-black placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black outline-none transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition-all"
          >
            Log In
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-black font-medium hover:underline hover:text-gray-700"
          >
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
