import styled from 'styled-components';

export const Div = styled.div`
	background-color: var(--color-grey8);
`;
export const Container = styled.div`
	background-color: var(--color-grey10);

	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 32px;

	width: 404px;
	padding: 44px 22px;
	margin: 160px auto 80px;

	border-radius: 4px;

	h1 {
		font-family: Lexend;
		font-weight: 500;
		font-size: 24px;
		line-height: 30px;
	}

	form {
		width: 100%;

		p {
			color: var(--color-grey2);
			font-size: 14px;
			align-self: center;
			font-weight: 400;
			font-family: 'Inter';

			margin: 2px 0 30px 0;

			@media (max-width: 425px) {
				margin-right: 5rem;
			}
		}

		.address {
			margin-bottom: 40px;
		}
	}

	button {
		width: 100%;
	}

	@media (max-width: 400px) {
		width: 90%;
		padding: 44px 38px;
	}
`;

export const StyledAdvertiserLabel = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;

	margin-bottom: 20px;

	font-weight: 500;
	font-size: 14px;
	font-family: 'Inter';
`;

export const DivButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 10px;

	.isAdvertiserBtn {
		width: 50%;
	}
`;
