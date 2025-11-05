"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AdminStores = ({ stores }) => {
  const [storeList, setStoreList] = useState(stores);

  const toggleActive = (id) => {
    setStoreList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-black">All Stores</h2>

      <div className="space-y-4">
        {storeList.map((store, i) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <img
                src={store.image}
                alt={store.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h3 className="font-semibold text-black text-lg">{store.name}</h3>
                <p className="text-gray-500 text-sm">{store.description}</p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={store.active}
                onChange={() => toggleActive(store.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-black transition-all"></div>
              <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full peer-checked:translate-x-5 transition-all"></div>
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminStores;
