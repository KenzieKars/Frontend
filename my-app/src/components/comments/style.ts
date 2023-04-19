import styled from 'styled-components';

export const StyledComment = styled.li`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const StyledCommentContent = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const StyledUserTag = styled.span`
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
`;

export const StyledUserName = styled.span`
	font-weight: 500;
	font-size: 14px;
	font-family: 'Inter';
	font-style: normal;
	line-height: 24px;
`;

export const StyledCommentLog = styled.span`
	color: var(--color-grey3);

	font-weight: 400;
	font-size: 14px;
	font-family: 'Inter';
	font-style: normal;
	line-height: 24px;
`;

export const StyledCommentDetail = styled.p`
	font-weight: 400;
	font-size: 14px;
	font-family: 'Inter';
	font-style: normal;
	line-height: 24px;
`;
