import React from "react";
import Image from "next/image";

export default function ConsultingSection() {
  return (
    <section className="bg-gradient-to-br from-white to-slate-100 py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Expert <span className="text-blue-600">Consulting</span> Services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Get tailored IT consulting that drives digital transformation, boosts
            efficiency, and modernizes your systems. We specialize in
            software portfolio optimization, strategic planning, and
            next-gen solutions for your unique business needs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Custom Development",
              "Digital Transformation",
              "Cloud",
              "Staffing Augmentation",
              "Mobility",
              "IoT",
              "Data & Analytics",
              "Product Engineering",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white shadow rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 transition"
              >
                <span className="text-green-500">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        
        <div className="relative">
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/img/consulting.png"
              alt="Consulting Illustration"
              className="object-cover w-full h-full"
              width={800} 
              height={600} 
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
            Empower Your Tech
          </div>
        </div>
      </div>
    </section>
  );
}
