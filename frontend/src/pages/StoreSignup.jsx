"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const StoreSignup = ({ onSignup }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    storeProfile: "",
    storeName: "",
    storeDescription: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.password || !form.storeName)
      return alert("Please fill all required fields ❗");
    onSignup?.(form);
    alert("Store Signup successful ✅");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Register Your Store
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join LuxeStreet and start selling your fashion line
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-1 focus:ring-black outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-1 focus:ring-black outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-1 focus:ring-black outline-none"
              required
            />
          </div>

          {/* Store Profile Image */}
          <div>
            <label className="text-sm text-gray-600">Store Profile Image URL</label>
            <input
              type="text"
              name="storeProfile"
              value={form.storeProfile}
              onChange={handleChange}
              placeholder="https://yourstoreimage.com/pic.jpg"
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-1 focus:ring-black outline-none"
            />
          </div>

          {/* Store Name */}
          <div>
            <label className="text-sm text-gray-600">Store Name</label>
            <input
              type="text"
              name="storeName"
              value={form.storeName}
              onChange={handleChange}
              placeholder="Urban Threads"
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-1 focus:ring-black outline-none"
              required
            />
          </div>

          {/* Store Description */}
          <div>
            <label className="text-sm text-gray-600">Store Description</label>
            <textarea
              name="storeDescription"
              value={form.storeDescription}
              onChange={handleChange}
              rows="3"
              placeholder="A modern streetwear brand redefining basics."
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-1 focus:ring-black outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold mt-3"
          >
            Sign Up as Store
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have a store?{" "}
          <a
            href="/store-login"
            className="text-black font-medium hover:underline"
          >
            Log In
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default StoreSignup;
