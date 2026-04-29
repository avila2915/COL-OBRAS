export default function ContactForm() {
  return (
    <section id="contacto" className="contact">
      <div className="contactInfo">
        <p className="sectionEyebrow">Contacto</p>
        <h2>Solicita una asesoría técnica</h2>
        <p>
          Cuéntanos el alcance de tu proyecto y te contactaremos para revisar
          requerimientos, ubicación, tiempos y condiciones técnicas.
        </p>

        <div className="contactDetails">
          <div>
            <span className="detailLabel">Celular</span>
            <a href="tel:+573144650807">314 465 0807</a>
          </div>
          <div>
            <span className="detailLabel">Teléfono</span>
            <a href="tel:+576086602274">608 660 2274</a>
          </div>
          <div>
            <span className="detailLabel">Correo</span>
            <a href="mailto:col.obrasingarq@gmail.com">col.obrasingarq@gmail.com</a>
          </div>
        </div>
      </div>

      <form className="contactForm">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="text" placeholder="Teléfono o WhatsApp" />
        <textarea placeholder="Describe brevemente tu proyecto" rows="5"></textarea>
        <button type="submit">Enviar solicitud</button>
      </form>
    </section>
  );
}
