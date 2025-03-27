'use client';

import Image from 'next/image';
import { Code2, ShieldCheck, RefreshCcw, ShoppingBag, LayoutGrid, Workflow } from 'lucide-react';

export default function SoftwareDevSection() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-indigo-100 py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Illustration */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/img/Software-Development.png"
            alt="Software Development Illustration"
            width={450}
            height={400}
            className="w-80 md:w-[28rem] drop-shadow-xl"
          />
        </div>

        {/* Right: Text & Services */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-500">
            Software Development
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We craft robust, scalable, and cutting-edge software solutions tailored to your business needs. From outsourcing to testing and e-commerce solutions, our team delivers quality with agility.
          </p>

          {/* Services Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceCard icon={<Code2 />} title="Software Outsourcing" />
            <ServiceCard icon={<ShieldCheck />} title="Software Testing & QA" />
            <ServiceCard icon={<RefreshCcw />} title="Migration & Re-engineering" />
            <ServiceCard icon={<Workflow />} title="Enterprise Portal Dev" />
            <ServiceCard icon={<ShoppingBag />} title="E-commerce Solutions" />
            <ServiceCard icon={<LayoutGrid />} title="Custom App Development" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition">
      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
        {icon}
      </div>
      <span className="text-gray-700 font-medium">{title}</span>
    </div>
  );
}
