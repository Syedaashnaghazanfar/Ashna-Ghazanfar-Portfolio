import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        
        <div className="flex justify-between items-center border-b-4 border-yellow-400 pb-4">
          <h2 className="text-2xl font-bold">Ashna Ghazanfar</h2>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/" target="_blank" className="text-yellow-400 hover:text-yellow-300">
              <FaLinkedin size={28} />
            </Link>
            <Link href="https://www.instagram.com/s_ashnaali/" target="_blank" className="text-yellow-400 hover:text-yellow-300">
              <FaInstagram size={28} />
            </Link>
            <Link href="https://web.whatsapp.com/send?phone=923312392814" target="_blank" className="text-yellow-400 hover:text-yellow-300">
              <FaWhatsapp size={28} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
          <div className="flex justify-center gap-6 mt-2 text-yellow-400 text-sm">
            <Link href="#home" className="hover:underline">Home</Link>
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#services" className="hover:underline">Services</Link>
            <Link href="#portfolio" className="hover:underline">Portfolio</Link>
            <Link href="#statistics" className="hover:underline">Statistics</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-300">About Me</h3>
          <p className="mt-2 text-gray-400 text-sm">
            Web Developer | UI/UX Enthusiast | Pre-Med Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
