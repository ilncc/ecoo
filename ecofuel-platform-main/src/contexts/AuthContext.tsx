import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  phone: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (phone: string, password: string) => boolean;
  register: (phone: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (phone: string, password: string) => {
    // Простая имитация входа
    if (phone && password.length >= 6) {
      setUser({ phone });
      return true;
    }
    return false;
  };

  const register = (phone: string, password: string) => {
    // Простая имитация регистрации
    if (phone && password.length >= 6) {
      setUser({ phone });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
