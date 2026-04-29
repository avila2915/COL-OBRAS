export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="brand" aria-label="COL OBRAS inicio">
        <span className="brandMark">CO</span>
        <span>COL OBRAS</span>
      </a>

      <nav className="navLinks" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#empresa">Empresa</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto" className="navCta">Contacto</a>
      </nav>
    </header>
  );
}
