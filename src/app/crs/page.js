// "use client";

// import React, { useMemo } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const CRSPage = () => {


//     const logos = [
//         "/img/view-oman.jpg",
//         "/img/downloadsss.jpg",
//         "/img/download.jpg",
//     ];
//     // Animated floating particles
//     const particles = useMemo(() => {
//         return Array.from({ length: 25 }).map(() => ({
//             size: `${Math.random() * 12 + 4}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             duration: `${Math.random() * 10 + 5}s`,
//             shape: Math.random() > 0.5 ? "rounded-full" : "rotate-45"
//         }));
//     }, []);

//     return (
//         <div className="bg-gray-50 text-gray-800 font-sans">
//             {/* Hero Section with Animated Particles */}
//             <div className="relative w-full h-[300px] bg-gradient-to-r from-black via-slate-900 to-blue-900 text-white overflow-hidden">
//                 {/* Animated Crystals */}
//                 <div className="absolute inset-0 z-0">
//                     {particles.map((p, i) => (
//                         <div
//                             key={i}
//                             className={`absolute bg-cyan-400/20 backdrop-blur-sm ${p.shape}`}
//                             style={{
//                                 width: p.size,
//                                 height: p.size,
//                                 top: p.top,
//                                 left: p.left,
//                                 animation: `float ${p.duration} ease-in-out infinite`
//                             }}
//                         ></div>
//                     ))}
//                 </div>

//                 {/* Hero Content */}
//                 <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col justify-center h-full">
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1 }}
//                         className="text-4xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-md"
//                     >
//                         Central Reservation <br /> Systems
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5, duration: 1 }}
//                         className="mt-4 max-w-xl text-base md:text-lg text-white/80"
//                     >
//                         Now synchronize and manage all your bookings from one place easily.
//                         Minimize reservation administration risks, eliminate overbookings,
//                         and maintain accounting accuracy.
//                     </motion.p>
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 1, duration: 0.5 }}
//                     >
//                         <Link href="/conactwithus">
//                             <button className="mt-6 w-fit px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg">
//                                 Request a Demo
//                             </button>
//                         </Link>
//                     </motion.div>
//                 </div>

//                 {/* Animation Keyframe */}
//                 <style jsx>{`
//           @keyframes float {
//             0% {
//               transform: translateY(0px);
//               opacity: 1;
//             }
//             50% {
//               transform: translateY(-15px);
//               opacity: 0.6;
//             }
//             100% {
//               transform: translateY(0px);
//               opacity: 1;
//             }
//           }
//         `}</style>
//             </div>

//             {/* About Section */}
//             <section className="py-16 px-6 max-w-5xl mx-auto">
//                 <h2 className="text-3xl font-semibold mb-6 text-center">About CRS System</h2>
//                 <p className="text-lg leading-relaxed">
//                     CRS is a type of reservation software that updates and maintains hotel information like inventory and rates so that
//                     hotels can manage guest reservations efficiently. It connects multiple distribution channels like OTAs, GDS, and
//                     mobile apps to sync data in real-time. This system helps avoid overbooking, streamline operations, and improve
//                     customer satisfaction.
//                 </p>
//             </section>

