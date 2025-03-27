const services = [
  {
    icon: "🧠",
    title: "ERP Solutions",
    points: [
      "Human Capital Management",
      "Financial Management",
      "Customer Relationship Management",
      "Sales Management Solutions",
      "Product & Contract Management",
      "Production Planning",
      "Supply Chain Management",
      "Service & Asset Management",
    ],
  },
  {
    icon: "💻",
    title: "Software Development",
    points: [
      "Software Outsourcing",
      "Software Testing & QA Services",
      "Migration & Re-Engineering",
      "Enterprise Portal Development",
      "E-commerce Solution - B2B/B2C",
    ],
  },
  {
    icon: "📱",
    title: "Custom Development",
    points: [
      "Mobile Development",
      "Application Modernization",
      "Research & Development",
      "Product Development",
      "Testing & Quality Assurance",
      "UI & UX Design",
      "Software Support Maintenance",
      "Third Party API Integration",
    ],
  },
  {
    icon: "🛠️",
    title: "Infrastructure",
    points: [
      "Monitoring, Alerting, and Notification",
      "Storage Management",
      "Database Management",
      "Network Management",
      "Server Management",
      "Server Provisioning",
      "Security Management",
      "Application Management",
    ],
  },
  {
    icon: "📈",
    title: "Consulting",
    points: [
      "Custom Development",
      "Mobility",
      "Digital Transformation",
      "IoT",
      "Cloud",
      "Data & Analytics",
      "Staffing Augmentation",
      "Product Engineering",
    ],
  },
  {
    icon: "📲",
    title: "Mobile App Development",
    points: [
      "iOS App Development",
      "Android App Development",
      "Mobile Websites Development",
      "Hybrid App Development",
    ],
  },
  {
    icon: "🎨",
    title: "Creative Designing",
    points: [
      "Logo, Brochure & Corporate Identity",
      "Graphic Designing & Illustrations",
      "Flash Animations",
      "Website & Microsites Designing",
      "Landing Pages, Newsletters",
      "Brochures and Printing Material",
    ],
  },
  {
    icon: "📢",
    title: "Digital Marketing",
    points: [
      "Search Engine Optimization (SEO)",
      "Pay Per Click Services (PPC)",
      "Social Media Optimization (SMO)",
      "Reputation & Brand Management",
      "Internet Marketing",
      "Lead Generation",
      "Digital Media Services",
      "Newsletter Solution",
    ],
  },
];

export default function Services() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#fdfcff] via-[#e6f0ff] to-[#fbeeff] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-60px] left-[-60px] w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-[120px] animate-ping" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Everything you need in one place. Explore our full-service offerings below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
