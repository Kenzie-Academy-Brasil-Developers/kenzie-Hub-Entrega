import React from "react";
import { H1, Headers, Main, Span } from "./styles";
import Logo from "../../assets/Logo.png";
import { Inputs } from "../../components/Input";
import { Button } from "../../components/Button";

export const Registration = () => {
  return (
    <Main>
      <Headers>
        <img src={Logo} alt="Logo" />
        <a>Voltar</a>
      </Headers>
      <form>
        <H1>Crie sua conta</H1>
        <Span>Rapido e grátis, vamos nessa</Span>
        <Inputs
          id={`Nome`}
          placeholder={`Digite aqui seu nome`}
          label={`Nome`}
          type={`text`}
        />
        <Inputs
          id={`Email`}
          placeholder={`Digite aqui seu email`}
          label={`Email`}
          type={`email`}
        />
        <Inputs
          id={`Senha`}
          placeholder={`Digite aqui sua senha`}
          label={`Senha`}
          type={`password`}
        />
        <Inputs
          id={`Confirmar Senha`}
          placeholder={`Digite novamente sua senha`}
          label={`Confirmar Senha`}
          type={`password`}
        />
        <Inputs
          id={`Bio`}
          placeholder={`Fale sobre você`}
          label={`Bio`}
          type={`text`}
        />
        <Inputs
          id={`Contato`}
          placeholder={`Opção de contato`}
          label={`Contato`}
          type={`number`}
        />
        <label id="Selecionar módulo">Selecionar módulo</label>
        <select id="Selecionar módulo">
          <option>Primeiro Módulo</option>
        </select>
        <Button Name={"Cadastrar"} />
      </form>
    </Main>
  );
};
