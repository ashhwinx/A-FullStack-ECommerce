"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiBox,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const AdminDashboardHome = ({ stats }) => {
  const cards = [
    { label: "Total Products", value: stats.products, icon: <FiBox /> },
    { label: "Total Orders", value: stats.orders, icon: <FiShoppingBag /> },
    {
      label: "Total Revenue",
      value: `₹${stats.revenue.toLocaleString()}`,
      icon: <FiTrendingUp />,
    },
    { label: "Total Stores", value: stats.stores, icon: <FiUsers /> },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-8 text-black"
      >
        Dashboard Overview
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              translateY: -5,
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
            className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-start"
          >
            {/* Icon section */}
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-black text-2xl mb-4">
              {c.icon}
            </div>

            {/* Texts */}
            <p className="text-sm text-gray-500 font-gothic tracking-wide">
              {c.label}
            </p>
            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-bold text-black mt-1"
            >
              {c.value}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Analytics Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 bg-white rounded-3xl border border-gray-100 p-6 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-black mb-4">Analytics Overview</h3>
        <div className="h-[180px] flex items-center justify-center text-gray-400 text-sm">
          [Analytics Chart Placeholder]
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboardHome;
