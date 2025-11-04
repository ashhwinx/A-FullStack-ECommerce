// components/dashboard/Orders.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const Orders = ({ orders, onUpdateStatus }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Orders</h2>

      {orders.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500 text-sm">No active orders</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((o, index) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
              {/* Left Section: Order Info */}
              <div className="space-y-1 text-sm text-gray-600">
                <p className="text-lg font-semibold text-black">Order #{o.id}</p>
                <p>
                  <span className="font-medium text-gray-800">Customer:</span> {o.customer}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Total:</span> ₹{o.total.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">
                  Items: {o.items.map((i) => i.name).join(", ")}
                </p>
              </div>

              {/* Right Section: Status + Actions */}
              <div className="flex flex-col sm:items-end gap-3 mt-4 sm:mt-0">
                <p className="text-sm">
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      o.status === "Shipped"
                        ? "text-green-600"
                        : o.status === "Cancelled"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {o.status}
                  </span>
                </p>

                <div className="flex gap-2">
                  {o.status !== "Shipped" && (
                    <button
                      onClick={() => onUpdateStatus(o.id, "Shipped")}
                      className="px-4 py-1.5 text-sm rounded-xl bg-black text-white hover:bg-gray-800 transition-all"
                    >
                      Mark Shipped
                    </button>
                  )}
                  {o.status !== "Cancelled" && (
                    <button
                      onClick={() => onUpdateStatus(o.id, "Cancelled")}
                      className="px-4 py-1.5 text-sm rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
