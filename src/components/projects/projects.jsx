import { ProjectTemplate } from "./projectTemplate";
import "./projects.css";
import { PROJECTS } from "../projects/projectdb";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export const Projects = () => {
  const { refP } = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refP,
    offset: ["70% end", "end end"],
  });

  const opacityVariants = {
    initial: {
      opacity: 0,
      offset: "50%",
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <div className="project-section-container">
      <section ref={refP} id="projects-section">
        <div className="projects-title">
          <h2>Projekte</h2>
        </div>
        <div className="projects-content">
          {PROJECTS.map((project, index) => (
            <ProjectTemplate key={index} data={project} />
          ))}
        </div>
        <div ref={refP}>
          <svg
            className="arrMidLeft"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420.8 1188.16"
          >
            <defs></defs>

            <g id="Ebene_2" data-name="Ebene 2">
              <g id="Ebene_1-2" data-name="Ebene 1">
                <motion.path
                  className="cls-1"
                  d="M99.69,14.32c-.76,1.86-1.5,3.72-2.24,5.57"
                />
                <motion.path
                  pathLength={scrollYProgress}
                  className="cls-2m"
                  d="M93.15,31.06c-33.38,89.19-37.8,164.69-36.91,211.1,1.4,72.68,3.86,201.2,96,278,13.91,11.58,88.91,74.09,170,47,44.91-15,100.11-60.3,98-124-2.06-62.36-57.81-105.28-106-117-81.39-19.82-146.08,48.17-156,59-60.87,66.41-57.6,160.18-57,195,2.08,120.12-14.49,297.5-82.23,572.95"
                />
                <motion.path
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "0px 0px -75% 0px" }}
                  variants={opacityVariants}
                  className="cls-1"
                  d="M17.57,1158.92l-1.44,5.82"
                />
                <motion.path
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "0px 0px -2% 0px" }}
                  variants={opacityVariants}
                  className="cls-3"
                  d="M85.58,9.27A15,15,0,1,1,93.7,28.93,15,15,0,0,1,85.58,9.27Z"
                />
                <motion.path
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "0px 0px -75% 0px" }}
                  variants={opacityVariants}
                  className="cls-3"
                  d="M10.24,1188.16c-1.36-12-4.95-27.45-10.24-37.77l16.81,11.26,20.12-2.11C27.43,1166.19,17.06,1178.14,10.24,1188.16Z"
                />
              </g>
            </g>
          </svg>
          <svg
            className="arrMidRight"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420.8 1188.16"
          >
            <defs></defs>

            <g id="Ebene_2" data-name="Ebene 2">
              <g id="Ebene_1-2" data-name="Ebene 1">
                <motion.path
                  className="cls-1"
                  d="M321.11,14.32c.76,1.86,1.5,3.72,2.24,5.57"
                />
                <motion.path
                  pathLength={scrollYProgress}
                  className="cls-2m"
                  d="M327.66,31.06c33.37,89.19,37.79,164.69,36.9,211.1-1.39,72.68-3.86,201.2-96,278-13.91,11.58-88.91,74.09-170,47-44.91-15-100.11-60.3-98-124,2.06-62.36,57.81-105.28,106-117,81.39-19.82,146.08,48.17,156,59,60.87,66.41,57.6,160.18,57,195-2.08,120.12,14.5,297.5,82.24,572.95"
                />
                <motion.path
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "0px 0px -75% 0px" }}
                  variants={opacityVariants}
                  className="cls-1"
                  d="M403.23,1158.92l1.44,5.82"
                />
                <motion.path
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "0px 0px -2% 0px" }}
                  variants={opacityVariants}
                  className="cls-3"
                  d="M307.44,20.81a15,15,0,1,1,19.66,8.12A15,15,0,0,1,307.44,20.81Z"
                />
                <motion.path
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "0px 0px -75% 0px" }}
                  variants={opacityVariants}
                  className="cls-3"
                  d="M410.56,1188.16c-6.82-10-17.19-22-26.69-28.62l20.12,2.11,16.81-11.25C415.5,1160.71,411.91,1176.12,410.56,1188.16Z"
                />
                <motion.text
                  className="arrow-text"
                  x="50"
                  y="30"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "0px 0px -27% 0px" }}
                  variants={opacityVariants}
                >
                  Its getting hot!
                </motion.text>
              </g>
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
};
