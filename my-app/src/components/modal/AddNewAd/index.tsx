import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	DivButtonsModal,
	DivHeaderModal,
	StyledContent,
	// StyledDescriptionTextarea,
	StyledDivInputs,
	StyledForm,
	StyledModal,
	StyledOverlay,
} from '../style';
import { Input } from '../../input';
import Button from '../../buttons';
import { ThemeTitle } from '../../../styles/typography';
import { schema } from '../../../serializers/adSchemas/newAd';
import { AdContext, INewAd } from '../../../contexts/AdContext';
import { LabelSelect } from '../../select';

export const CreateAdModal = () => {
	const {
		setCreateAdModal,
		setConfirmNewAdModal,
		brands,
		selectedModel,
		modelsByBrand,
		modelData,
		createAd,
	} = useContext(AdContext);

	const [models, setModels] = useState<string[] | undefined>([]);
	const [selectedBrand, setSelectedBrand] = useState('');
	const [submitWithBrand, setSubmitWithBrand] = useState(false);
	const [submitWithModel, setSubmitWithModel] = useState(false);

	const [mainImage, setMainImage] = useState('');
	const [firstImage, setFirstImage] = useState('');
	const [secondImage, setSecondImage] = useState('');
	const [submitWithImage, setSubmitWithImage] = useState(false);

	const handleBrandChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = evt.target;

		setSelectedBrand(value);

		handleModels(evt);
	};

	const handleModels = async (evt: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = evt.target;

		const res = await modelsByBrand(value);

		setModels(res);
	};

	const handleModelData = async (
		evt: React.ChangeEvent<HTMLSelectElement>
	) => {
		const { value } = evt.target;

		await modelData(selectedBrand, value);
	};

	const handleClick = async () => {
		const dataForm = getValues();

		selectedBrand ? setSubmitWithBrand(false) : setSubmitWithBrand(true);

		selectedModel.id ? setSubmitWithModel(false) : setSubmitWithModel(true);

		mainImage ? setSubmitWithImage(false) : setSubmitWithImage(true);

		const images = [mainImage, firstImage, secondImage];

		const newAd: INewAd = {
			...dataForm,
			imagens: images,
			ano: selectedModel?.year,
			combustivel: selectedModel?.fuel.toString(),
		};

		newAd.modelo = newAd.modelo.replace(/^[a-z]/, (letter) =>
			letter.toUpperCase()
		);
		newAd.marca = newAd.marca.replace(/^[a-z]/, (letter) =>
			letter.toUpperCase()
		);

		if (newAd.combustivel === '1') {
			newAd.combustivel = 'flex';
		} else if (newAd.combustivel === '2') {
			newAd.combustivel = 'híbrido';
		} else {
			newAd.combustivel = 'elétrico';
		}

		const createdNewAd = await createAd(newAd);

		createdNewAd?.id && setCreateAdModal(false);
		createdNewAd?.id && setConfirmNewAdModal(true);
	};

	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<INewAd>({
		resolver: yupResolver(schema),
	});

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setCreateAdModal(false);
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
								setCreateAdModal(false);
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
						<LabelSelect htmlFor="brand">
							<>
								Marca
								<select
									id="brand"
									{...register('marca')}
									onChange={handleBrandChange}
									className={
										selectedBrand || !submitWithBrand
											? ''
											: 'selectWithError'
									}
								>
									<option value="empty">
										Selecione uma marca
									</option>
									{brands?.map((brand, index) => (
										<option value={brand} key={index}>
											{brand.replace(/^[a-z]/, (letter) =>
												letter.toUpperCase()
											)}
										</option>
									))}
								</select>
							</>
						</LabelSelect>
						<LabelSelect htmlFor="model">
							<>
								Modelo
								<select
									id="model"
									{...register('modelo')}
									onChange={handleModelData}
									className={
										selectedModel.id || !submitWithModel
											? ''
											: 'selectWithError'
									}
									disabled={
										selectedBrand === 'empty' ||
										!selectedBrand
									}
								>
									<option value="empty">
										Selecione um modelo
									</option>
									{models?.map((model, index) => (
										<option value={model} key={index}>
											{model.replace(/^[a-z]/, (letter) =>
												letter.toUpperCase()
											)}
										</option>
									))}
								</select>
							</>
						</LabelSelect>
						<StyledDivInputs>
							<Input
								label="Ano"
								fieldName="year"
								type="text"
								placeholder={
									selectedModel?.year
										? selectedModel.year
										: '-'
								}
								disabled
								{...register('ano')}
							/>
							<Input
								label="Combustível"
								fieldName="fuel"
								type="text"
								placeholder={
									selectedModel?.fuel === 1
										? 'Flex'
										: selectedModel?.fuel === 2
										? 'Híbrido'
										: selectedModel?.fuel === 3
										? 'Elétrico'
										: '-'
								}
								disabled
								{...register('combustivel')}
							/>
							<Input
								label="Quilometragem"
								fieldName="mileage"
								type="text"
								placeholder="30.000"
								{...register('quilometragem')}
								className={
									errors.quilometragem && 'inputWithError'
								}
							/>
							<Input
								label="Cor"
								fieldName="color"
								type="text"
								placeholder="Branco"
								{...register('cor')}
								className={errors.cor && 'inputWithError'}
							/>
							<Input
								label="Preço tabela FIPE"
								fieldName="fipePrice"
								type="text"
								placeholder={`R$ ${
									selectedModel
										? selectedModel?.value.toString()
										: '00.000'
								},00`}
								disabled
							/>
							<Input
								label="Preço"
								fieldName="price"
								type="text"
								placeholder="R$ 50.000,00"
								{...register('preco')}
								className={errors.preco && 'inputWithError'}
							/>
						</StyledDivInputs>
						<Input
							label="Descrição"
							fieldName="description"
							placeholder="Digitar descrição..."
							{...register('descricao')}
							className={errors.descricao && 'inputWithError'}
						/>
						<Input
							label="Imagem da capa"
							fieldName="mainImage"
							type="text"
							placeholder="https://image.com"
							value={mainImage}
							onChange={(e) => setMainImage(e.target.value)}
							className={
								mainImage || !submitWithImage
									? ''
									: 'inputWithError'
							}
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
									setCreateAdModal(false);
								}}
								type="button"
								className=""
							>
								Cancelar
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
								Criar anúncio
							</Button>
						</DivButtonsModal>
					</StyledForm>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
