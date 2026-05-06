import { useEffect, useState } from "react";
import logoColObrasMark from "../assets/images/logo-colobras-mark.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar${isScrolled ? " isScrolled" : ""}`}>
      <a href="#inicio" className="brand" aria-label="COL OBRAS inicio">
        <span className="brandLogoShell">
          <img src={logoColObrasMark} alt="" className="brandLogo" />
        </span>
        <span className="brandText">
          <strong>COL OBRAS</strong>
          <span>Ingeniería y Arquitectura S.A.S.</span>
        </span>
      </a>

      <nav className="navLinks" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#empresa">Empresa</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto" className="navCta">
          Contacto
        </a>
      </nav>
    </header>
  );
}
