// // components/ServicesHeroSection.jsx
// export default function ServicesHeroSection() {
//     const services = [
//       {
//         title: "ERP Solutions",
//         description:
//           "Streamline business processes and centralize data across departments with scalable ERP platforms.",
//         points: [
//           "Finance & Accounting",
//           "Inventory Management",
//           "Product & Client Management",
//           "Supply Chain Management",
//         ],
//         image: "/img/ERP-Solution2.png",
//       },
//       {
//         title: "Software Development",
//         description:
//           "Custom software that transforms your ideas into powerful digital experiences and scalable systems.",
//         points: [
//           "Web & Mobile Applications",
//           "Software Testing & QA",
//           "Migration & Upgrades",
//           "Third-Party API Integration",
//         ],
//         image: "/img/Software-Development.png",
//       },
//       {
//         title: "Custom Development",
//         description:
//           "Tailored solutions built from scratch to suit your exact business workflow and goals.",
//         points: [
//           "Product Development",
//           "Process Automation",
//           "Software Support",
//           "UI/UX Engineering",
//         ],
//         image: "/img/Product-Engineering.png",
//       },
//       {
//         title: "Infrastructure",
//         description:
//           "Robust IT infrastructure planning, implementation, and management for high availability systems.",
//         points: [
//           "Cloud Solutions",
//           "Data Center Management",
//           "Server Maintenance",
//           "Backup & Disaster Recovery",
//         ],
//         image: "/img/Infrastructure.png",
//       },
//       {
//         title: "Consulting",
//         description:
//           "Expert guidance to help you make strategic tech decisions, optimize costs, and innovate faster.",
//         points: [
//           "Digital Transformation",
//           "Project Feasibility",
//           "Scalability Planning",
//           "Security Audits",
//         ],
//         image: "/img/consulting.png",
//       },
//       {
//         title: "Mobile App Development",
//         description:
//           "Cross-platform mobile solutions for Android & iOS with high performance and native feel.",
//         points: [
//           "UI/UX Prototyping",
//           "Android & iOS Deployment",
//           "Maintenance & Analytics",
//           "Flutter / React Native",
//         ],
//         image: "/img/mobile-app.png",
//       },
//       {
//         title: "Creative Designing",
//         description:
//           "Captivating visuals and branding assets that leave a lasting impression on your users.",
//         points: [
//           "Brand Identity",
//           "Illustrations & Icons",
//           "Web & UI Design",
//           "Design Systems",
//         ],
//         image: "/img/crativese.png",
//       },
//       {
//         title: "Digital Marketing",
//         description:
//           "Smart digital strategies to grow your reach, convert leads, and build a lasting brand presence.",
//         points: [
//           "SEO & SEM",
//           "Social Media Marketing",
//           "Email Campaigns",
//           "Analytics & Optimization",
//         ],
//         image: "/img/digitalmarketing.png",
//       },
//     ];
  
//     return (
//       <>
//         <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-800 text-white py-20 px-6 overflow-hidden">
//           {/* Overlay Icons */}
//           <div className="absolute inset-0 z-0 pointer-events-none">
//             <div className="absolute top-10 left-10 animate-float-slow opacity-10 text-6xl">💻</div>
//             <div className="absolute bottom-12 right-20 animate-float opacity-10 text-7xl">🔒</div>
//             <div className="absolute top-1/3 right-10 animate-float-slow opacity-10 text-5xl">📱</div>
//           </div>
  
//           {/* Content */}
//           <div className="relative z-10 max-w-6xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
//               Explore Our Expert <span className="text-blue-300">Services</span>
//             </h1>
//             <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               We deliver cutting-edge software, infrastructure, and consulting solutions to power your digital transformation.
//             </p>
//           </div>
//         </section>
  
//         <section className="bg-gradient-to-b from-sky-50 to-white py-20 px-4 md:px-10">
//           <div className="max-w-7xl mx-auto text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Our <span className="text-blue-600">Services</span>
//             </h2>
//             <p className="text-gray-500 text-lg max-w-2xl mx-auto">
//               Empowering businesses with tailored digital solutions to solve real-world challenges.
//             </p>
//           </div>
  
