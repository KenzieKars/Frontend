import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
	position: relative;

	background-color: transparent;
	border: none;

	height: 40px;
	padding: 0;
	margin-left: 20px;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const StyledMenuButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 4px;

	height: fit-content;
	width: 28px;

	cursor: pointer;

	& .menu-bar {
		background-color: var(--color-grey1);

		width: 100%;
		height: 3px;

		border-radius: 2px;

		transition: transform 0.3s ease;
	}

	&.open .menu-bar:nth-child(1) {
		transform: rotate(45deg) translate(0px, 5px);
	}

	&.open .menu-bar:nth-child(2) {
		transform: rotate(-45deg) translate(0px, -5px);
	}
	&.open .menu-bar:nth-child(3) {
		display: none;
	}
`;

export const MenuDropdown = styled.div`
	position: absolute;
	top: 160%;
	right: -200%;

	z-index: 200;

	width: 200px;

	background-color: white;
	border: 1px solid black;

	li {
		list-style: none;

		display: flex;
		align-items: center;
		gap: 10px;

		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: 16px;

		color: var(--color-grey2);
		cursor: pointer;

		:hover {
			color: var(--color-brand1);
		}

		width: 100%;
		height: 40px;
		padding: 5px;

		border-bottom: 1px solid var(--color-grey4);

		img {
			width: 32px;
			height: 32px;

			border-radius: 50%;
		}

		svg {
			font-size: 28px;
		}
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;

	display: flex;
	align-items: center;
	gap: 10px;

	color: var(--color-grey2);
`;
