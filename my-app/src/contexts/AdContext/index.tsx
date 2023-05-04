import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { fipe } from '../../services/fipe';
import { IEditUserResponse } from '../UserContext';

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

export interface IAdInfo {
	id: string;
	marca: string;
	modelo: string;
	ano: string;
	combustivel: string;
	cor: string;
	quilometragem: string;
	preco: string;
	descricao: string;
	imagens: string[];
	ativo: boolean;
	criadoEm: string;
	atualizadoEm: string;
	user: IEditUserResponse;
}

export interface IEditAdRequest {
	cor?: string;
	quilometragem?: string;
	preco?: string;
	descricao?: string;
	publicado?: boolean;
	imagens?: string[];
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
	createAdModal: boolean;
	setCreateAdModal: React.Dispatch<React.SetStateAction<boolean>>;
	confirmNewAdModal: boolean;
	setConfirmNewAdModal: React.Dispatch<React.SetStateAction<boolean>>;
	editAdModal: boolean;
	setEditAdModal: React.Dispatch<React.SetStateAction<boolean>>;
	deleteAdModal: boolean;
	setDeleteAdModal: React.Dispatch<React.SetStateAction<boolean>>;

	brands: string[];
	selectedAd: IAdInfo | undefined;
	setSelectedAd: React.Dispatch<React.SetStateAction<IAdInfo | undefined>>;
	selectedModel: IModel;

	modelsByBrand(brand: string): Promise<string[] | undefined>;
	modelData(brand: string, model: string): Promise<IModel | undefined>;

	createAd(data: INewAd): Promise<INewAdResponse | undefined>;
	editAd(
		data: IEditAdRequest,
		id: string
	): Promise<INewAdResponse | undefined>;
	deleteAd(id: string): Promise<void>;
}

export const AdContext = createContext<IAdContext>({} as IAdContext);

export const AdProvider = ({ children }: IAdContextProps) => {
	const [createAdModal, setCreateAdModal] = useState(false);
	const [confirmNewAdModal, setConfirmNewAdModal] = useState(false);
	const [editAdModal, setEditAdModal] = useState(false);
	const [deleteAdModal, setDeleteAdModal] = useState(false);
	const [selectedAd, setSelectedAd] = useState<IAdInfo | undefined>();

	const [brands, setBrands] = useState<string[]>([]);
	const [selectedModel, setSelectedModel] = useState<IModel>({
		id: '',
		name: '',
		brand: '',
		year: '',
		fuel: 0,
		value: 0,
	});

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

	const createAd = async (
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

	const editAd = async (
		data: IEditAdRequest,
		id: string
	): Promise<INewAdResponse | undefined> => {
		const token: string | null = localStorage.getItem('@user:Token');

		try {
			const res = await api.patch<INewAdResponse>(
				`advertisement/${id}`,
				data,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			return res.data;
		} catch (error) {
			console.error(error);
		}
	};

	const deleteAd = async (id: string): Promise<void> => {
		const token: string | null = localStorage.getItem('@user:Token');

		try {
			await api.delete(`advertisement/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			setDeleteAdModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<AdContext.Provider
			value={{
				createAdModal,
				setCreateAdModal,
				confirmNewAdModal,
				setConfirmNewAdModal,
				editAdModal,
				setEditAdModal,
				deleteAdModal,
				setDeleteAdModal,
				brands,
				selectedAd,
				setSelectedAd,
				selectedModel,
				modelsByBrand,
				modelData,
				createAd,
				editAd,
				deleteAd,
			}}
		>
			{children}
		</AdContext.Provider>
	);
};
