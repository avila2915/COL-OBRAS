const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ERROR_MESSAGE =
  "No se pudo enviar la solicitud. Intenta nuevamente.";

function appendHiddenInput(form, name, value) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = value || "";
  form.appendChild(input);
}

function buildFormPayload(contactData, accessKey) {
  const formPayload = new FormData();

  formPayload.append("access_key", accessKey);
  formPayload.append("subject", "Nuevo mensaje desde la página web COL OBRAS");
  formPayload.append("from_name", "COL OBRAS Web");
  formPayload.append("name", contactData.name);
  formPayload.append("email", contactData.email);
  formPayload.append("phone", contactData.phone);
  formPayload.append("message", contactData.message);

  return formPayload;
}

async function submitWithFetch(formPayload) {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formPayload,
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    const error = new Error(result.message || WEB3FORMS_ERROR_MESSAGE);
    error.web3formsRejected = true;
    throw error;
  }

  return result;
}

function submitWithNativeForm(contactData, accessKey) {
  return new Promise((resolve, reject) => {
    const iframeName = `web3forms_${Date.now()}`;
    const iframe = document.createElement("iframe");
    const form = document.createElement("form");
    let submitted = false;

    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error(WEB3FORMS_ERROR_MESSAGE));
    }, 15000);

    function cleanup() {
      window.clearTimeout(timeout);
      form.remove();
      iframe.remove();
    }

    iframe.name = iframeName;
    iframe.style.display = "none";

    iframe.addEventListener("load", () => {
      if (!submitted) {
        return;
      }

      cleanup();
      resolve({ success: true });
    });

    form.action = WEB3FORMS_ENDPOINT;
    form.method = "POST";
    form.target = iframeName;
    form.enctype = "multipart/form-data";
    form.style.display = "none";

    appendHiddenInput(form, "access_key", accessKey);
    appendHiddenInput(form, "subject", "Nuevo mensaje desde la página web COL OBRAS");
    appendHiddenInput(form, "from_name", "COL OBRAS Web");
    appendHiddenInput(form, "name", contactData.name);
    appendHiddenInput(form, "email", contactData.email);
    appendHiddenInput(form, "phone", contactData.phone);
    appendHiddenInput(form, "message", contactData.message);

    document.body.appendChild(iframe);
    document.body.appendChild(form);

    submitted = true;
    form.submit();
  });
}

export async function sendContactMessage(contactData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Falta VITE_WEB3FORMS_ACCESS_KEY");
    throw new Error(WEB3FORMS_ERROR_MESSAGE);
  }

  try {
    return await submitWithFetch(buildFormPayload(contactData, accessKey));
  } catch (error) {
    if (error.web3formsRejected) {
      console.error("Error enviando formulario con Web3Forms:", error);
      throw error;
    }

    console.warn("Fetch a Web3Forms falló; usando envío nativo.", error);
    return submitWithNativeForm(contactData, accessKey);
  }
}
