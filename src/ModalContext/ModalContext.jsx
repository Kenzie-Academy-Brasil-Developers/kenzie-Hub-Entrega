import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModalEdit = () => {
    setModalEdit(true);
  };

  const handleCloseModalEdit = () => {
    setModalEdit(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        handleCloseModal,
        handleOpenModal,
        handleCloseModalEdit,
        handleOpenModalEdit,
        modalEdit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
