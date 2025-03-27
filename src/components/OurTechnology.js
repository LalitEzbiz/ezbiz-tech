"use client";
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image

const techStack = [
  { name: "Angular", logo: "/img/angular.png" },
  { name: "React", logo: "/img/react.png" },
  { name: ".NET", logo: "/img/nett.png" },
  { name: "Java", logo: "/img/java.png" },
  { name: "Node.js", logo: "/img/node.png" },
  { name: "Python", logo: "/img/python.png" },
  { name: "PHP", logo: "/img/php.png" },
  { name: "Bootstrap", logo: "/img/bootstrap.png" },
  { name: "MySQL", logo: "/img/mysql.png" },
  { name: "WordPress", logo: "/img/wordpress.png" },
  { name: "HTML5", logo: "/img/html.png" },
  { name: "Magento", logo: "/img/magento.png" },
  { name: "SQL Server", logo: "/img/sqlserver.png" },
  { name: "CSS3", logo: "/img/css.png" },
  { name: "jQuery", logo: "/img/jquery.png" },
  { name: "osCommerce", logo: "/img/oscommerce.png" },
  { name: "Zend", logo: "/img/zendframework.png" },
  { name: "SharePoint", logo: "/img/sharepoint.png" },
  { name: "Shopify", logo: "/img/semantic.png" },
  { name: "MongoDB", logo: "/img/mongodb.png" },
  { name: "PostgreSQL", logo: "/img/postgresql.png" },
];

export default function OurTechnology() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#581c87]">
      {/* Glowing background blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-[120px] animate-ping" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-white text-4xl font-extrabold mb-6">
          Our Technology Stack
        </h2>
        <p className="text-purple-100 max-w-2xl mx-auto mb-12">
          We work with a wide range of tools, frameworks, and platforms to build innovative solutions tailored to your needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center justify-center text-white transition-transform transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={56}
                height={56}
                className="object-contain mb-3"
              />
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