//             {/* Benefits Section */}
//             <section className="bg-white py-16 px-6">
//                 <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//                     <div>
//                         <h3 className="text-2xl font-semibold mb-4">Benefits of CRS</h3>
//                         <ul className="list-disc list-inside space-y-2 text-gray-700">
//                             <li>No booking mistakes and lost reservations.</li>
//                             <li>Centralized view of rates and availability.</li>
//                             <li>Multi-channel integration for better reach.</li>
//                             <li>Reduces cost and saves time.</li>
//                             <li>Enables global travel market access.</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <img src="/img/crs.png" alt="Benefits" className="rounded-xl shadow-lg" />
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="bg-gradient-to-r from-indigo-50 to-blue-100 py-16 px-6">
//                 <h3 className="text-3xl font-semibold text-center mb-10">Key Features</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
//                     {['Online Payment', 'Auto Communication', 'Channel Mgmt', 'Reports', 'Mobile Access'].map((feature, i) => (
//                         <div key={i} className="bg-white rounded-full py-6 px-4 shadow hover:shadow-lg transition">
//                             <p className="font-medium">{feature}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Tech Stack Section */}
//             <section className="py-16 px-6">
//                 <h3 className="text-3xl font-semibold text-center mb-12">Tech Stack</h3>
//                 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//                     <div>
//                         <img src="/img/tech.png" alt="Tech Stack" className="rounded-xl shadow-lg" />
//                     </div>
//                     <div className="space-y-4">
//                         <div>
//                             <h4 className="text-xl font-semibold mb-2">Frontend</h4>
//                             <div className="flex flex-wrap gap-3">
//                                 <span className="px-3 py-1 bg-blue-200 rounded-full">HTML</span>
//                                 <span className="px-3 py-1 bg-yellow-200 rounded-full">CSS</span>
//                                 <span className="px-3 py-1 bg-green-200 rounded-full">JavaScript</span>
//                                 <span className="px-3 py-1 bg-purple-200 rounded-full">Bootstrap</span>
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="text-xl font-semibold mb-2">Backend</h4>
//                             <div className="flex flex-wrap gap-3">
//                                 <span className="px-3 py-1 bg-indigo-200 rounded-full">PHP</span>
//                                 <span className="px-3 py-1 bg-cyan-200 rounded-full">MySQL</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="relative overflow-hidden bg-gradient-to-r from-sky-900 to-blue-800 text-white py-6 sm:py-10">
//                 {/* Background Animation */}
//                 <motion.div
//                     className="absolute inset-0 opacity-20"
//                     initial={{ x: "-100%" }}
//                     animate={{ x: "100%" }}
//                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                 >
//                     <div className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 blur-3xl"></div>
//                 </motion.div>

//                 <div className="relative z-10 container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-6">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center sm:text-left max-w-md"
//                     >
//                         <h2 className="text-xl sm:text-3xl font-bold leading-snug">
//                             Loved by <span className="text-red-400">Businesses</span> and <span className="text-pink-400">Individuals</span>
//                         </h2>
//                         <p className="mt-2 text-sm sm:text-base text-blue-100">
//                             Empowering users across the globe with reliable, fast, and scalable solutions.
//                         </p>
//                     </motion.div>

//                     <div className="flex gap-4 flex-wrap justify-center">
//                         {logos.map((logo, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//                                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                                 transition={{ delay: index * 0.3, type: "spring", stiffness: 120 }}
//                                 whileHover={{ scale: 1.05, rotate: 3 }}
//                                 className="bg-white rounded-2xl shadow-2xl p-3 h-20 w-28 flex items-center justify-center overflow-hidden transform transition-transform duration-300"
//                             >
//                                 <div className="relative w-full h-full">
//                                     <Image
//                                         src={logo}
//                                         alt={`Logo ${index + 1}`}
//                                         layout="fill"
//                                         objectFit="contain"
//                                     />
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>


//             <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
//                 <div className="max-w-7xl mx-auto text-center mb-12">
//                     <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-up">
//                         Frequently Asked Questions
//                     </h2>
//                     <p className="text-gray-500 text-lg animate-fade-up delay-100">
//                         Everything you need to know about the product and billing.
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-10 items-start">
//                     <div className="flex justify-center">
//                         <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg animate-fade-left">
//                             <img
//                                 src="/img/Thinking.png"
//                                 alt="FAQ Illustration"
//                                 className="w-full max-w-sm rounded-xl"
//                             />
//                         </div>
//                     </div>

