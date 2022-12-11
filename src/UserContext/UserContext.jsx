import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [Disabled, setDisabled] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("@token"));

  const userLogin = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@token", JSON.stringify(response.data.token));
      localStorage.setItem("@idUser", JSON.stringify(response.data.user.id));
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      setUser(response.data.user);
      toast.success("Login realizado com sucesso");
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error("Email ou Senha invalido");
    }
  };

  const userRegister = async (formData) => {
    try {
      setDisabled(true);
      await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Email ja existente");
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [token]);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          Disabled,
          userLogin,
          userRegister,
          loading,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
