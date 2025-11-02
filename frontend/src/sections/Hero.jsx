import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className=" min-h-screen">
        <div className="h-[calc(100vh-100px)] mx-10 my-2 flex px-10">
          <div className="flex">
            {/* LEFT SIDE */}
            <div className="w-[60vw]">
              {/* First large image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[url('/hero1.png')] cursor-pointer bg-cover bg-center rounded-3xl h-[65vh] mt-2 p-5 mx-8 transition-transform duration-300 ease-in-out"
              >
                <p className="font-gothic text-6xl text-black">WINTER <br /> SALE!!</p>
              </motion.div>

              {/* Second small image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[url('/hero2.jpg')] cursor-pointer bg-cover bg-center rounded-3xl h-[19vh] mx-8 mt-4 transition-transform duration-300 ease-in-out"
              ></motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[30vw] px-4">
              {/* Top card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[url('/hero3.jpg')]  cursor-pointer bg-cover bg-center rounded-3xl w-[25vw] h-[45vh] mt-2 transition-transform duration-300 ease-in-out"
              >
                <p className="font-orbitron text-2xl ml-40 py-14 text-white">ZYLO</p>
              </motion.div>

              {/* Bottom card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[url('/hero4.jpg')]  cursor-pointer bg-cover bg-center rounded-3xl text-3xl w-[25vw] h-[40vh] mt-2 transition-transform duration-300 ease-in-out"
              >
                <div className="bg-gradient-to-b from-transparent to-black h-full rounded-3xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
