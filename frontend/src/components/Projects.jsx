import { projects } from "../data/projects";

function ProjectMedia({ project, featured = false }) {
  if (project.images?.length > 1) {
    return (
      <div className={featured ? "featuredImageGrid" : "projectImageGrid"}>
        {project.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${project.title} ${index + 1}`}
            style={
              project.imagePosition
                ? { objectPosition: project.imagePosition }
                : undefined
            }
          />
        ))}
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      style={
        project.imagePosition ? { objectPosition: project.imagePosition } : undefined
      }
    />
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  return (
    <section id="proyectos" className="projects">
      <div className="sectionIntro centered">
        <p className="sectionEyebrow">Portafolio</p>
        <h2>Proyectos ejecutados</h2>
        <p>
          Experiencia documentada en infraestructura educativa, saneamiento
          básico, energía fotovoltaica, monitoreo ambiental, iluminación,
          escenarios deportivos y recuperación ambiental.
        </p>
      </div>

      {featuredProjects.map((project, index) => (
        <article key={project.title} className="featuredProject">
          <div className="featuredProjectMedia">
            <span className="projectNumber">
              No. {String(index + 1).padStart(2, "0")}
            </span>
            <ProjectMedia project={project} featured />
          </div>
          <div className="featuredProjectContent">
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p className="featuredProjectLocation">{project.location}</p>
            {project.specialty ? (
              <dl className="projectMeta featuredProjectMeta">
                <div>
                  <dt>Especialidad</dt>
                  <dd>{project.specialty}</dd>
                </div>
              </dl>
            ) : null}
            <p>{project.description}</p>
            {project.highlights?.length ? (
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}

      <div className="projectsGrid">
        {standardProjects.map((project, index) => (
          <article key={project.title} className="projectCard">
            <div className="projectImageWrap">
              <span className="projectNumber">
                No. {String(featuredProjects.length + index + 1).padStart(2, "0")}
              </span>
              <ProjectMedia project={project} />
            </div>
            <div className="overlay">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.location}</p>
            </div>
            <div className="projectBody">
              {project.specialty ? (
                <dl className="projectMeta">
                  <div>
                    <dt>Especialidad</dt>
                    <dd>{project.specialty}</dd>
                  </div>
                </dl>
              ) : null}
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
