import React from "react";
import { FaPlay, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ProjectCards.css"; // Ensure you have the CSS file

function ProjectCards({ id, name, desc, tags, code, demo, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="singleProject"
    >
      <div className="projectContent">
        <h2 id={name.replace(" ", "-").toLowerCase()}>{name}</h2>
        <img src={image} alt={name} className="project-image" />
        <div className="project--showcaseBtn">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()}-demo`}
          >
            <FaPlay aria-label="Demo" />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()}-code`}
          >
            <FaCode aria-label="Code" />
          </a>
        </div>
      </div>
      <p className="project--desc">{desc}</p>
      <div className="project--lang">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCards;
