import React from "react";
import { H1, Headers, Main, Span } from "./styles";
import Logo from "../../assets/Logo.png";
import { Inputs } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema/loginSchema";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const Login = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@token", JSON.stringify(response.data.token));
      localStorage.setItem("@id", JSON.stringify(response.data.user.id));
      toast.success("Login realizado com sucesso");
      setTimeout(() => {
        navigate("/dashboard");
      }, 4000);
    } catch (error) {
      toast.error("Email ou Senha invalido");
    }
  };

  const submit = async (data) => {
    await Login(data);
  };

  return (
    <Main>
      <Headers>
        <img src={Logo} alt="Logo" />
      </Headers>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <H1>Login</H1>
        <Inputs
          id={"Email"}
          placeholder={"Digite aqui seu email"}
          label={"Email"}
          type={"email"}
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <Inputs
          id={"Senha"}
          placeholder={"Digite aqui sua senha"}
          label={"Senha"}
          type={"password"}
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <Button Name={"Entrar"} />
        <Span>Ainda não possui uma conta?</Span>
        <Link to={"/registration"}>Cadastre-se</Link>
      </form>
    </Main>
  );
};
