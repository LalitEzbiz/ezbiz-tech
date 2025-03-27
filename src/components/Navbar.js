


"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // ✅ Imported Image

export default function HomePage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const router = useRouter();

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsProductsOpen(false);
  };

  const toggleProducts = () => {
    setIsProductsOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (path) => {
    router.push(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-bgMove bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1%,transparent_60%)] opacity-30 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        {/* Logo - replaced img with Image */}
        <div className="flex items-center gap-2">
          <Image
            src="/img/ezbiz-black-logo.png"
            alt="EZBIZ Logo"
            width={120}
            height={40}
            className="object-contain h-auto w-auto"
            priority // ✅ Improves LCP by preloading this image
          />
        </div>

        <nav
          className="flex items-center gap-6 text-sm font-medium text-gray-700"
          ref={dropdownRef}
        >
          <Link
            href="/"
            className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
          >
            Home
          </Link>

          <Link
            href="/aboutus"
            className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleServices}
              className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
            >
              Services
              <span
                className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[200px] animate-fade-in-up z-10 border border-gray-100">
                {[
                  { path: "/erpsolution", label: "ERP Solutions" },
                  { path: "/softdevelopment", label: "Software Development" },
                  { path: "/customdevelop", label: "Custom Development" },
                  { path: "/infrastructure", label: "Infrastructure" },
                  { path: "/consulting", label: "Consulting" },
                  { path: "/mob-app-dev", label: "Mobile App Development" },
                  { path: "/creativedesign", label: "Creative Design" },
                  { path: "/digitalmarketing", label: "Digital Marketing" },
                ].map(({ path, label }) => (
                  <button
                    key={path}
                    onClick={() => handleItemClick(path)}
                    className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleProducts}
              className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-md"
            >
              Products
              <span
                className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[200px] animate-fade-in-up z-10 border border-gray-100">
                {[
                  { path: "/dmcsoftware", label: "DMC Software" },
                  { path: "/grocerryshop", label: "Grocery Shopping Software" },
                  { path: "/parkingsoftware", label: "Parking Software" },
                  { path: "/crs", label: "CRS Systems" },
                ].map(({ path, label }) => (
                  <button
                    key={path}
                    onClick={() => handleItemClick(path)}
                    className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
          >
            Portfolio
          </a>

          <Link
            href="/contactjustus"
            className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
