import { services } from "../data/services";

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="sectionIntro centered">
        <p className="sectionEyebrow">Áreas de experiencia</p>
        <h2>Servicios técnicos</h2>
        <p>
          Acompañamos proyectos desde la planificación hasta la ejecución, con enfoque
          en calidad, cumplimiento y sostenibilidad.
        </p>
      </div>

      <div className="servicesGrid">
        {services.map((service) => (
          <article key={service.title} className="serviceCard">
            <span>{service.area}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
