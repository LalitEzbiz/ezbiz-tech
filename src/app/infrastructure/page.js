import React from "react";
import { CheckCircle } from "lucide-react";

const modules = [
  "Monitoring, Altering, and Notification",
  "Database Management",
  "Server Management",
  "Security Management",
  "Storage Management",
  "Network Management",
  "Server Provisioning",
  "Application Management",
];

export default function InfrastructureSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 to-blue-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Modern Infrastructure</h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-200">
            We at Ebiz understand the importance of a strong IT foundation. That's why our
            Infrastructure solutions are built on industry-leading practices using AWS,
            database & server management, storage systems, monitoring tools, and more.
            Designed to be scalable, secure, and cost-efficient.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white/10 p-3 rounded-lg hover:bg-white/20 transition"
              >
                <CheckCircle className="text-green-400 mr-3" size={20} />
                <span className="text-white text-sm font-medium">{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="relative">
          <img
            src="/img/Infrastructure.png"
            alt="Infrastructure Illustration"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
          />
          <div className="absolute top-0 right-0 bg-white text-blue-800 px-4 py-2 rounded-bl-lg text-xs font-bold shadow-lg">
            Scalable & Secure
          </div>
        </div>
      </div>
    </section>
  );
}
