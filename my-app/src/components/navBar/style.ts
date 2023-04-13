import styled from 'styled-components';

export const Nav = styled.nav`
	background-color: var(--color-grey10);
	width: 100vw;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	border-bottom: 2px solid var(--color-grey6);
	z-index: 3;
	figure {
		cursor: pointer;
		margin-left: 60px;
	}
	.navbar-teste {
		width: 60%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

export const DivNavBarUser = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	span {
		font-family: 'Inter', sans-serif;
		color: var(--color-grey2);
		cursor: pointer;
		font-weight: 600;
		:hover {
			color: var(--color-brand1);
		}
	}
	button {
		margin-right: 30px;
	}
	.login {
		margin-left: 20px;
		margin-right: 10px;
	}
`;

export const DivNavBar = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-right: 2px solid var(--color-grey6);
	a {
		text-decoration: none;
		color: var(--color-grey2);
		:hover {
			color: var(--color-grey2);
		}
	}
`;
