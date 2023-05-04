import React, { useState, createContext, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { IAdInfo } from '../AdContext';

interface IAuthContextProps {
	children: React.ReactNode;
}

export interface IUserInfo {
	id: string;
	nome: string;
	email: string;
	telefone: string;
	bio: string;
	imagem: string;
	cpf: string;
	aniversario: string;
	vendedor?: boolean;
	address: IEditAddressResponse;
}

export interface ILogin {
	email: string;
	senha: string;
}

export interface ISignUp {
	nome: string;
	email: string;
	senha: string;
	telefone: string;
	bio: string;
	imagem: string;
	cpf: string;
	aniversario: string;
	vendedor?: boolean;
	address: IEditAddress;
}

export interface IEditUser {
	aniversario: string;
	bio: string;
	telefone: string;
	cpf: string;
	email: string;
	nome: string;
}

export interface IEditAddress {
	complemento: string;
	rua: string;
	cidade: string;
	numero: string;
	cep: string;
	estado: string;
}
export interface IEditAddressResponse {
	id: string;
	complemento: string;
	rua: string;
	cidade: string;
	numero: string;
	cep: string;
	estado: string;
}

export interface IEditUserResponse {
	vendedor: string;
	aniversario: string;
	isActive: string;
	cpf: string;
	imagem: string;
	bio: string;
	telefone: string;
	senha: string;
	email: string;
	nome: string;
	id: string;
}

interface IDecodedToken {
	sub: string;
}

interface IAuthContext {
	editProfileModal: boolean;
	setEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
	editAddressModal: boolean;
	setEditAddressModal: React.Dispatch<React.SetStateAction<boolean>>;
	deleteProfileModal: boolean;
	setDeleteProfileModal: React.Dispatch<React.SetStateAction<boolean>>;

	userInfo: IUserInfo;
	setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
	anunciosInfo: IAdInfo[];
	setAnuncioInfo: React.Dispatch<React.SetStateAction<IAdInfo[]>>;
	token: string | null;
	userId: string | null;

	login: (user: ILogin) => void;
	signUp: (user: ISignUp) => void;
	editUser(
		user: IEditUser,
		id: string
	): Promise<IEditUserResponse | undefined>;
	editUserAddress(
		address: IEditAddress,
		id: string
	): Promise<IEditAddressResponse | undefined>;
	deleteUser(id: string): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContextProps) => {
	const [editProfileModal, setEditProfileModal] = useState(false);
	const [editAddressModal, setEditAddressModal] = useState(false);
	const [deleteProfileModal, setDeleteProfileModal] = useState(false);

	const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
	const [anunciosInfo, setAnuncioInfo] = useState<IAdInfo[]>([] as IAdInfo[]);

	const navigate = useNavigate();

	const token: string | null = localStorage.getItem('@user:Token');
	const userId: string | null = localStorage.getItem('@user:ID');

	useEffect(() => {
		const handleUser = async () => {
			if (token) {
				try {
					const res = await api.get(`/users/${userId}`, {
						headers: { Authorization: `Bearer ${token}` },
					});

					setUserInfo(res.data.foundUserByParam);
				} catch (error) {
					window.localStorage.removeItem('@user:Token');
					window.localStorage.removeItem('@user:ID');
					console.error(error);
				}
			}
		};
		handleUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const login = async (user: ILogin) => {
		try {
			const res = await api.post('/login', { ...user });

			window.localStorage.setItem('@user:Token', res.data.token);
			const decodedToken = jwtDecode(res.data.token) as IDecodedToken;
			const userId = decodedToken.sub;
			window.localStorage.setItem('@user:ID', userId);

			navigate('/', { replace: true });
		} catch (error) {
			console.error(error);
		}
	};

	const signUp = async (user: ISignUp) => {
		try {
			const res = await api.post('/users', { ...user });

			res.data.id && navigate('/login', { replace: true });
		} catch (error) {
			console.error(error);
		}
	};

	const editUser = async (
		user: IEditUser,
		id: string
	): Promise<IEditUserResponse | undefined> => {
		try {
			const res = await api.patch(`/users/${id}`, user, {
				headers: { Authorization: `Bearer ${token}` },
			});

			res && setUserInfo(res.data);

			return res.data;
		} catch (error) {
			console.error(error);
		}
	};

	const editUserAddress = async (
		address: IEditAddress,
		addressId: string
	): Promise<IEditAddressResponse | undefined> => {
		try {
			const res = await api.patch(`/address/${addressId}`, address, {
				headers: { Authorization: `Bearer ${token}` },
			});

			return res.data;
		} catch (error) {
			console.error(error);
		}
	};

	const deleteUser = async (id: string): Promise<void> => {
		try {
			api.delete(`/users/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				editProfileModal,
				setEditProfileModal,
				editAddressModal,
				setEditAddressModal,
				deleteProfileModal,
				setDeleteProfileModal,
				userInfo,
				setUserInfo,
				anunciosInfo,
				setAnuncioInfo,
				token,
				userId,
				login,
				signUp,
				editUser,
				editUserAddress,
				deleteUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
