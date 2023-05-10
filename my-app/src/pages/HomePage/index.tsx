/* eslint-disable array-callback-return */
import Button from '../../components/buttons';
import { NavBar } from '../../components/navBar';
import { Footer } from '../../components/footer';
import { Container, Aside, Main } from './style';
import { ThemeTitle } from '../../styles/typography';
import { Products } from './style';
import { Pagination } from './style';
import { Div } from './style';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { IAdInfo } from '../../contexts/AdContext';
import { AdCard } from '../../components/adCard';
import banner from '../../assets/car.svg';

export const HomePage = () => {
	const [anunciosInfo, setAnuncioInfo] = useState([]);

	const [filter, setFilter] = useState('');

	useEffect(() => {
		api.get(`/advertisement`)
			.then((res) => {
				setAnuncioInfo(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Div>
			<NavBar />
			<Container>
				<img src={banner} alt="banner" />
				<ThemeTitle tag="h1" className="" titleSize="Heading-1-700">
					Motors Shop
				</ThemeTitle>
				<ThemeTitle tag="h1" className="" titleSize="Heading-2-600">
					A melhor plataforma de anúncios de carros do país
				</ThemeTitle>
			</Container>
			<Main>
				<Aside id="id">
					<div className="aside">
						<div className="divFechar">
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-7-500"
							>
								Filtro
							</ThemeTitle>
							<button>x</button>
						</div>
						<ul>
							<ThemeTitle
								tag="h2"
								className="primeiro"
								titleSize="Heading-4-600"
							>
								Marca
							</ThemeTitle>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('General Motors');
									}}
									className="btn"
								>
									General Motors
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Fiat');
									}}
									className="btn"
								>
									Fiat
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Ford');
									}}
									className="btn"
								>
									Ford
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Honda');
									}}
									className="btn"
								>
									Honda
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Porsche');
									}}
									className="btn"
								>
									Porsche
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Volswagen');
									}}
									className="btn"
								>
									Volswagen
								</button>
							</li>
						</ul>
						<ul>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-4-600"
							>
								Modelo
							</ThemeTitle>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Civic');
									}}
									className="btn"
								>
									Civic
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Corolla');
									}}
									className="btn"
								>
									Corolla
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Cruze');
									}}
									className="btn"
								>
									Cruze
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Fit');
									}}
									className="btn"
								>
									Fit
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Gol');
									}}
									className="btn"
								>
									Gol
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Ka');
									}}
									className="btn"
								>
									Ka
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Onix');
									}}
									className="btn"
								>
									Onix
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Porsche 718');
									}}
									className="btn"
								>
									Porsche 718
								</button>
							</li>
						</ul>
						<ul>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-4-600"
							>
								Cor
							</ThemeTitle>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Azul');
									}}
									className="btn"
								>
									Azul
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Branca');
									}}
									className="btn"
								>
									Branca
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Cinza');
									}}
									className="btn"
								>
									Cinza
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Prata');
									}}
									className="btn"
								>
									Prata
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Preta');
									}}
									className="btn"
								>
									Preta
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Verde');
									}}
									className="btn"
								>
									Verde
								</button>
							</li>
						</ul>

						<ul>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-4-600"
							>
								Ano
							</ThemeTitle>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('2021');
									}}
									className="btn"
								>
									2021
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('2018');
									}}
									className="btn"
								>
									2018
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('2015');
									}}
									className="btn"
								>
									2015
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('2013');
									}}
									className="btn"
								>
									2013
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('2012');
									}}
									className="btn"
								>
									2012
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('2010');
									}}
									className="btn"
								>
									2010
								</button>
							</li>
						</ul>
						<ul>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-4-600"
							>
								Combustível
							</ThemeTitle>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Diesel');
									}}
									className="btn"
								>
									Diesel
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Etanol');
									}}
									className="btn"
								>
									Etanol
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Gasolina');
									}}
									className="btn"
								>
									Gasolina
								</button>
							</li>
							<li>
								<button
									onClick={(e) => {
										e.preventDefault();
										setFilter('Flex');
									}}
									className="btn"
								>
									Flex
								</button>
							</li>
						</ul>
						<ul>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-4-600"
							>
								Km
							</ThemeTitle>
							<div>
								<Button
									backgroundColor="#CED4DA"
									border=""
									backgroundColorHover=""
									borderHover=""
									fontColor="var(--color-grey3)"
									fontColorHover=""
									onClick={() => {}}
									type="button"
									className=""
								>
									Mínima
								</Button>
								<Button
									backgroundColor="#CED4DA"
									border=""
									backgroundColorHover=""
									borderHover=""
									fontColor="var(--color-grey3)"
									fontColorHover=""
									onClick={() => {}}
									type="button"
									className=""
								>
									Máxima
								</Button>
							</div>
						</ul>
						<ul>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-4-600"
							>
								Preço
							</ThemeTitle>
							<div>
								<Button
									backgroundColor="#CED4DA"
									border=""
									backgroundColorHover=""
									borderHover=""
									fontColor="var(--color-grey3)"
									fontColorHover=""
									onClick={() => {}}
									type="button"
									className=""
								>
									Mínimo
								</Button>
								<Button
									backgroundColor="#CED4DA"
									border=""
									backgroundColorHover=""
									borderHover=""
									fontColor="var(--color-grey3)"
									fontColorHover=""
									onClick={() => {}}
									type="button"
									className=""
								>
									Máximo
								</Button>
							</div>
						</ul>
						<Button
							backgroundColor="var(--color-brand2)"
							border=""
							backgroundColorHover=""
							borderHover=""
							fontColor="white"
							fontColorHover=""
							onClick={() => {
								const aside = document.querySelector('#id');
								if (aside !== null) {
									aside.id = 't';
								}
							}}
							type="button"
							className="filtros"
						>
							Ver anúncios
						</Button>
					</div>
				</Aside>
				<Products>
					{anunciosInfo.length > 0 ?(

						anunciosInfo.map((anuncio: IAdInfo, index) => {
							if (filter === '') {
								return <AdCard ad={anuncio} index={index} />;
							} else if (filter === anuncio.marca) {
								return <AdCard ad={anuncio} index={index} />;
							} else if (filter === anuncio.modelo) {
								return <AdCard ad={anuncio} index={index} />;
							} else if (filter === anuncio.cor) {
								return <AdCard ad={anuncio} index={index} />;
							} else if (filter === anuncio.ano) {
								return <AdCard ad={anuncio} index={index} />;
							} else if (filter === anuncio.combustivel) {
								return <AdCard ad={anuncio} index={index} />;
							}
						})

						):<h3>Ainda sem anúncios...</h3>}
				</Products>
			</Main>
			<div className="filtro">
				<Button
					backgroundColor="var(--color-brand2)"
					border=""
					backgroundColorHover=""
					borderHover=""
					fontColor="white"
					fontColorHover=""
					onClick={() => {
						const aside = document.querySelector('#t');
						if (aside !== null) {
							aside.id = 'id';
						}
					}}
					type="button"
					className="filtros"
				>
					Filtros
				</Button>
			</div>
			<Pagination>
				<div>
					<span className="page">1</span>
					<span>de 2</span>
				</div>
				<button className="btn">Seguinte {'>'} </button>
			</Pagination>
			<Footer />
		</Div>
	);
};
