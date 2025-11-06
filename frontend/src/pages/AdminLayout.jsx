"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUsers, FiCheckCircle, FiLogOut } from "react-icons/fi";
import AdminDashboardHome from "../components/admin/AdminDashboardHome";
import AdminStores from "../components/admin/AdminStores";
import AdminApproveStore from "../components/admin/AdminApproveStore";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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
    <div className="flex    text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white rounded-3xl p-6 flex flex-col justify-between sticky top-0 h-100 shadow-xl">
        <div>
          {/* Admin Profile */}
          <div className="flex items-center gap-4 mb-10">
            <img
              src="https://source.unsplash.com/60x60/?portrait,person"
              alt="Admin"
              className="w-14 h-14 rounded-2xl border border-gray-700 object-cover"
            />
            <div>
              <p className="font-semibold text-lg">Admin Panel</p>
              <p className="text-gray-400 text-sm">Super Admin</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="space-y-3">
            {[
              { id: "dashboard", label: "Dashboard", icon: <FiHome /> },
              { id: "stores", label: "Stores", icon: <FiUsers /> },
              { id: "approve", label: "Approve Stores", icon: <FiCheckCircle /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm transition-all ${
                  activeTab === item.id
                    ? "bg-white text-black shadow-md"
                    : "hover:bg-gray-800 hover:translate-x-1"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
            <FiLogOut /> Logout
          </button>
          <p className="text-[11px] text-gray-500 text-center">
            © 2025 LuxeStreet Admin
          </p>
        </div>
      </aside>

      {/* Right Section */}
      <main className="flex-1 px-8  overflow-y-auto">
        <div className="bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 rounded-3xl p-8 min-h-[85vh] transition-all">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AdminDashboardHome stats={stats} />
              </motion.div>
            )}
            {activeTab === "stores" && (
              <motion.div
                key="stores"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AdminStores stores={stores} />
              </motion.div>
            )}
            {activeTab === "approve" && (
              <motion.div
                key="approve"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AdminApproveStore stores={pendingStores} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
