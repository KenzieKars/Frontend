import * as yup from 'yup';

export const editAddressSchema = yup.object().shape({
	cep: yup.string().required('Campo obrigatório!'),
	estado: yup.string().required('Campo obrigatório!'),
	cidade: yup.string().required('Campo obrigatório!'),
	rua: yup.string().required('Campo obrigatório!'),
	numero: yup.string().required('Campo obrigatório!'),
	complemento: yup.string().notRequired(),
});
