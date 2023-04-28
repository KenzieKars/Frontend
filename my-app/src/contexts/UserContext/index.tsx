import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import React, { useState, createContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

interface IAuthContextProps {
	children: React.ReactNode;
}

interface IUserInfo {
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

// interface IEditUserResponse {
// 	vendedor: string;
// 	aniversario: string;
// 	isActive: string;
// 	cpf: string;
// 	imagem: string;
// 	bio: string;
// 	telefone: string;
// 	senha: string;
// 	email: string;
// 	nome: string;
// 	id: string;
// }

interface IAuthContext {
	userInfo: IUserInfo;
	token: string | null;
	userId: string | null;
	login: (user: ILogin) => void;
	signUp: (user: ISignUp) => void;
	editUser: (user: IEditUser, id: string) => void;
	deleteUser: () => void;
}

interface IDecodedToken {
	sub: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContextProps) => {
	const navigate = useNavigate();
	const token: string | null = localStorage.getItem('@user:Token');
	const userId: string | null = localStorage.getItem('@user:ID');

	const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

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

	const editUser = async (user: IEditUser, id: string) => {
		try {
			const res = await api.patch(`/users/${id}`, user, {
				headers: { Authorization: `Bearer ${token}` },
			});

			res && setUserInfo(res.data);
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
				token,
				userId,
				userInfo,
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
