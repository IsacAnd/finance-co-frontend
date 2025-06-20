import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const isAuthenticated = () => !!token;

  const login = (newToken) => {
    localStorage.setItem("token", token);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
