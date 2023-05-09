import Button from '../buttons';
import { MobileMenu } from '../mobileMenu';
import { DivHeaderBtns, DivNavBarUser, DivUserInfo, Nav } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { MenuButton } from '../alternativeMenu';
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { RiLogoutBoxLine } from 'react-icons/ri';

export const NavBar = () => {
	const { userInfo, setUserInfo, token, userId } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const handleLogout = () => {
		window.localStorage.removeItem('@user:Token');
		window.localStorage.removeItem('@user:ID');

		document.location.reload();
	};

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

	return (
		<>
			<Nav>
				<figure>
					<img
						onClick={() => {
							navigate('/');
						}}
						src={logo}
						alt="Motors Shop"
					/>
				</figure>
				<DivNavBarUser>
					{!userInfo.id ? (
						<DivHeaderBtns>
							<Button
								backgroundColor="#ffffff"
								backgroundColorHover="#212529"
								border=""
								fontColor="#495057"
								fontColorHover="#ffffff"
								onClick={() => {
									navigate('/login');
								}}
							>
								Fazer Login
							</Button>
							<Button
								backgroundColor="#ffffff"
								backgroundColorHover="#212529"
								border="#ADB5BD"
								fontColor="#212529"
								fontColorHover="#ffffff"
								onClick={() => {
									navigate('/register');
								}}
							>
								Cadastrar
							</Button>
						</DivHeaderBtns>
					) : (
						<>
							<DivUserInfo>
								<img src={userInfo.imagem} alt="user" />
								<Button
									backgroundColor="transparent"
									backgroundColorHover="transparent"
									border="transparent"
									fontColor="var(--color-grey2)"
									fontColorHover="var(--color-brand1)"
									className="userBtn"
									onClick={() => {
										navigate('/user');
									}}
								>
									{userInfo.nome}
								</Button>
								{location.pathname === '/user' ? (
									<MenuButton />
								) : (
									<RiLogoutBoxLine
										onClick={() => {
											handleLogout();
										}}
									/>
								)}
							</DivUserInfo>
						</>
					)}
					<MobileMenu />
				</DivNavBarUser>
			</Nav>
		</>
	);
};
