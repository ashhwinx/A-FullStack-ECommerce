"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react"; // optional icons (looks cleaner)

const AdminApproveStore = ({ stores }) => {
  const [pending, setPending] = useState(stores);

  const handleAction = (id, action) => {
    setPending((prev) => prev.filter((s) => s.id !== id));

    // subtle feedback animation or alert
    const msg =
      action === "accept"
        ? "✅ Store approved successfully!"
        : "❌ Store declined!";
    alert(msg);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-black">
        Approve New Stores
      </h2>

      {pending.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-center py-10"
        >
          No pending stores 🎉
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pending.map((store, i) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              }}
              className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm transition-all"
            >
              {/* Store Image */}
              <div className="relative mb-4">
                <motion.img
                  src={
                    store.image ||
                    "https://source.unsplash.com/100x100/?clothing,store"
                  }
                  alt={store.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                />
              </div>

              {/* Store Info */}
              <h3 className="font-semibold text-lg text-black mb-1">
                {store.name}
              </h3>
              <p className="text-gray-500 text-sm mb-5 px-2">
                {store.description || "No description available."}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 w-full justify-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAction(store.id, "accept")}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm hover:bg-gray-900 transition-all w-[100px]"
                >
                  <Check size={16} /> Accept
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAction(store.id, "decline")}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-xl text-sm hover:bg-gray-100 transition-all w-[100px]"
                >
                  <X size={16} /> Decline
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminApproveStore;
