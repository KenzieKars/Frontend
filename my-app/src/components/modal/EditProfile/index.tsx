import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IUserInfo } from '../../../pages/UserPage';
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

interface IProps {
	setEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
	userInfo: IUserInfo;
}

export const EditProfile = (props: IProps) => {
	const { setEditProfileModal, userInfo } = props;

	const { editUser } = useContext(AuthContext);

	const handleClick = () => {
		const dataForm = getValues();

		editUser(dataForm, userInfo.id);
	};

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<IEditUser>({
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
							placeholder={userInfo.cpf}
							{...register('cpf')}
						/>
						<Input
							label="Celular"
							fieldName="cel"
							type="text"
							placeholder={userInfo.telefone}
							{...register('telefone')}
						/>
						<Input
							label="Data de nascimento"
							fieldName="birthdate"
							type="text"
							placeholder={userInfo.aniversario}
							{...register('aniversario')}
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
