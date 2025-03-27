// import React from "react";

// export default function DigitalMarketing() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-16 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Content */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">Digital Marketing</h1>
//           <p className="text-lg text-gray-200">
//             Rules of marketing means a great product is only as good as the position it holds in the minds of your target consumers.
//             At Ezbiz, we ensure that your website remains at the top of all search engine results and convert your website to a great business venture.
//             Our experts help you strategize this effort right from the word go! The internet marketing experts focus on delivering measurable business results in a short time frame.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Search Engine Optimization (SEO)
//             </div>
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Pay Per Click Services (PPC)
//             </div>
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Social Media Optimization (SMO)
//             </div>
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Reputation & Brand Management
//             </div>
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Internet Marketing
//             </div>
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Lead Generation
//             </div>
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Digital Media Services
//             </div>
//             <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
//               Newsletter Solution
//             </div>
//           </div>
//         </div>

//         {/* Illustration */}
//         <div className="flex justify-center">
//           <img
//             src="/img/Digital-Transformation.png"
//             alt="Digital Marketing Illustration"
//             className="w-full max-w-md drop-shadow-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import Image from "next/image";

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Digital Marketing</h1>
          <p className="text-lg text-gray-200">
            Rules of marketing means a great product is only as good as the position it holds in the minds of your target consumers.
            At Ezbiz, we ensure that your website remains at the top of all search engine results and convert your website to a great business venture.
            Our experts help you strategize this effort right from the word go! The internet marketing experts focus on delivering measurable business results in a short time frame.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Search Engine Optimization (SEO)
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Pay Per Click Services (PPC)
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Social Media Optimization (SMO)
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Reputation & Brand Management
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Internet Marketing
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Lead Generation
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Digital Media Services
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transform transition-all duration-300">
              Newsletter Solution
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <Image
            src="/img/Digital-Transformation.png"
            alt="Digital Marketing Illustration"
            width={500}
            height={500}
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
