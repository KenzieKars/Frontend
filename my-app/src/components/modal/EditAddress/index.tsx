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
} from '../style';
import { editAddressSchema } from '../../../serializers/editAddress/editAddress';
import { useContext, useEffect, useRef } from 'react';
import { ThemeTitle } from '../../../styles/typography';
import { Input } from '../../input';
import Button from '../../buttons';
import { AuthContext, IEditAddress } from '../../../contexts/UserContext';

export const EditAddress = () => {
	const { setEditAddressModal, userInfo, editUserAddress } =
		useContext(AuthContext);

	const handleClick = async () => {
		const dataForm = getValues();

		const res = await editUserAddress(dataForm, userInfo.address.id);

		res?.id && setEditAddressModal(false);
	};

	const { register, handleSubmit, getValues } = useForm<IEditAddress>({
		resolver: yupResolver(editAddressSchema),
	});

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setEditAddressModal(false);
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
							Editar endereço
						</ThemeTitle>
						<Button
							backgroundColor="transparent"
							border="transparent"
							backgroundColorHover="transparent"
							borderHover="transparent"
							fontColor="var(--color-grey4)"
							fontColorHover=""
							onClick={() => {
								setEditAddressModal(false);
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
							Informações de endereço
						</ThemeTitle>
						<Input
							label="CEP"
							fieldName="cep"
							type="text"
							placeholder={userInfo.address.cep}
							{...register('cep')}
						/>
						<StyledDivInputs>
							<Input
								label="Estado"
								fieldName="estado"
								type="text"
								placeholder={userInfo.address.estado}
								{...register('estado')}
							/>
							<Input
								label="Cidade"
								fieldName="cidade"
								type="text"
								placeholder={userInfo.address.cidade}
								{...register('cidade')}
							/>
						</StyledDivInputs>
						<Input
							label="Rua"
							fieldName="rua"
							type="text"
							placeholder={userInfo.address.rua}
							{...register('rua')}
						/>
						<StyledDivInputs>
							<Input
								label="Número"
								fieldName="numero"
								type="text"
								placeholder={userInfo.address.numero}
								{...register('numero')}
							/>
							<Input
								label="Complemento"
								fieldName="complemento"
								type="text"
								placeholder={userInfo.address.complemento}
								{...register('complemento')}
							/>
						</StyledDivInputs>
						<DivButtonsModal>
							<Button
								backgroundColor="var(--color-grey6)"
								border="var(--color-grey6)"
								backgroundColorHover=""
								borderHover="transparent"
								fontColor="var(--color-grey2)"
								fontColorHover="var(--color-grey0)"
								onClick={() => {
									setEditAddressModal(false);
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
								Salvar alterações
							</Button>
						</DivButtonsModal>
					</StyledForm>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
