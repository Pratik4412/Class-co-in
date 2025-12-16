import api from "./axios";

export const sendContactMail = (formData) => {
  return api.post("/mail/contact", formData);
};
