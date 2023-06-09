import styled from 'styled-components';

export const StyledModal = styled.div`
	position: fixed;
	inset: 0;

	width: 100%;
	height: 100vh;

	z-index: 101;
`;

export const StyledOverlay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 520px;
	height: fit-content;
	max-height: 90vh;
	padding: 20px;

	border-radius: 8px;

	background-color: var(--color-whiteFixed);
`;

export const DivHeaderModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;

	background-color: var(--color-whiteFixed);
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 100%;
	height: 100%;
	padding: 10px;

	overflow-y: auto;

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--color-grey4);
		border-radius: 2px;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-brand3);
		border-radius: 2px;

		&:hover {
			background-color: var(--color-brand1);
		}
	}

	.galery_img_btn {
		width: fit-content;
		min-height: 38px;
	}
`;

export const StyledDivInputs = styled.div`
	display: grid;
	grid-template-columns: 49% 49%;
	gap: 10px;
`;

export const DivButtonsModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 10px;

	.isPublishedBtn {
		width: 50%;
	}
`;

export const StyledParagraph = styled.p`
	color: var(--color-grey2);

	margin-top: 20px;
	margin-bottom: 20px;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
`;

export const StyledPublishedLabel = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;

	font-weight: 500;
	font-size: 14px;
	font-family: 'Inter';
`;
