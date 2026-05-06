import { useState } from "react";
import { sendContactMessage } from "../services/api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await sendContactMessage(formData);
      setFormData(initialForm);
      setStatus({
        type: "success",
        message: "Solicitud enviada correctamente. Te contactaremos pronto.",
      });
    } catch (error) {
      console.error("Error enviando solicitud de contacto:", error);
      setStatus({
        type: "error",
        message: "No se pudo enviar la solicitud. Intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <span className="detailLabel">Gerencia técnica</span>
            <a href="tel:+573144650807">314 465 0807</a>
          </div>
          <div>
            <span className="detailLabel">Gerencia administrativa</span>
            <a href="tel:+573125136399">312 513 6399</a>
          </div>
          <div>
            <span className="detailLabel">Teléfono</span>
            <a href="tel:+576086602274">608 660 2274</a>
          </div>
          <div>
            <span className="detailLabel">Correo</span>
            <a href="mailto:col.obrasingarq@gmail.com">col.obrasingarq@gmail.com</a>
          </div>
          <div>
            <span className="detailLabel">Ubicación</span>
            <p>
              Villavicencio - Meta
              <br />
              Mitú - Vaupés
            </p>
          </div>
        </div>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono o WhatsApp"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Describe brevemente tu proyecto"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {status.message && (
          <p className={`formStatus ${status.type}`}>{status.message}</p>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar solicitud"}
        </button>
      </form>
    </section>
  );
}
