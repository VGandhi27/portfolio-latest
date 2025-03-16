import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to My{" "}
            <span className="text-blue-500 neon-text">Digital Space</span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-300 mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I craft intelligent software solutions, specializing in AI, Machine Learning, and Full-Stack Development.
          </motion.p>

          <motion.button
            className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </div>

        {/* Right Content - Animated Circle with Glow */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="w-64 h-64 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
            {/* Glow Effect */}
            <div className="absolute inset-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-40 animate-glow"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
