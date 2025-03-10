"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaPython, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiSanity } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const About = () => {
  const skills = [
    {
      name: "HTML & CSS",
      icon: <FaHtml5 className="text-orange-500" />,
      percentage: 85,
      color: "bg-orange-500",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-200" />,
      percentage: 75,
      color: "bg-gray-200",
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
      icon: <FaPython className="text-green-500" />,
      percentage: 30,
      color: "bg-green-500",
    },
    {
      name: "Sanity",
      icon: <SiSanity className="text-red-500" />,
      percentage: 90,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="bg-black py-20" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row gap-12 xl:gap-24"
        >
          {/* About Content */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-yellow-400 uppercase mb-6"
            >
              Meet Ashna
            </motion.h2>

            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-medium text-gray-300 mb-8"
            >
              Frontend Developer & UI Specialist
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed mb-12 lg:mb-0"
            >
              As a dedicated frontend engineer with a passion for creating
              pixel-perfect digital experiences, I've successfully delivered
              over 15 web projects ranging from dynamic eCommerce platforms to
              responsive corporate websites. My expertise lies in transforming
              intricate Figma designs into fully functional, high-performance
              web applications using modern technologies like Next.js,
              TypeScript, and Tailwind CSS. Specializing in eCommerce
              development, I architect online stores that combine seamless user
              experiences with robust functionality, integrating payment
              gateways, inventory management, and customer analytics. My
              development process emphasizes clean, maintainable code while
              ensuring cross-browser compatibility and mobile-first
              responsiveness. Beyond frontend development, I bridge the gap
              between design and technology by offering comprehensive website
              development services. Whether it's converting complex design
              mockups into interactive interfaces or optimizing existing
              websites for better performance and SEO, I approach each project
              with meticulous attention to detail.
            </motion.p>
          </div>

          {/* Skills Container */}
          <div className="flex-1 space-y-10">
            {skills.map((skill, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              return (
                <div key={index} ref={ref} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl text-yellow-400">
                        {skill.icon}
                      </span>
                      <span className="text-lg font-medium text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-400 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
