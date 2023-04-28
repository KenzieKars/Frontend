import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ThemeTitle } from '../../../styles/typography';
import Button from '../../buttons';
import { Input } from '../../input';
import {
	DivButtonsModal,
	DivHeaderModal,
	StyledContent,
	StyledForm,
	StyledModal,
	StyledOverlay,
} from '../style';
import { editProfileSchema } from '../../../serializers/editProfile/editProfile';
import { useContext, useEffect, useRef } from 'react';
import { AuthContext, IEditUser } from '../../../contexts/UserContext';

export const EditProfile = () => {
	const { setEditProfileModal, userInfo, editUser } = useContext(AuthContext);

	const handleCPFInput = (value: string) => {
		const cpf = value?.replace(/\D/g, '').slice(0, 11);

		const cpfLength = cpf.length;

		if (cpfLength <= 3) {
			return cpf;
		}

		if (cpfLength <= 6) {
			return `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
		}

		if (cpfLength <= 9) {
			return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
		}

		return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
			6,
			9
		)}-${cpf.slice(9)}`;
	};

	const handleCPFChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = evt.target;
		const formattedCPF = handleCPFInput(value);
		setValue('cpf', formattedCPF);
	};

	const handleContactInput = (value: string) => {
		const phoneNumber = value?.replace(/\D/g, '').slice(0, 11);

		const phoneNumberLength = phoneNumber.length;

		if (phoneNumberLength <= 2) {
			return `(${phoneNumber}`;
		}

		if (phoneNumberLength <= 6) {
			return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
		}

		if (phoneNumberLength <= 10) {
			return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
				2,
				6
			)}-${phoneNumber.slice(6)}`;
		}

		return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
			2,
			7
		)}-${phoneNumber.slice(7)}`;
	};

	const handleContactChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;
		const formattedPhone = handleContactInput(value);
		setValue('telefone', formattedPhone);
	};

	const handleBirthdayInput = (value: string) => {
		const date = value?.replace(/\D/g, '').slice(0, 8);
		const dateLength = date.length;

		if (dateLength <= 2) {
			return `${date}`;
		}

		if (dateLength <= 4) {
			return `${date.slice(0, 2)}/${date.slice(2)}`;
		}

		return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`;
	};

	const handleBirthdayChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;
		const formattedDate = handleBirthdayInput(value);
		setValue('aniversario', formattedDate);
	};

	const handleClick = async () => {
		const dataForm = getValues();

		dataForm.nome = dataForm.nome ? dataForm.nome : userInfo.nome;
		dataForm.email = dataForm.email ? dataForm.email : userInfo.email;
		dataForm.cpf = dataForm.cpf ? dataForm.cpf : userInfo.cpf;
		dataForm.telefone = dataForm.telefone
			? dataForm.telefone
			: userInfo.telefone;
		dataForm.aniversario = dataForm.aniversario
			? dataForm.aniversario
			: userInfo.aniversario;
		dataForm.bio = dataForm.bio ? dataForm.bio : userInfo.bio;

		dataForm.cpf = dataForm.cpf.replace(/\D/g, '');
		dataForm.telefone = dataForm.telefone.replace(/\D/g, '');

		const res = await editUser(dataForm, userInfo.id);

		res?.id && setEditProfileModal(false);
	};

	const { register, handleSubmit, setValue, getValues } = useForm<IEditUser>({
		resolver: yupResolver(editProfileSchema),
	});

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setEditProfileModal(false);
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
							Editar perfil
						</ThemeTitle>
						<Button
							backgroundColor="transparent"
							border="transparent"
							backgroundColorHover="transparent"
							borderHover="transparent"
							fontColor="var(--color-grey4)"
							fontColorHover=""
							onClick={() => {
								setEditProfileModal(false);
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
							Infomações pessoais
						</ThemeTitle>
						<Input
							label="Nome"
							fieldName="name"
							type="text"
							placeholder={userInfo.nome}
							{...register('nome')}
						/>
						<Input
							label="E-mail"
							fieldName="email"
							type="text"
							placeholder={userInfo.email}
							{...register('email')}
						/>
						<Input
							label="CPF"
							fieldName="cpf"
							type="text"
							placeholder={handleCPFInput(userInfo.cpf)}
							{...register('cpf')}
							onChange={handleCPFChange}
						/>
						<Input
							label="Celular"
							fieldName="cel"
							type="text"
							placeholder={handleContactInput(userInfo.telefone)}
							{...register('telefone')}
							onChange={handleContactChange}
						/>
						<Input
							label="Data de nascimento"
							fieldName="birthdate"
							type="text"
							placeholder={handleBirthdayInput(
								userInfo.aniversario
							)}
							{...register('aniversario')}
							onChange={handleBirthdayChange}
							maxLength={10}
						/>
						<Input
							label="Descrição"
							fieldName="description"
							type="text"
							placeholder={userInfo.bio}
							{...register('bio')}
						/>
						<DivButtonsModal>
							<Button
								backgroundColor="var(--color-grey6)"
								border="var(--color-grey6)"
								backgroundColorHover=""
								borderHover="transparent"
								fontColor="var(--color-grey2)"
								fontColorHover="var(--color-grey0)"
								onClick={() => {
									setEditProfileModal(false);
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
