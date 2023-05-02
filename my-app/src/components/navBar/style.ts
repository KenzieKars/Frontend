import styled from 'styled-components';

export const Nav = styled.nav`
	background-color: var(--color-grey10);

	position: fixed;
	top: 0;
	z-index: 3;

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100vw;
	height: 80px;
	padding: 0 60px;

	border-bottom: 2px solid var(--color-grey6);

	figure {
		cursor: pointer;
	}
`;

export const DivNavBarUser = styled.nav`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 10px;

	height: 100%;
	padding-left: 30px;

	border-left: 2px solid #dee2e6;
`;

export const DivHeaderBtns = styled.div`
	display: flex;
	gap: 10px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const DivUserInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;

	min-width: 200px;

	img {
		height: 32px;
		width: 32px;
		margin: 0 4px;

		border-radius: 50%;
	}

	.userBtn {
		padding: 0;

		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
	}

	svg {
		font-size: 24px;
		color: var(--color-grey2);

		margin-left: 30px;

		cursor: pointer;

		:hover {
			color: var(--color-alert1);
			transition: 0.5s;
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;
