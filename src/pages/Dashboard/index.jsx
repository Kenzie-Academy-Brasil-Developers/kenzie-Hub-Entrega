import React from "react";
import { Article, ContArticle, H2, H3, H4, Headers, Main } from "./styles";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../services/api";

export const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("@token"));
  useEffect(() => {
    const getProfile = async () => {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("@name", JSON.stringify(response.data.name));
      localStorage.setItem(
        "@course_module",
        JSON.stringify(response.data.course_module)
      );
    };
    getProfile();
  }, [token]);
  const Name = JSON.parse(localStorage.getItem("@name"));
  const module = JSON.parse(localStorage.getItem("@course_module"));
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
          <H2>Olá, {Name}</H2>
          <span>{module}</span>
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
