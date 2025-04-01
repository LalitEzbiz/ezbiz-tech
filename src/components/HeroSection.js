

export default function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 opacity-20 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 opacity-10 rounded-full animate-spin-slow blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-500 opacity-20 rounded-full animate-bounce-slow blur-2xl"></div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 text-center shadow-xl">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
          Empowering Ideas Through
        </h1>
        <p className="text-cyan-300 text-2xl md:text-3xl font-medium drop-shadow">
          Creative Software Development
        </p>
      </div>
    </section>
  );
}
