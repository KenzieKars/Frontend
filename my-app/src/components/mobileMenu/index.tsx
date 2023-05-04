import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/UserContext';
import {
	ButtonContainer,
	MenuDropdown,
	StyledLink,
	StyledMenuButton,
} from './style';
import {
	RiMotorbikeLine,
	RiAuctionLine,
	RiLogoutBoxLine,
	RiLoginBoxLine,
	RiCarLine,
} from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

export const MobileMenu = () => {
	const { userInfo } = useContext(AuthContext);

	const { setEditProfileModal, setEditAddressModal, setDeleteProfileModal } =
		useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const [open, setOpen] = useState(false);

	const handleLogout = () => {
		window.localStorage.removeItem('@user:Token');
		window.localStorage.removeItem('@user:ID');

		navigate('/');
	};

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<ButtonContainer>
			<StyledMenuButton
				className={open ? 'open' : ''}
				onClick={handleClick}
			>
				<div className="menu-bar"></div>
				<div className="menu-bar"></div>
				<div className="menu-bar"></div>
			</StyledMenuButton>
			{open && (
				<MenuDropdown>
					{userInfo.id && (
						<li>
							<img src={userInfo.imagem} alt="Foto de usuário" />
							<StyledLink to={'/user'}>
								{userInfo.nome}
							</StyledLink>
						</li>
					)}
					{location.pathname === '/user' ? (
						<>
							<li
								onClick={() => {
									setEditProfileModal(true);
									setOpen(!open);
								}}
							>
								Editar perfil
							</li>
							<li
								onClick={() => {
									setEditAddressModal(true);
									setOpen(!open);
								}}
							>
								Editar endereço
							</li>
							<li
								onClick={() => {
									setDeleteProfileModal(true);
									setOpen(!open);
								}}
							>
								Excluir conta
							</li>
						</>
					) : (
						<>
							<li>
								<StyledLink to="#carros">
									<RiCarLine /> Carros
								</StyledLink>
							</li>
							<li>
								<StyledLink to="#motos">
									<RiMotorbikeLine /> Motos
								</StyledLink>
							</li>
							<li>
								<StyledLink to="#leilao">
									<RiAuctionLine /> Leilão
								</StyledLink>
							</li>
						</>
					)}
					{userInfo.id ? (
						<li
							onClick={() => {
								handleLogout();
							}}
						>
							<StyledLink to="#logout">
								<RiLogoutBoxLine />
								Sair
							</StyledLink>
						</li>
					) : (
						<li>
							<StyledLink to="/login">
								<RiLoginBoxLine /> Login
							</StyledLink>
						</li>
					)}
				</MenuDropdown>
			)}
		</ButtonContainer>
	);
};
