import * as yup from 'yup';

export const editProfileSchema = yup.object().shape({
	nome: yup.string().notRequired(),
	email: yup.string().email().notRequired(),
	cpf: yup.string().notRequired(),
	celular: yup.string().notRequired(),
	aniversario: yup.string().notRequired(),
	bio: yup.string().notRequired(),
});
