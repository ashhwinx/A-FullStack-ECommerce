// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const images = [
//   "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200",
//   "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200",
//   "https://images.unsplash.com/photo-1550246140-29f40b909e10?q=80&w=1200",
//   "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200",
//   "https://images.unsplash.com/photo-1618354691796-6ecb34d7a90a?q=80&w=1200",
// ];

// const LifestyleBanner = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Translate entire stack based on scroll
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

//   return (
//     <section ref={containerRef} className="relative w-full h-[500vh] bg-black">
//       {/* Sticky Viewport */}
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         <motion.div style={{ y }} className="relative w-full h-full">
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               className="absolute inset-0 w-full h-full"
//               style={{
//                 zIndex: images.length - index,
//               }}
//             >
//               <motion.img
//                 src={img}
//                 alt={`Lifestyle ${index}`}
//                 className="w-full h-full object-cover brightness-[0.7]"
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ amount: 0.4 }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Center Overlay Text */}
//         <div className="absolute z-50 text-center text-white px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="font-orbitron text-5xl md:text-7xl font-bold uppercase tracking-widest"
//           >
//             Live The Look
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="mt-4 text-lg md:text-xl font-gothic max-w-2xl mx-auto"
//           >
//             Scroll through moments that define modern lifestyle.
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifestyleBanner;

"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LifestyleCard = ({ i, src, title, subtitle, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Image zoom in as user scrolls within this card
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  // Whole card scale as it stacks
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-10vh + ${i * 40}px)`,
        }}
        className="relative rounded-3xl overflow-hidden w-[90vw] max-w-6xl h-[80vh] origin-top shadow-2xl"
      >
        {/* Image */}
        <motion.img
          src={src}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.75]"
          style={{ scale: imageScale }}
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-5xl md:text-6xl font-bold uppercase tracking-wider drop-shadow-lg"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl font-gothic drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

const LifestyleBanner = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      title: "Street Pulse",
      subtitle: "Where raw energy meets bold design.",
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200",
    },
    {
      title: "Urban Motion",
      subtitle: "The rhythm of life in every frame.",
      src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200",
    },
    {
      title: "Timeless Form",
      subtitle: "Classic silhouettes, modern soul.",
      src: "https://images.unsplash.com/photo-1550246140-29f40b909e10?q=80&w=1200",
    },
    {
      title: "Nature Flow",
      subtitle: "Let simplicity breathe style.",
      src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200",
    },
    {
      title: "Live The Look",
      subtitle: "Not fashion — expression.",
      src: "https://images.unsplash.com/photo-1618354691796-6ecb34d7a90a?q=80&w=1200",
    },
  ];

  return (
    <main ref={container} className="relative ">
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05; // scale depth
        const range = [i * 0.25, 1]; // each card triggers sequentially
        return (
          <LifestyleCard
            key={i}
            i={i}
            {...card}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default LifestyleBanner;
