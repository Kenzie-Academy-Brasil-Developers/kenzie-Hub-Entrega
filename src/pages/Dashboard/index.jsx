import React from "react";
import { Article, ContArticle, H2, H3, H4, Headers, Main } from "./styles";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export const Dashboard = ({ user }) => {
  return (
    <Main>
      <Headers>
        <img src={Logo} alt="Logo" />
        <Link onClick={() => localStorage.clear()} to={"/"}>
          Sair
        </Link>
      </Headers>
      <div>
        <Article>
          <H2>Olá, {user.name}</H2>
          <span>{user.course_module}</span>
        </Article>
      </div>
      <br />
      <br />
      <ContArticle>
        <H3>Que pena! Estamos em desenvolvimento :( </H3>
        <H4>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </H4>
      </ContArticle>
    </Main>
  );
};
