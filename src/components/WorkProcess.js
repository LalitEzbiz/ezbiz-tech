"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Data Array
const workItems = [
  {
    title: "Identify Requirements",
    description:
      "We listen to your ideas & requirements to understand your goals. We innovate, explore, and implement cutting-edge solutions tailored to your vision.",
    image: "/img/Identify-Requirements.jpg",
  },
  {
    title: "Planning & Strategy",
    description:
      "Once goals are defined, we craft a clear, achievable strategy. It's the blueprint for success—optimized for execution and ROI.",
    image: "/img/Planning-Strategy.jpg",
  },
  {
    title: "Integrate Expertise",
    description:
      "Our team includes domain experts, developers, designers, analysts, and project managers focused on delivering value and excellence.",
    image: "/img/Integrate-Expertise.jpg",
  },
  {
    title: "Executing Solution",
    description:
      "With precise planning and passionate execution, we transform strategies into powerful, performance-driven digital solutions.",
    image: "/img/Executing-Solution.jpg",
  },
  {
    title: "Testing & Quality Analysis",
    description:
      "We ensure everything works flawlessly, delivering secure, fast, and bug-free solutions through extensive testing.",
    image: "/img/Testing-&-Quality-Analysis.jpg",
  },
  {
    title: "On-going Support",
    description:
      "We don't just deliver — we stay. From performance tweaks to major upgrades, we support you long-term.",
    image: "/img/Ongoing-Support.jpg",
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 md:-left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white text-blue-900 hover:bg-blue-600 hover:text-white rounded-full p-2 shadow-md transition"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    ◀
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 md:-right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white text-blue-900 hover:bg-blue-600 hover:text-white rounded-full p-2 shadow-md transition"
    onClick={onClick}
    aria-label="Next Slide"
  >
    ▶
  </button>
);

export default function HowWeWork() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50 py-16 relative">
      <h2 className="text-center text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600 mb-12">
        How We Work
      </h2>

      <div className="max-w-6xl mx-auto px-4 relative">
        <Slider {...settings}>
          {workItems.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden transition-all hover:scale-[1.01]">
                <div className="md:w-1/2 w-full h-64 md:h-auto relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
