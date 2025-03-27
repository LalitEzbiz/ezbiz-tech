export default function AboutUs() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f3e7ff] via-[#e1f0ff] to-[#fbeeff] overflow-hidden">
      {/* Background blobs for visual depth */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-[120px] animate-pulse z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-[100px] animate-ping z-0"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative z-10">
            <img
              src="/img/aboutus.png"
              alt="Team Illustration"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Content Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 z-10 relative">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ezbiz Technologies, founded in April 2017, is a team of passionate IT professionals.
              We specialize in delivering customized solutions and IT services to empower businesses across industries.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With expertise across domains, we focus on understanding your business deeply to deliver impactful digital products.
              From startups to global enterprises, we operate as true partners — building apps, platforms, and solutions with precision.
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition duration-300 shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
