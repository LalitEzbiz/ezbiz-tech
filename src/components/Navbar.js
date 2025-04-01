// "use client";
// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// export default function HomePage() {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

//   const handleItemClick = (path) => {
//     setIsMobileMenuOpen(false); // Close mobile menu after click
//     router.push(path);
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

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
//       {/* Decorative background */}
//       <div className="absolute inset-0 pointer-events-none z-0 animate-bgMove bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1%,transparent_60%)] opacity-30 blur-xl"></div>

//       <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between relative z-10">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/img/ezbiz-black-logo.png"
//             alt="EZBIZ Logo"
//             width={120}
//             height={40}
//             className="object-contain h-auto w-auto"
//             priority
//           />
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-gray-700 focus:outline-none"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav
//           ref={dropdownRef}
//           className={`${
//             isMobileMenuOpen ? "flex" : "hidden"
//           } flex-col md:flex md:flex-row md:items-center gap-4 md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 rounded-b-xl md:rounded-none z-20 transition-all duration-300`}
//         >
//           <Link
//             href="/"
//             className="text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition shadow-md"
//           >
//             Home
//           </Link>

//           <Link
//             href="/aboutus"
//             className="text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition shadow-md"
//           >
//             About Us
//           </Link>

//           {/* Services Dropdown */}
//           <div className="relative">
//             <button
//               type="button"
//               onClick={toggleServices}
//               className="text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition shadow-md flex items-center gap-1"
//             >
//               Services
//               <span className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}>▼</span>
//             </button>
//             {isServicesOpen && (
//               <div className="absolute md:absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[200px] z-30 border border-gray-100">
//                 {[
//                   { path: "/erpsolution", label: "ERP Solutions" },
//                   { path: "/softdevelopment", label: "Software Development" },
//                   { path: "/customdevelop", label: "Custom Development" },
//                   { path: "/infrastructure", label: "Infrastructure" },
//                   { path: "/consulting", label: "Consulting" },
//                   { path: "/mob-app-dev", label: "Mobile App Development" },
//                   { path: "/creativedesign", label: "Creative Design" },
//                   { path: "/digitalmarketing", label: "Digital Marketing" },
//                 ].map(({ path, label }) => (
//                   <button
//                     key={path}
//                     onClick={() => handleItemClick(path)}
//                     className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-blue-100 transition"
//                   >
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Products Dropdown */}
//           <div className="relative">
//             <button
//               type="button"
//               onClick={toggleProducts}
//               className="text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition shadow-md flex items-center gap-1"
//             >
//               Products
//               <span className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`}>▼</span>
//             </button>
//             {isProductsOpen && (
//               <div className="absolute md:absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[200px] z-30 border border-gray-100">
//                 {[
//                   { path: "/dmcsoftware", label: "DMC Software" },
//                   { path: "/grocerryshop", label: "Grocery Shopping Software" },
//                   { path: "/parkingsoftware", label: "Parking Software" },
//                   { path: "/crs", label: "CRS Systems" },
//                 ].map(({ path, label }) => (
//                   <button
//                     key={path}
//                     onClick={() => handleItemClick(path)}
//                     className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-purple-100 transition"
//                   >
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link
//             href="/portfolio"
//             className="text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition shadow-md"
//           >
//             Portfolio
//           </Link>

//           <Link
//             href="/contactjustus"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }




"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleItemClick = (path) => {
    setIsMobileMenuOpen(false);
    router.push(path);
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

  const navLinkClasses =
    "relative text-base font-bold text-gray-800 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer before:absolute before:inset-0 before:rounded-lg before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 before:bg-gradient-to-r before:from-blue-500 before:to-indigo-600 before:-z-10 z-10";

  const productLinkClasses =
    "relative text-base font-bold text-gray-800 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer before:absolute before:inset-0 before:rounded-lg before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:-z-10 z-10";

  const contactLinkClasses =
    "relative text-base font-bold text-gray-800 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer before:absolute before:inset-0 before:rounded-lg before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 before:bg-gradient-to-r before:from-blue-500 before:to-indigo-600 before:-z-10 z-10";

  return (
    <header className="sticky top-0 z-50 bg-white/100 backdrop-blur-md shadow-md">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-bgMove bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1%,transparent_60%)] opacity-30 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-0.2 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/img/ezbiz-black-logo.png"
            alt="EZBIZ Logo"
            width={90}
            height={30}
            className="object-contain h-auto w-auto"
            priority
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav
          ref={dropdownRef}
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center gap-3 md:gap-5 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 rounded-b-xl md:rounded-none z-20 transition-all duration-300`}
        >
          <Link href="/" className={navLinkClasses}>
            Home
          </Link>

          <Link href="/aboutus" className={navLinkClasses}>
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <div onClick={toggleServices} className={navLinkClasses}>
              Services{" "}
              <span
                className={`inline-block transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[220px] z-30 border border-gray-100">
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
                  <div
                    key={path}
                    onClick={() => handleItemClick(path)}
                    className="px-5 py-2 text-sm text-gray-700 hover:bg-blue-100 transition cursor-pointer"
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <div onClick={toggleProducts} className={productLinkClasses}>
              Products{" "}
              <span
                className={`inline-block transition-transform ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 min-w-[220px] z-30 border border-gray-100">
                {[
                  { path: "/dmcsoftware", label: "DMC Software" },
                  { path: "/grocerryshop", label: "Grocery Shopping Software" },
                  { path: "/parkingsoftware", label: "Parking Software" },
                  { path: "/crs", label: "CRS Systems" },
                ].map(({ path, label }) => (
                  <div
                    key={path}
                    onClick={() => handleItemClick(path)}
                    className="px-5 py-2 text-sm text-gray-700 hover:bg-purple-100 transition cursor-pointer"
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/portfolio" className={navLinkClasses}>
            Portfolio
          </Link>

          <Link href="/contactjustus" className={contactLinkClasses}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}


