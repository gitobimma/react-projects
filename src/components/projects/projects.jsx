import { ProjectTemplate } from "./projectTemplate";
import "./projects.css";
import { PROJECTS } from "../projects/projectdb";

export const Projects = () => {
  return (
    <div>
      <section id="projects-section">
        <div className="projects-title">
          <h2>Projekte</h2>
        </div>
        <div className="projects-content">
          {PROJECTS.map((project, index) => (
            <ProjectTemplate key={index} data={project} />
          ))}
        </div>
      </section>
    </div>
  );
};
