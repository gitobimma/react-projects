import React from "react";
import "./about.css";
import { DEVSKILLS } from "./devskills";
import { DESIGNSKILLS } from "./designskills";
import { Link } from "react-scroll";

export const InfoContainer = () => {
  return (
    <div className="me">
      <div className="aboutText">
        <h4 className="introHeading">Lern mich kennen!</h4>
        <p className="intro">
          Ich bin ein freiberuflicher Frontend Web Developer, mit umfangreicher
          Erfahrung in der Gestaltung und Entwicklung von Websites mit WordPress
          und und React. Schauen Sie sich einige meiner Arbeiten im
          Projekte-Bereich an.
          <br />
          <br /> Ich stehe für Jobmöglichkeiten offen, bei denen ich dazu
          beitragen, lernen und wachsen kann. Wenn Sie eine gute Gelegenheit
          haben, die zu meinen Fähigkeiten und meiner Erfahrung passt, zögern
          Sie nicht, mich zu kontaktieren.
        </p>
      </div>
      <div className="skills">
        <h3 className="meine-skills">Skills</h3>
        <div className="devskills">
          <h4 className="skillHeading">Entwicklung</h4>
          <ul className="skills-list">
            {DEVSKILLS.map((skill, index) => (
              <li key={index}>
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
              <li key={index}>
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
