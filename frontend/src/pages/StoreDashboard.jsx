"use client";
import React, { useState } from "react";
import Sidebar from "../components/Store/Sidebar";
import DashboardHome from "../components/Store/DashboardHome";
import AddProductForm from "../components/Store/AddProductForm";
import ManageProducts from "../components/Store/ManageProducts";
import Orders from"../components/Store/Orders";

const initialProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Drop ${i + 1}`,
  price: 1999 + i * 150,
  image: `https://source.unsplash.com/600x600/?streetwear,product,${i}`,
  category: i % 2 === 0 ? "Hoodies" : "Tees",
  color: i % 3 === 0 ? "Black" : "White",
  stock: 10 + i,
}));

const initialOrders = [
  {
    id: 1001,
    customer: "Aarav M.",
    total: 3498,
    items: [{ name: "Drop 1" }, { name: "Drop 2" }],
    status: "Processing",
  },
  {
    id: 1002,
    customer: "Ishita K.",
    total: 1999,
    items: [{ name: "Drop 3" }],
    status: "Processing",
  },
];

const StoreDashboard = () => {
  const [selected, setSelected] = useState("dashboard"); // dashboard | add | manage | orders
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);

  // simple earnings calc (sum of all orders)
  const earnings = orders.reduce((s, o) => s + o.total, 0);

  const store = {
    name: "Urban Threads Co.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    location: "Mumbai, India",
  };

  const handleAddProduct = (p) => {
    setProducts((cur) => [p, ...cur]);
    setSelected("manage");
  };

  const handleDeleteProduct = (id) => {
    setProducts((cur) => cur.filter((x) => x.id !== id));
  };

  const handleUpdateProduct = (id, updated) => {
    setProducts((cur) => cur.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const handleUpdateOrderStatus = (id, status) => {
    setOrders((cur) => cur.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <div className="flex mt-5">
      <Sidebar store={store} selected={selected} onSelect={setSelected} />

      <main className="flex-1  min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {selected === "dashboard" && (
            <DashboardHome products={products} orders={orders} earnings={earnings} />
          )}

          {selected === "add" && <AddProductForm onAdd={handleAddProduct} />}

          {selected === "manage" && (
            <ManageProducts products={products} onDelete={handleDeleteProduct} onUpdate={handleUpdateProduct} />
          )}

          {selected === "orders" && <Orders orders={orders} onUpdateStatus={handleUpdateOrderStatus} />}
        </div>
      </main>
    </div>
  );
};

export default StoreDashboard;
