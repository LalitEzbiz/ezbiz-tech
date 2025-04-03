"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    window.location.href = `mailto:info@ezbizsoft.com?subject=Newsletter Subscription&body=Please subscribe me with this email: ${email}`;
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-12 sm:py-14 lg:py-16 overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-purple-500 opacity-25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-pink-400 to-blue-400 opacity-25 rounded-full blur-3xl animate-pulse delay-200" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mb-10">
          Let’s Connect & Build Something Great
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm text-gray-300">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p>Ezbiz Technologies Pvt Ltd</p>
            <p>Suite #405, H-28, Sector 63, Noida</p>
            <p className="mt-2">📧 <a href="mailto:info@ezbizsoft.com" className="text-blue-400 hover:underline">info@ezbizsoft.com</a></p>
            <p>📞 +91 9350492326, 120-4576329</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", url: "/" },
                { name: "About Us", url: "/aboutus" },
                { name: "Contact Us", url: "/contactjustus" },
                { name: "Portfolio", url: "/portfolio" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>
                    <span className="hover:text-white hover:translate-x-1 inline-block transition duration-200 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "ERP Solutions", url: "/erpsolution" },
                { name: "Software Dev", url: "/softdevelopment" },
                { name: "Custom Dev", url: "/customdevelop" },
                { name: "Infrastructure", url: "/infrastructure" },
                { name: "Consulting", url: "/consulting" },
                { name: "Mobile Apps", url: "/mob-app-dev" },
                { name: "Creative Design", url: "/creativedesign" },
                { name: "Digital Marketing", url: "/digitalmarketing" },
              ].map((service, i) => (
                <li key={i}>
                  <Link href={service.url}>
                    <span className="hover:text-white hover:translate-x-1 inline-block transition duration-200 cursor-pointer">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-medium py-2 rounded-md transition-all"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition duration-200">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition duration-200">
                <FaLinkedinIn className="text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition duration-200">
                <FaWhatsapp className="text-white" />
              </a>
            </div>

            <Link href="/requestingdemos">
              <button className="mt-5 w-full bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white font-medium py-2 rounded-md transition-all shadow-md hover:shadow-pink-400/40">
                Request A Demo
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Ezbiz Technologies Pvt Ltd | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
