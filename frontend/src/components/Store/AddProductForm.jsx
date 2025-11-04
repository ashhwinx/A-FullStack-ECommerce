// components/dashboard/AddProductForm.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AddProductForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "Hoodies",
    color: "Black",
    sku: "",
    stock: 10,
    image: "",
    description: "",
  });

  const handleChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price)
      return alert("Please enter name and price");
    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
    };
    onAdd(newProduct);
    setForm({
      name: "",
      price: "",
      category: "Hoodies",
      color: "Black",
      sku: "",
      stock: 10,
      image: "",
      description: "",
    });
  };

  return (
    <motion.div
      className="p-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-black">Add Product</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-5 max-w-xl bg-white/90 border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300"
        whileHover={{ scale: 1.01 }}
      >
        {/* Product Name */}
        <div>
          <label className="text-sm text-gray-600 font-medium">
            Product Name
          </label>
          <input
            value={form.name}
            onChange={handleChange("name")}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            placeholder="e.g. Oversized Hoodie"
          />
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Price (₹)
            </label>
            <input
              value={form.price}
              onChange={handleChange("price")}
              type="number"
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 font-medium">Stock</label>
            <input
              value={form.stock}
              onChange={handleChange("stock")}
              type="number"
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
          </div>
        </div>

        {/* Category & Color */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Category
            </label>
            <select
              value={form.category}
              onChange={handleChange("category")}
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-black focus:border-black transition-all"
            >
              <option>Hoodies</option>
              <option>Tees</option>
              <option>Pants</option>
              <option>Accessories</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">Color</label>
            <select
              value={form.color}
              onChange={handleChange("color")}
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-black focus:border-black transition-all"
            >
              <option>Black</option>
              <option>White</option>
              <option>Beige</option>
              <option>Grey</option>
            </select>
          </div>
        </div>

        {/* SKU */}
        <div>
          <label className="text-sm text-gray-600 font-medium">
            SKU (optional)
          </label>
          <input
            value={form.sku}
            onChange={handleChange("sku")}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            placeholder="e.g. HOOD-2025-BLK"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Image URL</label>
          <input
            value={form.image}
            onChange={handleChange("image")}
            placeholder="https://..."
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-gray-600 font-medium">
            Short Description
          </label>
          <textarea
            value={form.description}
            onChange={handleChange("description")}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            rows={3}
            placeholder="Brief description of the product..."
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition-all"
          >
            Add Product
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default AddProductForm;
