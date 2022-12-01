import React from "react";
import { BtnRegister, H1, Headers, Main, Span } from "./styles";
import Logo from "../../assets/Logo.png";
import { Input } from "../../components/Input/styles";
import { Inputs } from "../../components/Input";
import { Button } from "../../components/Button";

export const Login = () => {
  return (
    <Main>
      <Headers>
        <img src={Logo} alt="Logo" />
      </Headers>
      <form>
        <H1>Login</H1>
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
        <Button Name={"Entrar"} />
        <Span>Ainda não possui uma conta?</Span>
        <BtnRegister>Cadastre-se</BtnRegister>
      </form>
    </Main>
  );
};
