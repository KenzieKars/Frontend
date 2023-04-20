import styled from 'styled-components';

export const Nav = styled.nav`
	.none{
		display: none;
	}
	.logado{
		display: flex;
		align-items: center;
		margin-right: 80px;
		margin-left: 100px;
		img{
			width: 30px;
			border-radius: 50%;
			margin-right: 15px;
		}
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;

		color: #495057;
		cursor: pointer;
	}
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
	border-left: 2px solid #DEE2E6;
	height: 100%;
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
