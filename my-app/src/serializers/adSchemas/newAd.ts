import * as yup from 'yup';

export const schema = yup.object({
	marca: yup.string().required(),
	modelo: yup.string().required(),
	cor: yup.string().required(),
	quilometragem: yup.number().required(),
	preco: yup.number().required(),
	descricao: yup.string().required(),
	imagens: yup.array().required(),
});
