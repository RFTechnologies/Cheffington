import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Section: Branding & Newsletter */}
        <div className="flex flex-col space-y-6">
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              {/* Replace with your actual <img> tag */}
              <img 
                src="/" 
                alt="Cheffington Logo" 
                className="object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Cheffington</h2>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-[#FF8400] font-black text-2xl uppercase tracking-wider">
              Eat the Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-300 text-black px-4 py-3 rounded-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-[var(--primary)] text-black font-bold py-3 px-8 rounded-md transition-colors uppercase"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Right Section: Links & Socials */}
        <div className="flex flex-col md:items-end justify-between">
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-[#FF8400] transition-colors">Claim Your Business</a></li>
            <li><a href="#" className="hover:text-[#FF8400] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#FF8400] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FF8400] transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#FF8400] transition-colors">Advertise With Us</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl mr-6">
            <a href="#" className="hover:text-[#FF8400] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-[#FF8400] transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-[#FF8400] transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
