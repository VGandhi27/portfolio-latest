import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../images/Home.png"
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
    <div className="relative min-h-[80vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-700 to-pink-500 opacity-30 blur-[150px]"
        animate={{ x: mousePos.x / 30, y: mousePos.y / 30, rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* 3D Avatar */}
      <motion.div
        className="relative w-40 h-40 md:w-60 md:h-60"
        animate={{ scale: [1, 1.05, 1] }}
        whileHover={{ rotateY: 10, rotateX: 10 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Image src={img1} alt="3D Hologram Avatar" width={200} height={200} className="rounded-full shadow-lg" />
      </motion.div>

      {/* Text Content */}
      <motion.h1
        className="mt-6 text-4xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Building the Future with <span className="text-blue-400">AI & Code</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I specialize in AI, Machine Learning, and Full-Stack Development.
      </motion.p>

      {/* Tech Stack Icons */}
      <motion.div className="flex space-x-6 mt-6 text-3xl">
        {[FaPython, FaReact, FaNodeJs, FaDatabase].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, color: "#fff" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
          >
            <Icon className="transition duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-full text-white font-semibold shadow-lg hover:bg-blue-600 transition relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        Explore My Work
        <span className="absolute inset-0 bg-blue-400 opacity-20 blur-lg animate-ping"></span>
      </motion.a>
    </div>
  );
}
