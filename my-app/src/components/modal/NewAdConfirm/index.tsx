import { useEffect, useRef } from 'react';
import {
	DivHeaderModal,
	StyledContent,
	StyledModal,
	StyledOverlay,
} from '../style';
import { ThemeTitle } from '../../../styles/typography';
import Button from '../../buttons';

interface IProps {
	setConfirmNewAdModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmNewAdModal = (props: IProps) => {
	const { setConfirmNewAdModal } = props;

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) &&
				setConfirmNewAdModal(false);
		};

		document.addEventListener('mousedown', handleOutclick);

		return () => {
			document.removeEventListener('mousedown', handleOutclick);
		};
	}, []);

	return (
		<StyledModal>
			<StyledOverlay>
				<StyledContent ref={contentRef}>
					<DivHeaderModal>
						<ThemeTitle
							tag="h2"
							className=""
							titleSize="Heading-7-500"
						>
							Sucesso!
						</ThemeTitle>
						<Button
							backgroundColor="transparent"
							border="transparent"
							backgroundColorHover="transparent"
							borderHover="transparent"
							fontColor="var(--color-grey4)"
							fontColorHover=""
							onClick={() => {
								setConfirmNewAdModal(false);
							}}
							type="button"
							className=""
						>
							X
						</Button>
					</DivHeaderModal>
					<ThemeTitle tag="h3" className="" titleSize="Heading-7-500">
						Seu anúncio foi criado com sucesso!
					</ThemeTitle>
					<ThemeTitle tag="h4" className="" titleSize="Heading-7-500">
						Agora você poderá ver seus negócios crescendo em grande
						escala.
					</ThemeTitle>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
