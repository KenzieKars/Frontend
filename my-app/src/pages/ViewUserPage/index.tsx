import { NavBar } from '../../components/navBar';
import { Footer } from '../../components/footer';
import { Container, Main } from './style';
import { ThemeTitle } from '../../styles/typography';
import { Products } from './style';
import { Div } from './style';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IAdInfo } from '../../contexts/AdContext';
import { AdCard } from '../../components/adCard';

export const ViewUserPage = () => {
	const { id } = useParams();

	const [anunciosInfo, setAnuncioInfo] = useState<any>([]) as any;

	const navigate = useNavigate();

	useEffect(() => {
		api.get(`/advertisement/users/${id}`)
			.then((res) => {
				setAnuncioInfo(res.data);
			})
			.catch((err) => {
				window.localStorage.clear();
				navigate('/login');
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Div>
			<NavBar />
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
						{anunciosInfo && anunciosInfo.length > 0
							? anunciosInfo[0].user.nome
							: 'Not found'}
					</ThemeTitle>
					<span>Anunciante</span>
				</div>
				<p>
					{anunciosInfo && anunciosInfo.length > 0
						? anunciosInfo[0].user.bio
						: 'Not found'}
				</p>
			</div>
			<ThemeTitle tag="h2" className="anuncios" titleSize="Heading-5-600">
				Anúncios
			</ThemeTitle>
			<Main>
				<Products>
					{anunciosInfo.map((anuncio: IAdInfo, index: number) => {
						return <AdCard ad={anuncio} index={index} />;
					})}
				</Products>
			</Main>
			<Footer />
		</Div>
	);
};
