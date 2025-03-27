'use client';

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  

    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 py-12 text-white text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">We would love to hear from you</p>
      </section>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input text-lg"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input text-lg"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input text-lg"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile No."
                className="input text-lg"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="input h-36 text-lg resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold">ADDRESS</h3>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <p>
                Ezbiz Technologies Pvt Ltd
                <br /> Suit #405, H-28, Sector 63,
                <br /> Noida, Uttar Pradesh 201301
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold">EMAIL</h3>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <p>info@ezbizsoft.com</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold">PHONE</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600" />
                <p>+91 9350492326</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600" />
                <p>+91 120-4576329</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-blue-800"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-blue-600"><FaLinkedinIn /></a>
              <a href="https://wa.me/919350492326" target="_blank" rel="noopener noreferrer" className="social-icon bg-green-500"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          @apply w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500;
        }
        .social-icon {
          @apply w-16 h-16 flex items-center justify-center rounded-full text-white text-3xl hover:scale-110 transition;
        }
      `}</style>
    </div>
  );
}
