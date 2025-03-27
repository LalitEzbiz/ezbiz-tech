"use client";
import React from "react";

const portfolioItems = [
  { name: "RETAIL GROWTH", color: "bg-orange-500", image: "/img/Retail-4-Growth.jpg" },
  { name: "Rack n Sell", color: "bg-blue-500", image: "/img/Rack-N-Sell.jpg" },
  { name: "FnB BASKET", color: "bg-yellow-500", image: "/img/FNB-Basket.jpg" },
  { name: "SH", color: "bg-green-500", image: "/img/SHN.jpg" },
  { name: "The Mobile Indian", color: "bg-fuchsia-600", image: "/img/The-mobile-indian.jpg" },
  { name: "Eureka!", color: "bg-rose-500", image: "/img/Eureka.jpg" },
  { name: "IOAA", color: "bg-pink-500", image: "/img/IOAA.jpg" },
  { name: "Indian CHEMICAL News", color: "bg-indigo-700", image: "/img/ICN.jpg" },
];

export default function PortfolioGrid() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#fefae0] to-[#f0f4ff] py-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-[120px]"></div>

      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Portfolio</span>
        </h2>
        <p className="mt-2 text-gray-600 text-lg">Crafting experiences across industries and niches</p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 bg-white group relative`}
          >
            {/* Colored header */}
            <div className={`h-3 w-full ${item.color}`}></div>

            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>
            </div>

            {/* Title */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1440 320"
                className="w-full h-8"
                preserveAspectRatio="none"
              >
                <path
                  fill="#ffffff"
                  d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224V320H1320C1200,320,960,320,720,320C480,320,240,320,120,320H0Z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-14 text-center relative z-10">
        <button className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-pink-400/50 transition hover:scale-105">
          View More
        </button>
      </div>
    </section>
  );
}
