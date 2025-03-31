// import Link from "next/link";
// import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="relative bg-gray-950 text-white py-20 overflow-hidden">
//       {/* 🔮 Animated background blobs */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-purple-500 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-blue-400 opacity-20 rounded-full blur-[150px] animate-pulse delay-200"></div>

//       <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 text-transparent bg-clip-text mb-10">
//           Let’s Connect & Build Something Great
//         </h2>

//         {/* Grid Content */}
//         <div className="grid md:grid-cols-4 gap-10 text-left text-gray-300">
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
//             <p className="text-sm">Ezbiz Technologies Pvt Ltd</p>
//             <p className="text-sm">Suite #405, H-28, Sector 63, Noida</p>
//             <p className="text-sm mt-2">📧 <a href="mailto:info@ezbizsoft.com" className="text-blue-400 hover:text-blue-300">info@ezbizsoft.com</a></p>
//             <p className="text-sm">📞 +91 9350492326, 120-4576329</p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Links</h3>
//             <ul className="space-y-2 text-sm">
//               {["Home", "About Us", "Contact Us", "Portfolio"].map((link, i) => (
//                 <li key={i}><a href="#" className="hover:text-white/80 transition">{link}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
//             <ul className="space-y-2 text-sm">
//               {[
//                 "ERP Solutions", "Software Dev", "Custom Dev",
//                 "Infrastructure", "Consulting", "Mobile Apps",
//                 "Creative Design", "Digital Marketing",
//               ].map((service, i) => (
//                 <li key={i}><a href="#" className="hover:text-white/80 transition">{service}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter + Buttons */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
//             <form className="space-y-3">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg transition-all shadow-md hover:shadow-pink-400/40"
//               >
//                 Subscribe
//               </button>
//             </form>

//             {/* Social Icons */}
//             <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
//               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition text-white">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition text-white">
//                 <FaLinkedinIn />
//               </a>
//               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition text-white">
//                 <FaWhatsapp />
//               </a>
//             </div>

//             {/* CTA Button */}
//             <Link href="/requestingdemos">
//               <button className="mt-6 w-full bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-red-400/40 transition">
//                 Request A Demo
//               </button>
//             </Link>

//           </div>
//         </div>

//         {/* Bottom Line */}
//         <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
//           © 2023 Ezbiz Technologies Pvt Ltd | All Rights Reserved
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





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

    // Placeholder for actual email sending logic
    window.location.href = `mailto:info@ezbizsoft.com?subject=Newsletter Subscription&body=Please subscribe me with this email: ${email}`;

    setEmail(""); // Reset the field
  };

  return (
    <footer className="relative bg-gray-950 text-white pt-16 pb-10 overflow-hidden">
      {/* 🔮 Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-purple-500 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-pink-400 to-blue-400 opacity-20 rounded-full blur-[100px] animate-pulse delay-200"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 text-transparent bg-clip-text mb-12">
          Let’s Connect & Build Something Great
        </h2>

        {/* Grid Content */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-sm text-gray-300">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p>Ezbiz Technologies Pvt Ltd</p>
            <p>Suite #405, H-28, Sector 63, Noida</p>
            <p className="mt-2">📧 <a href="mailto:info@ezbizsoft.com" className="text-blue-400 hover:underline">info@ezbizsoft.com</a></p>
            <p>📞 +91 9350492326, 120-4576329</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Contact Us", "Portfolio"].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "ERP Solutions", "Software Dev", "Custom Dev",
                "Infrastructure", "Consulting", "Mobile Apps",
                "Creative Design", "Digital Marketing",
              ].map((service, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{service}</a></li>
              ))}
            </ul>
          </div>

          {/* Subscribe + Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg transition-all shadow-md hover:shadow-pink-400/40"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex justify-start gap-4 mt-5">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition"><FaFacebookF /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition"><FaLinkedinIn /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition"><FaWhatsapp /></a>
            </div>

            {/* CTA Button */}
            <Link href="/requestingdemos">
              <button className="mt-5 w-full bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-red-400/40 transition">
                Request A Demo
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © 2023 Ezbiz Technologies Pvt Ltd | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
