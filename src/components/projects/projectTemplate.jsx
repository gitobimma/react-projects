import React from "react";
import { PROJECTS } from "../projects/projectdb";

export const ProjectTemplate = (props) => {
  const { projectName, projectImg, projectDesc, stack } = props.data;
  return (
    <div>
      <div className="project-container">
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
      </div>
    </div>
  );
};
