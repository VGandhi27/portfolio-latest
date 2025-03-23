"use client";

import { AnimatePresence, motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["100%", "0%"],
    width: ["100%", "0%"],
    display: "none",
  },
};

const Loading = () => {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key="loading"
        className="h-full"
        style={{
          background: "linear-gradient(135deg, #000000, #1a0b23, #39064a, #5e0d6b, #000000)",
        }}
      >
        {/* First Layer */}
        <motion.div
          className="fixed bottom-0 right-full top-0 z-[80] h-screen w-screen"
          style={{
            background: "linear-gradient(135deg, #000000, #1a0b23, #39064a, #5e0d6b, #000000)",
          }}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
        {/* Second Layer */}
        <motion.div
          className="fixed bottom-0 right-full top-0 z-[75] h-screen w-screen"
          style={{
            background: "linear-gradient(135deg, #1a0b23, #39064a, #5e0d6b, #000000, #1a0b23)",
          }}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
        {/* Third Layer */}
        <motion.div
          className="fixed bottom-0 right-full top-0 z-[70] h-screen w-screen"
          style={{
            background: "linear-gradient(135deg, #39064a, #5e0d6b, #000000, #1a0b23, #39064a)",
          }}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
        {/* Loading Text */}
        <div className="flex items-center justify-center h-screen text-white text-2xl font-bold">
          Loading...
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
