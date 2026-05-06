const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function sendContactMessage(contactData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Falta configurar VITE_WEB3FORMS_ACCESS_KEY.");
    throw new Error("No se pudo enviar la solicitud. Intenta nuevamente.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "Nuevo mensaje desde la página web COL OBRAS",
      from_name: "COL OBRAS Web",
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone,
      message: contactData.message,
    }),
  });

  const data = await response.json();

  if (!response.ok || data.success === false) {
    console.error("Error enviando formulario con Web3Forms:", data);
    throw new Error("No se pudo enviar la solicitud. Intenta nuevamente.");
  }

  return data;
}
