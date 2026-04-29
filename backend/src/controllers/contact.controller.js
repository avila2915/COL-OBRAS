import { sendContactEmail } from "../services/mail.service.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactPayload({ name, email, message }) {
  const errors = {};

  if (!name || !String(name).trim()) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!email || !String(email).trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!emailRegex.test(String(email).trim())) {
    errors.email = "El correo electrónico no tiene un formato válido.";
  }

  if (!message || !String(message).trim()) {
    errors.message = "El mensaje es obligatorio.";
  }

  return errors;
}

export async function createContact(req, res, next) {
  try {
    const contactData = {
      name: req.body?.name?.trim(),
      email: req.body?.email?.trim(),
      phone: req.body?.phone?.trim() || "",
      message: req.body?.message?.trim(),
    };

    const errors = validateContactPayload(contactData);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        ok: false,
        message: "Revisa los campos del formulario.",
        errors,
      });
    }

    await sendContactEmail(contactData);

    return res.status(200).json({
      ok: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    return next(error);
  }
}
