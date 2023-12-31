import "./hero.css";
import { Link } from "react-scroll";
import HeroText from "./herotext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const greeting = " Igor Obimma".split("");
  const { ref } = useRef(null);
  const isMobile = window.window.innerWidth < 480;
  let opacityVariants = {};

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0", "45% 1"],
  });

  if (!isMobile) {
    console.log("isnotmobile");
    opacityVariants = {
      initial: {
        opacity: 0,
        offset: "50%",
      },
      animate: {
        opacity: 1,
      },
    };
  }
  return (
    <div className="hero-section-container">
      <section ref={ref} id="hero-section">
        <div className="hero-content">
          <div className="hero-title-container">
            <h2 className="hero-title">Hey, ich bin</h2>
            <h2 className="hero-title">
              {greeting.map((letter, index) => {
                return (
                  <HeroText key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </HeroText>
                );
              })}
            </h2>
          </div>
          <p className="hero-text">
            Ein auf Frontend spezialisierter Webentwickler, UI/UX Designer und
            Grafikdesigner.
          </p>
          <div className="arrow">
            <svg className="arrowR" viewBox="0 0 486.81 2089.86">
              <defs>
                <style></style>
              </defs>

              <g id="Ebene_2" data-name="Ebene 2">
                <g id="Ebene_1-2" data-name="Ebene 1">
                  <motion.text
                    className="arrow-text1"
                    x="100"
                    y="30"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ margin: "0px 0px -73% 0px" }}
                    variants={opacityVariants}
                  >
                    Start here
                  </motion.text>
                  <motion.path
                    pathLength={scrollYProgress}
                    className="cls-1"
                    d="M308.38,14.5c39.37,32,90.07,83.49,117.3,158.38,66.21,182.06-86.86,280.75-49.55,515.61,23.72,149.28,99.23,195.44,71.08,324.76-5.71,26.24-26.74,105.29-97.21,166-74.63,64.3-209.82,110.83-289.79,48-41.63-32.71-70.27-96.62-56-155,10.79-44.15,42.43-70.06,57-82,54.92-45,126.5-53.18,174-46,133.8,20.2,213.19,182.87,238,285,39.21,161.43-10.4,367.34-138,449-70.88,45.35-144.84,39-162,93-17.89,56.28,54.62,98.46,48.79,172-4.59,58-54.85,102.86-103.88,134.22"
                  />
                  <motion.path
                    // initial="initial"
                    // whileInView="animate"
                    // viewport={{ margin: "0px 0px -65% 0px" }}
                    // variants={opacityVariants}
                    className="cls-2"
                    d="M299.53,26.79a15,15,0,1,1,21.14-2.37A15,15,0,0,1,299.53,26.79Z"
                  />
                  <motion.path
                    // initial="initial"
                    // whileInView="animate"
                    // viewport={{ margin: "0px 0px -60% 0px" }}
                    // variants={opacityVariants}
                    className="cls-2"
                    d="M119.89 2058.87 122.27 2074.79 135.38 2084.13 97.7 2089.86 119.89 2058.87z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <Link
            to="projects-section"
            duration={500}
            offset={-120}
            smooth={true}
          >
            <div className="hero-button">Projekte</div>
          </Link>

          <div className="mouse-scroll"></div>
        </div>
      </section>
    </div>
  );
};
