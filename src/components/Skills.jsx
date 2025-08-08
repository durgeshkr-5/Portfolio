import React from "react";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "React", icon: "⚛️" },
  { name: "Redux Toolkit", icon: "🔄" },
  { name: "JavaScript (ES6+)", icon: "📟" },
  { name: "HTML5", icon: "🔤" },
  { name: "CSS3", icon: "🎨" },
  { name: "Tailwind CSS", icon: "💨" },

  // Backend
  { name: "Node.js", icon: "🌐" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "RESTful APIs", icon: "🔗" },

  // Tools & Others
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Postman", icon: "📮" },
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎯" },

  // Computer Science Fundamentals
  { name: "Data Structures & Algorithms", icon: "📊" },
  { name: "System Design (Basics)", icon: "🏗️" }
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
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center bg-white shadow-md rounded-xl py-4 px-6 text-lg font-medium text-gray-700 hover:scale-105 transition-all duration-300 border border-cyan-100"
            >
              <span className="mr-2 text-xl">{s.icon}</span>
              {s.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
