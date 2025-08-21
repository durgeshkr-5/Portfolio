/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-cyan-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src={profileImage}
            alt="Durgesh Kumar"
            className="w-64 h-64 object-cover object-top rounded-2xl shadow-lg border-4 border-cyan-100"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-gray-900">Durgesh Kumar</span>, 
            a detail-oriented <strong>Full Stack Web Developer</strong> specializing in building 
            scalable, user-focused web applications. I bring expertise in 
            <span className="text-cyan-600 font-medium"> React</span>, 
            <span className="text-cyan-600 font-medium"> Node.js</span>, and 
            <span className="text-cyan-600 font-medium"> MongoDB</span>, with a passion for crafting 
            clean, responsive, and high-performance UIs using 
            <span className="text-cyan-600 font-medium"> Tailwind CSS</span>.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Currently, I’m sharpening my skills through Masai School’s intensive 
            Full Stack Web Development program—building real-world projects, solving 
            complex problems, and continuously exploring new technologies to deliver 
            impactful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
