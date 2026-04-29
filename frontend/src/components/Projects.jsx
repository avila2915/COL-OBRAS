import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="sectionIntro centered">
        <p className="sectionEyebrow">Portafolio</p>
        <h2>Proyectos ejecutados</h2>
        <p>
          Referencias de trabajo en saneamiento básico, infraestructura urbana,
          energía, escenarios deportivos y recuperación ambiental.
        </p>
      </div>

      <div className="projectsGrid">
        {projects.map((project) => (
          <article key={project.title} className="projectCard">
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.location}</p>
            </div>
            <div className="projectBody">
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
