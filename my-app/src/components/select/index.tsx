import { StyledLabel } from './style';

interface IProps {
	htmlFor: string;
	children: React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	>;
}

export const LabelSelect = (props: IProps) => {
	const { htmlFor } = props;

	return (
		<StyledLabel htmlFor={htmlFor}>
			<>{props.children}</>
		</StyledLabel>
	);
};
