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
	vendedor?: string;
}

export interface IEditUser {
	aniversario: string;
	bio: string;
	telefone: string;
	cpf: string;
	email: string;
	nome: string;
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
	deleteUser: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContextProps) => {
	const [editProfileModal, setEditProfileModal] = useState(false);
	const [editAddressModal, setEditAddressModal] = useState(false);

	const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
	const [anunciosInfo, setAnuncioInfo] = useState<IAdInfo[]>([] as IAdInfo[]);

	const navigate = useNavigate();
	const token: string | null = localStorage.getItem('@user:Token');
	const userId: string | null = localStorage.getItem('@user:ID');

	useEffect(() => {
		token &&
			api
				.get<IUserInfo>(`/users/${userId}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => {
					setUserInfo(res.data);
				})
				.catch((err) => {
					window.localStorage.clear();
					navigate('/login');
				});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const login = (user: ILogin) => {
		api.post('/login', { ...user })
			.then((res) => {
				window.localStorage.clear();
				window.localStorage.setItem('@user:Token', res.data.token);
				const decodedToken = jwtDecode(res.data.token) as IDecodedToken;
				const userId = decodedToken.sub;
				window.localStorage.setItem('@user:ID', userId);
				console.log('Login bem sucedido!');
				navigate('/', { replace: true });
			})
			.catch((err) => {
				console.log('Email ou senha inválidos!');
			});
	};

	const signUp = (user: ISignUp) => {
		console.log(user);
		api.post('/users', { ...user })
			.then((res) => {
				console.log('Cadastro efetuado com sucesso');
			})
			.catch((err) => {
				console.log('E-mail já cadastrado!');
			});
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

	function deleteUser() {
		api.delete(`/users/${userId}`, {
			headers: { Authorization: `Bearer ${token}` },
		}).then(() => {
			window.localStorage.clear();
			console.log('Sua conta foi deletada com sucesso!');
			navigate('/login');
		});
	}

	return (
		<AuthContext.Provider
			value={{
				editProfileModal,
				setEditProfileModal,
				editAddressModal,
				setEditAddressModal,
				userInfo,
				setUserInfo,
				anunciosInfo,
				setAnuncioInfo,
				token,
				userId,
				login,
				signUp,
				editUser,
				deleteUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
