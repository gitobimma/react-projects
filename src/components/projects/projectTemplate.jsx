import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ProjectTemplate = (props) => {
  const refTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refTarget,
    offset: ["0 1", "2 1"],
  });

  const moveY = useTransform(scrollYProgress, [0, 0.5, 1], [500, 250, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 1]);
  const opacValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 1]);

  const { projectName, projectImg, projectDesc, stack } = props.data;
  return (
    <motion.div
      ref={refTarget}
      style={{ opacity: scrollYProgress, y: moveY, scale: scaleValue }}
      viewport={{ once: true }}
    >
      <motion.div className="project-container">
        <div className="project-info">
          <div>
            <h3 className="project-title">{projectName}</h3>
            <p className="project-description">{projectDesc}</p>
          </div>
          <ul className="stack">
            {stack.map((tech, index) => (
              <li key={index} className="stack-element">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-image-container">
          <img className="project-image" src={projectImg} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};
