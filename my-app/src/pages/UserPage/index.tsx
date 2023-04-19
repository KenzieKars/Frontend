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

const banner = require("../../assets/car.png") as string;
const logo = require("../../assets/logo.png") as string;

function UserPage(){

    return(
        <Div>
            <Nav>
                <figure>
                <img src={logo} alt="logo da empresa" />
                </figure>
                <DivNavBarUser>
                    <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="user" />
                    <p>Nome usuario</p>
                </DivNavBarUser>
            </Nav>
            <MobileMenu></MobileMenu>
            <Container/>
            <div className="userData">
                <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="user" />
                <div>
                    <ThemeTitle tag="h2" className="product-title" titleSize="Heading-6-600">
                        Nome usuario
                    </ThemeTitle>
                    <span>Anunciante</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quis neque optio, ea mollitia non id voluptates eum consequatur, nulla, numquam voluptas accusantium consectetur similique iste adipisci maxime? Debitis, id.</p>
                <Button
                    backgroundColor= "#FDFDFD"
                    border= "1.5px solid #4529E6"
                    backgroundColorHover= ""
                    borderHover= ""
                    fontColor= "#4529E6"
                    fontColorHover= ""
                    onClick={()=>{}}
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
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                        <div>
                            <Button
                                backgroundColor= "#FDFDFD"
                                border= "1.5px solid #212529"
                                backgroundColorHover= ""
                                borderHover= ""
                                fontColor= "#212529"
                                fontColorHover= ""
                                onClick={()=>{}}
                                type="button"
                                className="editarAnuncios"
                                >
                                Editar
                            </Button>
                            <Button
                                backgroundColor= "#FDFDFD"
                                border= "1.5px solid #212529"
                                backgroundColorHover= ""
                                borderHover= ""
                                fontColor= "#212529"
                                fontColorHover= ""
                                onClick={()=>{}}
                                type="button"
                                className="verAnuncios"
                                >
                                Ver detalhes
                            </Button>
                        </div>
                    </ProductContainer>
                   
                </Products>
            </Main>
        
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
export default UserPage
