import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;

	width: 100%;
	height: 350px;
	position: relative;
	margin-bottom: 220px;
	flex-direction: column;

	align-items: center;
	background: #4529e6;
`;
export const Div = styled.div`
	background: #f1f3f5;

	.filtro {
		width: 100%;
		display: none;
		justify-content: center;
		@media (max-width: 980px) {
			display: flex;
		}
	}
	.filtros {
		width: 230px;
		margin-bottom: 72px;
	}
	.userData {
		width: 90%;
		max-width: 1240px;
		background: #fdfdfd;
		position: absolute;

		z-index: 1;
		margin: 0 auto;
		top: 200px;
		left: 0;
		right: 0;
		border-radius: 4px;
		div {
			display: flex;
			margin-bottom: 24px;
			align-items: center;
		}
		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			border: 1px solid black;
			margin-left: 40px;
			margin-top: 40px;
			margin-bottom: 24px;
		}
		h2 {
			margin-left: 40px;
			margin-right: 20px;
		}
		p {
			margin-left: 40px;
			margin-right: 15px;
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 28px;
			margin-bottom: 30px;
			color: #495057;
		}
		span {
			width: 92px;
			height: 32px;
			left: 180px;
			top: 169px;
			background: #edeafd;
			border-radius: 4px;
			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 24px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #4529e6;
		}
	}
	.anuncios {
		margin-left: 50px;
		margin-bottom: 80px;
	}
	.criarAnuncios {
		border: 1.5px solid #4529e6;
		margin-left: 40px;
		margin-bottom: 40px;
	}
`;
export const Main = styled.main`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	position: relative;
	margin-bottom: 100px;

	.fecha {
		display: none;
	}
	.teste {
		display: flex;
	}
	#id {
		display: flex;
	}
	#t {
		display: none;
	}
`;

export const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	gap: 30px;
	margin-left: 100px;

	@media (max-width: 980px) {
		flex-wrap: nowrap;
		overflow: auto;
		max-width: 809px;
		margin-left: 20px;
	}
`;
export const Pagination = styled.div`
	width: 300px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 80px;
	div {
		display: flex;
	}
	span {
		font-family: 'Lexend';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 30px;
		display: flex;
		align-items: center;
		text-align: center;

		color: #868e96;
		margin-left: 10px;
	}
	.page {
		color: var(--color-grey2);
	}
	button {
		margin-left: 30px;
		font-family: 'Lexend';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 30px;
		display: flex;
		align-items: center;
		text-align: center;
		border: none;
		background-color: #f1f3f5;
		color: var(--color-brand2);
		cursor: pointer;
	}
	@media (max-width: 980px) {
		flex-direction: column;

		button {
			margin-top: 30px;
		}
	}
`;

export const ProductContainer = styled.section`
	max-width: 312px;
	min-width: 312px;
	margin-right: 40px;
	margin-bottom: 80px;
	display: flex;
	gap: 15px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	h2 {
		margin-top: 16px;
		margin-right: 10px;
		margin-bottom: 16px;
	}
	p {
		margin-top: 16px;
		margin-right: 10px;
	}
	.selectProduct {
		cursor: pointer;
	}
	.product-price {
		margin-top: 20px;
	}
	.product-year {
		margin-top: 16px;
		margin-right: 0;
	}
	.product-img {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		width: 312px;
		height: 152px;

		background-color: var(--color-grey7);
		border: 2px solid var(--color-grey7);
		overflow: hidden;
		position: relative;
		img {
			width: 100%;
			transform: scale(1);
			position: absolute;
			transition: 0.4s;
			&:hover {
				transform: scale(1.2);
				cursor: pointer;
			}
		}
		label {
			top: 5px;
			left: 5px;
			position: absolute;
			padding: 0 0.5rem;
			font-family: 'Inter';
			font-style: normal;
			font-size: 14px;
			text-align: center;
			color: #ffffff;
			background: ${(props) => props.color};
		}
		:hover {
			border: 2px solid var(--color-brand1);
		}
	}
	.product-title {
		color: var(--color-grey1);
	}
	.product-description {
		width: 95%;
		height: 5rem;
		overflow: auto;
		p {
			font-size: 14px;
			font-weight: 400;
			line-height: 24px;
			text-align: justify;
			color: var(--color-grey2);
			word-break: break-all;

			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
		}
		::-webkit-scrollbar {
			width: 0px;
		}
	}
`;

export const ProductOwner = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	cursor: pointer;
	.owner-avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 150px;
		color: var(--color-whiteFixed);
	}
	.owner-name {
		color: var(--color-grey2);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
	}
`;

export const ProductDetails = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	.product-details {
		display: flex;
		gap: 10px;
		p {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.25rem 0.5rem;
			font-weight: 500;
			font-size: 14px;
			line-height: 24px;
			border-radius: 5px;
			background-color: var(--color-brand4);
			color: var(--color-brand1);
			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 24px;
		}
	}
	.product-price {
		font-family: 'Lexend', sans-serif;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: var(--color-grey1);
	}
`;

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
	border-left: 5px solid #dee2e6;
	height: 100%;
	padding-left: 100px;
	img {
		width: 32px;
		heigth: 32px;
		border-radius: 50%;
		margin-right: 30px;
	}
	p {
		font-family: 'Inter', sans-serif;
		color: var(--color-grey2);
		cursor: pointer;
		font-weight: 400;
		margin-right: 80px;
		:hover {
			color: var(--color-brand1);
		}
	}
	button {
		margin-right: 10px;
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
