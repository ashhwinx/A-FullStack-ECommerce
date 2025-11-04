// components/dashboard/Sidebar.jsx
"use client";
import React from "react";
import { FaTachometerAlt, FaPlus, FaBoxOpen, FaShoppingBag } from "react-icons/fa";

const Sidebar = ({ store, selected, onSelect }) => {
  return (
    <aside className="w-[260px] min-h-screen bg-white border-r border-gray-100 p-6 hidden lg:block">
      <div className="flex flex-col items-center gap-4">
        <img
          src={store.avatar}
          alt={store.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
        />
        <h3 className="text-lg font-semibold">{store.name}</h3>
        <p className="text-xs text-gray-500">{store.location}</p>
      </div>

      <nav className="mt-8 space-y-2">
        <button
          onClick={() => onSelect("dashboard")}
          className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            selected === "dashboard"
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaTachometerAlt /> <span>Dashboard</span>
        </button>

        <button
          onClick={() => onSelect("add")}
          className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            selected === "add" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaPlus /> <span>Add Product</span>
        </button>

        <button
          onClick={() => onSelect("manage")}
          className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            selected === "manage"
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaBoxOpen /> <span>Manage Products</span>
        </button>

        <button
          onClick={() => onSelect("orders")}
          className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            selected === "orders" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaShoppingBag /> <span>Orders</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
