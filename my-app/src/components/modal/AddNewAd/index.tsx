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
import { schema } from '../../../serializers/newAd/newAd';
import { AdContext, INewAd } from '../../../contexts/AdContext';

interface IProps {
	setNewAdModal: React.Dispatch<React.SetStateAction<boolean>>;
	setConfirmNewAdModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewAdModal = (props: IProps) => {
	const { setNewAdModal, setConfirmNewAdModal } = props;

	const { brands, selectedModel, modelsByBrand, modelData, addNewAd } =
		useContext(AdContext);

	const [models, setModels] = useState<string[] | undefined>([]);
	const [selectedBrand, setSelectedBrand] = useState('');

	const [mainImage, setMainImage] = useState('');
	const [firstImage, setFirstImage] = useState('');
	const [secondImage, setSecondImage] = useState('');

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
		const images = [mainImage, firstImage, secondImage];
		const newAd: INewAd = { ...dataForm, imagens: images };

		const createdNewAd = await addNewAd(newAd);

		createdNewAd?.id && setNewAdModal(false);
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
					<StyledForm onSubmit={handleSubmit(handleClick)}>
						<ThemeTitle
							tag="h2"
							className=""
							titleSize="Heading-7-500"
						>
							Infomações do veículo
						</ThemeTitle>
						<label htmlFor="brand">Marca</label>

						<select
							id="brand"
							{...register('marca')}
							onChange={handleBrandChange}
						>
							<option value="empty">Selecione uma marca</option>
							{brands?.map((brand, index) => (
								<option value={brand} key={index}>
									{brand.replace(/^[a-z]/, (letter) =>
										letter.toUpperCase()
									)}
								</option>
							))}
						</select>
						<label htmlFor="model">Modelo</label>
						<select
							id="model"
							{...register('modelo')}
							onChange={handleModelData}
							disabled={
								selectedBrand === 'empty' || !selectedBrand
							}
						>
							<option value="empty">Selecione um modelo</option>
							{models?.map((model, index) => (
								<option value={model} key={index}>
									{model.replace(/^[a-z]/, (letter) =>
										letter.toUpperCase()
									)}
								</option>
							))}
						</select>
						<StyledDivInputs>
							<Input
								label="Ano"
								fieldName="year"
								type="text"
								placeholder={selectedModel?.year ?? '-'}
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
							/>
						</StyledDivInputs>

						<Input
							label="Descrição"
							fieldName="description"
							placeholder="Digitar descrição..."
							{...register('descricao')}
						/>

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
									setNewAdModal(false);
								}}
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
