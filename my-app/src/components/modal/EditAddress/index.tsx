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
import { useEffect, useRef } from 'react';
import { ThemeTitle } from '../../../styles/typography';
import { Input } from '../../input';
import Button from '../../buttons';

interface IProps {
	setEditAddressModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditAddress = (props: IProps) => {
	const { setEditAddressModal } = props;

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
			!contentRef.current?.contains(target) && setEditAddressModal(false);
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
					<StyledForm>
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
							placeholder="00000.000"
							{...register('cep')}
						/>
						<StyledDivInputs>
							<Input
								label="Estado"
								fieldName="estado"
								type="text"
								placeholder="Paraná"
								{...register('estado')}
							/>
							<Input
								label="Cidade"
								fieldName="cidade"
								type="text"
								placeholder="Curitiba"
								{...register('cidade')}
							/>
						</StyledDivInputs>
						<Input
							label="Rua"
							fieldName="rua"
							type="text"
							placeholder="Rua do paraná"
							{...register('rua')}
						/>
						<StyledDivInputs>
							<Input
								label="Número"
								fieldName="numero"
								type="text"
								placeholder="0000"
								{...register('numero')}
							/>
							<Input
								label="Complemento"
								fieldName="complemento"
								type="text"
								placeholder="Apart 12"
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
								onClick={() => {}}
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
