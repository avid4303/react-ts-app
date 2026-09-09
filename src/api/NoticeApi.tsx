import { BASE_URL } from "../constans";

type Form = {
  name: string;
  email: string;
  message: string;
}

export const setNoticeApi = (formData: Form) => {
  
  fetch(`${BASE_URL}/contacts`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(formData),
  });
}