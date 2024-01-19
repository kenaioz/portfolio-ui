import axios from "axios";

const api = axios.create({
  baseURL: "https://api.emailjs.com/api/v1.0/email",
});

const sendEmail = async (contactData) => {
  const apiData = {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLATE_ID,
    user_id: import.meta.env.VITE_PUBLIC_KEY,
    template_params: { ...contactData },
  };

  try {
    await api.post("/send", apiData);

    return;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error - Response:", error.response.data.message);
  } else if (error.request) {
    console.error("API Error - No Response:", error.request);
  } else {
    console.error("API Error:", error.message);
  }
  throw error;
};

export { api, sendEmail };
