import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-cyan-50 text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-600 mb-10"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          action="mailto:durgesh.email@example.com"
          method="GET"
          className="flex flex-col gap-5 bg-white/70 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-cyan-100"
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
      </div>
    </section>
  );
}

export default Contact;
