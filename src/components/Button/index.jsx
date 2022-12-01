import React from "react";
import { Buttons } from "./styles";

export const Button = ({ Name }) => {
  return (
    <>
      <Buttons Name={Name}>{Name}</Buttons>
    </>
  );
};
