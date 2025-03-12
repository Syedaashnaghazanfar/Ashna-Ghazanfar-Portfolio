"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaPython, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiSanity } from "react-icons/si";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  icon: React.ReactElement;
  percentage: number;
  color: string;
}

const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl text-yellow-400">{skill.icon}</span>
          <span className="text-lg font-medium text-gray-300">
            {skill.name}
          </span>
        </div>
        <span className="text-gray-400 font-medium">{skill.percentage}%</span>
      </div>

      <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 }}
          className={`h-full ${skill.color} rounded-full`}
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  const skills = [
    { name: "HTML & CSS", icon: <FaHtml5 />, percentage: 85, color: "bg-orange-500" },
    { name: "Next.js", icon: <SiNextdotjs />, percentage: 75, color: "bg-gray-200" },
    { name: "TypeScript", icon: <SiTypescript />, percentage: 70, color: "bg-blue-600" },
    { name: "Figma to Next.js", icon: <FaFigma />, percentage: 91, color: "bg-purple-500" },
    { name: "Python", icon: <FaPython />, percentage: 30, color: "bg-green-500" },
    { name: "Sanity", icon: <SiSanity />, percentage: 90, color: "bg-red-500" },
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-yellow-400 uppercase mb-6"
            >
              Meet Ashna
            </motion.h2>

            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-medium text-gray-300 mb-8"
            >
              Frontend Developer & UI Specialist
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              I specialize in creating high-performance web applications with
              Next.js, TypeScript, and Tailwind CSS. Passionate about UI/UX,
              I transform Figma designs into responsive, SEO-optimized
              websites with smooth animations and seamless user experience.
            </motion.p>
          </div>

          {/* Skills Container */}
          <div className="flex-1 space-y-10">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;