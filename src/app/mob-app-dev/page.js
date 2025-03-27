"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MobileAppSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 sm:px-10 md:px-20 overflow-hidden">
      {/* Theme Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Radial Gradient Overlay */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-200 via-white to-transparent rounded-full opacity-30 blur-2xl"></div>

        {/* Animated Floating Circles */}
        <div className="absolute top-10 left-10 w-36 h-36 bg-pink-200 rounded-full opacity-20 animate-pulse blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full opacity-20 animate-ping blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <img
            src="/img/mobile-app.png"
            alt="Mobile App Illustration"
            className="w-full max-w-sm mx-auto md:max-w-sm"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Mobile App <span className="text-blue-600">Development</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            With smartphones dominating communication, harness the power of mobile apps
            to engage users and grow your business. Ezbiz helps you integrate mobile
            solutions into your existing or new systems to drive success.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {[
              "iOS App Development",
              "Android App Development",
              "Mobile Websites Development",
              "Hybrid App Development",
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white shadow-md rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 transition"
              >
                <span className="text-green-500">✓</span>
                {service}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
