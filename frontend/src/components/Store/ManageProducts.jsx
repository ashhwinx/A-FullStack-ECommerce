"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";

const ManageProducts = ({ products, onDelete }) => {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-black">Manage Products</h2>

      <div className="space-y-4">
        {products.length === 0 ? (
          <p className="text-gray-500 text-sm">No products added yet.</p>
        ) : (
          products.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Product Image */}
              <motion.img
                src={
                  p.image ||
                  "https://source.unsplash.com/200x200/?fashion,streetwear"
                }
                alt={p.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-24 h-24 object-cover rounded-xl border border-gray-200"
              />

              {/* Product Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-black text-lg">{p.name}</h3>
                  <p className="text-sm font-medium text-gray-700">
                    ₹{p.price.toLocaleString()}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {p.category} • {p.color}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Stock: {p.stock}
                </p>
              </div>

              {/* Cancel / Delete Action */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(p.id)}
                className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-xl text-sm hover:bg-red-600 transition-all"
              >
                <FiTrash2 size={14} /> Remove
              </motion.button>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default ManageProducts;
