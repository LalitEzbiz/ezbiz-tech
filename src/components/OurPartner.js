"use client";
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image

const partners = [
  { name: "Google Partner", logo: "/img/google-partner.png" },
  { name: "Hetzner", logo: "/img/Hetzner.png" },
  { name: "AWS Certified", logo: "/img/aws.png" },
  { name: "Azure Certified", logo: "/img/Azure.png" },
];

export default function OurPartners() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-[120px] animate-ping" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Our Trusted Partners</h2>
        <p className="text-gray-300 mb-12 text-lg">
          We collaborate with industry leaders to deliver reliable and scalable technology solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 flex items-center justify-center shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={64}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
