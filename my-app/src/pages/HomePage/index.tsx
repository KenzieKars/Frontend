import Button from "../../components/buttons"
import NavBar from "../../components/navBar"
import { Footer } from "../../components/footer"
import { Container, Aside, Main, ProductContainer, ProductDetails, ProductOwner } from "./style"
import { ThemeTitle } from "../../styles/typography"
import { Products } from "./style"
import { Pagination } from "./style"
import { Div } from "./style"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../services/api"

const banner = require("../../assets/car.png") as string;

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

function HomePage(){
    const navigate = useNavigate();

    const [anunciosInfo, setAnuncioInfo] = useState([]);
    useEffect(() => {
			api
				.get(`/advertisement`)
				.then((res) => {
					setAnuncioInfo(res.data);
				})
				.catch((err) => {
					console.log(err)

				});
	}, []);

    return(
        <Div>
            <NavBar/>
            <Container>
                <img src={banner} alt="banner" />
                <ThemeTitle
                    tag= "h1"
                    className=""
                    titleSize="Heading-1-700"
                >Motors Shop</ThemeTitle>
                <ThemeTitle
                    tag= "h1"
                    className=""
                    titleSize="Heading-2-600"
                >A melhor plataforma de anúncios de carros do país</ThemeTitle>
            </Container>
            <Main>
                <Aside id="id">
                    <div className="aside">

                    <div className="divFechar">
                    <ThemeTitle
                        tag= "h2"
                        className=""
                        titleSize="Heading-7-500"
                        >Filtro</ThemeTitle>
                        <button>x</button>
                    </div>
                    <ul>
                        <ThemeTitle
                        tag= "h2"
                        className="primeiro"
                        titleSize="Heading-4-600"
                        >Marca</ThemeTitle>
                        <li><button className="btn">General Motors</button></li>
                        <li><button className="btn">Fiat</button></li>
                        <li><button className="btn">Ford</button></li>
                        <li><button className="btn">Honda</button></li>
                        <li><button className="btn">Porsche</button></li>
                        <li><button className="btn">Volswagen</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Modelo</ThemeTitle>
                        <li><button className="btn">Civic</button></li>
                        <li><button className="btn">Corolla</button></li>
                        <li><button className="btn">Cruze</button></li>
                        <li><button className="btn">Fit</button></li>
                        <li><button className="btn">Gol</button></li>
                        <li><button className="btn">Ka</button></li>
                        <li><button className="btn">Onix</button></li>
                        <li><button className="btn">Porsche 718</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Cor</ThemeTitle>
                        <li><button className="btn">Azul</button></li>
                        <li><button className="btn">Branca</button></li>
                        <li><button className="btn">Cinza</button></li>
                        <li><button className="btn">Prata</button></li>
                        <li><button className="btn">Preta</button></li>
                        <li><button className="btn">Verde</button></li>
                    </ul>
                    
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Ano</ThemeTitle>
                        <li><button className="btn">2021</button></li>
                        <li><button className="btn">2018</button></li>
                        <li><button className="btn">2015</button></li>
                        <li><button className="btn">2013</button></li>
                        <li><button className="btn">2012</button></li>
                        <li><button className="btn">2010</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Combustível</ThemeTitle>
                        <li><button className="btn">Diesel</button></li>
                        <li><button className="btn">Etanol</button></li>
                        <li><button className="btn">Gasolina</button></li>
                        <li><button className="btn">Flex</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Km</ThemeTitle>
                        <div>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Mínima</Button>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Máxima</Button>
                        </div>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Preço</ThemeTitle>
                        <div>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Mínimo</Button>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Máximo</Button>
                        </div>
                    </ul>
                    <Button
                            backgroundColor= "var(--color-brand2)"
                            border= ""
                            backgroundColorHover= ""
                            borderHover= ""
                            fontColor= "white"
                            fontColorHover= ""
                            onClick={()=>{
                                const aside = document.querySelector("#id")
                                if(aside !== null){
                                    aside.id = "t"
                                }
                            }}
                            type="button"
                            className="filtros"
                            >
                            Ver anúncios</Button>
                    </div>
                </Aside>
                <Products>
					{anunciosInfo.map((anuncio: IAnuncioInfo) => {
						return (
							<ProductContainer>
                                <div className="selectProduct" onClick={()=>{navigate("/adpage")}}>
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
                                </div>

								<ProductOwner onClick={()=>{
                                    navigate(`/user-view/${anuncio.user.id}`)
                                }}>
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
            <div className="filtro">
                <Button
                            backgroundColor= "var(--color-brand2)"
                            border= ""
                            backgroundColorHover= ""
                            borderHover= ""
                            fontColor= "white"
                            fontColorHover= ""
                            onClick={()=>{
                                const aside = document.querySelector("#t")
                                if(aside !== null){
                                    aside.id = "id"
                                }
                            }}
                            type="button"
                            className="filtros"
                            >
                            Filtros</Button>
            </div>
            <Pagination>
                <div>
                    <span className="page">1</span>
                    <span>de 2</span>
                </div>
                <button className="btn">Seguinte {'>'} </button>
            </Pagination>
            <Footer/>
        </Div>
    )
}
export default HomePage
