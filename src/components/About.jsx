import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; 

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
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-cyan-100"
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
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi! I’m{" "}
            <span className="font-semibold text-gray-900">
              Durgesh Kumar
            </span>
            , a passionate Full Stack Web Developer who enjoys crafting clean,
            responsive, and interactive web applications. I specialize in
            building modern UIs with{" "}
            <span className="text-cyan-600 font-medium">React</span> and{" "}
            <span className="text-cyan-600 font-medium">Tailwind CSS</span>, and
            I love solving real-world problems with elegant solutions.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Currently, I'm honing my skills through the immersive Full Stack Web
            Development Program at Masai School, consistently working on
            projects, learning new tools, and pushing the boundaries of what I
            can create.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
