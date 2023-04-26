import NavBar from '../../components/navBar';
import { Footer } from '../../components/footer';
import {
	Container,
	Main,
	ProductContainer,
	ProductDetails,
	ProductOwner,
} from './style';

import { ThemeTitle } from '../../styles/typography';
import { Products } from './style';
import { Div } from './style';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface IAnuncioInfo {
	id: string;
	marca: string;
	modelo: string;
	ano: string;
	combustivel: string;
	cor: string;
	quilometragem: number;
	preco: number;
	descricao: string;
	imagens: Array<string>;
	ativo: boolean;
	criadoEm: string;
	atualizadoEm: string;
	user: {
		id: string;
		email: string;
		nome: string;
		telefone: 123;
		bio: string;
		imagem: string;
		criadoEm: string;
		atualizadoEm: string;
		cpf: 109;
		aniversario: string;
		vendedor: boolean;
		senha: string;
		isActive: boolean;
	};
}

function ViewUserPage() {
	const { id } = useParams();
	const [anunciosInfo, setAnuncioInfo] = useState<any>([]) as any;
	const navigate = useNavigate();
	

	useEffect(() => {
			api
				.get(`/advertisement/users/${id}`)
				.then((res) => {
					setAnuncioInfo(res.data);
				})
				.catch((err) => {
					window.localStorage.clear();
					navigate('/login');
				});
	}, []);
	return (
		<Div>
			<NavBar/>
			<Container />
			<div className="userData">
				<img
					src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
					alt="user"
				/>
				<div>
					<ThemeTitle
						tag="h2"
						className="product-title"
						titleSize="Heading-6-600"
					>
						{anunciosInfo && anunciosInfo.length > 0 ? anunciosInfo[0].user.nome : 'Not found'}
					</ThemeTitle>
					<span>
						Anunciante
					</span>
				</div>
				<p>{anunciosInfo && anunciosInfo.length > 0 ? anunciosInfo[0].user.bio : 'Not found'}</p>
			</div>
			<ThemeTitle tag="h2" className="anuncios" titleSize="Heading-5-600">
				Anúncios
			</ThemeTitle>
			<Main>
				<Products>
					{anunciosInfo.map((anuncio: IAnuncioInfo) => {
						return (
							<ProductContainer>
								<div>
									<img
										className="product-img"
										src={
											anuncio.imagens
												? anuncio.imagens[0]
												: 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
										}
										alt="anuncio"
									/>
								</div>
								<ThemeTitle
									tag="h2"
									className="product-title"
									titleSize="Heading-7-600"
								>
									{anuncio.marca} - {anuncio.modelo}
								</ThemeTitle>
								<div className="product-description">
									<p>{anuncio.descricao}</p>
								</div>

								<ProductOwner>
									<img
										className="owner-avatar"
										src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
										alt="user"
									/>
									<span className="owner-name">
										{anuncio.user.nome}
									</span>
								</ProductOwner>

								<ProductDetails>
									<div className="product-details">
										<p className="product-mileage">
											{anuncio.quilometragem} KM
										</p>
										<p className="product-year">
											{anuncio.ano}
										</p>
									</div>
									<span className="product-price">
										R$ {anuncio.preco}
									</span>
								</ProductDetails>
							</ProductContainer>
						);
					})}
				</Products>
			</Main>
			<Footer />
		</Div>
	);
}

export default ViewUserPage;
