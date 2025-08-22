import axios from "axios";
import { jwtDecode } from "jwt-decode";

// You can use environment variable or hardcode the URL
export const BASE_URL = import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: BASE_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to:`, config.url);
    const token = localStorage.getItem("access");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const expiry_date = decoded.exp;
        const current_time = Date.now() / 1000;
        if (expiry_date > current_time) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.log("Token expired, removing from localStorage");
          localStorage.removeItem("access");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("access");
      }
    }
    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor for better error logging
api.interceptors.response.use(
  (response) => {
    console.log(`Response received from ${response.config.url}:`, response.status);
    return response;
  },
  (error) => {
    console.error("API Error:", {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default api;