//           {/* First 6 services in grid */}
//           <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
//             {services.slice(0, 6).map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50"
//               >
//                 <div className="flex justify-center mb-4">
//                   <img src={service.image} alt={service.title} className="h-28" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm text-center mb-4">
//                   {service.description}
//                 </p>
//                 <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
//                   {service.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
  
//           {/* Last 2 services centered */}
//           <div className="flex justify-center gap-12 mt-12 flex-wrap">
//             {services.slice(6).map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50 w-full md:w-1/2 lg:w-1/3 max-w-sm"
//               >
//                 <div className="flex justify-center mb-4">
//                   <img src={service.image} alt={service.title} className="h-28" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm text-center mb-4">
//                   {service.description}
//                 </p>
//                 <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
//                   {service.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//       </>
//     );
//   }
  


// components/ServicesHeroSection.jsx
import Image from 'next/image';

export default function ServicesHeroSection() {
  const services = [
    {
      title: "ERP Solutions",
      description:
        "Streamline business processes and centralize data across departments with scalable ERP platforms.",
      points: [
        "Finance & Accounting",
        "Inventory Management",
        "Product & Client Management",
        "Supply Chain Management",
      ],
      image: "/img/ERP-Solution2.png",
    },
    {
      title: "Software Development",
      description:
        "Custom software that transforms your ideas into powerful digital experiences and scalable systems.",
      points: [
        "Web & Mobile Applications",
        "Software Testing & QA",
        "Migration & Upgrades",
        "Third-Party API Integration",
      ],
      image: "/img/Software-Development.png",
    },
    {
      title: "Custom Development",
      description:
        "Tailored solutions built from scratch to suit your exact business workflow and goals.",
      points: [
        "Product Development",
        "Process Automation",
        "Software Support",
        "UI/UX Engineering",
      ],
      image: "/img/Product-Engineering.png",
    },
    {
      title: "Infrastructure",
      description:
        "Robust IT infrastructure planning, implementation, and management for high availability systems.",
      points: [
        "Cloud Solutions",
        "Data Center Management",
        "Server Maintenance",
        "Backup & Disaster Recovery",
      ],
      image: "/img/Infrastructure.png",
    },
    {
      title: "Consulting",
      description:
        "Expert guidance to help you make strategic tech decisions, optimize costs, and innovate faster.",
      points: [
        "Digital Transformation",
        "Project Feasibility",
        "Scalability Planning",
        "Security Audits",
      ],
      image: "/img/consulting.png",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile solutions for Android & iOS with high performance and native feel.",
      points: [
        "UI/UX Prototyping",
        "Android & iOS Deployment",
        "Maintenance & Analytics",
        "Flutter / React Native",
      ],
      image: "/img/mobile-app.png",
    },
    {
      title: "Creative Designing",
      description:
        "Captivating visuals and branding assets that leave a lasting impression on your users.",
      points: [
        "Brand Identity",
        "Illustrations & Icons",
        "Web & UI Design",
        "Design Systems",
      ],
      image: "/img/crativese.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Smart digital strategies to grow your reach, convert leads, and build a lasting brand presence.",
      points: [
        "SEO & SEM",
        "Social Media Marketing",
        "Email Campaigns",
        "Analytics & Optimization",
      ],
      image: "/img/digitalmarketing.png",
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-800 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 left-10 animate-float-slow opacity-10 text-6xl">💻</div>
          <div className="absolute bottom-12 right-20 animate-float opacity-10 text-7xl">🔒</div>
          <div className="absolute top-1/3 right-10 animate-float-slow opacity-10 text-5xl">📱</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Explore Our Expert <span className="text-blue-300">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We deliver cutting-edge software, infrastructure, and consulting solutions to power your digital transformation.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Empowering businesses with tailored digital solutions to solve real-world challenges.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50">
              <div className="flex justify-center mb-4">
                <Image src={service.image} alt={service.title} width={150} height={120} className="h-28 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                {service.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-12 mt-12 flex-wrap">
          {services.slice(6).map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50 w-full md:w-1/2 lg:w-1/3 max-w-sm">
              <div className="flex justify-center mb-4">
                <Image src={service.image} alt={service.title} width={150} height={120} className="h-28 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                {service.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
