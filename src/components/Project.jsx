import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TRAVELGUIDE – DESTINATION RECOMMENDER",
    description:
      "Developed a complete full-stack recommendation platform enabling users to explore curated travel destinations.",
    tech: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
    github: "https://github.com/durgeshkr-5/destination-recommender-backend",
    demo: "https://destination-recommender-frontend.vercel.app/",
    image: "/images/travelGuide.png", 
  },
 
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-cyan-50 to-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-cyan-600 mb-12">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 ">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3 flex-grow">
                  {proj.description}
                </p>
                <p className="text-sm text-gray-800 mb-4">
                  <span className="font-semibold text-cyan-600">Tech Stack:</span>{" "}
                  {proj.tech}
                </p>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
