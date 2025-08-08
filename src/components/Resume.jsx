import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-cyan-50 to-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-600 mb-6"
        >
          Resume
        </motion.h2>

        <motion.a
          href="/Durgesh_Kumar_Resume.pdf"
          
          download="Durgesh_Kumar_Resume.pdf"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-cyan-700 transition-all duration-300 text-lg font-medium"
        >
          📄 Download Resume (PDF)
        </motion.a>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-left grid gap-4 sm:grid-cols-2"
        >
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              🔧 Technical Skills
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React, Redux Toolkit, Tailwind CSS</li>
              <li>Node.js, Express.js, RESTful APIs</li>
              <li>MongoDB, Firebase, Git & GitHub</li>
              <li>Postman, VS Code, Figma</li>
              <li>Data Structures & Algorithms, Basic System Design</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              🎓 Education & Program
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Full Stack Web Development, Masai School (Dec 2024 – Present)</li>
              <li>B.Tech in Electronics & Communication Engineering (Sep 2017 – Oct 2021)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
