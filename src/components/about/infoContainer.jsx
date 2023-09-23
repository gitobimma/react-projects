import React from "react";
import "./about.css";
import { DEVSKILLS } from "./devskills";
import { DESIGNSKILLS } from "./designskills";
import { Link } from "react-scroll";
import { motion, useTransform } from "framer-motion";
import me from "../../assets/igor-meltingorange.webp";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export const InfoContainer = () => {
  return (
    <div className="me">
      <div className="aboutText">
        <h4 className="introHeading">Lern mich kennen!</h4>
        <p className="intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci non
          laborum, culpa cum dolorum ex, aliquam ullam nam similique nesciunt
          magni impedit consectetur dignissimos consequatur deserunt nulla
          repellendus ut nisi nobis quam veritatis commodi. Obcaecati excepturi
          totam unde cumque, hic repellat eligendi aliquam quos tempore nulla
          enim ipsum nihil et fugiat voluptates consequuntur! Praesentium minus
          non deleniti! Impedit doloribus veritatis, tempore laborum ipsa illo
          voluptate ullam.
        </p>
      </div>
      <div className="skills">
        <h3 className="meine-skills">Skills</h3>
        <div className="devskills">
          <h4 className="skillHeading">Entwicklung</h4>
          <ul className="skills-list">
            {DEVSKILLS.map((skill, index) => (
              <li>
                {<img className="icon" src={skill.icon}></img>}
                {<p className="skill-name">{skill.name}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div className="designskills">
          <h4 className="skillHeading">Design</h4>
          <ul className="skills-list">
            {DESIGNSKILLS.map((skill, index) => (
              <li>
                {<img className="icon" src={skill.icon}></img>}
                {<p className="skill-name">{skill.name}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="contact-section" duration={500} offset={-120} smooth={true}>
        <div className="about-button">Schreib mir!</div>
      </Link>
    </div>
  );
};
