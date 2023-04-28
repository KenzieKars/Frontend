import * as yup from 'yup';

export const schema = yup.object({
	marca: yup.string().required('Campo obrigatório!'),
	modelo: yup.string().required('Campo obrigatório!'),
	ano: yup.string().required('Campo obrigatório!'),
	combustivel: yup
		.string()
		.oneOf(['flex', 'híbrido', 'elétrico'], 'Tipo inválido de combustivel')
		.required('Campo obrigatório!'),
	cor: yup.string().required('Campo obrigatório!'),
	quilometragem: yup.number().required('Campo obrigatório!'),
	preco: yup.number().required('Campo obrigatório!'),
	descricao: yup.string().required('Campo obrigatório!'),
	imagens: yup.array().required('Campo obrigatório!'),
});
