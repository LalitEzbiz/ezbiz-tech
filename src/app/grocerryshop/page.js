"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, PhoneCall, X } from "lucide-react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from 'react-icons/fa';
import Link from "next/link";

const benefits = [
    'Get groceries online during lockdown.',
    'Customers receive hassle-free deliveries.',
    'Reduce rush in your physical stores.',
    'Online payment integration.',
    'Mobile app for a seamless experience.',
    'Efficient inventory management.',
    'Analyze consumer behavior and personalize offers.',
    'Easy grocery tracking and management.'
  ];

  const features = [
  'User Friendly Interface', 'Store Inventory Management', 'SEO Friendly', 'Quick Add To Cart',
  'Real Time Live Tracking', 'Advanced Product Search & Filters', 'Discounts & Offers', 'Multi Language',
  'Multiple Payment Methods', 'Seamless Payment Gateway Integration', 'Wishlist Creation', 'Order by Recipe',
  'Appealing Product Details With Features', 'Advanced Admin Panel', 'Technical Support', 'Customer Loyalty Program',
  'Smooth Order Management', 'Customer Analytics', 'Delivery Allocation', 'Future Trend Analysis'
];

const GroceryShopPage = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
    <main className="relative  overflow-hidden text-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-pulse-slow bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-90"></div>

      {/* Floating crystals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 bg-white/10 backdrop-blur-xl rounded-xl animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Page Content */}
      <div className="relative z-10 p-6">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to the Grocery Shopping Software
            </motion.h1>

            <div className="flex justify-center md:justify-start gap-4">
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" onClick={() => setShowModal(true)}>
                <PhoneCall className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/img/Delivery-Boy.png"
              alt="Grocery Delivery"
              className="w-full max-w-sm h-[300px] object-contain rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fade-in-up">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold mb-1">Request for Demo</h2>
              <p className="text-sm text-gray-500 mb-4">
                Please provide the following information
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message.."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

         
    </main>

    <section >
    <div className="bg-gradient-to-br from-green-50 to-green-100 py-16">
      <div className="max-w-6xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-green-800 text-center mb-6"
        >
          Why do we need Online Grocery Software?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Online grocery software simplifies grocery shopping, reducing rush, offering convenience, and boosting sales through personalized experiences and efficient management.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Benefits of Connecting with Online Grocery Software
            </h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/img/Shopping.png"
            alt="Online Grocery Software"
            className="md:w-1/2"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center">
            Key Features of Our Online Grocery Shopping Software
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-lg p-4 flex items-center gap-2 cursor-pointer hover:bg-green-50 transition-colors"
              >
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
    </section>

    <section>
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-bold">Tech Stack Showcase</h1>
        
      </header>

      {/* Tech Stack Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          <motion.div
            className="bg-white text-indigo-600 rounded-lg p-8 shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaHtml5 size={48} />
            <p className="mt-2">HTML5</p>
          </motion.div>
          <motion.div
            className="bg-white text-blue-600 rounded-lg p-8 shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaCss3Alt size={48} />
            <p className="mt-2">CSS3</p>
          </motion.div>
          <motion.div
            className="bg-white text-yellow-500 rounded-lg p-8 shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaJs size={48} />
            <p className="mt-2">JavaScript</p>
          </motion.div>
          <motion.div
            className="bg-white text-gray-600 rounded-lg p-8 shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhp size={48} />
            <p className="mt-2">PHP</p>
          </motion.div>
          <motion.div
            className="bg-white text-cyan-600 rounded-lg p-8 shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaReact size={48} />
            <p className="mt-2">React</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 text-white py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-indigo-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold">How user friendly is Ezbiz Grocery Software?</h3>
            <p className="mt-2 text-lg">
              Ezbiz Grocery Software is designed and coded to support users in the simplest possible way but yet support high-end features.
            </p>
          </div>
          <div className="bg-indigo-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold">Do I have to pay to fix a bug attack?</h3>
            <p className="mt-2 text-lg">
              We provide free bug fixes for any major issues that occur, as we aim to keep your experience smooth and hassle-free.
            </p>
          </div>
          <div className="bg-indigo-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold">Do you offer free maintenance support?</h3>
            <p className="mt-2 text-lg">
              Yes, we offer free maintenance support for a limited time period after purchase, ensuring long-term satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-indigo-900 text-center py-8 text-white">
        <p className="text-lg">Got a Project? Let's Collaborate</p>
      <Link href="/contactjustus"> <button className="mt-4 bg-pink-500 py-2 px-6 rounded-full text-white hover:bg-pink-600 transition-all"> 
          Contact Us </button> </Link>  
      </footer>
    </div>
    </section>
    </>
  );
};

export default GroceryShopPage;

