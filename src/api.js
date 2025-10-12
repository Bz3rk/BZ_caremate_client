import axios from "axios";
import { BASE_URL } from "./utility/constant";
import { useNavigate } from "react-router-dom";


const navigate = useNavigate()

const api = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor this adds Authorization header
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor this handles token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) throw new Error("No refresh token");

        const res = await axios.post(`${BASE_URL}/token/refresh/`, {
          refresh: refreshToken,
        });

        const newAccessToken = res.data.access;
        localStorage.setItem("access_token", newAccessToken);

        // Updates default headers and retry original request
        api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        localStorage.clear();
         navigate("/login", { replace: true });
      }
    }
    return Promise.reject(error);
  }
);

export default api;