//                     <div className="space-y-4 animate-fade-right">
//                         {[
//                             {
//                                 question: 'How user friendly is Ezbiz CRS?',
//                                 answer:
//                                     'Ezbiz CRS is designed and coded to support users in the simplest way possible while still supporting high-end features.',
//                             },
//                             {
//                                 question: 'Do I have to pay to fix a bug attack?',
//                                 answer: "No, it's covered in support.",
//                             },
//                             {
//                                 question: 'Do you offer free maintenance support?',
//                                 answer: 'Yes, free maintenance support is available based on the plan.',
//                             },
//                             {
//                                 question: 'Is the personalized demo free?',
//                                 answer: 'Yes, it’s completely free.',
//                             },
//                             {
//                                 question: 'Do you guys provide a mobile application too?',
//                                 answer: 'Yes, both iOS and Android apps are available.',
//                             },
//                             {
//                                 question: 'Does web application is responsive?',
//                                 answer: 'Absolutely, it’s fully responsive.',
//                             },
//                         ].map((item, index) => (
//                             <details
//                                 key={index}
//                                 className="p-4 border rounded-xl shadow transition-all duration-300 group hover:shadow-md bg-white/80 hover:bg-purple-50"
//                             >
//                                 <summary className="font-medium text-base cursor-pointer group-open:text-purple-700 transition duration-200">
//                                     {item.question}
//                                 </summary>
//                                 <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
//                             </details>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="text-center mt-20">
//                     <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-2xl shadow-xl animate-fade-up">
//                         <h3 className="text-white text-2xl font-semibold mb-2">
//                             Got a Project? Let's Collaborate
//                         </h3>
//                         <Link href="/connectWithUs">
//                          <button className="bg-white text-purple-700 font-bold px-5 py-2 rounded shadow hover:bg-gray-100 transition">
//                             Contact Us
//                          </button>
//                         </Link>
                        
//                     </div>
//                 </div>
//             </section>

//         </div>
//     );
// };

// export default CRSPage;





