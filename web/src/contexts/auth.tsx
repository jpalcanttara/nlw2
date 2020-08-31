import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

interface Response {
  user: object;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("@Proffy:user");
    const token = localStorage.getItem("@Proffy:token");

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(JSON.parse(user));
    }
  }, []);

  async function signIn(email: string, password: string) {
    const response = await api.post<Response>("authenticate", {
      email,
      password,
    });

    try {
      const { token, user } = response.data;

      localStorage.setItem("@Proffy:token", token);
      localStorage.setItem("@Proffy:user", JSON.stringify(user));

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser(user);
    } catch (error) {
      alert("Usuário/Senha inválidos");
    }
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
