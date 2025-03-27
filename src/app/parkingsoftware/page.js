'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function ComingSoonPage() {
  // Generate particle data only once on the client
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 6 + 4}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center overflow-hidden">
      {/* Shimmer background */}
      <div className="absolute w-full h-full bg-gradient-to-tr from-white/10 via-transparent to-white/10 animate-pulse z-0"></div>

      {/* Crystal particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
              animation: `float ${p.duration} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="z-10 text-center px-8 py-10 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-widest"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          COMING
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg mt-3"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          SOON
        </motion.h2>
        <p className="text-white/80 text-md md:text-lg mt-6 max-w-lg mx-auto">
          We’re working on something magical. Hang tight, it’s going to be worth it!
        </p>
      </motion.div>

      {/* Float animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
