import Button from '../../components/buttons';
import { Footer } from '../../components/footer';
import { Container, Main } from './style';
import { ThemeTitle } from '../../styles/typography';
import { Products } from './style';
import { Pagination } from './style';
import { Div } from './style';
import { api } from '../../services/api';
import { useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CreateAdModal } from '../../components/modal/AddNewAd';
import { ConfirmNewAdModal } from '../../components/modal/NewAdConfirm';
import { EditProfile } from '../../components/modal/EditProfile';
import { EditAddress } from '../../components/modal/EditAddress';
import { DeleteAd } from '../../components/modal/DeleteAd';
import { EditAd } from '../../components/modal/EditAd';
import { AdContext, IAdInfo } from '../../contexts/AdContext';
import { AuthContext } from '../../contexts/UserContext';
import { NavBar } from '../../components/navBar';
import { AdCard } from '../../components/adCard';
import { DeleteProfile } from '../../components/modal/DeleteProfile';

export const UserPage = () => {
	const {
		createAdModal,
		setCreateAdModal,
		confirmNewAdModal,
		editAdModal,
		deleteAdModal,
	} = useContext(AdContext);

	const {
		editProfileModal,
		editAddressModal,
		deleteProfileModal,
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
	}, [editProfileModal, deleteProfileModal]);

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
		<>
			{userInfo ? (
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
					<ThemeTitle
						tag="h2"
						className="anuncios"
						titleSize="Heading-5-600"
					>
						Anúncios
					</ThemeTitle>
					<Main>
						<Products>
							{anunciosInfo.map((anuncio: IAdInfo, index) => {
								return <AdCard ad={anuncio} index={index} />;
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

					{editAddressModal && <EditAddress />}

					{deleteProfileModal && <DeleteProfile />}

					{createAdModal && <CreateAdModal />}

					{confirmNewAdModal && <ConfirmNewAdModal />}

					{editAdModal && <EditAd />}

					{deleteAdModal && <DeleteAd />}
				</Div>
			) : (
				<Navigate to={'/'} replace />
			)}
		</>
	);
};
