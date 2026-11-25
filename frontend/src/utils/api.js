// Centralized API setup
import axios from "axios";

console.log("ENV:", import.meta.env.VITE_API_BASE_URL);
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export default api;