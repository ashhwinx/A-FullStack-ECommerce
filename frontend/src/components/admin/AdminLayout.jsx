"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUsers, FiCheckCircle } from "react-icons/fi";
import AdminDashboardHome from "./AdminDashboardHome";
import AdminStores from "./AdminStores";
import AdminApproveStore from "./AdminApproveStore";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // demo data
  const stats = {
    products: 122,
    revenue: 564000,
    orders: 238,
    stores: 15,
  };

  const stores = [
    {
      id: 1,
      name: "UrbanThreads",
      description: "Minimal streetwear brand redefining basics.",
      image: "https://source.unsplash.com/100x100/?fashion,model",
      active: true,
    },
    {
      id: 2,
      name: "NoirCollective",
      description: "Monochrome luxury essentials for Gen Z.",
      image: "https://source.unsplash.com/100x100/?black,style",
      active: false,
    },
  ];

  const pendingStores = [
    {
      id: 3,
      name: "DripNation",
      description: "Bold fits for street kings.",
      image: "https://source.unsplash.com/100x100/?urban,clothing",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 flex flex-col justify-between sticky top-0 h-screen">
        <div>
          {/* Admin Profile */}
          <div className="flex items-center gap-3 mb-8">
            <img
              src="https://source.unsplash.com/60x60/?portrait,person"
              alt="Admin"
              className="w-12 h-12 rounded-full border-2 border-gray-700"
            />
            <div>
              <p className="font-semibold text-lg">Admin Panel</p>
              <p className="text-gray-400 text-sm">Super Admin</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="space-y-3">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-xl text-sm transition-all ${
                activeTab === "dashboard"
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              <FiHome /> Dashboard
            </button>

            <button
              onClick={() => setActiveTab("stores")}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-xl text-sm transition-all ${
                activeTab === "stores"
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              <FiUsers /> Stores
            </button>

            <button
              onClick={() => setActiveTab("approve")}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-xl text-sm transition-all ${
                activeTab === "approve"
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              <FiCheckCircle /> Approve Stores
            </button>
          </nav>
        </div>

        <p className="text-xs text-gray-500 mt-10 text-center">
          © 2025 LuxeStreet Admin
        </p>
      </aside>

      {/* Right Section */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === "dashboard" && (
          <AdminDashboardHome stats={stats} />
        )}
        {activeTab === "stores" && <AdminStores stores={stores} />}
        {activeTab === "approve" && (
          <AdminApproveStore stores={pendingStores} />
        )}
      </main>
    </div>
  );
};

export default AdminLayout;
