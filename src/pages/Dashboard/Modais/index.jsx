import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import { Button, ButtonEdit, ButtonExcluir, Form, TitleModal } from "./styles";
import { useContext } from "react";
import { ModalContext } from "../../../ModalContext/ModalContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { techsSchema } from "../techsSchema/techsSchema";
import { TechContext } from "../../../TechContext/TechContext";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto ",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "92%",
    display: "flex",
    flexDirection: "column",
    maxWidth: "370px",
    padding: "0",
    border: "none",
  },
  overlay: {
    background: "rgba(18, 18, 20, 0.5)",
  },
};

export const Modal = () => {
  const { modal, handleCloseModal } = useContext(ModalContext);
  const { RegisterTechs } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(techsSchema),

    defaultValues: {
      title: "",
      status: "",
    },
    mode: "onBlur",
  });

  const submit = async (data) => {
    RegisterTechs(data);
    reset();
    handleCloseModal();
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <>
      <ReactModal
        isOpen={modal}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <TitleModal>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={handleCloseModal}>x</button>
        </TitleModal>
        <Form onSubmit={handleSubmit(submit)}>
          <label id="Nome">Nome</label>
          <input
            {...register("title")}
            id="Nome"
            placeholder="Adicione uma tecnologia"
            type="text"
          />
          {errors.title?.message && <p>{errors.title.message}</p>}
          <label id="Selecionar status">Selecionar status</label>
          <select {...register("status")} id="Selecionar status">
            <option></option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.title?.message && <p>{errors.title.message}</p>}
          <Button>Cadastrar Tecnologia</Button>
        </Form>
      </ReactModal>
    </>
  );
};

export const ModalEdit = () => {
  const { modalEdit, handleCloseModalEdit } = useContext(ModalContext);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      status: "",
    },
  });

  const submit = async (data) => {
    reset();
  };

  return (
    <>
      <ReactModal
        isOpen={modalEdit}
        onRequestClose={handleCloseModalEdit}
        style={customStyles}
      >
        <TitleModal>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={handleCloseModalEdit}>x</button>
        </TitleModal>
        <Form onSubmit={handleSubmit(submit)} noValidate>
          <label id="Nome do projeto">Nome do projeto</label>
          <input disabled={true} id="Nome do projeto" type="text" />
          <label id="Status">Status</label>
          <select {...register("status")} id="Status">
            <option></option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <ButtonEdit>Salvar alterações</ButtonEdit>
            <ButtonExcluir>Excluir</ButtonExcluir>
          </div>
        </Form>
      </ReactModal>
    </>
  );
};
