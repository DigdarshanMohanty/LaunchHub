"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
} as const;

export default function HeroFramerWrapper() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative text-center max-w-4xl mx-auto mb-12 mt-20"
    >
      {/* Glowing Tubelight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-52 h-2 bg-white rounded-full shadow-[0_0_60px_30px_rgba(255,255,255,0.6)] z-30"
      />

      {/* Light Beam coming down */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.5, scaleY: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-[300px] h-[200px] bg-gradient-to-b from-indigo-400/60 via-indigo-500/40 to-transparent blur-2xl z-10"
      />

      {/* Hero Text */}
      <h1 className="relative z-40 text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
        <span className="bg-gradient-to-r from-indigo-100 via-indigo-500 to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(99,102,241,0.5)]">
          Pitch Your Startup
        </span>
        <br />
        <span className="text-gray-100">Connect with entrepreneurs</span>
      </h1>

      <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto relative z-20">
        Submit ideas, vote on pitches, and get noticed in virtual competitions.
      </p>
    </motion.section>
  );
}
