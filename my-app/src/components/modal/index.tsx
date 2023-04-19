import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
	DivButtonsModal,
	DivHeaderModal,
	StyledContent,
	StyledDescriptionTextarea,
	StyledDivInputs,
	StyledForm,
	StyledModal,
	StyledOverlay,
} from './style';
import { Input } from '../input';
import Button from '../buttons';
import { ThemeTitle } from '../../styles/typography';

const schema = yup.object({});

interface IProps {
	setNewAdModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewAdModal = (props: IProps) => {
	const { setNewAdModal } = props;

	const contentRef = useRef<HTMLDivElement>(null);

	const addNewAd = () => {};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setNewAdModal(false);
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
							Criar anúncio
						</ThemeTitle>
						<Button
							backgroundColor="transparent"
							border="transparent"
							backgroundColorHover="transparent"
							borderHover="transparent"
							fontColor="var(--color-grey4)"
							fontColorHover=""
							onClick={() => {
								setNewAdModal(false);
							}}
							type="button"
							className=""
						>
							X
						</Button>
					</DivHeaderModal>
					<StyledForm onSubmit={handleSubmit(addNewAd)}>
						<ThemeTitle
							tag="h2"
							className=""
							titleSize="Heading-7-500"
						>
							Infomações do veículo
						</ThemeTitle>
						<Input
							label="Marca"
							fieldName="brand"
							type="text"
							placeholder="Mercedes Benz"
						/>
						<Input
							label="Modelo"
							fieldName="model"
							type="text"
							placeholder="A 200 CGI ADVANCE SEDAN"
						/>
						<StyledDivInputs>
							<Input
								label="Ano"
								fieldName="year"
								type="text"
								placeholder="2018"
							/>
							<Input
								label="Combustível"
								fieldName="fuel"
								type="text"
								placeholder="Gasolina / Etanol"
							/>
							<Input
								label="Quilometragem"
								fieldName="mileage"
								type="text"
								placeholder="30.000"
							/>
							<Input
								label="Cor"
								fieldName="color"
								type="text"
								placeholder="Branco"
							/>
							<Input
								label="Preço tabela FIPE"
								fieldName="fipePrice"
								type="text"
								placeholder="R$ 48.000,00"
							/>
							<Input
								label="Preço"
								fieldName="price"
								type="text"
								placeholder="R$ 50.000,00"
							/>
						</StyledDivInputs>
						<label htmlFor="description">
							<span>Descrição</span>
							<StyledDescriptionTextarea
								id="description"
								placeholder="Digitar descrição..."
								cols={30}
								rows={10}
								maxLength={800}
							></StyledDescriptionTextarea>
						</label>
						<Input
							label="Imagem da capa"
							fieldName="mainImage"
							type="text"
							placeholder="https://image.com"
						/>
						<Input
							label="1ª Imagem da galeria"
							fieldName="firstImage"
							type="text"
							placeholder="https://image.com"
						/>
						<Input
							label="2ª Imagem da galeria"
							fieldName="secondImage"
							type="text"
							placeholder="https://image.com"
						/>
						<Button
							backgroundColor="var(--color-brand4)"
							border="var(--color-brand4)"
							backgroundColorHover=""
							borderHover=""
							fontColor="var(--color-brand1)"
							fontColorHover=""
							onClick={() => {}}
							type="button"
							className="galery_img_btn"
						>
							Adicionar campo para imagem da galeria
						</Button>
						<DivButtonsModal>
							<Button
								backgroundColor="var(--color-grey6)"
								border="var(--color-grey6)"
								backgroundColorHover=""
								borderHover="transparent"
								fontColor="var(--color-grey2)"
								fontColorHover="var(--color-grey0)"
								onClick={() => {}}
								type="button"
								className=""
							>
								Cancelar
							</Button>
							<Button
								backgroundColor="var(--color-brand3)"
								border="var(--color-brand3)"
								backgroundColorHover=""
								borderHover=""
								fontColor="var(--color-brand4)"
								fontColorHover="var(--color-whiteFixed)"
								onClick={() => {}}
								type="button"
								className=""
							>
								Criar anúncio
							</Button>
						</DivButtonsModal>
					</StyledForm>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
