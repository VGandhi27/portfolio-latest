"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-black px-6">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-500">Vidushi</span> 👋
        </h2>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          I craft intelligent software solutions, specializing in AI, Machine Learning, and Full-Stack Development.
        </p>
        <a
          href="contact"
          className="mt-5 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Let's Connect
        </a>
      </motion.section>
    </div>
  );
}
