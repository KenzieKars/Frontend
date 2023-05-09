import styled from 'styled-components';


export const StyledModal = styled.div`
	.none3{
		display: none;
	}
	.none4{
		display: none;
	}
	.none5{
		display: none;
	}
	.modal{
		position: fixed;
		inset: 0;
	
		width: 100%;
		height: 100vh;
	
		z-index: 101;
	}
	.overlay{
		display: flex;
		align-items: center;
		justify-content: center;
	
		width: 100%;
		height: 100vh;
	
		background-color: rgba(0, 0, 0, 0.5);
	}
	.content{
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		width: 520px;
		height: fit-content;
		max-height: 90vh;
		padding: 20px;
	
		border-radius: 8px;
	
		background-color: var(--color-whiteFixed);
		.fechar{
			cursor: pointer;
			margin-left: 99%;
			border: none;
			background-color: white;
			font-size: 20px;
		}
		font-weight: 400;
		font-size: 16px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 28px;
		input{
			height: 30px;
			padding: 10px;
			width: 240px;
			margin-top: 15px;
		}
		.send{
			height: 48px;
			padding: 0px 1.5rem;
			font-size: 14px;
			font-weight: 600;
			white-space: nowrap;
			color: var(--color-whiteFixed);
			border-radius: 4px;
			background: var(--color-brand2);
			border: 1px solid var(--color-brand2);
			cursor: pointer;
			transition: all 0.3s ease 0s;
			margin-left: 15px;
			margin-top: 15px;
		}
	}
	.content2{
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		width: 520px;
		height: fit-content;
		max-height: 90vh;
		padding: 20px;
	
		border-radius: 8px;
	
		background-color: var(--color-whiteFixed);
		.fechar{
			cursor: pointer;
			margin-left: 99%;
			border: none;
			background-color: white;
			font-size: 20px;
		}
		font-weight: 400;
		font-size: 16px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 28px;
		input{
			height: 30px;
			padding: 10px;
			width: 240px;
			margin-top: 15px;
		}
		.send{
			height: 48px;
			padding: 0px 1.5rem;
			font-size: 14px;
			font-weight: 600;
			white-space: nowrap;
			color: var(--color-whiteFixed);
			border-radius: 4px;
			background: var(--color-brand2);
			border: 1px solid var(--color-brand2);
			cursor: pointer;
			transition: all 0.3s ease 0s;
			margin-left: 15px;
			margin-top: 15px;
	}
`;

export const StyledDivContentMain = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 100px;
	
	.none1{
		display: none;
	}
	.none2{
		display: none;
	}
	.modalEdit{
		button{
			cursor: pointer;
		}
		.fechar{
			margin-left: 99%;
			border: none;
			background-color: white;
			font-size: 20px;
		}
		.btns{
			button{
				margin-left: 20px;

			}
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		position: fixed;
		top: 30%;
		left: 0;
		right: 0;
		width: 40%;
		min-width: 250px;
		margin: 0 auto;
		background-color: white;
		padding: 30px;
		z-index: 18;
		border: 1px solid black;
		border-radius: 5px;
		font-weight: 400;
		font-size: 16px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 28px;
		input{
			height: 30px;
			padding: 10px;
			width: 240px;
		}
		.send{
			height: 48px;
			padding: 0px 1.5rem;
			font-size: 14px;
			font-weight: 600;
			white-space: nowrap;
			color: var(--color-whiteFixed);
			border-radius: 4px;
			background: var(--color-brand2);
			border: 1px solid var(--color-brand2);
			cursor: pointer;
			transition: all 0.3s ease 0s;
		}
	}
	.modalDelete{
		.send{
			height: 48px;
			padding: 0px 1.5rem;
			font-size: 14px;
			font-weight: 600;
			white-space: nowrap;
			color: var(--color-whiteFixed);
			border-radius: 4px;
			background: var(--color-brand2);
			border: 1px solid var(--color-brand2);
			cursor: pointer;
			transition: all 0.3s ease 0s;
		}
		button{
			cursor: pointer;
		}
		.fechar{
			margin-left: 99%;
			border: none;
			background-color: white;
			font-size: 20px;
		}
		.btns{
			button{
				margin-left: 20px;

			}
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		position: fixed;
		top: 30%;
		left: 0;
		right: 0;
		width: 40%;
		min-width: 250px;
		margin: 0 auto;
		background-color: white;
		padding: 30px;
		z-index: 18;
		border: 1px solid black;
		border-radius: 5px;
		font-weight: 400;
		font-size: 16px;
		font-family: 'Inter';
		font-style: normal;
		line-height: 28px;
	}
	.none{
		display: none;
	}
	

	@media (max-width: 768px) {
		align-items: center;
		flex-direction: column;
		gap: 10px;

		width: 100%;
	}
	
`;

export const Dark = styled.div`
	display: flex;
	position: fixed;
	z-index: 5;
	height: 100vh;
	width: 100vw;
	background-color: black;
	opacity: 0.5;
	.dark{
	}
`

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
	width: 184px;
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
	img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-bottom: 15px;
	}
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
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
`;

export const StyledCommentTextarea = styled.input`
	color: var(--color-grey2);
	display: flex;

	resize: none;
	width: 100%;
	padding: 30px 20px;
	padding-top: 30px;
	padding-bottom: 100px;

	border: 1.5px solid var(--color-grey7);
	border-radius: 4px;

	font-weight: 400;
	font-size: 16px;
	font-family: 'Inter';
	font-style: normal;
	line-height: 0px;
	vertical-align: top;
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
		cursor: pointer;
	}
`;

export const StyledComment = styled.li`
	display: flex;
	flex-direction: column;
	gap: 10px;
	.img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
`;

export const StyledCommentContent = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	.div{
		margin-left: auto;
		button{
			cursor: pointer;
			margin-left: 5px;
			border: none;
			background-color: white;

		}
	}
	.edit{
		width: 15px;
		height: 15px;
	}
	
	
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
