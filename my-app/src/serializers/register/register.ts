import * as yup from 'yup';

export const registerSchema = yup.object().shape({
	nome: yup
		.string()
		.min(3, 'O nome precisa de no mínimo 3 dígitos!')
		.required('Campo obrigatório!'),
	email: yup.string().email('Email inválido').required('Campo obrigatório!'),
	senha: yup
		.string()
		.min(8, 'A senha deve conter no mínimo 8 dígitos!')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'A senha precisa conter pelo menos uma letra maiúscula, um caractere especial e um número'
		)
		.required('Campo obrigatório!'),
	confirmSenha: yup
		.string()
		.oneOf([yup.ref('senha')], 'As senhas não são iguais!'),
	bio: yup.string().required('Campo obrigatório!'),
	telefone: yup.string().required('Campo obrigatório!'),
	imagem: yup.string().required('Campo obrigatório!'),
	cpf: yup.string().required('Campo obrigatório!'),
	aniversario: yup.string().required('Campo obrigatório!'),
	address: yup.object().shape({
		cep: yup.string().required('Campo obrigatório!'),
		estado: yup.string().required('Campo obrigatório!'),
		cidade: yup.string().required('Campo obrigatório!'),
		rua: yup.string().required('Campo obrigatório!'),
		numero: yup.string().required('Campo obrigatório!'),
		complemento: yup.string().required('Campo obrigatório!'),
	}),
	vendedor: yup.string(),
});
