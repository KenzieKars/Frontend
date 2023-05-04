import styled from 'styled-components';

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;

	font-weight: 500;
	font-size: 14px;
	font-family: 'Inter';

	select.selectWithError {
		border: 2px solid var(--color-alert1);
	}

	option {
		font-weight: 500;
		font-size: 14px;
		font-family: 'Inter';
	}
`;
