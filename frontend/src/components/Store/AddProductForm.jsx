"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // for remove icon

const AddProductForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "Hoodies",
    color: "Black",
    stock: 10,
    description: "",
    images: [],
  });

  const [dragActive, setDragActive] = useState(false);

  // Handle text field change
  const handleChange = (k) => (e) =>
    setForm({ ...form, [k]: e.target.value });

  // Handle image file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setForm({ ...form, images: [...form.images, ...newImages].slice(0, 4) });
  };

  // Drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (["dragenter", "dragover"].includes(e.type)) setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  // Handle drop files
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setForm({ ...form, images: [...form.images, ...newImages].slice(0, 4) });
  };

  // Remove single image
  const handleRemoveImage = (index) => {
    const newImgs = form.images.filter((_, i) => i !== index);
    setForm({ ...form, images: newImgs });
  };

  // Handle submit
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

    // Reset
    setForm({
      name: "",
      price: "",
      category: "Hoodies",
      color: "Black",
      stock: 10,
      description: "",
      images: [],
    });
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold mb-8 text-gray-900">
        Add New Product
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border border-gray-200 rounded-2xl shadow-md p-8"
        whileHover={{ scale: 1.01 }}
      >
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Product Name
            </label>
            <input
              value={form.name}
              onChange={handleChange("name")}
              className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black"
              placeholder="e.g. Oversized Hoodie"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={handleChange("description")}
              className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black"
              rows={4}
              placeholder="Write a short description..."
            />
          </div>

          {/* Price and Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Actual Price (₹)
              </label>
              <input
                value={form.price}
                onChange={handleChange("price")}
                type="number"
                className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Price
              </label>
              <input
                value={form.stock}
                onChange={handleChange("stock")}
                type="number"
                className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black focus:border-black"
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
                className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-black focus:border-black"
              >
                <option>Hoodies</option>
                <option>Tees</option>
                <option>Pants</option>
                <option>Accessories</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">
                Color
              </label>
              <select
                value={form.color}
                onChange={handleChange("color")}
                className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-black focus:border-black"
              >
                <option>Black</option>
                <option>White</option>
                <option>Beige</option>
                <option>Grey</option>
              </select>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Multi-Image Upload */}
        <div className="flex flex-col items-center justify-center">
          <label className="text-sm text-gray-600 font-medium mb-3">
            Product Images (Max 4)
          </label>

          {/* Drag & Drop Area */}
          <div
            className={`w-full min-h-64 border-2 ${
              dragActive
                ? "border-black bg-gray-50"
                : "border-dashed border-gray-400"
            } rounded-xl flex flex-col items-center justify-center text-gray-500 transition-all duration-300 relative p-4`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {form.images.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 w-full">
                {form.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative group border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <img
                      src={img.url}
                      alt="Preview"
                      className="object-cover w-full h-32"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                    >
                      <X className="w-4 h-4 text-black" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="text-base">Drag & Drop your images here</p>
                <p className="text-sm text-gray-400 mt-1">or click to upload</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full px-6 py-2.5 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition-all"
          >
            Add Product
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default AddProductForm;
