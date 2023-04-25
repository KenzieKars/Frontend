import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { fipe } from '../../services/fipe';

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
	preco: number;
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

interface ICarName {
	name: string;
}

export interface IModel {
	id: string;
	name: string;
	brand: string;
	year: string;
	fuel: number;
	value: number;
}

interface IAdContext {
	addNewAd(data: INewAd): Promise<INewAdResponse | undefined>;
	brands: string[];
	selectedModel: IModel | undefined;
	modelsByBrand(brand: string): Promise<string[] | undefined>;
	modelData(brand: string, model: string): Promise<IModel | undefined>;
}

export const AdContext = createContext<IAdContext>({} as IAdContext);

export const AdProvider = ({ children }: IAdContextProps) => {
	const [brands, setBrands] = useState<string[]>([]);
	const [selectedModel, setSelectedModel] = useState<IModel>();

	useEffect(() => {
		const allBrands = async (): Promise<string[] | undefined> => {
			try {
				const res = await fipe.get('cars');

				res.data && setBrands([]);

				setBrands((previousBrands) => [
					...previousBrands,
					...Object.keys(res.data),
				]);

				return brands;
			} catch (error: any) {
				console.error(error);
			}
		};

		allBrands();
	}, []);

	const modelsByBrand = async (
		brand: string
	): Promise<string[] | undefined> => {
		try {
			const res = await fipe.get('cars');

			return res.data[brand].map((model: ICarName) => model.name);
		} catch (error: any) {
			console.error(error);
		}
	};

	const modelData = async (
		brand: string,
		model: string
	): Promise<IModel | undefined> => {
		try {
			const res = await fipe.get(`cars?brand=${brand}`);

			res.data.forEach((car: IModel) => {
				if (car.name === model) {
					setSelectedModel(car);
				}
			});

			return selectedModel;
		} catch (error: any) {
			console.error(error);
		}
	};

	const addNewAd = async (
		data: INewAd
	): Promise<INewAdResponse | undefined> => {
		const token: string | null = localStorage.getItem('@user:Token');
		console.log(data);
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
		<AdContext.Provider
			value={{
				brands,
				selectedModel,
				modelsByBrand,
				modelData,
				addNewAd,
			}}
		>
			{children}
		</AdContext.Provider>
	);
};
