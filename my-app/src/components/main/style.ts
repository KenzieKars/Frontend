import styled from 'styled-components';

export const StyledMain = styled.main`
	background-color: var(--color-grey8);

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	position: relative;

	width: 100vw;
	height: fit-content;
`;

export const StyledDivBg = styled.div`
	background-color: var(--color-brand1);

	position: absolute;
	top: 0;
	right: 0;
	left: 0;

	width: 100vw;
	height: 60vh;
`;

export const StyledDivContent = styled.div`
	z-index: 1;

	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 80%;
	height: fit-content;
	margin: 40px auto;

	@media (max-width: 768px) {
		align-items: center;

		width: 90%;
	}
`;
