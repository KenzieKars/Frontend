import Button from "../../components/buttons"
import NavBar from "../../components/navBar"
import { Footer } from "../../components/footer"
import { Container, Main, ProductContainer, ProductDetails, ProductOwner } from "./style"
import { DivNavBar, DivNavBarUser, Nav } from "./style";
import { ThemeTitle } from "../../styles/typography"
import { Products } from "./style"
import { Pagination } from "./style"
import { Div } from "./style"
import MobileMenu from "../../components/mobileMenu";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewAdModal } from "../../components/modal";

const banner = require('../../assets/car.png') as string;
const logo = require('../../assets/logo.png') as string;

interface IUserInfo {
    id: string  
    nome: string
    email: string              
    telefone:string
    bio:string
    imagem:string
    cpf:string
    aniversario:string
    vendedor?: boolean;
}

function UserPage() {
	const [newAdModal, setNewAdModal] = useState(false);
    const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
    const [anunciosInfo, setAnuncioInfo] = useState([]);
    const token: string | null = localStorage.getItem("@user:Token");
    const userId: string | null = localStorage.getItem("@user:ID");
    const navigate = useNavigate()
    if(!token){
        navigate("/")
    }
    useEffect(() => {
        token &&
          api.get(`/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
              setUserInfo(res.data.foundUserByParam);
            })
            .catch((err) => {
              window.localStorage.clear();
              navigate("/login");
            });
      }, []);

      useEffect(() => {
        token &&
          api.get(`/advertisement/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
                setAnuncioInfo(res.data);
            })
            .catch((err) => {
              window.localStorage.clear();
              navigate("/login");
            });
      }, []);
	return (
		<Div>
			<Nav>
				<figure>
					<img src={logo} alt="logo da empresa" onClick={()=>{navigate("/")}}/>
				</figure>
				<DivNavBarUser>
					<img
						src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
						alt="user"
					/>
					<p>{userInfo.nome}</p>
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
                    {userInfo.vendedor? "Anunciante" : "Comprador"}
          
                    </span>
				</div>
				<p>
                    {userInfo.bio}
				</p>
				<Button
					backgroundColor="#FDFDFD"
					border="1.5px solid #4529E6"
					backgroundColorHover=""
					borderHover=""
					fontColor="#4529E6"
					fontColorHover=""
					onClick={() => {
						setNewAdModal(true);
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
                    {anunciosInfo.map((anuncio)=>{
                        console.log(anuncio)
                        return(
                            <ProductContainer>
						<div>
							<img
								className="product-img"
								src={anuncio.imagem? anuncio.imagem :"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}
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
							<p>
                                {anuncio.descricao}
							</p>
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
                                {anuncio.quilometragem} KM</p>
								<p className="product-year">
                                {anuncio.ano}</p>
							</div>
							<span className="product-price">R$ {anuncio.preco}</span>
						</ProductDetails>
						<div>
							<Button
								backgroundColor="#FDFDFD"
								border="1.5px solid #212529"
								backgroundColorHover=""
								borderHover=""
								fontColor="#212529"
								fontColorHover=""
								onClick={() => {}}
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
                        )
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

			{newAdModal && <NewAdModal setNewAdModal={setNewAdModal} />}
		</Div>
	);}

export default UserPage;
