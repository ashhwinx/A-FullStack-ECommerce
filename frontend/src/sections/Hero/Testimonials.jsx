"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ScrollFloat from "../../components/other/ScrollFloat"

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
  {
    id: 4,
    name: "Simran Bhatia",
    role: "Model & Influencer",
    quote:
      "From the moment I unboxed it, I knew it was special. Perfect stitching, premium fabric — I’m obsessed!",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    id: 5,
    name: "Kabir Arora",
    role: "Photographer",
    quote:
      "Their collection has this raw, urban energy that fits my aesthetic perfectly. Love shooting in their outfits.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    name: "Neha Sharma",
    role: "Fashion Blogger",
    quote:
      "This brand defines comfort with elegance. Every outfit feels made just for me.",
    img: "https://randomuser.me/api/portraits/women/80.jpg",
  },
];

const Testimonials = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-24 overflow-hidden  text-black">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gray-500 uppercase tracking-[4px] text-sm font-gothic"
        >
          Our Customers Say
        </motion.p>

        <ScrollFloat
  animationDuration={0.5}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
  
>
    TESTIMONIALS
</ScrollFloat>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 font-gothic max-w-md mx-auto"
        >
          Real stories from real people who love our brand.
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto px-10">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable container */}
        <motion.div
          ref={carouselRef}
          className="flex gap-8 overflow-x-scroll p-3  no-scrollbar  scroll-smooth snap-x snap-mandatory"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center h-[400px]  border bg-white border-black rounded-3xl p-8 flex flex-col items-center text-center 
              shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FaQuoteLeft className="text-gray-300 text-4xl mb-4" />
              <p className="text-gray-700 italic font-gothic leading-relaxed mb-6">
                “{item.quote}”
              </p>
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-black mb-3"
              />
              <h3 className="font-semibold text-lg font-orbitron">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Hide scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  
          scrollbar-width: none;  
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
