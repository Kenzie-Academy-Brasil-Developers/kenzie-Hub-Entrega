import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email e obrigatorio")
    .email("O email digitado e invalido."),
  password: yup
    .string()
    .required("A senha e obrigatoria")
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "E necessario uma letra maiuscula.")
    .matches(/(?=.*?[a-z])/, "E necessario uma letra minuscula")
    .matches(/(?=.*?[0-9])/, "E necessario pelo menos um dígito")
    .matches(/(?=.*?[#?!@$%^&*-])/, "E necessario um caractere especial"),
  name: yup
    .string()
    .required("o nome e obrigatorio")
    .min(3, "E necessario pelo menos 3 caracteres"),
  bio: yup.string().required("fale um pouco de voce"),
  contact: yup.string().required("o contato e obrigatorio"),
  course_module: yup.string().required("Este campo e obrigatorio"),
});
