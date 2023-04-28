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
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeTitle } from '../../../styles/typography';
import { Input } from '../../input';
import Button from '../../buttons';
import { AdContext, IEditAdRequest } from '../../../contexts/AdContext';
import { editAdSchema } from '../../../serializers/adSchemas/editAd';

export const EditAd = () => {
	const { setEditAdModal, setDeleteAdModal, selectedAd, editAd } =
		useContext(AdContext);

	const [isPublished, setIsPublished] = useState(
		selectedAd?.ativo ? true : false
	);

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

	const handleClick = async () => {
		const dataForm = getValues();

		dataForm.quilometragem = dataForm.quilometragem
			? dataForm.quilometragem
			: selectedAd?.quilometragem;
		dataForm.cor = dataForm.cor ? dataForm.cor : selectedAd?.cor;
		dataForm.preco = dataForm.preco ? dataForm.preco : selectedAd?.preco;
		dataForm.descricao = dataForm.descricao
			? dataForm.descricao
			: selectedAd?.descricao;

		const images = [
			mainImage ? mainImage : selectedAd!.imagens[0],
			firstImage ? firstImage : selectedAd!.imagens[1],
			secondImage ? secondImage : selectedAd!.imagens[2],
		];

		const newAdInfo: IEditAdRequest = {
			...dataForm,
			publicado: isPublished,
			imagens: images,
		};

		const editedAd = await editAd(newAdInfo, selectedAd!.id);

		editedAd?.id && setEditAdModal(false);
	};

	const { register, handleSubmit, getValues } = useForm<IEditAdRequest>({
		resolver: yupResolver(editAdSchema),
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
					<StyledForm onSubmit={handleSubmit(handleClick)}>
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
							placeholder={selectedAd?.marca}
							disabled
						/>
						<Input
							label="Modelo"
							fieldName="model"
							type="text"
							placeholder={selectedAd?.modelo}
							disabled
						/>
						<StyledDivInputs>
							<Input
								label="Ano"
								fieldName="year"
								type="text"
								placeholder={selectedAd?.ano}
								disabled
							/>
							<Input
								label="Combustível"
								fieldName="fuel"
								type="text"
								placeholder={selectedAd?.combustivel.replace(
									/^[a-z]/,
									(letter) => letter.toUpperCase()
								)}
								disabled
							/>
							<Input
								label="Quilometragem"
								fieldName="mileage"
								type="text"
								placeholder={`${selectedAd?.quilometragem} KM`}
								{...register('quilometragem')}
							/>
							<Input
								label="Cor"
								fieldName="color"
								type="text"
								placeholder={selectedAd?.cor}
								{...register('cor')}
							/>
							<Input
								label="Preço tabela FIPE"
								fieldName="fipePrice"
								type="text"
								placeholder={'R$ 30.000,00'}
								disabled
							/>
							<Input
								label="Preço"
								fieldName="price"
								type="text"
								placeholder={`R$ ${selectedAd?.preco}`}
								{...register('preco')}
							/>
						</StyledDivInputs>
						<Input
							label="Descrição"
							fieldName="description"
							placeholder={selectedAd?.descricao}
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
							placeholder={selectedAd?.imagens[0]}
							value={mainImage}
							onChange={(e) => setMainImage(e.target.value)}
						/>
						<Input
							label="1ª Imagem da galeria"
							fieldName="firstImage"
							type="text"
							placeholder={selectedAd?.imagens[1]}
							value={firstImage}
							onChange={(e) => setFirstImage(e.target.value)}
						/>
						<Input
							label="2ª Imagem da galeria"
							fieldName="secondImage"
							type="text"
							placeholder={selectedAd?.imagens[2]}
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
								type="submit"
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
