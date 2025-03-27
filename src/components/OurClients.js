"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // ✅ Importing Next.js Image component

const clients = [
  "/img/zahara.png",
  "/img/RacknnSell.png",
  "/img/The-Mobile-Indian.png",
  "/img/Eureka-book-Store.png",
  "/img/Oacasia.png",
  "/img/Dotori.png",
  "/img/Budha-Tours.png",
  "/img/FNB.png",
  "/img/ICN.png",
  "/img/IOaAA.png",
  "/img/Retail-4-growth.png",
  "/img/SHNN.png",
  "/img/Arabian-night.png",
  "/img/tag-resort.png",
  "/img/In-Store_Asia.png",
  "/img/alpide.png",
  "/img/bookaroo.png",
  "/img/consult-now.png",
  "/img/dastar.png",
  "/img/doceree.png",
  "/img/HR-Katha.png",
  "/img/I-am-renew.png",
  "/img/Itrusoft.png",
  "/img/Trip-Night.png",
  "/img/Typisch.png",
  "/img/m4g.png",
  "/img/weblogo-dampfcompany.png",
  "/img/Zahara-Tours.png",
];

const ITEMS_PER_PAGE = 8;

export default function ClientSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(clients.length / ITEMS_PER_PAGE);
  const startIdx = currentPage * ITEMS_PER_PAGE;
  const visibleClients = clients.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden text-white">
      {/* Background lighting effects */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-indigo-500 opacity-20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-[120px] animate-ping" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Clients</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center mb-8">
          {visibleClients.map((img, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-xl p-4 h-32 flex items-center justify-center shadow hover:scale-105 transition duration-300"
            >
              <Image
                src={img}
                alt={`Client ${index}`}
                width={120}
                height={60}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-4">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === idx ? "bg-cyan-400 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 py-10 px-6 md:px-12 rounded-3xl shadow-2xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Image
              src="/img/sdkkk.png"
              alt="Working Man"
              width={100}
              height={100}
              className="w-28 md:w-36 hover:scale-105 transition duration-300"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Got a Project? Let’s Collaborate</h3>
              <p className="text-white/90 mb-4">Let’s build something awesome together.</p>
              <Link href="/connection">
                <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
