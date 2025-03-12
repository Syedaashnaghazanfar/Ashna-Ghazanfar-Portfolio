"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiBook, FiCoffee, FiShoppingBag, FiBox, FiCodesandbox, FiUser, FiAward } from "react-icons/fi";

const Portfolio = () => {
  const projects = [
    {
      img: "/assets/img/dua.png",
      title: "Dua's Diary",
      desc: "A beautifully designed diary for daily prayers and reflections.",
      link: "https://duas-diary.vercel.app/",
      icon: <FiBook className="w-8 h-8" />,
    },
    {
      img: "/assets/img/coffee.png",
      title: "Coffee Shop",
      desc: "An elegant coffee shop website featuring an intuitive UI.",
      link: "https://syeda-coffee-website.vercel.app/",
      icon: <FiCoffee className="w-8 h-8" />,
    },
    {
      img: "/assets/img/shopEasy.png",
      title: "Ecommerce Platform",
      desc: "User-friendly e-commerce platform with modern design and Sanity.",
      link: "https://milestone-3-ecommerce-three.vercel.app/",
      icon: <FiShoppingBag className="w-8 h-8" />,
    },
    {
      img: "/assets/img/shop.png",
      title: "ShopCo",
      desc: "E-commerce platform designed for seamless shopping.",
      link: "https://syeda-shop-co.vercel.app/",
      icon: <FiBox className="w-8 h-8" />,
    },
    {
      img: "/assets/img/gemini-unit-converter.png",
      title: "Gemini Unit Converter",
      desc: "Unit Converter using Python, Gemini API & Streamlit.",
      link: "https://ashna-unit-converter.streamlit.app/",
      icon: <FiCodesandbox className="w-8 h-8" />,
    },
    {
      img: "/assets/img/portfolio.png",
      title: "Portfolio Website",
      desc: "Fully responsive portfolio made using Next.js.",
      link: "https://syeda-ashna-portfolio-tailwind.vercel.app/",
      icon: <FiUser className="w-8 h-8" />,
    },
    {
      img: "/assets/img/bandageweb.png",
      title: "E-Commerce Platform",
      desc: "Full stack project with Sanity, Tailwind, Stripe & Clerk.",
      link: "https://bandage-app-nine.vercel.app/",
      icon: <FiAward className="w-8 h-8" />,
      best: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  return (
    <div className="bg-black py-16 md:py-20" id="portfolio">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-header text-4xl font-semibold uppercase text-yellow-400 sm:text-5xl lg:text-6xl neon-glow">
            My Creative Portfolio
          </h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-6 font-header text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl"
          >
            Journey Through Digital Excellence
          </motion.h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`relative group overflow-hidden rounded-xl p-6 bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20
              }`}
            >

              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="mt-6 flex items-start space-x-4">
                <div className="text-yellow-400 bg-yellow-400/10 p-3 rounded-full">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 uppercase neon-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{project.desc}</p>
                </div>
              </div>

              <Link href={project.link} target="_blank" className="mt-6 inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
                >
                  Explore Project
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;