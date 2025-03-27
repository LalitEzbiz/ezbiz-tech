"use client";
import React from "react";
import {
  FaBullhorn,
  FaShoppingCart,
  FaBook,
  FaHospital,
  FaConciergeBell,
  FaWifi,
  FaNewspaper,
  FaPlaneDeparture,
} from "react-icons/fa";

// Color generator for bubbles
const randomColor = (index) => {
  const colors = [
    "#FFD700", "#87CEEB", "#98FB98", "#FFB6C1",
    "#FFA07A", "#DA70D6", "#AFEEEE", "#FFC0CB",
    "#F0E68C", "#00CED1", "#40E0D0", "#ADD8E6",
    "#FF69B4"
  ];
  return colors[index % colors.length];
};

const iconsLeft = [
  "💻", "📍", "📘", "🛒", "💡", "👥", "📱",
  "⚙️", "📰", "🍽️", "📚", "🔧", "🧩"
];

const industries = [
  { icon: <FaBullhorn size={24} />, name: "Advertisement" },
  { icon: <FaShoppingCart size={24} />, name: "E-commerce" },
  { icon: <FaBook size={24} />, name: "Education" },
  { icon: <FaHospital size={24} />, name: "Healthcare" },
  { icon: <FaConciergeBell size={24} />, name: "Hospitality" },
  { icon: <FaWifi size={24} />, name: "Mobile & Wireless" },
  { icon: <FaNewspaper size={24} />, name: "Media" },
  { icon: <FaPlaneDeparture size={24} />, name: "Travel" },
];

export default function IndustriesWeServe() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-[80px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-14 relative z-10">
        {/* Left Emojis */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 w-full md:w-1/2 justify-items-center">
          {iconsLeft.map((emoji, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl font-medium shadow-lg hover:scale-110 transition-transform duration-300 bg-white/40 backdrop-blur-md"
              style={{
                background: `radial-gradient(circle at top left, ${randomColor(index)}, #ffffff)`,
                boxShadow: `0 6px 20px ${randomColor(index)}55`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 leading-snug">
            Industries{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
              We Serve
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Business isn&#39;t one-size-fits-all. Every industry requires a tailored solution.
            Here&#39;s how we&#39;ve delivered custom success across domains.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {industries.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/90 rounded-xl shadow-sm hover:shadow-md transition border hover:border-blue-400"
              >
                <span className="text-blue-600">{item.icon}</span>
                <span className="text-gray-800 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
