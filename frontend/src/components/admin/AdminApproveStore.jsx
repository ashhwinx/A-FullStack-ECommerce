"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AdminApproveStore = ({ stores }) => {
  const [pending, setPending] = useState(stores);

  const handleAction = (id, action) => {
    setPending((prev) => prev.filter((s) => s.id !== id));
    alert(`Store ${action === "accept" ? "approved ✅" : "declined ❌"}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-black">
        Approve New Stores
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pending.map((store, i) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <img
              src={store.image}
              alt={store.name}
              className="w-20 h-20 rounded-full border border-gray-200 mb-3 object-cover"
            />
            <h3 className="font-semibold text-lg text-black">{store.name}</h3>
            <p className="text-gray-500 text-sm mb-4">
              {store.description}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => handleAction(store.id, "accept")}
                className="px-4 py-2 bg-black text-white rounded-xl text-sm hover:bg-gray-900 transition-all"
              >
                Accept
              </button>
              <button
                onClick={() => handleAction(store.id, "decline")}
                className="px-4 py-2 border border-gray-300 rounded-xl text-sm hover:bg-gray-100 transition-all"
              >
                Decline
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminApproveStore;
