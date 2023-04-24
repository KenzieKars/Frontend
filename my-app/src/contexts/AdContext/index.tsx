import React, { createContext } from 'react';
import { api } from '../../services/api';

interface IAdContextProps {
	children: React.ReactNode;
}

export interface INewAd {
	marca: string;
	modelo: string;
	ano: string;
	combustivel: string;
	cor: string;
	quilometragem: string;
	preco: string;
	descricao: string;
	imagens: string[];
}

interface INewAdResponse {
	id: string;
	ativo: boolean;
	atualizadoEm: string;
	criadoEm: string;
	marca: string;
	modelo: string;
	ano: string;
	combustivel: string;
	cor: string;
	quilometragem: string;
	preco: string;
	descricao: string;
	imagens: string[];
}

interface IAdContext {
	addNewAd(data: INewAd): Promise<INewAdResponse | undefined>;
}

export const AdContext = createContext<IAdContext>({} as IAdContext);

export const AdProvider = ({ children }: IAdContextProps) => {
	const addNewAd = async (
		data: INewAd
	): Promise<INewAdResponse | undefined> => {
		const token: string | null = localStorage.getItem('@user:Token');
		try {
			const res = await api.post<INewAdResponse>('advertisement', data, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return res.data;
		} catch (error: any) {
			console.error(error);
		}
	};

	return (
		<AdContext.Provider value={{ addNewAd }}>{children}</AdContext.Provider>
	);
};
