import "./about.css";
import { DEVSKILLS } from "./devskills";
import { DESIGNSKILLS } from "./designskills";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import me from "../../assets/igor-meltingorange.webp";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const About = () => {
  return (
    <div>
      <section id="about-section">
        <div className="about-content">
          <div className="about-title">
            <h2>Über mich</h2>
          </div>

          <div className="skills-container">
            <div className="me">
              <div className="aboutText">
                <h4 className="introHeading">Lern mich kennen!</h4>
                <p className="intro">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci non laborum, culpa cum dolorum ex, aliquam ullam nam
                  similique nesciunt magni impedit consectetur dignissimos
                  consequatur deserunt nulla repellendus ut nisi nobis quam
                  veritatis commodi. Obcaecati excepturi totam unde cumque, hic
                  repellat eligendi aliquam quos tempore nulla enim ipsum nihil
                  et fugiat voluptates consequuntur! Praesentium minus non
                  deleniti! Impedit doloribus veritatis, tempore laborum ipsa
                  illo voluptate ullam.
                </p>
              </div>
              <div className="skills">
                <div className="devskills">
                  <h4 className="skillHeading">Development</h4>
                  <ul className="skills-list">
                    {DEVSKILLS.map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: true,
                        }}
                        custom={index}
                      >
                        {<img className="icon" src={skill.icon}></img>}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="designskills">
                  <h4 className="skillHeading">Design</h4>
                  <ul className="skills-list">
                    {DESIGNSKILLS.map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: true,
                        }}
                        custom={index}
                      >
                        {<img className="icon" src={skill.icon}></img>}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-image-container">
              <img className="meImg" src={me} alt="" />
            </div>
          </div>

          <Link to="contact-section" duration={500} offset={-120} smooth={true}>
            <div className="about-button">Schreib mir!</div>
          </Link>
        </div>
      </section>
    </div>
  );
};
