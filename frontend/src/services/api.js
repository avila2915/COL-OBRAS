const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function sendContactMessage(contactData) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || "No se pudo enviar el mensaje.");
    error.details = data.errors;
    throw error;
  }

  return data;
}
