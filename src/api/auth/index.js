import createAxiosInstance from "../axiosInstance";

const api = createAxiosInstance("auth");

export async function login(data) {
  const response =  await api.post("/login", data);  
  return response.data;
}

export async function registerHandler(data) {
 const response =   await api.post("/register", data);
  return response.data;
}
