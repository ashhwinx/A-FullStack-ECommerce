import React from "react";
import { motion } from "framer-motion";

const OrdersPage = () => {
  const orders = [
    {
      id: "ORD-1A2B3C",
      name: "Black Oversized Hoodie",
      price: 1999,
      status: "Delivered",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3a29?q=80&w=800",
    },
    {
      id: "ORD-2B3C4D",
      name: "White Minimal Sneakers",
      price: 2999,
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1606813902593-7bfb3e7f3e9b?q=80&w=800",
    },
    {
      id: "ORD-3C4D5E",
      name: "Denim Street Jacket",
      price: 1899,
      status: "Shipped",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 border-b pb-3">
        Your Orders
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
          >
            {/* Left Side - Product Info */}
            <div className="flex items-center gap-5">
              <img
                src={order.image}
                alt={order.name}
                className="w-28 h-28 object-cover rounded-xl border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold">{order.name}</h3>
                <p className="text-gray-600 text-sm mt-1">Order ID: {order.id}</p>
                <p className="text-md font-medium mt-2">₹{order.price}</p>
              </div>
            </div>

            {/* Right Side - Status */}
            <div className="text-right">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {order.status}
              </span>
              <button className="block mt-4 text-sm underline text-gray-500 hover:text-black transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
