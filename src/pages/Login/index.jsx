import React from "react";
import { BtnRegister, H1, Headers, Main, Span } from "./styles";
import Logo from "../../assets/Logo.png";
import { Inputs } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
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
      </Headers>
      <form onSubmit={handleSubmit(submit)}>
        <H1>Login</H1>
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
        <Button Name={"Entrar"} />
        <Span>Ainda não possui uma conta?</Span>
        <Link to={"/registration"}>
          <BtnRegister>Cadastre-se</BtnRegister>
        </Link>
      </form>
    </Main>
  );
};
