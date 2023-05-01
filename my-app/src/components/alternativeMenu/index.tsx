import { useContext, useState } from 'react';
import { ButtonContainer, StyledMenuButton, MenuDropdown } from './style';
import { AuthContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export const MenuButton = () => {
	const { setEditProfileModal, setEditAddressModal, setDeleteProfileModal } =
		useContext(AuthContext);

	const navigate = useNavigate();

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
					<li
						onClick={() => {
							handleLogout();
						}}
					>
						Sair
					</li>
				</MenuDropdown>
			)}
		</ButtonContainer>
	);
};
