"use client"

import React, { useState } from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Data:", formData);
    // You can also reset the form here if needed:
    // setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Get in Touch</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" />
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 h-32 resize-none"></textarea>
             <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY_HERE" // 🔁 Replace with your real site key
                onChange={(token) => setRecaptchaToken(token)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">ADDRESS</h3>
            <p>
              Ebriks Technologies Pvt Ltd<br />
              Suit #405, H-28, Sector 63<br />
              Noida, Uttar Pradesh 201301
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">EMAIL</h3>
            <p>info@ebrikssoft.com</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">PHONE</h3>
            <p>+91 9350492320<br />+91 120-4376329</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">FOLLOW US</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={30} />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800">
                <FaWhatsapp size={30} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaLinkedinIn size={30}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

