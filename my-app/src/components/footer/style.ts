import styled from 'styled-components';

export const ContainerF = styled.footer`
	width: 100%;

	div {
		width: 100%;
		height: 100px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		background-color: var(--color-grey0);

		figure {
			margin-left: 50px;
			margin-right: 50px;
		}
	}

	p {
		color: var(--color-whiteFixed);

		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 35px;
		height: 35px;
		padding-top: 10px;
		margin-right: 50px;

		background-color: var(--color-grey1);
		color: var(--color-whiteFixed);

		font-family: 'Lexend';
		text-decoration: none;

		:hover {
			color: var(--color-whiteFixed);
		}
	}

	@media (max-width: 768px) {
		div {
			flex-direction: column;

			height: 300px;

			img {
				margin-top: 45px;
			}

			a {
				margin: 0;
				margin-bottom: 20px;
				margin-top: 45px;
			}
		}
	}
`;
