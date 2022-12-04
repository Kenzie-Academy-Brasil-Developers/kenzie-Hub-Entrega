import React from "react";
import { H1, Headers, Main, Span } from "./styles";
import Logo from "../../assets/Logo.png";
import { Inputs } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Main>
      <Headers>
        <img src={Logo} alt="Logo" />
        <Link to={"/"}>Voltar</Link>
      </Headers>
      <form onSubmit={handleSubmit(submit)}>
        <H1>Crie sua conta</H1>
        <Span>Rapido e grátis, vamos nessa</Span>
        <Inputs
          id={`Nome`}
          placeholder={`Digite aqui seu nome`}
          label={`Nome`}
          type={`text`}
          register={register("name")}
        />
        <Inputs
          id={`Email`}
          placeholder={`Digite aqui seu email`}
          label={`Email`}
          type={`email`}
          register={register("email")}
        />
        <Inputs
          id={`Senha`}
          placeholder={`Digite aqui sua senha`}
          label={`Senha`}
          type={`password`}
          register={register("password")}
        />
        <Inputs
          id={`Confirmar Senha`}
          placeholder={`Digite novamente sua senha`}
          label={`Confirmar Senha`}
          type={`password`}
          register={register("password")}
        />
        <Inputs
          id={`Bio`}
          placeholder={`Fale sobre você`}
          label={`Bio`}
          type={`text`}
          register={register("bio")}
        />
        <Inputs
          id={`Contato`}
          placeholder={`Opção de contato`}
          label={`Contato`}
          type={`number`}
          register={register("contact")}
        />
        <label id="Selecionar módulo">Selecionar módulo</label>
        <select {...register("course_module")} id="Selecionar módulo">
          <option>Primeiro Módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        <Button Name={"Cadastrar"} />
      </form>
    </Main>
  );
};
