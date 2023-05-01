import styled from 'styled-components';

export const Div = styled.div`
	background-color: var(--color-grey8);
`;
export const Container = styled.div`
	width: 404px;
	padding: 44px 22px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	background-color: var(--color-grey10);
	margin: 0 auto;
	margin-top: 50px;
	margin-bottom: 50px;
	gap: 32px;
	border-radius: 4px;
	@media (max-width: 400px) {
		width: 90%;
		padding: 44px 38px;
	}

	form {
		width: 100%;
	}

	h1 {
		font-family: Lexend;
		font-weight: 500;
		font-size: 24px;
		line-height: 30px;
	}

	p {
		font-weight: 500;
		font-size: 14px;
		font-family: 'Inter';
	}

	form {
		p {
			font-weight: 500;
			font-size: 14px;
			margin-bottom: 40px;
		}
	}

	.descricao {
		height: 50px;
	}

	input {
		width: 350px;
		height: 35px;
		margin-bottom: 20px;
		@media (max-width: 400px) {
			width: 100%;
		}
	}

	button {
		width: 370px;
		@media (max-width: 400px) {
			width: 100%;
		}
	}

	.conta {
		border-bottom: 10px;
	}

	.input-option356 {
		list-style: none;
		margin: 0;
		padding: 0;
		margin-top: 10px;
	}

	.input-option356:after {
		content: '';
		clear: both;
	}

	.radio {
		border: 1px solid var(--color-grey4);
		box-sizing: border-box;
		float: left;
		height: 48px;
		position: relative;
		width: 152px;
		border-radius: 2px;
		@media (max-width: 425px) {
			width: 44%;
		}
	}

	.radio + .radio {
		margin-left: 25px;
	}

	.radio label {
		background: #fff no-repeat center center;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100%;
		white-space: nowrap;
	}

	.radio label span {
		z-index: 1;
		font-family: 'Inter';
		font-weight: 600;
		font-size: 14px;
	}
	.radio label input[type='radio'] {
		all: unset;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.radio label input[type='radio']:checked {
		background-color: var(--color-brand1);
	}
	.radio label input[type='radio']:checked + span {
		color: #ffffff;
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
