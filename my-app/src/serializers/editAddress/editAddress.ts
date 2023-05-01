import * as yup from 'yup';

export const editAddressSchema = yup.object().shape({
	cep: yup.string().notRequired(),
	estado: yup.string().notRequired(),
	cidade: yup.string().notRequired(),
	rua: yup.string().notRequired(),
	numero: yup.string().notRequired(),
	complemento: yup.string().notRequired(),
});
