import React, { ReactNode } from 'react';
import { StyledDivBg, StyledDivContent, StyledMain } from './style';

export const Main = ({ children }: React.HTMLAttributes<ReactNode>) => {
	return (
		<StyledMain>
			<StyledDivBg />
			<StyledDivContent>{children}</StyledDivContent>
		</StyledMain>
	);
};
