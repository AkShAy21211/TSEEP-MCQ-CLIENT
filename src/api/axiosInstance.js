import axios from "axios";

// Set up the API instance

function createAxiosInstance(resource) {
  const api = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_DEPLOY_URL}/api/${resource}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add a request interceptor to add the JWT token to the headers

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return api;
}
export default createAxiosInstance;
