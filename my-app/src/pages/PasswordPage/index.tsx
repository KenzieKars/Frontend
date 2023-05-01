import Button from '../../components/buttons';
import { NavBar } from '../../components/navBar';
import { Footer } from '../../components/footer';
import { Container, Main, Div } from './style';
import { Input } from '../../components/input';
import { ThemeTitle } from '../../styles/typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';

function PasswordPage() {
	const navigate = useNavigate();
	let data = {
		email: '',
	};
	return (
		<Div>
			<NavBar />

			<Main>
				<div className="div">
					<Input
						id="email"
						label="Digite o email para recuperação de senha"
						fieldName="usuario"
						type="text"
						placeholder="Digite seu email"
					/>
					<Button
						backgroundColor="#6200E3"
						border=""
						backgroundColorHover=""
						borderHover=""
						fontColor="#FFFFFF"
						fontColorHover=""
						onClick={() => {
							let email = document.getElementById(
								'email'
							) as HTMLInputElement;
							data.email = email.value;
							api.post(`/senha/forgot_password`, data)
								.then((res) => {
									console.log(res.data);
								})
								.catch((err) => {
									console.log(err);
								});
							let input = document.querySelector('input');
							let button = document.querySelector('.btn');
							let label = document.querySelector('label');
							let hidden = document.querySelector('h2');
							let btn = document.querySelector('.hide');

							if (input && button && label && hidden && btn) {
								btn.className = 'appear';
								hidden.className = '';
								input.className = 'none';
								button.className = 'none';
								label.className = 'none';
							}
						}}
						type="button"
						className="btn"
					>
						Enviar
					</Button>
					<ThemeTitle
						tag="h2"
						className="none"
						titleSize="Heading-4-600"
					>
						Um email foi enviado para recuperação de senha
					</ThemeTitle>
					<Button
						backgroundColor="#6200E3"
						border=""
						backgroundColorHover=""
						borderHover=""
						fontColor="#FFFFFF"
						fontColorHover=""
						onClick={() => {
							navigate('/');
						}}
						type="button"
						className="hide"
					>
						Pagina inicial
					</Button>
				</div>
			</Main>
		</Div>
	);
}
export default PasswordPage;
