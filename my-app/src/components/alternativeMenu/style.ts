import styled from 'styled-components';

export const ButtonContainer = styled.button`
	position: relative;

	background-color: transparent;
	border: none;

	height: 40px;
	padding: 0;
	margin-left: 20px;
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
		transform: rotate(45deg) translate(10px, 1px);
	}

	&.open .menu-bar:nth-child(2) {
		transform: rotate(-45deg) translate(4px, 5px);
	}
	&.open .menu-bar:nth-child(3) {
		display: none;
	}
`;

export const MenuDropdown = styled.div`
	position: absolute;
	top: 40px;
	left: -160px;

	z-index: 200;

	width: 200px;

	background-color: white;
	border: 1px solid black;

	li {
		list-style: none;

		font-family: 'Inter', sans-serif;
		color: var(--color-grey2);
		cursor: pointer;
		font-weight: 600;
		:hover {
			color: var(--color-brand1);
		}

		width: 100%;
		padding: 5px;

		border-bottom: 1px solid var(--color-grey4);
	}
`;
