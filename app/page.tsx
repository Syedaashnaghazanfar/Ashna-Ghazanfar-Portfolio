
import Link from "next/link";

import Image from "next/image";
import Script from "next/script";
import Navbar from "@/app/components/navbar";
import { Post } from "@/types/post";
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaHtml5, FaPython, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiSanity } from "react-icons/si";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = async () => {
  const posts: Post[] = await client.fetch(query); // Fetch posts using the globally defined client
  const skills = [
    {
      name: "HTML & CSS",
      icon: <FaHtml5 className="text-orange-500" />,
      percentage: 85,
      color: "bg-orange-500",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black" />,
      percentage: 75,
      color: "bg-black",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      percentage: 70,
      color: "bg-blue-600",
    },
    {
      name: "Figma to Next js",
      icon: <FaFigma className="text-purple-500" />,
      percentage: 91,
      color: "bg-purple-500",
    },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-500" />,
      percentage: 30,
      color: "bg-yellow-500",
    },
    {
      name: "Sanity",
      icon: <SiSanity className="text-red-500" />,
      percentage: 90,
      color: "bg-red-500",
    },
  ];
  const projects = [
    {
      img: "/assets/img/dua.png",
      title: "Dua's Diary",
      desc: "A beautifully designed diary for daily prayers and reflections.",
      link: "https://duas-diary.vercel.app/",
    },
    {
      img: "/assets/img/coffee.png",
      title: "Coffee Shop",
      desc: "An elegant coffee shop website featuring an intuitive UI.",
      link: "https://syeda-coffee-website.vercel.app/",
    },
    {
      img: "/assets/img/shopEasy.png",
      title: "Ecommerce Platform",
      desc: "A user-friendly e-commerce platform with a modern design and Sanity .",
      link: "https://milestone-3-ecommerce-three.vercel.app/",
    },
    {
      img: "/assets/img/shop.png",
      title: "ShopCo",
      desc: "An e-commerce platform designed for seamless shopping.",
      link: "https://syeda-shop-co.vercel.app/",
    },
    {
      img: "/assets/img/gemini-unit-converter.png",
      title: "Gemini Powered Unit Converter",
      desc: "A Unit Converter using python, Gemini API & Streamlit.",
      link: "https://ashna-unit-converter.streamlit.app/",
    },
    {
      img: "/assets/img/portfolio.png",
      title: "Portfolio Website",
      desc: "A fully responsive portfolio made using Nextjs.",
      link: "https://syeda-ashna-portfolio-tailwind.vercel.app/",
    },
    {
      img: "/assets/img/bandageweb.png",
      title: "E-Commerce Platform",
      desc: "A full stack project made using APIs, Sanity, Tailwind, Stripe, Clerk & Landbot.",
      link: "https://bandage-app-nine.vercel.app/",
      best: true,
    },
  ];

  return (
    <>
      <Script src="/assets/js/main.js"></Script>
      {/* navbar */}
      <Navbar />
      {/* main page */}
      <div id="home">
        {/* Bubbles Animation */}
        <div className="bubbles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={
                {
                  "--size": `${2 + Math.random() * 4}rem`,
                  "--distance": `${6 + Math.random() * 4}rem`,
                  "--duration": `${2 + Math.random() * 2}s`,
                  "--delay": `${-1 * (1 + Math.random() * 3)}s`,
                } as React.CSSProperties
              }
            ></div>
          ))}
        </div>

        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat py-8 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/assets/img/bg-hero.jpg)",
          }}
        >
          <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              {/* Animated Profile Picture */}
              <div className="relative rounded-full border-8 border-transparent ring-4 ring-white ring-opacity-30 animate-spin-slow">
                <div className="relative rotating-ring">
                  <div className="rounded-full overflow-hidden shadow-xl relative z-10 border-4 border-transparent">
                    <Image
                      src="/assets/img/me.jpg"
                      className="h-48 w-48 sm:h-56 sm:w-56 object-cover"
                      alt="author"
                      width={224}
                      height={224}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                {/* Typewriter Animation */}
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl typewriter">
                  Hello I am{" "}
                  <span className="text-yellow-400">Ashna Ghazanfar!</span>
                </h1>

                {/* Social Icons */}
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-4 space-x-6">
                  <a
                    href="https://www.instagram.com/s_ashnaali/"
                    target="_blank"
                    rel="noopener"
                    className="social-icon"
                  >
                    <FiInstagram className="w-8 h-8 text-white hover:text-pink-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/"
                    target="_blank"
                    rel="noopener"
                    className="social-icon"
                  >
                    <FiLinkedin className="w-8 h-8 text-white hover:text-blue-500 transition-colors" />
                  </a>
                  <a
                    href="https://github.com/Syedaashnaghazanfar"
                    target="_blank"
                    rel="noopener"
                    className="social-icon"
                  >
                    <FiGithub className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center">
        {/* about */}
        <div className="bg-gray-50 py-16" id="about">
          <div className="container flex flex-col items-center lg:flex-row">
            {/* About Me Section */}
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="text-5xl font-bold text-primary uppercase">
                Meet Ashna
              </h2>
              <h4 className="pt-4 text-2xl font-medium text-gray-800">
                A Frontend Developer
              </h4>
              <p className="pt-4 text-lg text-gray-600 leading-relaxed">
                Passionate about technology, I seamlessly blend my skills in
                frontend development. I specialize in modern web technologies
                like TypeScript, Next.js, and Tailwind CSS. Currently, I’m
                expanding my knowledge in backend development to create
                full-stack applications.
              </p>
            </div>

            {/* Skills Section */}
            <div className="w-full px-6 pt-10 sm:w-3/4 lg:w-2/5 lg:pt-0 mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {skill.icon}
                      <h4 className="text-lg font-semibold text-gray-900">
                        {skill.name}
                      </h4>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {skill.percentage}%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-gray-300 relative">
                    <div
                      className={`h-3 rounded-full ${skill.color} absolute top-0 left-0`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Services */}
        <div
          className="container py-16 md:py-20 px-4 sm:px-8 lg:px-16"
          id="services"
        >
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here is what I am good at
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services I offer
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            {[
              {
                img: "web-development.png",
                title: "WEB DEVELOPMENT",
                desc: "Crafting modern and stunning websites with Next.js, TypeScript, and Figma.",
              },
              {
                img: "initiative.png",
                title: "PROBLEM SOLVER",
                desc: "Thrives on tackling challenges and finding innovative solutions to complex coding and design issues.",
              },
              {
                img: "design-thinking.png",
                title: "CREATIVE IDEAS",
                desc: "Brings fresh, imaginative ideas to every project, blending functionality with aesthetics.",
              },
              {
                img: "creative.png",
                title: "MOBILE EDITOR",
                desc: "Enhancing visuals and content on the go with precision and a keen eye for detail.",
              },
              {
                img: "biology.png",
                title: "BIOLOGY TEACHER",
                desc: "Shares the wonders of biology with engaging teaching techniques.",
              },
              {
                img: "baker.png",
                title: "SELF-TAUGHT BAKER",
                desc: "Turning simple ingredients into delightful creations with creativity and passion.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded px-8 py-12 shadow-lg border-2 border-yellow-400 border-t-4 border-r-0 border-b-0 border-l-4 transition-all duration-500 hover:scale-105 hover:border-r-4 hover:border-l-0 mx-4 sm:mx-6 md:mx-8 lg:mx-4"
              >
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <Image
                    src={`/assets/img/${service.img}`}
                    alt={service.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-500 lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 pt-4 text-sm md:text-base transition-opacity duration-300 hover:opacity-80">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* portfolio */}
        <div className="container py-16 md:py-20" id="portfolio">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check out my Portfolio
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here is what I have done in the past
          </h3>

          <div className="mx-auto grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-12 sm:w-3/4 lg:w-full lg:px-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg p-6 border-2 border-yellow-400 transition-all duration-500 hover:scale-105 ${
                  project.best
                    ? "lg:col-span-2 xl:col-span-2 border-4 border-yellow-500"
                    : ""
                }`}
              >
                {project.best && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                    Best of All
                  </Badge>
                )}
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full rounded-md object-cover"
                />
                <h3 className="pt-4 text-xl font-semibold uppercase text-primary">
                  {project.title}
                </h3>
                <p className="pt-2 text-gray-700 text-sm md:text-base">
                  {project.desc}
                </p>
                <Link href={project.link} className="inline-block mt-4">
                  <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">
                    View Project
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {/* Statistics Section */}
        <div
          className="bg-[#e7e781] bg-top bg-no-repeat pb-16 flex justify-center items-center md:py-16 lg:py-24"
          id="statistics"
        >
          <div className="container">
            <div className="mx-auto w-5/6 bg-white py-16 shadow-lg border-2 border-black  md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12 px-6">
                {[
                  {
                    icon: "/assets/img/icon-project.svg",
                    number: "20",
                    text: "Finished Projects",
                  },
                  {
                    icon: "/assets/img/icon-award.svg",
                    number: "3",
                    text: "Hackathons Completed",
                  },
                  {
                    icon: "/assets/img/icon-happy.svg",
                    number: "10",
                    text: "Satisfied People",
                  },
                  {
                    icon: "/assets/img/icon-puzzle.svg",
                    number: "60",
                    text: "Bugs Fixed",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 border-2 border-black rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                  >
                    <Image
                      src={stat.icon}
                      className="h-16 w-auto animate-bounce"
                      alt="icon"
                      width={100}
                      height={100}
                    />
                    <h1 className="mt-4 font-body text-3xl font-bold text-black sm:text-4xl md:text-5xl">
                      {stat.number}
                    </h1>
                    <h4 className="mt-2 text-gray-700 font-header text-base font-medium sm:text-lg md:text-xl">
                      {stat.text}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-around items-center">
        {/* Blog Section */}
<div className="bg-gray-100 py-16 md:py-20" id="blog">
  <div className="container">
    {/* Section Title */}
    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
      I also like to write Blogs
    </h2>
    {/* Section Subtitle */}
    <h4 className="pt-6 text-center font-header text-xl font-medium text-gray-800 sm:text-2xl lg:text-3xl">
      Check out my latest posts!
    </h4>

    {/* Blog Posts Grid */}
    <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 lg:w-full md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card
          key={post._id}
          className="overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
        >
          {/* Blog Image */}
          <div
            className="h-56 sm:h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${post?.mainImageUrl || "/default-image.jpg"})`,
            }}
          />

          {/* Blog Content */}
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {post?.title || "Untitled Post"}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Click read more to explore my blogs!
            </p>

            {/* Read More Button */}
            <Link href={`/post/${post.slugCurrent}`} passHref>
              <Button className="mt-4 w-full bg-primary text-white hover:bg-black transition duration-300">
                Read More
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>

   {/* Contact Section */}
<div id="contact" className="container py-16 md:py-20 text-center">
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-primary">
    Contact Me
  </h2>
  <p className="mt-4 text-lg text-gray-700">
    Let us connect! Reach out to me on:
  </p>

  <div className="flex justify-center gap-6 mt-8 text-white text-3xl">
    {/* LinkedIn */}
    <Link
      href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-700 p-4 rounded-full hover:bg-blue-800 transition"
    >
      <FaLinkedin />
    </Link>

    {/* Instagram */}
    <Link
      href="https://www.instagram.com/s_ashnaali/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-600 p-4 rounded-full hover:bg-pink-700 transition"
    >
      <FaInstagram />
    </Link>

    {/* WhatsApp Web */}
    <Link
      href="https://web.whatsapp.com/send?phone=923312392814"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 p-4 rounded-full hover:bg-green-700 transition"
    >
      <FaWhatsapp />
    </Link>
  </div>
</div>

      </div>

      {/* footer */}
      <div className="bg-black">
        <div className="container py-6 flex justify-center">
          <p className="text-center font-body text-white">
            © Copyright 2024. All rights reserved, Ashna Ghazanfar.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
