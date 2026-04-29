import { getMissingMailEnv, mailConfig, transporter } from "../config/mail.js";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactEmail({ name, email, phone, message }) {
  const missingEnv = getMissingMailEnv();

  if (missingEnv.length > 0) {
    const error = new Error(`Faltan variables SMTP: ${missingEnv.join(", ")}`);
    error.statusCode = 500;
    throw error;
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "No indicado");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return transporter.sendMail({
    from: mailConfig.from,
    to: mailConfig.companyEmail,
    replyTo: email,
    subject: `Nuevo contacto desde la web - ${name}`,
    text: [
      "Nuevo mensaje desde el formulario web de COLOBRAS",
      "",
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone || "No indicado"}`,
      "",
      "Mensaje:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
        <h2 style="color: #0b3d91;">Nuevo mensaje desde la web de COLOBRAS</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Teléfono:</strong> ${safePhone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `,
  });
}
