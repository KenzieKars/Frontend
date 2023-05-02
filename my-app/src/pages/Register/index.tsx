import Button from '../../components/buttons';
import { Footer } from '../../components/footer';
import { Input } from '../../components/input';
import { NavBar } from '../../components/navBar';
import { AuthContext, ISignUp } from '../../contexts/UserContext';
import { registerSchema } from '../../serializers/register/register';
import { Container, Div, DivButtons, StyledAdvertiserLabel } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { ThemeTitle } from '../../styles/typography';

function RegisterPage() {
	const { signUp } = useContext(AuthContext);

	const [isAdvertiser, setIsAdvertiser] = useState(false);

	const handleIsAdvertiser = (isPublished: boolean) => {
		setIsAdvertiser(isPublished);
	};

	const handleSignUp = () => {
		const dataForm = getValues();

		dataForm.cpf = dataForm.cpf.replaceAll('.', '').replaceAll('-', '');
		dataForm.aniversario = dataForm.aniversario.replaceAll('-', '/');

		const newUserInfo: ISignUp = {
			...dataForm,
			vendedor: isAdvertiser,
		};

		signUp(newUserInfo);
	};

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<ISignUp>({ resolver: yupResolver(registerSchema) });

	return (
		<Div>
			<NavBar />
			<Container>
				<h1>Cadastro</h1>
				<ThemeTitle tag="h2" className="" titleSize="Heading-7-500">
					Informações pessoais
				</ThemeTitle>
				<form onSubmit={handleSubmit(handleSignUp)}>
					<Input
						label="Nome"
						fieldName="nome"
						type="text"
						placeholder="Ex: Samuel Leão"
						{...register('nome')}
					/>
					<p>{errors.nome?.message}</p>
					<Input
						label="Email"
						fieldName="email"
						type="email"
						placeholder="Ex:samuel@kenzie.com.br"
						{...register('email')}
					/>
					<p>{errors.email?.message}</p>
					<Input
						label="CPF"
						fieldName="cpf"
						type="text"
						pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
						title="Digite um CPF no formato: xxx.xxx.xxx-xx"
						placeholder="000.000.000-00"
						{...register('cpf')}
					/>
					<p>{errors.cpf?.message}</p>
					<Input
						label="Celular"
						fieldName="celular"
						type="tel"
						placeholder="(DDD) 90000-0000"
						{...register('telefone')}
					/>
					<p>{errors.telefone?.message}</p>
					<Input
						label="Data de nascimento"
						fieldName="dataNascimento"
						type="date"
						placeholder="00/00/00"
						{...register('aniversario')}
					/>
					<p>{errors.aniversario?.message}</p>
					<Input
						label="Descrição"
						fieldName="descricao"
						type="text"
						placeholder="Digitar descrição"
						className="descricao"
						{...register('bio')}
					/>
					<p>{errors.bio?.message}</p>
					<Input
						label="Foto de perfil"
						fieldName="profilePhoto"
						type="text"
						placeholder="https://image.com.br"
						{...register('imagem')}
					/>
					<p>{errors.imagem?.message}</p>
					<ThemeTitle
						tag="h2"
						className="address"
						titleSize="Heading-7-500"
					>
						Informações de endereço
					</ThemeTitle>
					<Input
						label="CEP"
						fieldName="cep"
						type="text"
						placeholder="00000.000"
						{...register('address.cep')}
					/>
					<p>{errors.address?.cep?.message}</p>
					<Input
						label="Estado"
						fieldName="estado"
						type="text"
						placeholder="Digitar Estado"
						{...register('address.estado')}
					/>
					<p>{errors.address?.estado?.message}</p>
					<Input
						label="Cidade"
						fieldName="cidade"
						type="text"
						placeholder="Digitar cidade"
						{...register('address.cidade')}
					/>
					<p>{errors.address?.cidade?.message}</p>
					<Input
						label="Rua"
						fieldName="rua"
						type="text"
						placeholder="Digitar rua"
						{...register('address.rua')}
					/>
					<p>{errors.address?.rua?.message}</p>
					<Input
						label="Numero"
						fieldName="numero"
						type="text"
						placeholder="Digitar número"
						{...register('address.numero')}
					/>
					<p>{errors.address?.numero?.message}</p>
					<Input
						label="Complemento"
						fieldName="complemento"
						type="text"
						placeholder="Ex: apart 307"
						{...register('address.complemento')}
					/>
					<p>{errors.address?.complemento?.message}</p>
					<StyledAdvertiserLabel>
						Tipo de conta
						<DivButtons>
							<Button
								backgroundColor={
									!isAdvertiser
										? 'var(--color-brand1)'
										: 'transparent'
								}
								border={
									!isAdvertiser
										? 'var(--color-brand1)'
										: 'var(--color-grey4)'
								}
								backgroundColorHover=""
								borderHover=""
								fontColor={
									!isAdvertiser
										? 'var(--color-whiteFixed)'
										: 'var(--color-grey0)'
								}
								fontColorHover=""
								onClick={() => {
									handleIsAdvertiser(false);
								}}
								type="button"
								className="isAdvertiserBtn"
							>
								Comprador
							</Button>
							<Button
								backgroundColor={
									isAdvertiser
										? 'var(--color-brand1)'
										: 'transparent'
								}
								border={
									isAdvertiser
										? 'var(--color-brand1)'
										: 'var(--color-grey4)'
								}
								backgroundColorHover=""
								borderHover=""
								fontColor={
									isAdvertiser
										? 'var(--color-whiteFixed)'
										: 'var(--color-grey0)'
								}
								fontColorHover=""
								onClick={() => {
									handleIsAdvertiser(true);
								}}
								type="button"
								className="isAdvertiserBtn"
							>
								Anunciante
							</Button>
						</DivButtons>
					</StyledAdvertiserLabel>
					<Input
						type="password"
						label="Senha"
						fieldName="senha"
						placeholder="Digitar senha"
						{...register('senha')}
					/>
					<p>{errors.senha?.message}</p>
					<Input
						type="password"
						label="Confirmar Senha"
						fieldName="confirmarSenha"
						placeholder="Digitar senha"
						{...register('senha')}
					/>
					<p>{errors.senha?.message}</p>
					<Button
						backgroundColor="var(--color-brand1)"
						border=""
						backgroundColorHover=""
						borderHover=""
						fontColor="var(--color-whiteFixed)"
						fontColorHover=""
						onClick={() => {
							handleSubmit(signUp);
						}}
						type="submit"
						className=""
					>
						Finalizar cadastro
					</Button>
				</form>
			</Container>
			<Footer />
		</Div>
	);
}

export default RegisterPage;
