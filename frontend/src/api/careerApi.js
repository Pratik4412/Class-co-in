import api from "./axios";

export const sendCareerApplication = (formData) => {
  return api.post("/career", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
