import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-700 opacity-30 blur-3xl"
        animate={{ x: mousePos.x / 20, y: mousePos.y / 20 }}
      />

      {/* 3D Avatar or Hologram */}
      <motion.div
        className="relative w-40 h-40 md:w-60 md:h-60"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image src="/avatar.png" alt="3D Hologram Avatar" layout="fill" className="rounded-full shadow-lg" />
      </motion.div>

      {/* Text Content */}
      <motion.h1
        className="mt-6 text-4xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Building the Future with <span className="text-blue-400">AI & Code</span>
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 text-center">
        I specialize in AI, Machine Learning, and Full-Stack Development.
      </p>

      {/* Tech Stack Icons */}
      <div className="flex space-x-6 mt-6 text-3xl">
        <FaPython className="hover:text-yellow-500 transition duration-300" />
        <FaReact className="hover:text-blue-400 transition duration-300" />
        <FaNodeJs className="hover:text-green-500 transition duration-300" />
        <FaDatabase className="hover:text-red-500 transition duration-300" />
      </div>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-full text-white font-semibold shadow-lg hover:bg-blue-600 transition"
        whileHover={{ scale: 1.1 }}
      >
        Explore My Work
      </motion.a>
    </div>
  );
}
