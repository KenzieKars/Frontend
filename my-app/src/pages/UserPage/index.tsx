import Button from '../../components/buttons';
import { Footer } from '../../components/footer';
import { Container, Main, ProductContainer, ProductDetails } from './style';
import { DivNavBarUser, Nav } from './style';
import { ThemeTitle } from '../../styles/typography';
import { Products } from './style';
import { Pagination } from './style';
import { Div } from './style';
import MobileMenu from '../../components/mobileMenu';
import { api } from '../../services/api';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateAdModal } from '../../components/modal/AddNewAd';
import { ConfirmNewAdModal } from '../../components/modal/NewAdConfirm';
import { EditProfile } from '../../components/modal/EditProfile';
import { EditAddress } from '../../components/modal/EditAddress';
import { DeleteAd } from '../../components/modal/DeleteAd';
import { EditAd } from '../../components/modal/EditAd';
import { AdContext, IAdInfo } from '../../contexts/AdContext';
import { AuthContext } from '../../contexts/UserContext';

const logo = require('../../assets/logo.png') as string;

export const UserPage = () => {
	const {
		createAdModal,
		setCreateAdModal,
		confirmNewAdModal,
		editAdModal,
		setEditAdModal,
		deleteAdModal,
		setSelectedAd,
	} = useContext(AdContext);

	const {
		editProfileModal,
		setEditProfileModal,
		editAddressModal,
		setEditAddressModal,
		userInfo,
		setUserInfo,
		anunciosInfo,
		setAnuncioInfo,
		token,
		userId,
	} = useContext(AuthContext);

	const navigate = useNavigate();

	if (!token) {
		navigate('/');
	}

	const handleEditAd = (ad: IAdInfo) => {
		setEditAdModal(true);
		setSelectedAd(ad);
	};

	useEffect(() => {
		token &&
			api
				.get(`/users/${userId}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => {
					setUserInfo(res.data.foundUserByParam);
				})
				.catch((err) => {
					window.localStorage.clear();
					navigate('/login');
				});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editProfileModal]);

	useEffect(() => {
		token &&
			api
				.get(`/advertisement/users/${userId}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => {
					setAnuncioInfo(res.data);
				})
				.catch((err) => {
					window.localStorage.clear();
					navigate('/login');
				});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [createAdModal, editAdModal, deleteAdModal]);

	return (
		<Div>
			<Nav>
				<figure>
					<img
						src={logo}
						alt="logo da empresa"
						onClick={() => {
							navigate('/');
						}}
					/>
				</figure>
				<DivNavBarUser>
					<img
						src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
						alt="user"
					/>
					<Button
						backgroundColor="transparent"
						border=""
						backgroundColorHover=""
						borderHover="transparent"
						fontColor="var(--color-grey2)"
						fontColorHover="var(--color-brand1)"
						onClick={() => {
							setEditProfileModal(true);
						}}
						type="button"
						className=""
					>
						{userInfo.nome}
					</Button>
				</DivNavBarUser>
			</Nav>
			<MobileMenu></MobileMenu>
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
						{userInfo.nome}
					</ThemeTitle>
					<span>
						{userInfo.vendedor ? 'Anunciante' : 'Comprador'}
					</span>
				</div>
				<p>{userInfo.bio}</p>
				<Button
					backgroundColor="#FDFDFD"
					border="1.5px solid #4529E6"
					backgroundColorHover=""
					borderHover=""
					fontColor="#4529E6"
					fontColorHover=""
					onClick={() => {
						setCreateAdModal(true);
					}}
					type="button"
					className="criarAnuncios"
				>
					Criar anuncio
				</Button>
			</div>
			<ThemeTitle tag="h2" className="anuncios" titleSize="Heading-5-600">
				Anúncios
			</ThemeTitle>
			<Main>
				<Products>
					{anunciosInfo.map((anuncio: IAdInfo, index) => {
						return (
							<ProductContainer key={index}>
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
								<div>
									<Button
										backgroundColor="#FDFDFD"
										border="1.5px solid #212529"
										backgroundColorHover=""
										borderHover=""
										fontColor="#212529"
										fontColorHover=""
										onClick={() => {
											handleEditAd(anuncio);
										}}
										type="button"
										className="editarAnuncios"
									>
										Editar
									</Button>
									<Button
										backgroundColor="#FDFDFD"
										border="1.5px solid #212529"
										backgroundColorHover=""
										borderHover=""
										fontColor="#212529"
										fontColorHover=""
										onClick={() => {}}
										type="button"
										className="verAnuncios"
									>
										Ver detalhes
									</Button>
								</div>
							</ProductContainer>
						);
					})}
				</Products>
			</Main>

			<Pagination>
				<div>
					<span className="page">1</span>
					<span>de 2</span>
				</div>
				<button className="btn">Seguinte {'>'} </button>
			</Pagination>
			<Footer />

			{editProfileModal && <EditProfile />}

			{/* {<EditAddress setEditAddressModal={setEditAddressModal} />} */}

			{createAdModal && <CreateAdModal />}

			{confirmNewAdModal && <ConfirmNewAdModal />}

			{editAdModal && <EditAd />}

			{deleteAdModal && <DeleteAd />}
		</Div>
	);
};
