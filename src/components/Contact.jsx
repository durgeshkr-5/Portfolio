/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-cyan-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-600 mb-6"
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Let’s connect! Feel free to reach out for collaborations, projects, or just to say hi 👋
        </p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 px-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-white to-cyan-50/80 
                       p-6 rounded-2xl shadow-xl border border-cyan-100 backdrop-blur-sm"
          >
            <FaEnvelope className="text-cyan-600 text-2xl mb-2" />
            <a href="mailto:durgeshkr.ece@gmail.com" className="text-gray-700">
              durgeshkr.ece@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-white to-cyan-50/80 
                       p-6 rounded-2xl shadow-xl border border-cyan-100 backdrop-blur-sm"
          >
            <FaPhone className="text-cyan-600 text-2xl mb-2" />
            <a href="tel:+917677667066" className="text-gray-700">
              +91 7677667066
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-white to-cyan-50/80 
                       p-6 rounded-2xl shadow-xl border border-cyan-100 backdrop-blur-sm"
          >
            <FaMapMarkerAlt className="text-cyan-600 text-2xl mb-2" />
            <p className="text-gray-700">Bihar, India</p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          action="mailto:durgesh.email@example.com"
          method="GET"
          className="flex flex-col gap-5 bg-gradient-to-br from-white to-cyan-50/80 
                     w-[95%] sm:w-[90%] md:max-w-lg mx-auto p-6 sm:p-8 
                     rounded-2xl shadow-xl border border-cyan-100 backdrop-blur-sm"
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition duration-300 font-medium"
          >
            📧 Send Message
          </button>
        </motion.form>

        {/* Socials */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/durgeshkr-5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-600 text-2xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/durgeshkr5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-cyan-600 text-2xl transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
