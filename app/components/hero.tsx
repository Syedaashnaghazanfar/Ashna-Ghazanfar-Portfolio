import React from "react";
import Image from "next/image";
import { FiInstagram, FiLinkedin, FiGithub, FiBook } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div id="home">
        {/* Hero Section */}
        <div className="relative py-8 overflow-hidden">
          <Image
            src="/assets/img/bg-hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))"
            priority // Loads first for better LCP
            quality={80} // Reduces sizey
            placeholder="blur"
            blurDataURL="/assets/img/bg-hero.jpg" 
          />
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              
              {/* Hero Image */}
              <div className="relative rounded-full border-8 border-transparent ring-4 ring-white ring-opacity-30 animate-spin-slow">
                <div className="relative rotating-ring">
                  <div className="rounded-full overflow-hidden shadow-xl relative z-10 border-4 border-transparent">
                    <Image
                      src="/assets/img/me.jpg"
                      alt="Author"
                      width={224}
                      height={224}
                      className="h-48 w-48 sm:h-56 sm:w-56 object-cover"
                      priority
                      quality={80}
                      placeholder="blur"
                      blurDataURL="/assets/img/me.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Hero Text */}
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl typewriter">
                  Hello, I am <span className="text-yellow-400">Ashna Ghazanfar!</span>
                </h1>

                {/* Social Icons */}
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-4 space-x-6">
                  <Link
                    href="https://www.instagram.com/s_ashnaali/"
                    target="_blank"
                    rel="noopener"
                    className="social-icon"
                  >
                    <FiInstagram className="w-8 h-8 text-white hover:text-pink-500 transition-colors" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/"
                    target="_blank"
                    rel="noopener"
                    className="social-icon"
                  >
                    <FiLinkedin className="w-8 h-8 text-white hover:text-blue-500 transition-colors" />
                  </Link>
                  <Link
                    href="https://github.com/Syedaashnaghazanfar"
                    target="_blank"
                    rel="noopener"
                    className="social-icon"
                  >
                    <FiGithub className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
                  </Link>
                </div>

                {/* Blog Button */}
                <div className="flex flex-col items-center sm:items-start mt-6">
                  <Link
                    href="/blogs"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
                  >
                    <FiBook className="w-5 h-5 mr-2" />
                    My Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Hero;
