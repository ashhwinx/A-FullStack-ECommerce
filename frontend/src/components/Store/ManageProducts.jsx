// components/dashboard/ManageProducts.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEdit2, FiTrash2, FiCheck, FiX } from "react-icons/fi";

const ManageProducts = ({ products, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({});

  const startEdit = (p) => {
    setEditingId(p.id);
    setDraft({ ...p });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft({});
  };

  const saveEdit = () => {
    onUpdate(editingId, draft);
    cancelEdit();
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-black">Manage Products</h2>

      <div className="space-y-4">
        {products.length === 0 && (
          <p className="text-gray-500 text-sm">No products added yet.</p>
        )}

        {products.map((p, index) => (
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
              {editingId === p.id ? (
                <div className="space-y-2">
                  <input
                    value={draft.name || ""}
                    onChange={(e) =>
                      setDraft({ ...draft, name: e.target.value })
                    }
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
                    placeholder="Product name"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      value={draft.price || ""}
                      onChange={(e) =>
                        setDraft({ ...draft, price: e.target.value })
                      }
                      type="number"
                      className="px-3 py-1.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
                      placeholder="Price"
                    />
                    <input
                      value={draft.stock || ""}
                      onChange={(e) =>
                        setDraft({ ...draft, stock: e.target.value })
                      }
                      type="number"
                      className="px-3 py-1.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
                      placeholder="Stock"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-black text-lg">
                      {p.name}
                    </h3>
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
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 items-end">
              {editingId === p.id ? (
                <>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={saveEdit}
                    className="flex items-center gap-1 px-3 py-1.5 bg-black text-white rounded-xl text-sm hover:bg-gray-900 transition-all"
                  >
                    <FiCheck size={14} /> Save
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={cancelEdit}
                    className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-xl text-sm hover:bg-gray-100 transition-all"
                  >
                    <FiX size={14} /> Cancel
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => startEdit(p)}
                    className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-xl text-sm hover:bg-gray-100 transition-all"
                  >
                    <FiEdit2 size={14} /> Edit
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onDelete(p.id)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-xl text-sm hover:bg-red-600 transition-all"
                  >
                    <FiTrash2 size={14} /> Delete
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ManageProducts;
