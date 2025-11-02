"use client";
import { motion } from "framer-motion";
import React from "react";
import ScrollReveal from "../components/other/ScrollReveal";
import ScrollFloat from "../components/other/ScrollFloat";

const AboutSection = () => {
  return (
    <section className=" text-black py-24 px-6 md:px-16">

      <div className="flex items-center justify-center">
      <ScrollFloat
  animationDuration={0.5}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
    About Zylo
</ScrollFloat>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
     
        {/* Left Side - Image */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.1)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80"
            alt="Our Story"
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>
        
      </div>
    </section>
  );
};

export default AboutSection;
