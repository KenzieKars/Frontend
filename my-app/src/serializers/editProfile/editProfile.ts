import * as yup from 'yup';

export const editProfileSchema = yup.object().shape({
	nome: yup
		.string()
		.min(3, 'O nome precisa de no mínimo 3 dígitos!')
		.required('Campo obrigatório!'),
	email: yup.string().email('Email inválido').required('Campo obrigatório!'),
	cpf: yup.string().required('Campo obrigatório!'),
	celular: yup.string().required('Celular não preenchido'),
	aniversario: yup.string().required('Campo obrigatório!'),
	bio: yup.string().required('Campo obrigatório!'),
});
