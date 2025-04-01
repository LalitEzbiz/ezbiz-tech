"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg opacity-80">
            Discover who we are and what makes us unique.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">EZBIZ TECHNOLOGIES</h2>
          <p className="text-base leading-relaxed">
            Ezbiz Technologies is an IT services & product engineering company
            founded in April 2017. Our customer-centric approach stems from
            practical experience and deep understanding. With a dedicated team
            of professionals, we specialize in both common and niche application
            development.
          </p>
          <p className="text-base mt-4 leading-relaxed">
            We have served startups and established companies, acting as a
            technology partner throughout their product journey. Our goal is to
            deliver value through robust systems, high-quality execution, and
            strategic thinking.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/img/illuss.png"
            alt="Team Work"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Why EZBIZ */}
      <section className="bg-white py-16 px-6 lg:px-24 text-center">
        <h2 className="text-2xl font-bold mb-6">WHY EZBIZ?</h2>
        <p className="max-w-3xl mx-auto mb-10 text-base text-gray-600">
          We innovate with an eye to the future. As a tech partner, we help you
          resolve your business problems efficiently through planning,
          implementation, and tech-driven strategies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Striving for Excellence</h3>
            <p className="text-sm">
              Meeting client needs, understanding expectations, and delivering optimal solutions.
            </p>
          </div>
          <div className="bg-pink-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Technology Adaptability</h3>
            <p className="text-sm">
              Adapting to technology changes and responding to unique customer demands.
            </p>
          </div>
          <div className="bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Customer Focus</h3>
            <p className="text-sm">
              Building strong customer relationships through systematic, value-driven processes.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 py-16 px-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-10">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Image
            src="/img/google-partner.png"
            alt="Google Partner"
            width={160}
            height={60}
          />
          <Image
            src="/img/Hetzner.png"
            alt="Hetzner"
            width={120}
            height={48}
          />
          <Image
            src="/img/aws.png"
            alt="AWS"
            width={120}
            height={48}
          />
          <Image
            src="/img/Azure.png"
            alt="Azure"
            width={120}
            height={48}
          />
        </div>
      </section>
    </div>
  );
}

