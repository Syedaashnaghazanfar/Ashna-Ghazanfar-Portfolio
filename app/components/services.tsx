"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const servicesList = [
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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const floatAnimation = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-black py-16 md:py-20" id="services">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="font-header text-4xl font-semibold uppercase text-yellow-400 sm:text-5xl lg:text-6xl neon-glow tracking-wide">
            Here is what I excel  at
          </h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-header text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl"
          >
            Services I passionately offer
          </motion.h3>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-gray-900/50 p-8 backdrop-blur-lg transition-all"
              style={{
                boxShadow: "inset 0 0 15px rgba(234, 179, 8, 0.1)",
              }}
            >
              {/* Floating Icon */}
              <motion.div
                variants={floatAnimation}
                animate="float"
                className="mx-auto mb-8 h-20 w-20"
              >
                <Image
                  src={`/assets/img/${service.img}`}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="transform transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <motion.h3
                  whileHover={{ color: "#fbbf24" }}
                  className="mb-4 text-lg font-bold uppercase text-yellow-400 lg:text-xl"
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
                  {service.desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;