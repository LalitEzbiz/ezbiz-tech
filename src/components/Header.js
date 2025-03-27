"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white py-3 px-4 sm:px-8 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Zone - Branding Message */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm bg-pink-600/10 border border-pink-500 text-pink-400 px-2 py-1 rounded-full tracking-wide">
            We’re available on
          </span>
          <p className="text-sm sm:text-base font-medium text-white/80 tracking-wide">
            🚀 Empowering Digital Dreams, One Brand at a Time
          </p>
        </div>

        {/* Right Zone - Socials + CTA */}
        <div className="flex items-center gap-6">
          {/* Social Box */}
          <div className="flex items-center gap-3">
            <SocialButton
              icon={<FaFacebookF />}
              glowColor="hover:shadow-blue-500/40"
              href="https://www.facebook.com/yourpage"
            />
            <SocialButton
              icon={<FaLinkedinIn />}
              glowColor="hover:shadow-cyan-400/40"
              href="https://www.linkedin.com/company/yourcompany"
            />
            <SocialButton
              icon={<FaWhatsapp />}
              glowColor="hover:shadow-green-400/40"
              href="https://wa.me/919350492326"
            />
          </div>

          {/* CTA Box */}
          <div className="hidden sm:block">
            <Link href="/proposal">
              <button className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-purple-600/40 transition duration-300">
                <span className="relative z-10">Request a Proposal</span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

// Reusable Social Button Component
const SocialButton = ({ icon, glowColor, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-white/5 backdrop-blur-sm border border-white/10 w-10 h-10 rounded-md flex items-center justify-center text-white text-lg transition-transform hover:scale-110 ${glowColor}`}
    >
      {icon}
    </a>
  );
};
