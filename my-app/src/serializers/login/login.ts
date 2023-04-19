import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email("Email inválido").required("Email não preenchido"),
  senha: yup.string().required("Senha não preenchida"),
});