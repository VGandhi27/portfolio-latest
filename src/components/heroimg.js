import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to My <span className="text-blue-400">Digital Space</span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-300 mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I build intelligent software solutions, specializing in AI, Machine Learning, and Full-Stack Development.
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </div>

        {/* Right Content - Animated Abstract Shape */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-72 h-72 bg-blue-400 rounded-full shadow-2xl transform animate-pulse"></div>
        </motion.div>

      </div>
    </section>
  );
}
