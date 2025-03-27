import React from "react";

export default function CreativeDesigningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">Creative Designing</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Creative Designing</h2>
          <p className="text-lg mb-6 text-gray-700">
            We have mastered the balance of art and science needed to offer exceptional creative designing services at a shoestring budget. Our service delivery success during the past years has led us to a loyal global clientele we are proud of — retail businesses, media & marketing firms, and agencies. Whether you are creating a brand or transforming one, you need nothing less than the best creative design services.
          </p>

          <h3 className="font-semibold text-xl text-gray-800 mb-3">Services we provide under Web Development:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Logo, Brochure & Corporate Identity",
              "Graphic Designing & Illustrations",
              "Flash Animations",
              "Website & Microsites Designing",
              "Landing Pages, Newsletters",
              "Production Planning",
              "Brochures and Printing Material"
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-3 flex items-center gap-3 hover:bg-blue-50 transition"
              >
                <span className="text-green-500 text-lg">✔</span>
                <p className="text-gray-800 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex justify-center items-center">
          <img
            src="/img/Web-Development.png"
            alt="Creative Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
