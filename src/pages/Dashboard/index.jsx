import React from "react";
import { Article, ContDiv, ContTechnology, H2, Headers, Main } from "./styles";
import Logo from "../../assets/Logo.png";
import Trash from "../../assets/trash.png";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext/UserContext";
import { ModalContext } from "../../ModalContext/ModalContext";
import { Modal, ModalEdit } from "./Modais";
import { TechContext } from "../../TechContext/TechContext";

export const Dashboard = () => {
  const { user, loading } = useContext(UserContext);
  const { handleOpenModal, handleOpenModalEdit, handleCloseModalEdit } =
    useContext(ModalContext);
  const { userTechs, DeleteTechs } = useContext(TechContext);

  if (loading) {
    return <h2>Carrregando...</h2>;
  }

  return user ? (
    <Main>
      <Modal />
      <ModalEdit />
      <Headers>
        <img src={Logo} alt="Logo" />
        <Link onClick={() => localStorage.clear()} to={"/"}>
          Sair
        </Link>
      </Headers>
      <ContDiv>
        <Article>
          <H2>Olá, {user.name}</H2>
          <span>{user.course_module}</span>
        </Article>
      </ContDiv>
      <ContTechnology>
        <article>
          <h3>Tecnologias</h3>
          <button onClick={handleOpenModal}>+</button>
        </article>
        <ul>
          {userTechs?.map((tech, index) => {
            return (
              <li key={index}>
                <h2>{tech.title}</h2>
                <div>
                  <h5 onClick={handleOpenModalEdit}>{tech.status}</h5>
                  <img
                    onClick={() => handleCloseModalEdit && DeleteTechs(tech.id)}
                    src={Trash}
                    alt="trash"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </ContTechnology>
    </Main>
  ) : (
    <Navigate to="/" />
  );
};
