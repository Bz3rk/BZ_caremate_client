// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "../utility/constant";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load stored user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/user-login/`, credentials);
      console.log(response);
      const { access, refresh, user } = response.data;

      // Saves tokens & user info
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
      console.log("Login successful:", user);
      return true;
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Connection refused: Could not connect to the server.");
      }
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier access
export const useAuth = () => {
  return useContext(AuthContext);
};
