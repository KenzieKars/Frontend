import styled from 'styled-components';

export const StyledAdCard = styled.li`
	list-style: none;

	position: relative;

	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 312px;
	height: fit-content;
	min-height: 400px;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;

	.ativo {
		background-color: var(--color-brand1);
		color: var(--color-whiteFixed);
	}

	.inativo {
		background-color: var(--color-grey4);
		color: var(--color-whiteFixed);
	}

	.adImage {
		width: 100%;
		height: 120px;
	}

	p {
		color: var(--color-grey2);
	}

	.userImage {
		width: 40px;
		height: 40px;

		border-radius: 50%;
	}
`;

export const StyledStatus = styled.span`
	position: absolute;
	top: 0;
	left: 0;

	padding: 0.25rem 0.5rem;
`;

export const StyledUserDiv = styled.div`
	display: flex;
	gap: 10px;

	.userBtn {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;

		padding: 0;
	}
`;

export const StyledModelDiv = styled.div`
	display: flex;
	justify-content: space-between;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;

	.styledTag {
		background-color: var(--color-brand4);
		color: var(--color-brand1);

		border-radius: 5px;

		padding: 0.25rem 0.5rem;

		margin-right: 10px;
	}
`;

export const StyledUserAdBtns = styled.div`
	display: flex;
	gap: 10px;
`;
