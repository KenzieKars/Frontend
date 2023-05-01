import { useLocation, useNavigate } from 'react-router';
import { AdContext, IAdInfo } from '../../contexts/AdContext';
import { ThemeTitle } from '../../styles/typography';
import {
	StyledAdCard,
	StyledModelDiv,
	StyledStatus,
	StyledUserAdBtns,
	StyledUserDiv,
} from './style';
import Button from '../buttons';
import { useContext } from 'react';

interface IProps {
	ad: IAdInfo;
	index: number;
}

export const AdCard = (props: IProps) => {
	const { ad, index } = props;

	const { setEditAdModal, setSelectedAd } = useContext(AdContext);

	const navigate = useNavigate();
	const location = useLocation();

	const handleEditAd = (ad: IAdInfo) => {
		setEditAdModal(true);
		setSelectedAd(ad);
	};

	return (
		<StyledAdCard key={index}>
			{ad.ativo && location.pathname === '/user' && (
				<StyledStatus className={ad.ativo ? 'ativo' : 'inativo'}>
					{ad.ativo ? 'Ativo' : 'Inativo'}
				</StyledStatus>
			)}
			<img
				src={
					ad.imagens ? ad.imagens[0] : '../../assets/image-error.svg'
				}
				alt={`${ad.modelo}`}
				className="adImage"
			/>
			<ThemeTitle tag="h2" titleSize="Heading-7-600" className="">
				{ad.modelo}
			</ThemeTitle>
			<p>{ad.descricao}</p>
			<Button
				backgroundColor="var(--color-brand4)"
				border="var(--color-brand4)"
				backgroundColorHover="var(--color-brand1)"
				borderHover="var(--color-brand1)"
				fontColor="var(--color-brand1)"
				fontColorHover="var(--color-brand4)"
				onClick={() => {
					navigate('/adpage');
				}}
				type="button"
				className="userBtn"
			>
				Ver anúncio
			</Button>
			<StyledUserDiv>
				<img
					src={ad.user.imagem}
					alt={ad.user.nome}
					className="userImage"
				/>
				<Button
					backgroundColor="transparent"
					border="transparent"
					backgroundColorHover="transparent"
					borderHover="transparent"
					fontColor="var(--color-grey2)"
					fontColorHover="var(--color-grey1)"
					onClick={() => {
						navigate(`/user-view/${ad.user.id}`);
					}}
					type="button"
					className="userBtn"
				>
					{ad.user.nome}
				</Button>
			</StyledUserDiv>
			<StyledModelDiv>
				<div>
					<span className="styledTag">{`${parseFloat(
						ad.quilometragem
					).toLocaleString('pt-BR', {
						minimumFractionDigits: 0,
						maximumFractionDigits: 3,
					})} KM`}</span>
					<span className="styledTag">{ad.ano}</span>
				</div>
				<span>{`${parseFloat(ad.preco).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}`}</span>
			</StyledModelDiv>
			{location.pathname === '/user' && (
				<StyledUserAdBtns>
					<Button
						backgroundColor="#FDFDFD"
						border="1.5px solid #212529"
						backgroundColorHover=""
						borderHover=""
						fontColor="#212529"
						fontColorHover=""
						onClick={() => {
							handleEditAd(ad);
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
				</StyledUserAdBtns>
			)}
		</StyledAdCard>
	);
};
