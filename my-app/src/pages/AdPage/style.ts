import styled from 'styled-components';

export const StyledDivContentMain = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		align-items: center;
		flex-direction: column;
		gap: 10px;

		width: 100%;
	}
`;

export const StyledDivInfo = styled.div`
	background-color: transparent;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;

	width: 60%;
	height: 880px;

	border-radius: 4px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const StyledDivBanner = styled.div`
	background-color: var(--color-grey10);

	height: 350px;
	padding: 40px;

	border-radius: 4px;

	text-align: center;

	img {
		width: auto;
		height: 100%;
	}
`;

export const StyledDivCarModel = styled.div`
	background-color: var(--color-grey10);

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 280px;
	padding: 40px;

	border-radius: 4px;
`;

export const StyledTagsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	text-align: center;
`;

export const StyledBtnsCarModel = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StyledSpanTags = styled.span`
	background-color: var(--color-brand4);

	color: var(--color-brand1);

	width: 50%;
	padding: 0.25rem 0.5rem;
	margin: 10px 1px;

	border-radius: 5px;

	font-weight: 500;
	font-size: 14px;
	font-family: 'Inter';
	font-style: normal;
	line-height: 24px;
`;

export const StyledDivCarDescription = styled.div`
	background-color: var(--color-grey10);

	display: flex;
	flex-direction: column;
	gap: 20px;

	height: fit-content;
	padding: 40px;

	border-radius: 4px;

	p {
		font-weight: 400;
		font-size: 16px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 28px;
	}
`;

export const StyledDivProfile = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 35%;
	height: fit-content;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const StyledDivAdPics = styled.div`
	background-color: var(--color-grey10);

	width: 100%;
	height: 300px;
	padding: 30px;

	border-radius: 4px;
`;

export const StyledImgsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	flex-wrap: wrap;

	width: 100%;
	padding: 10px;

	img {
		background-color: var(--color-grey8);

		width: 100px;
		height: 100px;
	}
`;

export const StyledDivDescProfile = styled.div`
	background-color: var(--color-grey10);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	width: 100%;
	height: fit-content;
	padding: 30px;

	border-radius: 4px;

	span {
		background-color: var(--color-brand1);
		color: var(--color-grey10);

		display: flex;
		align-items: center;
		justify-content: center;

		width: 80px;
		height: 80px;

		border-radius: 50%;

		font-weight: 600;
		font-size: 24px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 24px;
	}

	p {
		font-weight: 400;
		font-size: 16px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 28px;
	}
`;

export const StyledDivInteraction = styled.div`
	background-color: var(--color-grey10);

	display: flex;
	flex-direction: column;
	gap: 24px;

	width: 60%;
	padding: 40px;

	border-radius: 4px;

	ul {
		display: flex;
		flex-direction: column;
		gap: 36px;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const StyledNewComment = styled.div`
	background-color: var(--color-grey10);

	display: flex;
	flex-direction: column;
	gap: 24px;

	width: 60%;
	padding: 40px;

	border-radius: 4px;

	div:nth-child(2) {
		position: relative;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const StyledProfileComment = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	span:first-child {
		background-color: var(--color-brand1);
		color: var(--color-grey10);

		display: flex;
		align-items: center;
		justify-content: center;

		width: 40px;
		height: 40px;

		border-radius: 50%;

		font-weight: 600;
		font-size: 24px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 24px;
	}

	span:last-child {
		font-weight: 500;
		font-size: 14px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 24px;
	}
`;

export const StyledCommentTextarea = styled.textarea`
	color: var(--color-grey2);

	resize: none;

	width: 100%;
	min-height: 100px;
	padding: 30px 20px;

	border: 1.5px solid var(--color-grey7);
	border-radius: 4px;

	font-weight: 400;
	font-size: 16px;
	font-family: 'Inter';
	font-style: normal;
	line-height: 0px;

	+ button {
		position: absolute;
		right: 10px;
		bottom: 10px;
	}
`;

export const StyledSuggestedComments = styled.ul`
	display: flex;
	gap: 10px;

	li {
		background-color: var(--color-grey7);
		color: var(--color-grey3);

		padding: 0px 12px;

		border-radius: 24px;

		font-weight: 500;
		font-size: 12px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 24px;
	}
`;
