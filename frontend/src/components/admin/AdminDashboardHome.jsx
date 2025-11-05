"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiBox, FiShoppingBag, FiTrendingUp, FiUsers } from "react-icons/fi";

const AdminDashboardHome = ({ stats }) => {
  const cards = [
    { label: "Total Products", value: stats.products, icon: <FiBox /> },
    { label: "Total Orders", value: stats.orders, icon: <FiShoppingBag /> },
    { label: "Total Revenue", value: `₹${stats.revenue.toLocaleString()}`, icon: <FiTrendingUp /> },
    { label: "Total Stores", value: stats.stores, icon: <FiUsers /> },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-black">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-start"
          >
            <div className="text-black text-2xl mb-3">{c.icon}</div>
            <p className="text-sm text-gray-500">{c.label}</p>
            <p className="text-xl font-bold text-black mt-1">{c.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardHome;
