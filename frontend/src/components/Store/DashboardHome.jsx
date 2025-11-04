"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBox, FaShoppingBag, FaRupeeSign } from "react-icons/fa";

const DashboardHome = ({ products, orders, earnings }) => {
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const totalEarnings = earnings;

  // card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div className="p-6 text-black">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl  ml-96 font-gothic font-semibold mb-6"
      >
        DASHBOARD OVERVIEW
        
      </motion.h2>

      {/* ====== Top Stats ====== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            label: "Total Products",
            value: totalProducts,
            icon: <FaBox />,
            color: "from-gray-100 to-gray-50",
          },
          {
            label: "Total Orders",
            value: totalOrders,
            icon: <FaShoppingBag />,
            color: "from-gray-100 to-gray-50",
          },
          {
            label: "Total Earnings",
            value: `₹${totalEarnings.toLocaleString()}`,
            icon: <FaRupeeSign />,
            color: "from-gray-100 to-gray-50",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.03,
              y: -4,
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
            className={`relative overflow-hidden bg-gradient-to-br ${item.color} rounded-2xl p-6 border border-gray-200 shadow-sm transition-all`}
          >
            <div className="absolute top-4 right-4 text-gray-300 text-xl">
              {item.icon}
            </div>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-3xl font-bold mt-2 text-black">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* ====== Analytics Section ====== */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales chart placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600 font-medium">Sales (Last 30 days)</p>
            <span className="text-xs text-gray-400">Updated just now</span>
          </div>
          <div className="h-[160px] flex items-center justify-center text-gray-400 text-sm">
            [Chart Placeholder]
          </div>
        </motion.div>

        {/* Top Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <p className="text-sm text-gray-600 font-medium mb-4">Top Categories</p>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span className="font-medium">Hoodies</span>
              <span className="text-gray-500">34%</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Tees</span>
              <span className="text-gray-500">26%</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Pants</span>
              <span className="text-gray-500">18%</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Accessories</span>
              <span className="text-gray-500">12%</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHome;
