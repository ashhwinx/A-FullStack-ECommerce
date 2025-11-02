import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Fashion Enthusiast",
    quote:
      "Absolutely love the quality and minimal design. The fit is perfect and the packaging felt premium!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Ishita Kapoor",
    role: "Content Creator",
    quote:
      "The attention to detail is next-level. Every piece feels thoughtfully designed and super comfortable.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Rohan Singh",
    role: "Streetwear Lover",
    quote:
      "The vibe is unmatched! Got compliments every time I wore their clothes — truly a must-have brand.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-24  overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 uppercase tracking-widest text-sm font-gothic">
          Our Customers Say
        </p>
        <h2 className="text-5xl font-orbitron font-bold text-black tracking-tight">
          Testimonials
        </h2>
        <p className="text-gray-500 mt-4 font-gothic max-w-md mx-auto">
          Real stories from real people who love our brand.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-white border border-black rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all duration-500"
          >
            <FaQuoteLeft className="text-gray-300 text-3xl mb-4" />
            <p className="text-gray-700 italic font-gothic leading-relaxed">
              “{item.quote}”
            </p>

            <div className="mt-8 flex flex-col items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-black"
              />
              <h3 className="mt-4 font-semibold text-lg text-black font-orbitron">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

     
    </section>
  );
};

export default Testimonials;
