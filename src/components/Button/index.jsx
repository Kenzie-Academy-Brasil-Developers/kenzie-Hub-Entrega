import React from "react";
import { Buttons } from "./styles";

export const Button = ({ Name, disabled }) => {
  return (
    <>
      <Buttons disabled={disabled} Name={Name}>
        {Name}
      </Buttons>
    </>
  );
};
