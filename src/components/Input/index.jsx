import React from "react";
import { Input, Label } from "./styles";

export const Inputs = ({ placeholder, type, label, id }) => {
  return (
    <>
      <Label id={id}>{label}</Label>
      <Input
        id={id}
        label={label}
        placeholder={placeholder}
        type={type}
      ></Input>
    </>
  );
};