"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CRSPage = () => {
    const logos = [
        "/img/view-oman.jpg",
        "/img/downloadsss.jpg",
        "/img/download.jpg",
    ];
    
    // Animated floating particles
    const particles = useMemo(() => {
        return Array.from({ length: 25 }).map(() => ({
            size: `${Math.random() * 12 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${Math.random() * 10 + 5}s`,
            shape: Math.random() > 0.5 ? "rounded-full" : "rotate-45"
        }));
    }, []);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            {/* Hero Section with Animated Particles */}
            <div className="relative w-full h-[300px] bg-gradient-to-r from-black via-slate-900 to-blue-900 text-white overflow-hidden">
                {/* Animated Crystals */}
                <div className="absolute inset-0 z-0">
                    {particles.map((p, i) => (
                        <div
                            key={i}
                            className={`absolute bg-cyan-400/20 backdrop-blur-sm ${p.shape}`}
                            style={{
                                width: p.size,
                                height: p.size,
                                top: p.top,
                                left: p.left,
                                animation: `float ${p.duration} ease-in-out infinite`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col justify-center h-full">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-md"
                    >
                        Central Reservation <br /> Systems
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-4 max-w-xl text-base md:text-lg text-white/80"
                    >
                        Now synchronize and manage all your bookings from one place easily.
                        Minimize reservation administration risks, eliminate overbookings,
                        and maintain accounting accuracy.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <Link href="/conactwithus">
                            <button className="mt-6 w-fit px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg">
                                Request a Demo
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Animation Keyframe */}
                <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
              opacity: 1;
            }
            50% {
              transform: translateY(-15px);
              opacity: 0.6;
            }
            100% {
              transform: translateY(0px);
              opacity: 1;
            }
          }
        `}</style>
            </div>

            {/* About Section */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-center">About CRS System</h2>
                <p className="text-lg leading-relaxed">
                    CRS is a type of reservation software that updates and maintains hotel information like inventory and rates so that
                    hotels can manage guest reservations efficiently. It connects multiple distribution channels like OTAs, GDS, and
                    mobile apps to sync data in real-time. This system helps avoid overbooking, streamline operations, and improve
                    customer satisfaction.
                </p>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Benefits of CRS</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>No booking mistakes and lost reservations.</li>
                            <li>Centralized view of rates and availability.</li>
                            <li>Multi-channel integration for better reach.</li>
                            <li>Reduces cost and saves time.</li>
                            <li>Enables global travel market access.</li>
                        </ul>
                    </div>
                    <div className="relative w-full h-64">
                        <Image 
                            src="/img/crs.png" 
                            alt="Benefits" 
                            fill
                            className="rounded-xl shadow-lg object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-r from-indigo-50 to-blue-100 py-16 px-6">
                <h3 className="text-3xl font-semibold text-center mb-10">Key Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
                    {['Online Payment', 'Auto Communication', 'Channel Mgmt', 'Reports', 'Mobile Access'].map((feature, i) => (
                        <div key={i} className="bg-white rounded-full py-6 px-4 shadow hover:shadow-lg transition">
                            <p className="font-medium">{feature}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 px-6">
                <h3 className="text-3xl font-semibold text-center mb-12">Tech Stack</h3>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div className="relative w-full h-64">
                        <Image 
                            src="/img/tech.png" 
                            alt="Tech Stack" 
                            fill
                            className="rounded-xl shadow-lg object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Frontend</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-200 rounded-full">HTML</span>
                                <span className="px-3 py-1 bg-yellow-200 rounded-full">CSS</span>
                                <span className="px-3 py-1 bg-green-200 rounded-full">JavaScript</span>
                                <span className="px-3 py-1 bg-purple-200 rounded-full">Bootstrap</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Backend</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-indigo-200 rounded-full">PHP</span>
                                <span className="px-3 py-1 bg-cyan-200 rounded-full">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-sky-900 to-blue-800 text-white py-6 sm:py-10">
                {/* Background Animation */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 blur-3xl"></div>
                </motion.div>

                <div className="relative z-10 container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center sm:text-left max-w-md"
                    >
                        <h2 className="text-xl sm:text-3xl font-bold leading-snug">
                            Loved by <span className="text-red-400">Businesses</span> and <span className="text-pink-400">Individuals</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-blue-100">
                            Empowering users across the globe with reliable, fast, and scalable solutions.
                        </p>
                    </motion.div>

                    <div className="flex gap-4 flex-wrap justify-center">
                        {logos.map((logo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: index * 0.3, type: "spring", stiffness: 120 }}
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                className="bg-white rounded-2xl shadow-2xl p-3 h-20 w-28 flex items-center justify-center overflow-hidden transform transition-transform duration-300"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={logo}
                                        alt={`Logo ${index + 1}`}
                                        fill
                                        objectFit="contain"
                                        sizes="(max-width: 768px) 100px, 150px"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-up">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 text-lg animate-fade-up delay-100">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg animate-fade-left">
                            <div className="relative w-full h-96"> {/* Increased height */}
                                <Image
                                    src="/img/Thinking.png"
                                    alt="FAQ Illustration"
                                    fill
                                    className="rounded-xl object-contain"  // Changed to contain
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={true}  // Added priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 animate-fade-right">
                        {[
                            {
                                question: 'How user friendly is Ezbiz CRS?',
                                answer:
                                    'Ezbiz CRS is designed and coded to support users in the simplest way possible while still supporting high-end features.',
                            },
                            {
                                question: 'Do I have to pay to fix a bug attack?',
                                answer: "No, it&apos;s covered in support.",
                            },
                            {
                                question: 'Do you offer free maintenance support?',
                                answer: 'Yes, free maintenance support is available based on the plan.',
                            },
                            {
                                question: 'Is the personalized demo free?',
                                answer: 'Yes, it&apos;s completely free.',
                            },
                            {
                                question: 'Do you guys provide a mobile application too?',
                                answer: 'Yes, both iOS and Android apps are available.',
                            },
                            {
                                question: 'Does web application is responsive?',
                                answer: 'Absolutely, it&apos;s fully responsive.',
                            },
                        ].map((item, index) => (
                            <details
                                key={index}
                                className="p-4 border rounded-xl shadow transition-all duration-300 group hover:shadow-md bg-white/80 hover:bg-purple-50"
                            >
                                <summary className="font-medium text-base cursor-pointer group-open:text-purple-700 transition duration-200">
                                    {item.question}
                                </summary>
                                <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-2xl shadow-xl animate-fade-up">
                        <h3 className="text-white text-2xl font-semibold mb-2">
                            Got a Project? Let&apos;s Collaborate
                        </h3>
                        <Link href="/connectWithUs">
                            <button className="bg-white text-purple-700 font-bold px-5 py-2 rounded shadow hover:bg-gray-100 transition">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CRSPage;
