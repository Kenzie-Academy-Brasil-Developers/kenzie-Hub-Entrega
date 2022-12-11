import * as yup from "yup";

export const techsSchema = yup.object().shape({
  title: yup.string().required("Este campo e obrigatorio"),
  status: yup.string().required("Este campo e obrigatorio"),
});
