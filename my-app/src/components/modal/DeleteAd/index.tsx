import { useEffect, useRef } from 'react';
import {
	DivButtonsModal,
	DivHeaderModal,
	StyledContent,
	StyledModal,
	StyledOverlay,
	StyledParagraph,
} from '../style';
import { ThemeTitle } from '../../../styles/typography';
import Button from '../../buttons';

interface IProps {
	setDeleteAdModal: React.Dispatch<React.SetStateAction<boolean>>;
	selectedAd: string;
}

export const DeleteAd = (props: IProps) => {
	const { setDeleteAdModal, selectedAd } = props;

	const handleClick = () => {
		console.log(selectedAd);
	};

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setDeleteAdModal(false);
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
							Excluir anúncio
						</ThemeTitle>
						<Button
							backgroundColor="transparent"
							border="transparent"
							backgroundColorHover="transparent"
							borderHover="transparent"
							fontColor="var(--color-grey4)"
							fontColorHover=""
							onClick={() => {
								setDeleteAdModal(false);
							}}
							type="button"
							className=""
						>
							X
						</Button>
					</DivHeaderModal>
					<ThemeTitle tag="h2" className="" titleSize="Heading-7-500">
						Tem certeza que deseja remover este anúncio?
					</ThemeTitle>
					<StyledParagraph>
						Essa ação não pode ser desfeita. Isso excluirá
						permanentemente sua conta e removerá seus dados de
						nossos servidores.
					</StyledParagraph>
					<DivButtonsModal>
						<Button
							backgroundColor="var(--color-grey6)"
							border="var(--color-grey6)"
							backgroundColorHover=""
							borderHover="transparent"
							fontColor="var(--color-grey2)"
							fontColorHover="var(--color-grey0)"
							onClick={() => {
								setDeleteAdModal(false);
							}}
							type="button"
							className=""
						>
							Cancelar
						</Button>
						<Button
							backgroundColor="var(--color-alert2)"
							border="var(--color-alert2)"
							backgroundColorHover="var(--color-alert1)"
							borderHover="var(--color-alert1)"
							fontColor="var(--color-alert1)"
							fontColorHover="var(--color-alert2)"
							onClick={() => {
								handleClick();
							}}
							type="button"
							className=""
						>
							Sim, excluir anúncio
						</Button>
					</DivButtonsModal>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
