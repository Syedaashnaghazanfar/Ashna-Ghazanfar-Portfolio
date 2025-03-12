"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="bg-black py-16 md:py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-yellow-400 neon-glow text-center">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Let us create something amazing together
        </p>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/nutellacookiesss@gmail.com"    //for sending emails directly
          method="POST"
          className="max-w-2xl mx-auto mt-12 space-y-8"
          onSubmit={() => {
            Swal.fire({
              title: "Success!",
              text: "Your message has been sent.",
              icon: "success",
              confirmButtonColor: "#facc15",
              background: "#000",
              color: "#facc15",
              backdrop: "rgba(0,0,0,0.8)",
            });
            setFormData({ name: "", email: "", message: "" });
          }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div className="space-y-6">
            <div className="relative group">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 w-6 h-6" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full pl-14 pr-4 py-4 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="relative group">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 w-6 h-6" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full pl-14 pr-4 py-4 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="relative group">
              <FiMessageSquare className="absolute left-4 top-6 text-yellow-400 w-6 h-6" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full pl-14 pr-4 py-4 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-16">
          <Link
            href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full text-yellow-400 hover:bg-yellow-400/10 transition-all"
          >
            <FaLinkedin className="w-8 h-8" />
          </Link>

          <Link
            href="https://www.instagram.com/s_ashnaali/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full text-yellow-400 hover:bg-yellow-400/10 transition-all"
          >
            <FaInstagram className="w-8 h-8" />
          </Link>

          <Link
            href="https://github.com/syedaashnaghazanfar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full text-yellow-400 hover:bg-yellow-400/10 transition-all"
          >
            <FaGithub className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
