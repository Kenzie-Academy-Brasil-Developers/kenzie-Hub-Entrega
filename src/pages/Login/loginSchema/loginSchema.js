import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("O email e obrigatorio").email(),
  password: yup.string().required("A senha e obrigatoria"),
});
