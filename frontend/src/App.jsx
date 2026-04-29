import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" className="hero">
          <div className="heroContent">
            <p className="eyebrow">Ingeniería y Arquitectura S.A.S</p>
            <h1>Infraestructura técnica para la región Amazorinoquia</h1>
            <p>
              Diseñamos y ejecutamos soluciones en saneamiento básico, infraestructura
              urbana, energías renovables, iluminación, vías y proyectos ambientales.
            </p>

            <div className="heroButtons">
              <a href="#proyectos">Ver proyectos</a>
              <a href="#contacto" className="secondary">Solicitar asesoría</a>
            </div>
          </div>

          <div className="heroPanel" aria-label="Resumen de experiencia">
            <div>
              <strong>7+</strong>
              <span>años de experiencia</span>
            </div>
            <div>
              <strong>6</strong>
              <span>áreas técnicas</span>
            </div>
            <div>
              <strong>Meta y Vaupés</strong>
              <span>cobertura regional</span>
            </div>
          </div>
        </section>

        <section id="empresa" className="company">
          <div className="sectionIntro">
            <p className="sectionEyebrow">Empresa</p>
            <h2>Construimos soluciones funcionales, seguras y sostenibles</h2>
          </div>

          <div className="companyGrid">
            <article className="companyText">
              <p>
                COL OBRAS Ingeniería y Arquitectura S.A.S es una empresa constructora
                con experiencia legal y certificada en proyectos de ingeniería,
                arquitectura e infraestructura.
              </p>
              <p>
                Nuestro trabajo integra consultoría, diseño, construcción y gestión
                técnica para entidades, comunidades y proyectos que requieren ejecución
                responsable en entornos urbanos, rurales y ambientales.
              </p>
            </article>

            <div className="missionGrid">
              <article>
                <h3>Misión</h3>
                <p>
                  Ofrecer soluciones integrales desde el diseño hasta la construcción,
                  creando entornos funcionales, seguros y estéticos.
                </p>
              </article>
              <article>
                <h3>Visión</h3>
                <p>
                  Ser una empresa líder en la región Amazorinoquia, reconocida por su
                  calidad, innovación y compromiso con la sociedad.
                </p>
              </article>
            </div>
          </div>
        </section>

        <Services />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
}
