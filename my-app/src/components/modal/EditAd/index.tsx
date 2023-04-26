import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
	DivButtonsModal,
	DivHeaderModal,
	StyledContent,
	StyledDivInputs,
	StyledForm,
	StyledModal,
	StyledOverlay,
	StyledPublishedLabel,
} from '../style';
import { editAddressSchema } from '../../../serializers/editAddress/editAddress';
import { useEffect, useRef, useState } from 'react';
import { ThemeTitle } from '../../../styles/typography';
import { Input } from '../../input';
import Button from '../../buttons';

interface IProps {
	setEditAdModal: React.Dispatch<React.SetStateAction<boolean>>;
	setDeleteAdModal: React.Dispatch<React.SetStateAction<boolean>>;
	selectedAd: string;
}

export const EditAd = (props: IProps) => {
	const { setEditAdModal, setDeleteAdModal, selectedAd } = props;

	const [isPublished, setIsPublished] = useState(false);

	const [mainImage, setMainImage] = useState('');
	const [firstImage, setFirstImage] = useState('');
	const [secondImage, setSecondImage] = useState('');

	const handleIsPublished = (isPublished: boolean) => {
		setIsPublished(isPublished);
	};

	const handleDeleteAd = () => {
		setEditAdModal(false);
		setDeleteAdModal(true);
	};

	const handleClick = () => {
		console.log(selectedAd);
	};

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(editAddressSchema),
	});

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setEditAdModal(false);
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
							Editar anúncio
						</ThemeTitle>
						<Button
							backgroundColor="transparent"
							border="transparent"
							backgroundColorHover="transparent"
							borderHover="transparent"
							fontColor="var(--color-grey4)"
							fontColorHover=""
							onClick={() => {
								setEditAdModal(false);
							}}
							type="button"
							className=""
						>
							X
						</Button>
					</DivHeaderModal>
					<StyledForm>
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
							disabled
							{...register('marca')}
						/>
						<Input
							label="Modelo"
							fieldName="model"
							type="text"
							placeholder="A 200 CGI ADVANCE SEDAN"
							disabled
							{...register('modelo')}
						/>
						<StyledDivInputs>
							<Input
								label="Ano"
								fieldName="year"
								type="text"
								placeholder="1990"
								disabled
								{...register('ano')}
							/>
							<Input
								label="Combustível"
								fieldName="fuel"
								type="text"
								placeholder="Flex"
								disabled
								{...register('combustivel')}
							/>
							<Input
								label="Quilometragem"
								fieldName="mileage"
								type="text"
								placeholder="30.000"
								{...register('quilometragem')}
							/>
							<Input
								label="Cor"
								fieldName="color"
								type="text"
								placeholder="Branco"
								{...register('cor')}
							/>
							<Input
								label="Preço tabela FIPE"
								fieldName="fipePrice"
								type="text"
								placeholder="000000"
								disabled
							/>
							<Input
								label="Preço"
								fieldName="price"
								type="text"
								placeholder="R$ 50.000,00"
								{...register('preco')}
							/>
						</StyledDivInputs>
						<Input
							label="Descrição"
							fieldName="description"
							placeholder="Digitar descrição..."
							{...register('descricao')}
						/>
						<StyledPublishedLabel>
							Publicado
							<DivButtonsModal>
								<Button
									backgroundColor={
										isPublished
											? 'var(--color-brand1)'
											: 'transparent'
									}
									border={
										isPublished
											? 'var(--color-brand1)'
											: 'var(--color-grey4)'
									}
									backgroundColorHover=""
									borderHover=""
									fontColor={
										isPublished
											? 'var(--color-whiteFixed)'
											: 'var(--color-grey0)'
									}
									fontColorHover=""
									onClick={() => {
										handleIsPublished(true);
									}}
									type="button"
									className="isPublishedBtn"
								>
									Sim
								</Button>
								<Button
									backgroundColor={
										!isPublished
											? 'var(--color-brand1)'
											: 'transparent'
									}
									border={
										!isPublished
											? 'var(--color-brand1)'
											: 'var(--color-grey4)'
									}
									backgroundColorHover=""
									borderHover=""
									fontColor={
										!isPublished
											? 'var(--color-whiteFixed)'
											: 'var(--color-grey0)'
									}
									fontColorHover=""
									onClick={() => {
										handleIsPublished(false);
									}}
									type="button"
									className="isPublishedBtn"
								>
									Não
								</Button>
							</DivButtonsModal>
						</StyledPublishedLabel>
						<Input
							label="Imagem da capa"
							fieldName="mainImage"
							type="text"
							placeholder="https://image.com"
							value={mainImage}
							onChange={(e) => setMainImage(e.target.value)}
						/>
						<Input
							label="1ª Imagem da galeria"
							fieldName="firstImage"
							type="text"
							placeholder="https://image.com"
							value={firstImage}
							onChange={(e) => setFirstImage(e.target.value)}
						/>
						<Input
							label="2ª Imagem da galeria"
							fieldName="secondImage"
							type="text"
							placeholder="https://image.com"
							value={secondImage}
							onChange={(e) => setSecondImage(e.target.value)}
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
								onClick={() => {
									handleDeleteAd();
								}}
								type="button"
								className=""
							>
								Excluir anúncio
							</Button>
							<Button
								backgroundColor="var(--color-brand3)"
								border="var(--color-brand3)"
								backgroundColorHover="var(--color-brand1)"
								borderHover=""
								fontColor="var(--color-brand4)"
								fontColorHover="var(--color-whiteFixed)"
								onClick={() => {
									handleClick();
								}}
								type="button"
								className=""
							>
								Salvar alterações
							</Button>
						</DivButtonsModal>
					</StyledForm>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
