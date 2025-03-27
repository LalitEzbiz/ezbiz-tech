// 'use client';

// import {
//   Smartphone,
//   Settings,
//   TestTubes,
//   Paintbrush,
//   Puzzle,
//   TrendingUp,
//   Cpu,
//   Users,
// } from 'lucide-react';

// export default function CustomDevelopmentSection() {
//   return (
//     <section className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-white to-blue-50">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
//             Custom Development
//           </h2>
//           <p className="mt-4 text-gray-600 leading-relaxed">
//             We collaborate with clients to design and implement high-performance, flexible, and scalable custom software. From concept to deployment, our services ensure you stay ahead with tailored innovations.
//           </p>

//           {/* Service Grid */}
//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <ServiceCard icon={<Smartphone />} title="Mobile Development" />
//             <ServiceCard icon={<Settings />} title="App Modernization" />
//             <ServiceCard icon={<TestTubes />} title="R&D Services" />
//             <ServiceCard icon={<Puzzle />} title="Product Development" />
//             <ServiceCard icon={<Paintbrush />} title="UI/UX Design" />
//             <ServiceCard icon={<TrendingUp />} title="QA & Testing" />
//             <ServiceCard icon={<Users />} title="Software Support" />
//             <ServiceCard icon={<Cpu />} title="3rd-Party Integration" />
//           </div>
//         </div>

//         {/* Right Image with Decorative Background */}
//         <div className="relative flex justify-center md:justify-end">
//           {/* Blurry Gradient Background Blob */}
//           <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-tr from-indigo-400 to-blue-300 rounded-full blur-3xl opacity-30 z-0 animate-pulse" />

//           {/* Optional glow ring behind image */}
//           <div className="absolute top-10 right-5 w-60 h-60 bg-blue-100 rounded-full blur-2xl opacity-20 z-0" />

//           {/* Actual image */}
//           <img
//             src="/img/Product-Engineering.png"
//             alt="Custom Development"
//             className="relative z-10 w-72 md:w-[28rem] drop-shadow-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({ icon, title }) {
//   return (
//     <div className="flex items-center gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm hover:shadow-md transition">
//       <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
//         {icon}
//       </div>
//       <span className="text-gray-800 font-medium">{title}</span>
//     </div>
//   );
// }



'use client';

import Image from 'next/image';
import {
  Smartphone,
  Settings,
  TestTubes,
  Paintbrush,
  Puzzle,
  TrendingUp,
  Cpu,
  Users,
} from 'lucide-react';

export default function CustomDevelopmentSection() {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Custom Development
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We collaborate with clients to design and implement high-performance, flexible, and scalable custom software. From concept to deployment, our services ensure you stay ahead with tailored innovations.
          </p>

          {/* Service Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceCard icon={<Smartphone />} title="Mobile Development" />
            <ServiceCard icon={<Settings />} title="App Modernization" />
            <ServiceCard icon={<TestTubes />} title="R&D Services" />
            <ServiceCard icon={<Puzzle />} title="Product Development" />
            <ServiceCard icon={<Paintbrush />} title="UI/UX Design" />
            <ServiceCard icon={<TrendingUp />} title="QA & Testing" />
            <ServiceCard icon={<Users />} title="Software Support" />
            <ServiceCard icon={<Cpu />} title="3rd-Party Integration" />
          </div>
        </div>

        {/* Right Image with Decorative Background */}
        <div className="relative flex justify-center md:justify-end">
          {/* Blurry Gradient Background Blob */}
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-tr from-indigo-400 to-blue-300 rounded-full blur-3xl opacity-30 z-0 animate-pulse" />

          {/* Optional glow ring behind image */}
          <div className="absolute top-10 right-5 w-60 h-60 bg-blue-100 rounded-full blur-2xl opacity-20 z-0" />

          {/* Actual image */}
          <Image
            src="/img/Product-Engineering.png"
            alt="Custom Development"
            width={450}
            height={450}
            className="relative z-10 w-72 md:w-[28rem] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm hover:shadow-md transition">
      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
        {icon}
      </div>
      <span className="text-gray-800 font-medium">{title}</span>
    </div>
  );
}

