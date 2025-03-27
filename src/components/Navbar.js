// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function HomePage() {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const router = useRouter();

//   const toggleServices = () => {
//     setIsServicesOpen((prev) => !prev);
//     setIsProductsOpen(false);
//   };

//   const toggleProducts = () => {
//     setIsProductsOpen((prev) => !prev);
//     setIsServicesOpen(false);
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsServicesOpen(false);
//         setIsProductsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleItemClick = (path) => {
//     setIsServicesOpen(false);
//     setIsProductsOpen(false);
//     router.push(path);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
//       {/* Decorative background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-pink-100 opacity-40 pointer-events-none blur-lg rounded-b-xl"></div>

//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-2">
//           <img
//             src="/img/ezbiz-black-logo.png"
//             alt="EZBIZ Logo"
//             className="h-15 w-auto object-contain"
//           />
//         </div>

//         <nav
//           className="flex items-center gap-6 text-sm font-medium text-gray-700"
//           ref={dropdownRef}
//         >
//           <Link
//             href="/"
//             className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
//           >
//             Home
//           </Link>

//           <Link
//             href="/aboutus"
//             className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
//           >
//             About Us
//           </Link>

//           {/* Services Dropdown */}
//           <div className="relative">
//             <button
//               type="button"
//               onClick={toggleServices}
//               className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
//             >
//               Services
//               <span
//                 className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
//                   }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {isServicesOpen && (
//               <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[200px] animate-fade-in-up z-10 border border-gray-100">
//                 <Link
//                   href="/erpsolution"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   ERP Solutions
//                 </Link>

//                 <Link
//                   href="/softdevelopment"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   Software Development
//                 </Link>

//                 <Link
//                   href="/customdevelop"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   Custom Development
//                 </Link>

//                 <Link
//                   href="/infrastructure"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   Infrastructure
//                 </Link>

//                 <Link
//                   href="/consulting"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   Consulting
//                 </Link>

//                 <Link
//                   href="/mob-app-dev"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   Mobile App Development
//                 </Link>

//                 <Link
//                   href="/creativedesign"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   Creative Design
//                 </Link>

//                 <Link
//                   href="/digitalmarketing"
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition"
//                   onClick={() => {
//                     setIsServicesOpen(false);
//                     setIsProductsOpen(false);
//                   }}
//                 >
//                   Digital Marketing
//                 </Link>

//               </div>
//             )}
//           </div>

//           {/* Products Dropdown */}
//           <div className="relative">
//             <button
//               type="button"
//               onClick={toggleProducts}
//               className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-md"
//             >
//               Products
//               <span
//                 className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""
//                   }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {isProductsOpen && (
//               <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[200px] animate-fade-in-up z-10 border border-gray-100">
//                 <button
//                   type="button"
//                   onClick={() => handleItemClick("/dmcsoftware")}
//                   className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition"
//                 >
//                   DMC Software
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handleItemClick("/grocerryshop")}
//                   className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition"
//                 >
//                   Grocery Shopping Software
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handleItemClick("/parkingsoftware")}
//                   className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition"
//                 >
//                   Parking Software
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handleItemClick("/crs")}
//                   className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition"
//                 >
//                   CRS Systems
//                 </button>
//               </div>
//             )}
//           </div>

//           <a
//             href="#"
//             className="flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md"
//           >
//             Portfolio
//           </a>

//           <a
//             href="#"
//             className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
//           >
//             Contact Us
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }



"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    // Navigate first
    router.push(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-bgMove bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1%,transparent_60%)] opacity-30 blur-xl"></div>


      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <img
            src="/img/ezbiz-black-logo.png"
            alt="EZBIZ Logo"
            className="h-15 w-auto object-contain"
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
                className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                  }`}
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
                className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""
                  }`}
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

          <a
            href="#"
            className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
