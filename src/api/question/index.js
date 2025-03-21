import createAxiosInstance from "../axiosInstance";

const api = createAxiosInstance("question");

export async function getQuestions() {
  const response = await api.get("/");
  return response.data;
}
