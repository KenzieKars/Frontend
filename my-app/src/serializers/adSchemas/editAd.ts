import * as yup from 'yup';

export const editAdSchema = yup.object().shape({
	cor: yup.string().notRequired(),
	quilometragem: yup.number().notRequired(),
	preco: yup.number().notRequired(),
	descricao: yup.string().notRequired(),
	publicado: yup.boolean().notRequired(),
	imagens: yup.array().notRequired(),
});
