const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function sendContactMessage(contactData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Falta VITE_WEB3FORMS_ACCESS_KEY");
    throw new Error("No se pudo enviar la solicitud. Intenta nuevamente.");
  }

  const formPayload = new FormData();

  formPayload.append("access_key", accessKey);
  formPayload.append("subject", "Nuevo mensaje desde la página web COL OBRAS");
  formPayload.append("from_name", "COL OBRAS Web");
  formPayload.append("name", contactData.name);
  formPayload.append("email", contactData.email);
  formPayload.append("phone", contactData.phone);
  formPayload.append("message", contactData.message);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formPayload,
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    console.error("Error enviando formulario con Web3Forms:", result);
    throw new Error(
      result.message || "No se pudo enviar la solicitud. Intenta nuevamente."
    );
  }

  return result;
}
