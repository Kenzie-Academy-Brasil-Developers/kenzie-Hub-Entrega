import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "../UserContext/UserContext";

export const TechContext = createContext({});

export const TechContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [userTechs, setUserTechs] = useState([]);
  const id = JSON.parse(localStorage.getItem("@idUser"));

  useEffect(() => {
    const Techs = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUserTechs([...response.data.techs]);
      } catch (error) {
        console.error(error);
      }
    };
    Techs();
  }, [id]);

  const RegisterTechs = async (data) => {
    try {
      await api.post("/users/techs", data).then((res) => {
        setUserTechs([...user.techs, data]);
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const DeleteTechs = async (id) => {
    try {
      await api.delete(`/users/techs/${id}`);
      toast.success("Tecnologia excluida com sucesso");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const EditTechs = async (id) => {
    try {
      await api.put(`/users/techs/${id}`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  return (
    <>
      <TechContext.Provider
        value={{
          userTechs,
          setUserTechs,
          RegisterTechs,
          DeleteTechs,
          EditTechs,
        }}
      >
        {children}
      </TechContext.Provider>
    </>
  );
};
