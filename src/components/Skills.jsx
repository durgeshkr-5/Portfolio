/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

// Import icons
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "RESTful APIs", icon: <FaNodeJs className="text-green-600" /> },

  // Tools & Others
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-cyan-50 text-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-600 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{scale:1.1, rotate:5}}
              whileTap={{scale:0.95}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl py-6 px-6 text-lg font-medium text-gray-700 hover:scale-105 transition-all duration-300 border border-cyan-100 "
            >
              <span className="text-4xl mb-2">{s.icon}</span>
              <span>{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
